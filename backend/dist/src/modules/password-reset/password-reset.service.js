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
var PasswordResetService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordResetService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
const password_reset_repository_1 = require("./repository/password-reset.repository");
const argon_1 = require("../../common/helpers/argon");
const mail_service_1 = require("../../infra/mail/mail.service");
let PasswordResetService = PasswordResetService_1 = class PasswordResetService {
    repo;
    config;
    mail;
    logger = new common_1.Logger(PasswordResetService_1.name);
    constructor(repo, config, mail) {
        this.repo = repo;
        this.config = config;
        this.mail = mail;
    }
    async requestReset(dto, _ip) {
        const genericMsg = {
            message: 'Se o e-mail existir, você receberá as instruções em breve.',
        };
        const user = await this.repo.findUserByUserName(dto.username);
        if (!user)
            return genericMsg;
        if (!user.email) {
            return genericMsg;
        }
        await this.repo.invalidatePendingTokens(user.id);
        const rawToken = (0, crypto_1.randomBytes)(32).toString('hex');
        const tokenHash = await (0, argon_1.hashToken)(rawToken);
        const expireMin = parseInt(this.config.get('RESET_TOKEN_EXPIRES_MIN') ?? '30', 10);
        const expiresAt = new Date(Date.now() + expireMin * 60 * 1000);
        await this.repo.createToken({ userId: user.id, tokenHash, expiresAt });
        try {
        }
        catch (err) {
            this.logger.error(`Falha ao enviar e-mail de reset: ${err}`);
        }
        return genericMsg;
    }
};
exports.PasswordResetService = PasswordResetService;
exports.PasswordResetService = PasswordResetService = PasswordResetService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [password_reset_repository_1.PasswordResetRepository,
        config_1.ConfigService,
        mail_service_1.MailService])
], PasswordResetService);
//# sourceMappingURL=password-reset.service.js.map