"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePerfilRequestDto = exports.UpdateUserRequestDto = exports.CreateUserRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const update_schema_1 = require("../validation/update.schema");
const create_schema_1 = require("../validation/create.schema");
class CreateUserRequestDto extends (0, zod_nestjs_1.createZodDto)(create_schema_1.CreateUserRequestSchema) {
}
exports.CreateUserRequestDto = CreateUserRequestDto;
class UpdateUserRequestDto extends (0, zod_nestjs_1.createZodDto)(update_schema_1.UpdateUserRequestSchema) {
}
exports.UpdateUserRequestDto = UpdateUserRequestDto;
class UpdatePerfilRequestDto extends (0, zod_nestjs_1.createZodDto)(update_schema_1.UpdatePerfilRequestSchema) {
}
exports.UpdatePerfilRequestDto = UpdatePerfilRequestDto;
//# sourceMappingURL=users.dto.js.map