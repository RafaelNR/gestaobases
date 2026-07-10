import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@src/common/types/env';
export declare class NotificacoesGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly jwtService;
    private readonly configService;
    server: Server;
    private readonly logger;
    private readonly userSockets;
    private readonly socketUser;
    constructor(jwtService: JwtService, configService: ConfigService<EnvironmentVariables>);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): void;
    emitToUser(userUUID: string, notificacao: object): void;
    emitToUsers(userUUIDs: string[], notificacao: object): void;
    private extractToken;
}
