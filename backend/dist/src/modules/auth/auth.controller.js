"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _passport = require("@nestjs/passport");
const _express = require("express");
const _throttler = require("@nestjs/throttler");
const _authservice = require("./use-cases/auth.service");
const _authrepository = require("./repository/auth.repository");
const _logincredentialsdto = require("./dto/login-credentials.dto");
const _authdecorator = require("../../infra/auth/auth.decorator");
const _userdecorator = require("../../common/decorator/user.decorator");
const _BaseController = require("../../common/bases/BaseController");
const _parseDurationToken = require("../../common/helpers/parseDurationToken");
const _jwtrefreshauthguard = require("../../infra/auth/jwt-refresh-auth.guard");
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
const isProd = process.env.NODE_ENV === 'production';
const COOKIE_OPTS = {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'strict' : 'lax',
    path: '/'
};
// O refresh token só é consumido pelas rotas /auth/* (refresh, logout) —
// path restrito evita que ele viaje em todas as requisições da API.
const REFRESH_COOKIE_OPTS = {
    ...COOKIE_OPTS,
    path: '/auth'
};
let AuthController = class AuthController extends _BaseController.BaseController {
    constructor(authService, authRepo, config){
        super(), this.authService = authService, this.authRepo = authRepo, this.config = config;
        this.refreshTokenDuration = (0, _parseDurationToken.parseDuration)(this.config.getOrThrow('JWT_REFRESH_EXPIRED_IN'));
        this.accessTokenDuration = (0, _parseDurationToken.parseDuration)(this.config.getOrThrow('JWT_EXPIRED_IN'));
    }
    // ─── Login credentials ────────────────────────────────────────────────────
    async login(dto, req, res) {
        const tokens = await this.authService.loginCredentials(dto, req);
        this.setAccessCookie(res, tokens.accessToken);
        this.setRefreshCookie(res, tokens.refreshToken);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: {
                authenticated: true
            }
        });
    }
    // ─── Refresh token ────────────────────────────────────────────────────────
    // Fluxo 100% cookie httpOnly jwt_refresh — o fallback por body foi removido
    // junto com os clientes legados (evitava reuso falso por token em memória stale).
    async refresh(req, res) {
        const payload = req.user;
        try {
            const tokens = await this.authService.refreshTokens(payload.id, payload.refreshToken, req);
            this.setAccessCookie(res, tokens.accessToken);
            this.setRefreshCookie(res, tokens.refreshToken);
            return this.handleSuccessResponse({
                code: _common.HttpStatus.OK,
                response: {
                    refreshed: true
                }
            });
        } catch (error) {
            this.clearAuthCookies(res);
            throw error;
        }
    }
    async logout(req, res) {
        const user = req.user;
        if (user?.id) {
            await this.authService.logout(user.id);
        }
        this.clearAuthCookies(res);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            message: 'Sessão encerrada.'
        });
    }
    async me(user) {
        if (!user) throw new _common.UnauthorizedException('Token inválido');
        const profile = await this.authRepo.findUserWithProfile(user.id);
        if (!profile) throw new _common.UnauthorizedException('Usuário não encontrado');
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: profile
        });
    }
    // ─── Helpers ──────────────────────────────────────────────────────────────
    setAccessCookie(res, token) {
        res.cookie('jwt_token', token, {
            ...COOKIE_OPTS,
            maxAge: this.accessTokenDuration
        });
    }
    setRefreshCookie(res, token) {
        res.cookie('jwt_refresh', token, {
            ...REFRESH_COOKIE_OPTS,
            maxAge: this.refreshTokenDuration
        });
        // Remove o cookie legado com path '/' para não conviver com o novo path
        // restrito (browsers enviariam os dois).
        res.clearCookie('jwt_refresh', COOKIE_OPTS);
    }
    clearAuthCookies(res) {
        res.clearCookie('jwt_token', COOKIE_OPTS);
        res.clearCookie('jwt_refresh', REFRESH_COOKIE_OPTS);
        res.clearCookie('jwt_refresh', COOKIE_OPTS); // cookie legado path '/'
    }
};
_ts_decorate([
    (0, _common.Post)('login'),
    (0, _authdecorator.Public)(),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    (0, _throttler.Throttle)({
        auth: {
            limit: 10,
            ttl: 60000
        },
        default: {
            limit: 10,
            ttl: 60000
        }
    }),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Req)()),
    _ts_param(2, (0, _common.Res)({
        passthrough: true
    })),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _logincredentialsdto.LoginCredentialsDto === "undefined" ? Object : _logincredentialsdto.LoginCredentialsDto,
        typeof _express.Request === "undefined" ? Object : _express.Request,
        typeof _express.Response === "undefined" ? Object : _express.Response
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
_ts_decorate([
    (0, _common.Post)('refresh'),
    (0, _authdecorator.Public)(),
    (0, _common.UseGuards)(_jwtrefreshauthguard.JwtRefreshAuthGuard),
    (0, _throttler.SkipThrottle)(),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    _ts_param(0, (0, _common.Req)()),
    _ts_param(1, (0, _common.Res)({
        passthrough: true
    })),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _express.Request === "undefined" ? Object : _express.Request,
        typeof _express.Response === "undefined" ? Object : _express.Response
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
_ts_decorate([
    (0, _common.Post)('logout'),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    (0, _throttler.Throttle)({
        auth: {
            limit: 10,
            ttl: 60000
        },
        default: {
            limit: 10,
            ttl: 60000
        }
    }),
    _ts_param(0, (0, _common.Req)()),
    _ts_param(1, (0, _common.Res)({
        passthrough: true
    })),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _express.Request === "undefined" ? Object : _express.Request,
        typeof _express.Response === "undefined" ? Object : _express.Response
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
_ts_decorate([
    (0, _common.Get)('me'),
    (0, _common.UseGuards)((0, _passport.AuthGuard)('jwt')),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
AuthController = _ts_decorate([
    (0, _common.Controller)('auth'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService,
        typeof _authrepository.AuthRepository === "undefined" ? Object : _authrepository.AuthRepository,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], AuthController);

//# sourceMappingURL=auth.controller.js.map