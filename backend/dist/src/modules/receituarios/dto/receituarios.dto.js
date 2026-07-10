"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStatusReceituarioRequestDto = exports.UpdateMedicamentoRequestDto = exports.AddMedicamentoRequestDto = exports.UpdateReceituarioRequestDto = exports.CreateReceituarioRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const receituarios_schema_1 = require("../validation/receituarios.schema");
class CreateReceituarioRequestDto extends (0, zod_nestjs_1.createZodDto)(receituarios_schema_1.CreateReceituarioSchema) {
}
exports.CreateReceituarioRequestDto = CreateReceituarioRequestDto;
class UpdateReceituarioRequestDto extends (0, zod_nestjs_1.createZodDto)(receituarios_schema_1.UpdateReceituarioSchema) {
}
exports.UpdateReceituarioRequestDto = UpdateReceituarioRequestDto;
class AddMedicamentoRequestDto extends (0, zod_nestjs_1.createZodDto)(receituarios_schema_1.AddMedicamentoSchema) {
}
exports.AddMedicamentoRequestDto = AddMedicamentoRequestDto;
class UpdateMedicamentoRequestDto extends (0, zod_nestjs_1.createZodDto)(receituarios_schema_1.UpdateMedicamentoSchema) {
}
exports.UpdateMedicamentoRequestDto = UpdateMedicamentoRequestDto;
class ChangeStatusReceituarioRequestDto extends (0, zod_nestjs_1.createZodDto)(receituarios_schema_1.ChangeStatusReceituarioSchema) {
}
exports.ChangeStatusReceituarioRequestDto = ChangeStatusReceituarioRequestDto;
//# sourceMappingURL=receituarios.dto.js.map