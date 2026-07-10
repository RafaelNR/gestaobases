"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSetorRequestDto = exports.CreateSetorRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const setor_schema_1 = require("../validation/setor.schema");
class CreateSetorRequestDto extends (0, zod_nestjs_1.createZodDto)(setor_schema_1.CreateSetorSchema) {
}
exports.CreateSetorRequestDto = CreateSetorRequestDto;
class UpdateSetorRequestDto extends (0, zod_nestjs_1.createZodDto)(setor_schema_1.UpdateSetorSchema) {
}
exports.UpdateSetorRequestDto = UpdateSetorRequestDto;
//# sourceMappingURL=setor.dto.js.map