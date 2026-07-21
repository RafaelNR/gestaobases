import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { EnvironmentVariables } from '@src/common/types/env';
import { allowedOrigins } from '@src/origins';

@WebSocketGateway({
  namespace: '/notificacoes',
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
})
export class NotificacoesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  private readonly logger = new Logger(NotificacoesGateway.name);
  // userUUID -> Set de socketIds (mesmo usuário pode ter múltiplas abas)
  private readonly userSockets = new Map<string, Set<string>>();
  // socketId -> userUUID
  private readonly socketUser = new Map<string, string>();

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<EnvironmentVariables>
  ) {}

  async handleConnection(client: Socket) {
    try {
      const token = this.extractToken(client);
      if (!token) {
        client.disconnect();
        return;
      }

      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
      });

      const userUUID: string = payload.uuid;
      client.data.userUUID = userUUID;

      if (!this.userSockets.has(userUUID)) {
        this.userSockets.set(userUUID, new Set());
      }
      this.userSockets.get(userUUID)!.add(client.id);
      this.socketUser.set(client.id, userUUID);

      this.logger.verbose(`WS conectado: ${userUUID} (${client.id})`);
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    const userUUID = this.socketUser.get(client.id);
    if (userUUID) {
      this.userSockets.get(userUUID)?.delete(client.id);
      if (this.userSockets.get(userUUID)?.size === 0) {
        this.userSockets.delete(userUUID);
      }
      this.socketUser.delete(client.id);
      this.logger.verbose(`WS desconectado: ${userUUID} (${client.id})`);
    }
  }

  emitToUser(userUUID: string, notificacao: object): void {
    const socketIds = this.userSockets.get(userUUID);
    if (!socketIds) return;
    for (const socketId of socketIds) {
      this.server.to(socketId).emit('notificacao.nova', notificacao);
    }
  }

  emitToUsers(userUUIDs: string[], notificacao: object): void {
    for (const uuid of userUUIDs) {
      this.emitToUser(uuid, notificacao);
    }
  }

  private extractToken(client: Socket): string | null {
    const cookieHeader = client.handshake.headers.cookie || '';
    const pairs = cookieHeader.split(';');
    for (const pair of pairs) {
      const [key, val] = pair.trim().split('=');
      if (key === 'jwt_token' && val) return val.trim();
    }
    // fallback: auth header ou query
    const auth =
      (client.handshake.auth?.token as string) ||
      (client.handshake.query?.token as string);
    return auth || null;
  }

  // 📩 Evento customizado testar websocket
  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    console.log('Mensagem recebida:', data);

    // responde só para quem enviou
    client.emit('response', {
      msg: 'Recebi sua mensagem!',
    });

    // envia para todos
    this.server.emit('broadcast', data);
  }
}
