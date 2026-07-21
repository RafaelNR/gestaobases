"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MailService", {
    enumerable: true,
    get: function() {
        return MailService;
    }
});
const _mailer = require("@nestjs-modules/mailer");
const _common = require("@nestjs/common");
const _prismaservice = require("../database/prisma/prisma.service");
const _config = require("@nestjs/config");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let MailService = class MailService {
    constructor(mailerService, prisma, configService){
        this.mailerService = mailerService;
        this.prisma = prisma;
        this.configService = configService;
    }
    async result({ callback, tipo, email, artefatoUUID }) {
        return callback.then(async (result)=>{
            await this.prisma.sendEmail.create({
                data: {
                    email: email,
                    status: 'success',
                    tipo: tipo,
                    artefatoUUID: artefatoUUID,
                    message: JSON.stringify(result)
                }
            });
            return true;
        }).catch(async (error)=>{
            console.log(error);
            await this.prisma.sendEmail.create({
                data: {
                    email: email,
                    status: 'error',
                    tipo: tipo,
                    artefatoUUID: artefatoUUID,
                    message: JSON.stringify(error)
                }
            });
            return false;
        });
    }
};
MailService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mailer.MailerService === "undefined" ? Object : _mailer.MailerService,
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], MailService);

//# sourceMappingURL=mail.service.js.map