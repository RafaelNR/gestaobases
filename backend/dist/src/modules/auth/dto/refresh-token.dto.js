"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenDto = exports.RefreshTokenSchema = void 0;
const zod_1 = require("zod");
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const zod_openapi_1 = require("@anatine/zod-openapi");
exports.RefreshTokenSchema = (0, zod_openapi_1.extendApi)(zod_1.z.preprocess((value) => (value === undefined ? {} : value), zod_1.z.strictObject({})), { title: 'RefreshTokenDto' });
class RefreshTokenDto extends (0, zod_nestjs_1.createZodDto)(exports.RefreshTokenSchema) {
}
exports.RefreshTokenDto = RefreshTokenDto;
//# sourceMappingURL=refresh-token.dto.js.map