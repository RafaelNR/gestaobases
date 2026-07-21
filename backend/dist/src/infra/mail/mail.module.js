"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MailModule", {
    enumerable: true,
    get: function() {
        return MailModule;
    }
});
const _mailer = require("@nestjs-modules/mailer");
const _common = require("@nestjs/common");
const _mailservice = require("./mail.service");
const _path = require("path");
const _config = require("@nestjs/config");
const _databasemodule = require("../database/database.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
const isProd = process.env.NODE_ENV === 'production';
let MailModule = class MailModule {
};
MailModule = _ts_decorate([
    (0, _common.Global)(),
    (0, _common.Module)({
        imports: [
            _mailer.MailerModule.forRootAsync({
                imports: [
                    _config.ConfigModule,
                    _databasemodule.DataBaseModule
                ],
                inject: [
                    _config.ConfigService
                ],
                useFactory: (config)=>({
                        transport: {
                            host: config.get('SMTP_HOST'),
                            port: parseInt(config.get('SMTP_PORT')),
                            auth: {
                                user: config.get('SMTP_USERNAME'),
                                pass: config.get('SMTP_PASSWORD')
                            }
                        },
                        defaults: {
                            from: `"${config.get('FROM_NAME')}" < ${config.get('FROM_EMAIL')} >`
                        },
                        template: {
                            dir: isProd ? (0, _path.join)(process.cwd(), 'dist/infra/mail/templates') : (0, _path.join)(process.cwd(), 'src/infra/mail/templates'),
                            // adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
                            options: {
                                strict: true
                            }
                        },
                        options: {
                            partials: {
                                dir: isProd ? (0, _path.join)(process.cwd(), 'dist/infra/mail/templates/partials') : (0, _path.join)(process.cwd(), 'src/infra/mail/templates/partials'),
                                options: {
                                    strict: true
                                }
                            }
                        }
                    })
            })
        ],
        providers: [
            _mailservice.MailService
        ],
        exports: [
            _mailservice.MailService
        ]
    })
], MailModule);

//# sourceMappingURL=mail.module.js.map