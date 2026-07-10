"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStatusRequestDto = exports.UpdateItemRequestDto = exports.AddItemRequestDto = exports.UpdateRequerimentoFarmaciaRequestDto = exports.UpdateRequerimentoAlmoxarifadoAndCMERequestDto = exports.CreateRequerimentoFarmaciaRequestDto = exports.CreateRequerimentoAlmoxarifadoAndCMERequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const requerimento_schema_1 = require("../validation/requerimento.schema");
class CreateRequerimentoAlmoxarifadoAndCMERequestDto extends (0, zod_nestjs_1.createZodDto)(requerimento_schema_1.CreateRequerimentoAlmoxarifadoAndCMESchema) {
}
exports.CreateRequerimentoAlmoxarifadoAndCMERequestDto = CreateRequerimentoAlmoxarifadoAndCMERequestDto;
class CreateRequerimentoFarmaciaRequestDto extends (0, zod_nestjs_1.createZodDto)(requerimento_schema_1.CreateRequerimentoFarmaciaSchema) {
}
exports.CreateRequerimentoFarmaciaRequestDto = CreateRequerimentoFarmaciaRequestDto;
class UpdateRequerimentoAlmoxarifadoAndCMERequestDto extends (0, zod_nestjs_1.createZodDto)(requerimento_schema_1.UpdateRequerimentoAlmoxarifadoAndCMESchema) {
}
exports.UpdateRequerimentoAlmoxarifadoAndCMERequestDto = UpdateRequerimentoAlmoxarifadoAndCMERequestDto;
class UpdateRequerimentoFarmaciaRequestDto extends (0, zod_nestjs_1.createZodDto)(requerimento_schema_1.UpdateRequerimentoFarmaciaSchema) {
}
exports.UpdateRequerimentoFarmaciaRequestDto = UpdateRequerimentoFarmaciaRequestDto;
class AddItemRequestDto extends (0, zod_nestjs_1.createZodDto)(requerimento_schema_1.AddItemSchema) {
}
exports.AddItemRequestDto = AddItemRequestDto;
class UpdateItemRequestDto extends (0, zod_nestjs_1.createZodDto)(requerimento_schema_1.UpdateItemSchema) {
}
exports.UpdateItemRequestDto = UpdateItemRequestDto;
class ChangeStatusRequestDto extends (0, zod_nestjs_1.createZodDto)(requerimento_schema_1.ChangeStatusSchema) {
}
exports.ChangeStatusRequestDto = ChangeStatusRequestDto;
//# sourceMappingURL=requerimento.dto.js.map