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
var AuthGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
let AuthGuard = AuthGuard_1 = class AuthGuard {
    jwtService;
    reflector;
    configService;
    logger = new common_1.Logger(AuthGuard_1.name);
    constructor(jwtService, reflector, configService) {
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.configService = configService;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride('isPublic', [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const allowRolesAuth = this.reflector.getAllAndOverride('AllowRolesAuth', [context.getHandler(), context.getClass()]);
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException('Token não foi encontrado.');
        }
        if (allowRolesAuth && !request.user) {
            throw new common_1.UnauthorizedException('Sem autorização de acesso.');
        }
        if (allowRolesAuth && request.user && !request.user.role) {
            throw new common_1.UnauthorizedException('Sem perfil de acesso vinculado ao seu usuário.');
        }
        if (allowRolesAuth && request.user && request.user.role) {
            return true;
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.get('JWT_ACCESS_SECRET'),
            });
            if (!payload)
                throw new common_1.UnauthorizedException('Sem autorização de acesso, token não é mais válido.');
            request['user'] = payload;
        }
        catch (error) {
            this.logger.warn(`Auth guard error: ${error?.constructor?.name}`);
            if (error instanceof jwt_1.TokenExpiredError)
                throw new common_1.UnauthorizedException('Token não é mais válido.');
            if (error instanceof jwt_1.JsonWebTokenError)
                throw new common_1.UnauthorizedException('Token está inválido.');
            if (error instanceof common_1.UnauthorizedException)
                throw error;
            throw new common_1.UnauthorizedException('Sem autorização de acesso.');
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const cookie = request.cookies?.['jwt_token'];
        if (cookie)
            return cookie.trim();
        const auth = request.headers?.['authorization'];
        if (auth?.startsWith('Bearer '))
            return auth.slice(7).trim();
        return undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = AuthGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector,
        config_1.ConfigService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map