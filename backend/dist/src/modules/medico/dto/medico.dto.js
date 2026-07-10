"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicoRequestDto = exports.CreateMedicoRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const medico_schema_1 = require("../validation/medico.schema");
class CreateMedicoRequestDto extends (0, zod_nestjs_1.createZodDto)(medico_schema_1.CreateMedicoSchema) {
}
exports.CreateMedicoRequestDto = CreateMedicoRequestDto;
class UpdateMedicoRequestDto extends (0, zod_nestjs_1.createZodDto)(medico_schema_1.UpdateMedicoSchema) {
}
exports.UpdateMedicoRequestDto = UpdateMedicoRequestDto;
//# sourceMappingURL=medico.dto.js.map