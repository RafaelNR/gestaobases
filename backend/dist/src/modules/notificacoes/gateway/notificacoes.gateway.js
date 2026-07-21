"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotificacoesGateway", {
    enumerable: true,
    get: function() {
        return NotificacoesGateway;
    }
});
const _websockets = require("@nestjs/websockets");
const _socketio = require("socket.io");
const _jwt = require("@nestjs/jwt");
const _config = require("@nestjs/config");
const _common = require("@nestjs/common");
const _origins = require("../../../origins");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let NotificacoesGateway = class NotificacoesGateway {
    constructor(jwtService, configService){
        this.jwtService = jwtService;
        this.configService = configService;
        this.logger = new _common.Logger(NotificacoesGateway.name);
        // userUUID -> Set de socketIds (mesmo usuário pode ter múltiplas abas)
        this.userSockets = new Map();
        // socketId -> userUUID
        this.socketUser = new Map();
    }
    async handleConnection(client) {
        try {
            const token = this.extractToken(client);
            if (!token) {
                client.disconnect();
                return;
            }
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.get('JWT_ACCESS_SECRET')
            });
            const userUUID = payload.uuid;
            client.data.userUUID = userUUID;
            if (!this.userSockets.has(userUUID)) {
                this.userSockets.set(userUUID, new Set());
            }
            this.userSockets.get(userUUID).add(client.id);
            this.socketUser.set(client.id, userUUID);
            this.logger.verbose(`WS conectado: ${userUUID} (${client.id})`);
        } catch  {
            client.disconnect();
        }
    }
    handleDisconnect(client) {
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
    emitToUser(userUUID, notificacao) {
        const socketIds = this.userSockets.get(userUUID);
        if (!socketIds) return;
        for (const socketId of socketIds){
            this.server.to(socketId).emit('notificacao.nova', notificacao);
        }
    }
    emitToUsers(userUUIDs, notificacao) {
        for (const uuid of userUUIDs){
            this.emitToUser(uuid, notificacao);
        }
    }
    extractToken(client) {
        const cookieHeader = client.handshake.headers.cookie || '';
        const pairs = cookieHeader.split(';');
        for (const pair of pairs){
            const [key, val] = pair.trim().split('=');
            if (key === 'jwt_token' && val) return val.trim();
        }
        // fallback: auth header ou query
        const auth = client.handshake.auth?.token || client.handshake.query?.token;
        return auth || null;
    }
    // 📩 Evento customizado testar websocket
    handleMessage(data, client) {
        console.log('Mensagem recebida:', data);
        // responde só para quem enviou
        client.emit('response', {
            msg: 'Recebi sua mensagem!'
        });
        // envia para todos
        this.server.emit('broadcast', data);
    }
};
_ts_decorate([
    (0, _websockets.WebSocketServer)(),
    _ts_metadata("design:type", typeof _socketio.Server === "undefined" ? Object : _socketio.Server)
], NotificacoesGateway.prototype, "server", void 0);
_ts_decorate([
    (0, _websockets.SubscribeMessage)('sendMessage'),
    _ts_param(0, (0, _websockets.MessageBody)()),
    _ts_param(1, (0, _websockets.ConnectedSocket)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        typeof _socketio.Socket === "undefined" ? Object : _socketio.Socket
    ]),
    _ts_metadata("design:returntype", void 0)
], NotificacoesGateway.prototype, "handleMessage", null);
NotificacoesGateway = _ts_decorate([
    (0, _websockets.WebSocketGateway)({
        namespace: '/notificacoes',
        cors: {
            origin: _origins.allowedOrigins,
            credentials: true
        }
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], NotificacoesGateway);

//# sourceMappingURL=notificacoes.gateway.js.map