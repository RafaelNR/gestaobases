"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _config = require("@nestjs/config");
const _crypto = require("crypto");
const _authrepository = require("../repository/auth.repository");
const _refreshservice = require("../repository/refresh.service");
const _argon = require("../../../common/helpers/argon");
const _parseDurationToken = require("../../../common/helpers/parseDurationToken");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AuthService = class AuthService {
    constructor(repo, refreshTokenService, jwt, config){
        this.repo = repo;
        this.refreshTokenService = refreshTokenService;
        this.jwt = jwt;
        this.config = config;
    }
    // ─── Login credentials ────────────────────────────────────────────────────
    async loginCredentials(dto, req) {
        const user = await this.repo.findUserByUsername(dto.username);
        // Resposta genérica para não revelar se o usuário existe
        if (!user || !user.password) {
            throw new _common.UnauthorizedException('Credenciais inválidas.');
        }
        const valid = await (0, _argon.verifyPassword)(user.password, dto.password);
        if (!valid) throw new _common.UnauthorizedException('Credenciais inválidas.');
        return this.issueTokens(user, req);
    }
    // ─── Refresh token ────────────────────────────────────────────────────────
    async refreshTokens(userId, rawRefreshToken, req) {
        const records = await this.repo.findActiveRefreshTokensByUser(userId);
        let validRecord = null;
        for (const record of records){
            const match = await this.verifyRefreshTokenHash(record.tokenHash, rawRefreshToken);
            if (match) {
                validRecord = record;
                break;
            }
        }
        if (!validRecord) {
            throw new _common.UnauthorizedException('Refresh token inválido ou expirado.');
        }
        if (new Date() > validRecord.expiresAt) {
            await this.repo.revokeRefreshToken(validRecord.id);
            throw new _common.UnauthorizedException('Refresh token expirado.');
        }
        // Rotação: revogar token atual, emitir novo da mesma família
        await this.repo.revokeRefreshToken(validRecord.id);
        // Busca usuário
        const user = await this.repo.findUserById(userId);
        if (!user || !user.active) {
            throw new _common.UnauthorizedException('Usuário inativo ou não encontrado.');
        }
        return this.issueTokens(user, req, validRecord.family);
    }
    // ─── Logout ───────────────────────────────────────────────────────────────
    async logout(userId) {
        await Promise.all([
            this.repo.revokeAllUserTokens(userId)
        ]);
    }
    // ─── Helpers ──────────────────────────────────────────────────────────────
    // Emite tokens e registra sessão
    async issueTokens(user, req, existingFamily) {
        // Gera um ID para o token
        const jti = (0, _crypto.randomUUID)();
        // Gera o access token
        const accessToken = this.jwt.sign({
            id: user.id,
            setor: user.Setor.nome,
            cargo: user.Cargo.nome,
            base: user.Base.nome,
            setorId: user.setorId,
            baseId: user.baseId,
            cargoId: user.cargoId,
            jti
        }, {
            secret: this.config.getOrThrow('JWT_ACCESS_SECRET'),
            expiresIn: this.config.getOrThrow('JWT_EXPIRED_IN')
        });
        // Gera o refresh token assinado como JWT para que JwtRefreshStrategy possa validá-lo
        const rawRefreshToken = this.jwt.sign({
            id: user.id
        }, {
            secret: this.config.getOrThrow('JWT_REFRESH_SECRET'),
            expiresIn: this.config.getOrThrow('JWT_REFRESH_EXPIRED_IN')
        });
        const tokenHash = await (0, _argon.hashToken)(rawRefreshToken);
        const family = existingFamily ?? (0, _crypto.randomUUID)();
        const expiresRefresh = (0, _parseDurationToken.parseDuration)(this.config.getOrThrow('JWT_REFRESH_EXPIRED_IN'));
        const expiresAt = new Date(Date.now() + expiresRefresh);
        // Salva refresh token
        await this.refreshTokenService.create({
            userId: user.id,
            tokenHash,
            family,
            expiresAt,
            userAgent: req?.headers?.['user-agent']?.slice(0, 512),
            ip: (req?.ip ?? '').slice(0, 45)
        });
        return {
            accessToken,
            refreshToken: rawRefreshToken,
            expiresIn: expiresAt
        };
    }
    async verifyRefreshTokenHash(tokenHash, rawRefreshToken) {
        if (await (0, _argon.verifyToken)(tokenHash, rawRefreshToken)) {
            return true;
        }
        const legacyHash = (0, _crypto.createHmac)('sha256', this.config.getOrThrow('JWT_REFRESH_SECRET')).update(rawRefreshToken).digest('hex');
        const tokenHashBuffer = Buffer.from(tokenHash, 'hex');
        const legacyHashBuffer = Buffer.from(legacyHash, 'hex');
        return tokenHashBuffer.length === legacyHashBuffer.length && (0, _crypto.timingSafeEqual)(tokenHashBuffer, legacyHashBuffer);
    }
};
AuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authrepository.AuthRepository === "undefined" ? Object : _authrepository.AuthRepository,
        typeof _refreshservice.RefreshTokenService === "undefined" ? Object : _refreshservice.RefreshTokenService,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], AuthService);

//# sourceMappingURL=auth.service.js.map