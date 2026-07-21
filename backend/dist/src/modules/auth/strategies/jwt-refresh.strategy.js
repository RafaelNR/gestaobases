"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtRefreshStrategy", {
    enumerable: true,
    get: function() {
        return JwtRefreshStrategy;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _passport = require("@nestjs/passport");
const _passportjwt = require("passport-jwt");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let JwtRefreshStrategy = class JwtRefreshStrategy extends (0, _passport.PassportStrategy)(_passportjwt.Strategy, 'jwt-refresh') {
    constructor(config){
        super({
            jwtFromRequest: _passportjwt.ExtractJwt.fromExtractors([
                (req)=>req.cookies?.['jwt_refresh'] ?? null
            ]),
            ignoreExpiration: false,
            secretOrKey: config.getOrThrow('JWT_REFRESH_SECRET'),
            passReqToCallback: true
        }), this.config = config;
    }
    async validate(req, payload) {
        // issueTokens assina com { id: userId }, mas alguns clientes podem usar sub (RFC 7519)
        const userId = payload?.id ?? payload?.sub;
        if (!userId) throw new _common.UnauthorizedException();
        const refreshToken = req.cookies?.['jwt_refresh'];
        if (!refreshToken) throw new _common.UnauthorizedException();
        return {
            id: userId,
            refreshToken
        };
    }
};
JwtRefreshStrategy = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], JwtRefreshStrategy);

//# sourceMappingURL=jwt-refresh.strategy.js.map