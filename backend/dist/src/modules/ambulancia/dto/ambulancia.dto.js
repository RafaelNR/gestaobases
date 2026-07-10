"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAmbulanciaRequestDto = exports.CreateAmbulanciaRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const ambulancia_schema_1 = require("../validation/ambulancia.schema");
class CreateAmbulanciaRequestDto extends (0, zod_nestjs_1.createZodDto)(ambulancia_schema_1.CreateAmbulanciaSchema) {
}
exports.CreateAmbulanciaRequestDto = CreateAmbulanciaRequestDto;
class UpdateAmbulanciaRequestDto extends (0, zod_nestjs_1.createZodDto)(ambulancia_schema_1.UpdateAmbulanciaSchema) {
}
exports.UpdateAmbulanciaRequestDto = UpdateAmbulanciaRequestDto;
//# sourceMappingURL=ambulancia.dto.js.map