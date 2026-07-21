"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PasswordResetModule", {
    enumerable: true,
    get: function() {
        return PasswordResetModule;
    }
});
const _common = require("@nestjs/common");
const _passwordresetcontroller = require("./password-reset.controller");
const _passwordresetservice = require("./password-reset.service");
const _passwordresetrepository = require("./repository/password-reset.repository");
const _mailmodule = require("../../infra/mail/mail.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let PasswordResetModule = class PasswordResetModule {
};
PasswordResetModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _mailmodule.MailModule
        ],
        controllers: [
            _passwordresetcontroller.PasswordResetController
        ],
        providers: [
            _passwordresetservice.PasswordResetService,
            _passwordresetrepository.PasswordResetRepository
        ]
    })
], PasswordResetModule);

//# sourceMappingURL=password-reset.module.js.map