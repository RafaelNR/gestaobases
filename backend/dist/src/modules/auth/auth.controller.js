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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const throttler_1 = require("@nestjs/throttler");
const auth_service_1 = require("./use-cases/auth.service");
const auth_repository_1 = require("./repository/auth.repository");
const login_credentials_dto_1 = require("./dto/login-credentials.dto");
const auth_decorator_1 = require("../../infra/auth/auth.decorator");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const BaseController_1 = require("../../common/bases/BaseController");
const parseDurationToken_1 = require("../../common/helpers/parseDurationToken");
const jwt_refresh_auth_guard_1 = require("../../infra/auth/jwt-refresh-auth.guard");
const isProd = process.env.NODE_ENV === 'production';
const COOKIE_OPTS = {
    httpOnly: true,
    secure: true,
    sameSite: (isProd ? 'strict' : 'none'),
    path: '/',
};
const REFRESH_COOKIE_OPTS = {
    ...COOKIE_OPTS,
    path: '/auth',
};
let AuthController = class AuthController extends BaseController_1.BaseController {
    authService;
    authRepo;
    config;
    refreshTokenDuration;
    accessTokenDuration;
    constructor(authService, authRepo, config) {
        super();
        this.authService = authService;
        this.authRepo = authRepo;
        this.config = config;
        this.refreshTokenDuration = (0, parseDurationToken_1.parseDuration)(this.config.getOrThrow('JWT_REFRESH_EXPIRED_IN'));
        this.accessTokenDuration = (0, parseDurationToken_1.parseDuration)(this.config.getOrThrow('JWT_EXPIRED_IN'));
    }
    async login(dto, req, res) {
        const tokens = await this.authService.loginCredentials(dto, req);
        this.setAccessCookie(res, tokens.accessToken);
        this.setRefreshCookie(res, tokens.refreshToken);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: { authenticated: true },
        });
    }
    async refresh(req, res) {
        const payload = req.user;
        try {
            const tokens = await this.authService.refreshTokens(payload.id, payload.refreshToken, req);
            this.setAccessCookie(res, tokens.accessToken);
            this.setRefreshCookie(res, tokens.refreshToken);
            return this.handleSuccessResponse({
                code: common_1.HttpStatus.OK,
                response: { refreshed: true },
            });
        }
        catch (error) {
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
            code: common_1.HttpStatus.OK,
            message: 'Sessão encerrada.',
        });
    }
    async me(user) {
        if (!user)
            throw new common_1.UnauthorizedException('Token inválido');
        const profile = await this.authRepo.findUserWithProfile(user.id);
        if (!profile)
            throw new common_1.UnauthorizedException('Usuário não encontrado');
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: profile,
        });
    }
    setAccessCookie(res, token) {
        res.cookie('jwt_token', token, {
            ...COOKIE_OPTS,
            maxAge: this.accessTokenDuration,
        });
    }
    setRefreshCookie(res, token) {
        res.cookie('jwt_refresh', token, {
            ...REFRESH_COOKIE_OPTS,
            maxAge: this.refreshTokenDuration,
        });
        res.clearCookie('jwt_refresh', COOKIE_OPTS);
    }
    clearAuthCookies(res) {
        res.clearCookie('jwt_token', COOKIE_OPTS);
        res.clearCookie('jwt_refresh', REFRESH_COOKIE_OPTS);
        res.clearCookie('jwt_refresh', COOKIE_OPTS);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, auth_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, throttler_1.Throttle)({
        auth: { limit: 10, ttl: 60000 },
        default: { limit: 10, ttl: 60000 },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_credentials_dto_1.LoginCredentialsDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, auth_decorator_1.Public)(),
    (0, common_1.UseGuards)(jwt_refresh_auth_guard_1.JwtRefreshAuthGuard),
    (0, throttler_1.SkipThrottle)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, throttler_1.Throttle)({
        auth: { limit: 10, ttl: 60000 },
        default: { limit: 10, ttl: 60000 },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        auth_repository_1.AuthRepository,
        config_1.ConfigService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map