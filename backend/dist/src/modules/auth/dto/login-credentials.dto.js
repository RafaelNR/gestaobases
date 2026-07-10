"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginCredentialsDto = exports.LoginCredentialsSchema = void 0;
const zod_1 = require("zod");
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const zod_openapi_1 = require("@anatine/zod-openapi");
exports.LoginCredentialsSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    username: zod_1.z
        .string("O campo 'username' é obrigatório.")
        .min(1, "O campo 'username' é obrigatório."),
    password: zod_1.z
        .string("O campo 'password' é obrigatório.")
        .min(1, "O campo 'password' é obrigatório."),
}), { title: 'LoginCredentialsDto', description: 'Credenciais de login' });
class LoginCredentialsDto extends (0, zod_nestjs_1.createZodDto)(exports.LoginCredentialsSchema) {
}
exports.LoginCredentialsDto = LoginCredentialsDto;
//# sourceMappingURL=login-credentials.dto.js.map