"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtRefreshAuthGuard", {
    enumerable: true,
    get: function() {
        return JwtRefreshAuthGuard;
    }
});
const _common = require("@nestjs/common");
const _passport = require("@nestjs/passport");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
const isProd = process.env.NODE_ENV === 'production';
const COOKIE_OPTS = {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'strict' : 'lax',
    path: '/'
};
const REFRESH_COOKIE_OPTS = {
    ...COOKIE_OPTS,
    path: '/auth'
};
let JwtRefreshAuthGuard = class JwtRefreshAuthGuard extends (0, _passport.AuthGuard)('jwt-refresh') {
    handleRequest(err, user, info, context) {
        if (err || !user) {
            const request = context.switchToHttp().getRequest();
            const response = context.switchToHttp().getResponse();
            this.clearAuthCookies(response);
            this.logger.warn('Refresh token rejeitado antes da renovação.', {
                error: this.getErrorMessage(err, info),
                ip: (request.ip ?? '').slice(0, 45) || undefined,
                userAgent: request.headers?.['user-agent']?.slice(0, 512),
                hasRefreshCookie: Boolean(request.cookies?.jwt_refresh),
                hasRefreshBody: Boolean(request.body?.refreshToken)
            });
            throw err || new _common.UnauthorizedException();
        }
        return user;
    }
    getErrorMessage(err, info) {
        if (err instanceof Error) return err.message;
        if (info instanceof Error) return info.message;
        if (typeof err === 'string') return err;
        if (typeof info === 'string') return info;
        return 'Refresh token inválido ou ausente.';
    }
    clearAuthCookies(response) {
        response.clearCookie('jwt_token', COOKIE_OPTS);
        response.clearCookie('jwt_refresh', REFRESH_COOKIE_OPTS);
        response.clearCookie('jwt_refresh', COOKIE_OPTS);
    }
    constructor(...args){
        super(...args), this.logger = new _common.Logger(JwtRefreshAuthGuard.name);
    }
};
JwtRefreshAuthGuard = _ts_decorate([
    (0, _common.Injectable)()
], JwtRefreshAuthGuard);

//# sourceMappingURL=jwt-refresh-auth.guard.js.map