"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtAccessStrategy", {
    enumerable: true,
    get: function() {
        return JwtAccessStrategy;
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
function extractFromCookieOrHeader(req) {
    const auth = req?.headers?.authorization;
    if (auth?.startsWith('Bearer ')) return auth.slice(7);
    if (req?.cookies?.jwt_token) return req.cookies.jwt_token;
    return null;
}
let JwtAccessStrategy = class JwtAccessStrategy extends (0, _passport.PassportStrategy)(_passportjwt.Strategy, 'jwt') {
    constructor(config){
        super({
            jwtFromRequest: _passportjwt.ExtractJwt.fromExtractors([
                extractFromCookieOrHeader
            ]),
            ignoreExpiration: false,
            secretOrKey: config.getOrThrow('JWT_ACCESS_SECRET')
        }), this.config = config;
    }
    async validate(payload) {
        if (!payload?.id) throw new _common.UnauthorizedException();
        return {
            id: payload.id,
            nome: payload.nome,
            setor: payload.setor,
            cargo: payload.cargo,
            base: payload.base,
            baseId: payload.baseId,
            setorId: payload.setorId,
            cargoId: payload.cargoId
        };
    }
};
JwtAccessStrategy = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], JwtAccessStrategy);

//# sourceMappingURL=jwt-access.strategy.js.map