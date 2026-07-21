"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthModule", {
    enumerable: true,
    get: function() {
        return AuthModule;
    }
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _jwt = require("@nestjs/jwt");
const _config = require("@nestjs/config");
const _authguard = require("./auth.guard");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AuthModule = class AuthModule {
    static forRoot() {
        return {
            module: AuthModule,
            providers: [
                {
                    provide: _core.APP_GUARD,
                    useClass: _authguard.AuthGuard
                }
            ]
        };
    }
};
AuthModule = _ts_decorate([
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
                useFactory: (configService)=>({
                        global: true,
                        secret: configService.get('JWT_ACCESS_SECRET')
                    })
            })
        ],
        providers: [],
        controllers: []
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map