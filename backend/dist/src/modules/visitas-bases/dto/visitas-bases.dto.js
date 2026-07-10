"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisitaBaseRequestDto = exports.CreateVisitaBaseRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const visitas_bases_schema_1 = require("../validation/visitas-bases.schema");
class CreateVisitaBaseRequestDto extends (0, zod_nestjs_1.createZodDto)(visitas_bases_schema_1.CreateVisitaBaseSchema) {
}
exports.CreateVisitaBaseRequestDto = CreateVisitaBaseRequestDto;
class UpdateVisitaBaseRequestDto extends (0, zod_nestjs_1.createZodDto)(visitas_bases_schema_1.UpdateVisitaBaseSchema) {
}
exports.UpdateVisitaBaseRequestDto = UpdateVisitaBaseRequestDto;
//# sourceMappingURL=visitas-bases.dto.js.map