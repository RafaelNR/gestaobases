"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthGuard", {
    enumerable: true,
    get: function() {
        return AuthGuard;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _core = require("@nestjs/core");
const _jwt = require("@nestjs/jwt");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AuthGuard = class AuthGuard {
    constructor(jwtService, reflector, configService){
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.configService = configService;
        this.logger = new _common.Logger(AuthGuard.name);
    }
    async canActivate(context) {
        // Paginas quando publica
        const isPublic = this.reflector.getAllAndOverride('isPublic', [
            context.getHandler(),
            context.getClass()
        ]);
        if (isPublic) {
            return true;
        }
        // Paginas que qualquer usuário autenticado pode acessar (sem checagem de roles)
        const allowRolesAuth = this.reflector.getAllAndOverride('AllowRolesAuth', [
            context.getHandler(),
            context.getClass()
        ]);
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new _common.UnauthorizedException('Token não foi encontrado.');
        }
        if (allowRolesAuth && !request.user) {
            throw new _common.UnauthorizedException('Sem autorização de acesso.');
        }
        if (allowRolesAuth && request.user && !request.user.role) {
            throw new _common.UnauthorizedException('Sem perfil de acesso vinculado ao seu usuário.');
        }
        if (allowRolesAuth && request.user && request.user.role) {
            return true; // Permite acesso a qualquer usuário autenticado, sem checagem de roles
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.get('JWT_ACCESS_SECRET')
            });
            if (!payload) throw new _common.UnauthorizedException('Sem autorização de acesso, token não é mais válido.');
            request['user'] = payload;
        } catch (error) {
            this.logger.warn(`Auth guard error: ${error?.constructor?.name}`);
            if (error instanceof _jwt.TokenExpiredError) throw new _common.UnauthorizedException('Token não é mais válido.');
            if (error instanceof _jwt.JsonWebTokenError) throw new _common.UnauthorizedException('Token está inválido.');
            if (error instanceof _common.UnauthorizedException) throw error;
            throw new _common.UnauthorizedException('Sem autorização de acesso.');
        }
        return true;
    }
    extractTokenFromHeader(request) {
        // 1. Cookie tem prioridade (requisições same-origin / httpOnly)
        const cookie = request.cookies?.['jwt_token'];
        if (cookie) return cookie.trim();
        // 2. Bearer fallback para clientes cross-origin (axios com Authorization header)
        const auth = request.headers?.['authorization'];
        if (auth?.startsWith('Bearer ')) return auth.slice(7).trim();
        return undefined;
    }
};
AuthGuard = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _core.Reflector === "undefined" ? Object : _core.Reflector,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], AuthGuard);

//# sourceMappingURL=auth.guard.js.map