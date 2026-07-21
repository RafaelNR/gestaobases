"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get LoginCredentialsDto () {
        return LoginCredentialsDto;
    },
    get LoginCredentialsSchema () {
        return LoginCredentialsSchema;
    }
});
const _zod = require("zod");
const _zodnestjs = require("@anatine/zod-nestjs");
const _zodopenapi = require("@anatine/zod-openapi");
const LoginCredentialsSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    username: _zod.z.string("O campo 'username' é obrigatório.").min(1, "O campo 'username' é obrigatório."),
    password: _zod.z.string("O campo 'password' é obrigatório.").min(1, "O campo 'password' é obrigatório.")
}), {
    title: 'LoginCredentialsDto',
    description: 'Credenciais de login'
});
let LoginCredentialsDto = class LoginCredentialsDto extends (0, _zodnestjs.createZodDto)(LoginCredentialsSchema) {
};

//# sourceMappingURL=login-credentials.dto.js.map