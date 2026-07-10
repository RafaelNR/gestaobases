"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoriasMedicamentoRequestDto = exports.CreateCategoriasMedicamentoRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const categorias_medicamento_schema_1 = require("../validation/categorias-medicamento.schema");
class CreateCategoriasMedicamentoRequestDto extends (0, zod_nestjs_1.createZodDto)(categorias_medicamento_schema_1.CreateCategoriasMedicamentoSchema) {
}
exports.CreateCategoriasMedicamentoRequestDto = CreateCategoriasMedicamentoRequestDto;
class UpdateCategoriasMedicamentoRequestDto extends (0, zod_nestjs_1.createZodDto)(categorias_medicamento_schema_1.UpdateCategoriasMedicamentoSchema) {
}
exports.UpdateCategoriasMedicamentoRequestDto = UpdateCategoriasMedicamentoRequestDto;
//# sourceMappingURL=categorias-medicamento.dto.js.map