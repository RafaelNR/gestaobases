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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
const auth_repository_1 = require("../repository/auth.repository");
const refresh_service_1 = require("../repository/refresh.service");
const argon_1 = require("../../../common/helpers/argon");
const parseDurationToken_1 = require("../../../common/helpers/parseDurationToken");
let AuthService = class AuthService {
    repo;
    refreshTokenService;
    jwt;
    config;
    constructor(repo, refreshTokenService, jwt, config) {
        this.repo = repo;
        this.refreshTokenService = refreshTokenService;
        this.jwt = jwt;
        this.config = config;
    }
    async loginCredentials(dto, req) {
        const user = await this.repo.findUserByUsername(dto.username);
        if (!user || !user.password) {
            throw new common_1.UnauthorizedException('Credenciais inválidas.');
        }
        const valid = await (0, argon_1.verifyPassword)(user.password, dto.password);
        if (!valid)
            throw new common_1.UnauthorizedException('Credenciais inválidas.');
        return this.issueTokens(user, req);
    }
    async refreshTokens(userId, rawRefreshToken, req) {
        const records = await this.repo.findActiveRefreshTokensByUser(userId);
        let validRecord = null;
        for (const record of records) {
            const match = await this.verifyRefreshTokenHash(record.tokenHash, rawRefreshToken);
            if (match) {
                validRecord = record;
                break;
            }
        }
        if (!validRecord) {
            throw new common_1.UnauthorizedException('Refresh token inválido ou expirado.');
        }
        if (new Date() > validRecord.expiresAt) {
            await this.repo.revokeRefreshToken(validRecord.id);
            throw new common_1.UnauthorizedException('Refresh token expirado.');
        }
        await this.repo.revokeRefreshToken(validRecord.id);
        const user = await this.repo.findUserById(userId);
        if (!user || !user.active) {
            throw new common_1.UnauthorizedException('Usuário inativo ou não encontrado.');
        }
        return this.issueTokens(user, req, validRecord.family);
    }
    async logout(userId) {
        await Promise.all([this.repo.revokeAllUserTokens(userId)]);
    }
    async issueTokens(user, req, existingFamily) {
        const jti = (0, crypto_1.randomUUID)();
        const accessToken = this.jwt.sign({
            id: user.id,
            setor: user.Setor.nome,
            cargo: user.Cargo.nome,
            base: user.Base.nome,
            jti,
        }, {
            secret: this.config.getOrThrow('JWT_ACCESS_SECRET'),
            expiresIn: this.config.getOrThrow('JWT_EXPIRED_IN'),
        });
        const rawRefreshToken = this.jwt.sign({ id: user.id }, {
            secret: this.config.getOrThrow('JWT_REFRESH_SECRET'),
            expiresIn: this.config.getOrThrow('JWT_REFRESH_EXPIRED_IN'),
        });
        const tokenHash = await (0, argon_1.hashToken)(rawRefreshToken);
        const family = existingFamily ?? (0, crypto_1.randomUUID)();
        const expiresRefresh = (0, parseDurationToken_1.parseDuration)(this.config.getOrThrow('JWT_REFRESH_EXPIRED_IN'));
        const expiresAt = new Date(Date.now() + expiresRefresh);
        await this.refreshTokenService.create({
            userId: user.id,
            tokenHash,
            family,
            expiresAt,
            userAgent: req?.headers?.['user-agent']?.slice(0, 512),
            ip: (req?.ip ?? '').slice(0, 45),
        });
        return { accessToken, refreshToken: rawRefreshToken, expiresIn: expiresAt };
    }
    async verifyRefreshTokenHash(tokenHash, rawRefreshToken) {
        if (await (0, argon_1.verifyToken)(tokenHash, rawRefreshToken)) {
            return true;
        }
        const legacyHash = (0, crypto_1.createHmac)('sha256', this.config.getOrThrow('JWT_REFRESH_SECRET'))
            .update(rawRefreshToken)
            .digest('hex');
        const tokenHashBuffer = Buffer.from(tokenHash, 'hex');
        const legacyHashBuffer = Buffer.from(legacyHash, 'hex');
        return (tokenHashBuffer.length === legacyHashBuffer.length &&
            (0, crypto_1.timingSafeEqual)(tokenHashBuffer, legacyHashBuffer));
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        refresh_service_1.RefreshTokenService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map