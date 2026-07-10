"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificacoesGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacoesGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
let NotificacoesGateway = NotificacoesGateway_1 = class NotificacoesGateway {
    jwtService;
    configService;
    server;
    logger = new common_1.Logger(NotificacoesGateway_1.name);
    userSockets = new Map();
    socketUser = new Map();
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async handleConnection(client) {
        try {
            const token = this.extractToken(client);
            if (!token) {
                client.disconnect();
                return;
            }
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.get('JWT_ACCESS_SECRET'),
            });
            const userUUID = payload.uuid;
            client.data.userUUID = userUUID;
            if (!this.userSockets.has(userUUID)) {
                this.userSockets.set(userUUID, new Set());
            }
            this.userSockets.get(userUUID).add(client.id);
            this.socketUser.set(client.id, userUUID);
            this.logger.verbose(`WS conectado: ${userUUID} (${client.id})`);
        }
        catch {
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
        if (!socketIds)
            return;
        for (const socketId of socketIds) {
            this.server.to(socketId).emit('notificacao.nova', notificacao);
        }
    }
    emitToUsers(userUUIDs, notificacao) {
        for (const uuid of userUUIDs) {
            this.emitToUser(uuid, notificacao);
        }
    }
    extractToken(client) {
        const cookieHeader = client.handshake.headers.cookie || '';
        const pairs = cookieHeader.split(';');
        for (const pair of pairs) {
            const [key, val] = pair.trim().split('=');
            if (key === 'jwt_token' && val)
                return val.trim();
        }
        const auth = client.handshake.auth?.token ||
            client.handshake.query?.token;
        return auth || null;
    }
};
exports.NotificacoesGateway = NotificacoesGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], NotificacoesGateway.prototype, "server", void 0);
exports.NotificacoesGateway = NotificacoesGateway = NotificacoesGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: '/notificacoes',
        cors: {
            origin: [
                'http://localhost:3000',
                'https://localhost:3000',
                'http://localhost:3001',
                'https://localhost:3001',
            ],
            credentials: true,
        },
    }),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], NotificacoesGateway);
//# sourceMappingURL=notificacoes.gateway.js.map