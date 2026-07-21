"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotificacaoModule", {
    enumerable: true,
    get: function() {
        return NotificacaoModule;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _config = require("@nestjs/config");
const _notificationrepository = require("./repository/notification.repository");
const _notificacoesgateway = require("./gateway/notificacoes.gateway");
const _notificationcontroller = require("./notification.controller");
const _usersrepository = require("../users/repository/users.repository");
const _notificacaorequerimentousecase = require("./use-case/notificacao-requerimento.use-case");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let NotificacaoModule = class NotificacaoModule {
};
NotificacaoModule = _ts_decorate([
    (0, _common.Global)(),
    (0, _common.Module)({
        imports: [
            _jwt.JwtModule.registerAsync({
                imports: [
                    _config.ConfigModule
                ],
                inject: [
                    _config.ConfigService
                ],
                useFactory: (config)=>({
                        secret: config.get('JWT_ACCESS_SECRET')
                    })
            })
        ],
        controllers: [
            _notificationcontroller.NotificacoesController
        ],
        providers: [
            _notificationrepository.NotificacoesRepository,
            _notificacoesgateway.NotificacoesGateway,
            _notificacaorequerimentousecase.NotificacaoRequerimentoUseCase,
            _usersrepository.UserService
        ],
        exports: [
            _notificationrepository.NotificacoesRepository,
            _notificacoesgateway.NotificacoesGateway,
            _notificacaorequerimentousecase.NotificacaoRequerimentoUseCase
        ]
    })
], NotificacaoModule);

//# sourceMappingURL=notificacoes.module.js.map