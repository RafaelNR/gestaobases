"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PasswordResetService", {
    enumerable: true,
    get: function() {
        return PasswordResetService;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _crypto = require("crypto");
const _passwordresetrepository = require("./repository/password-reset.repository");
const _argon = require("../../common/helpers/argon");
const _mailservice = require("../../infra/mail/mail.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PasswordResetService = class PasswordResetService {
    constructor(repo, config, mail){
        this.repo = repo;
        this.config = config;
        this.mail = mail;
        this.logger = new _common.Logger(PasswordResetService.name);
    }
    // ─── Solicitar reset ──────────────────────────────────────────────────────
    async requestReset(dto, _ip) {
        // Resposta sempre genérica — não revelar se usuário existe
        const genericMsg = {
            message: 'Se o e-mail existir, você receberá as instruções em breve.'
        };
        const user = await this.repo.findUserByUserName(dto.username);
        if (!user) return genericMsg;
        if (!user.email) {
            return genericMsg;
        }
        // Invalida tokens anteriores pendentes
        await this.repo.invalidatePendingTokens(user.id);
        // Gera token seguro com CSPRNG (32 bytes = 256 bits)
        const rawToken = (0, _crypto.randomBytes)(32).toString('hex');
        const tokenHash = await (0, _argon.hashToken)(rawToken);
        const expireMin = parseInt(this.config.get('RESET_TOKEN_EXPIRES_MIN') ?? '30', 10);
        const expiresAt = new Date(Date.now() + expireMin * 60 * 1000);
        await this.repo.createToken({
            userId: user.id,
            tokenHash,
            expiresAt
        });
        try {
        // await this.mail.sendMail({
        //   to: dto.email,
        //   subject: 'Redefinição de senha',
        //   template: 'password-reset',
        //   context: {
        //     name: user.name,
        //     resetUrl: `${this.config.get('FRONT_END')}/reset-password?token=${rawToken}`,
        //     expiresMin: expireMin,
        //   },
        // });
        } catch (err) {
            this.logger.error(`Falha ao enviar e-mail de reset: ${err}`);
        }
        return genericMsg;
    }
};
PasswordResetService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _passwordresetrepository.PasswordResetRepository === "undefined" ? Object : _passwordresetrepository.PasswordResetRepository,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService,
        typeof _mailservice.MailService === "undefined" ? Object : _mailservice.MailService
    ])
], PasswordResetService);

//# sourceMappingURL=password-reset.service.js.map