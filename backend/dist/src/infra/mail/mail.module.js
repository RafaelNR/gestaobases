"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mail.service");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const database_module_1 = require("../database/database.module");
const isProd = process.env.NODE_ENV === 'production';
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule, database_module_1.DataBaseModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    transport: {
                        host: config.get('SMTP_HOST'),
                        port: parseInt(config.get('SMTP_PORT')),
                        auth: {
                            user: config.get('SMTP_USERNAME'),
                            pass: config.get('SMTP_PASSWORD'),
                        },
                    },
                    defaults: {
                        from: `"${config.get('FROM_NAME')}" < ${config.get('FROM_EMAIL')} >`,
                    },
                    template: {
                        dir: isProd
                            ? (0, path_1.join)(process.cwd(), 'dist/infra/mail/templates')
                            : (0, path_1.join)(process.cwd(), 'src/infra/mail/templates'),
                        options: {
                            strict: true,
                        },
                    },
                    options: {
                        partials: {
                            dir: isProd
                                ? (0, path_1.join)(process.cwd(), 'dist/infra/mail/templates/partials')
                                : (0, path_1.join)(process.cwd(), 'src/infra/mail/templates/partials'),
                            options: {
                                strict: true,
                            },
                        },
                    },
                }),
            }),
        ],
        providers: [mail_service_1.MailService],
        exports: [mail_service_1.MailService],
    })
], MailModule);
//# sourceMappingURL=mail.module.js.map