"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicamentoRequestDto = exports.CreateMedicamentoRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const medicamento_schema_1 = require("../validation/medicamento.schema");
class CreateMedicamentoRequestDto extends (0, zod_nestjs_1.createZodDto)(medicamento_schema_1.CreateMedicamentoSchema) {
}
exports.CreateMedicamentoRequestDto = CreateMedicamentoRequestDto;
class UpdateMedicamentoRequestDto extends (0, zod_nestjs_1.createZodDto)(medicamento_schema_1.UpdateMedicamentoSchema) {
}
exports.UpdateMedicamentoRequestDto = UpdateMedicamentoRequestDto;
//# sourceMappingURL=medicamento.dto.js.map