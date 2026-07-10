"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmResetDto = exports.ConfirmResetSchema = void 0;
const zod_1 = require("zod");
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const zod_openapi_1 = require("@anatine/zod-openapi");
exports.ConfirmResetSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    token: zod_1.z.string().min(1),
    password: zod_1.z
        .string()
        .min(8)
        .regex(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
        .regex(/[0-9]/, 'Deve conter ao menos um número')
        .regex(/[^A-Za-z0-9]/, 'Deve conter ao menos um caractere especial'),
}), { title: 'ConfirmResetDto', description: 'Confirmar reset de senha com token' });
class ConfirmResetDto extends (0, zod_nestjs_1.createZodDto)(exports.ConfirmResetSchema) {
}
exports.ConfirmResetDto = ConfirmResetDto;
//# sourceMappingURL=confirm-reset.dto.js.map