"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacaoModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const notification_repository_1 = require("./repository/notification.repository");
const notificacoes_gateway_1 = require("./gateway/notificacoes.gateway");
const notification_controller_1 = require("./notification.controller");
const users_repository_1 = require("../users/repository/users.repository");
let NotificacaoModule = class NotificacaoModule {
};
exports.NotificacaoModule = NotificacaoModule;
exports.NotificacaoModule = NotificacaoModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    secret: config.get('JWT_ACCESS_SECRET'),
                }),
            }),
        ],
        controllers: [notification_controller_1.NotificacoesController],
        providers: [notification_repository_1.NotificacoesRepository, notificacoes_gateway_1.NotificacoesGateway, users_repository_1.UserService],
        exports: [notification_repository_1.NotificacoesRepository, notificacoes_gateway_1.NotificacoesGateway],
    })
], NotificacaoModule);
//# sourceMappingURL=notificacoes.module.js.map