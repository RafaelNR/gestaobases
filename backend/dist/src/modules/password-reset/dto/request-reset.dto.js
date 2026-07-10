"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestResetDto = exports.RequestResetSchema = void 0;
const zod_1 = require("zod");
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const zod_openapi_1 = require("@anatine/zod-openapi");
exports.RequestResetSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({ username: zod_1.z.string("O campo 'username' é obrigatório") }), { title: 'RequestResetDto', description: 'Solicitar reset de senha' });
class RequestResetDto extends (0, zod_nestjs_1.createZodDto)(exports.RequestResetSchema) {
}
exports.RequestResetDto = RequestResetDto;
//# sourceMappingURL=request-reset.dto.js.map