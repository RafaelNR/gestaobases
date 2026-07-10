"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCargoRequestDto = exports.CreateCargoRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const cargo_schema_1 = require("../validation/cargo.schema");
class CreateCargoRequestDto extends (0, zod_nestjs_1.createZodDto)(cargo_schema_1.CreateCargoSchema) {
}
exports.CreateCargoRequestDto = CreateCargoRequestDto;
class UpdateCargoRequestDto extends (0, zod_nestjs_1.createZodDto)(cargo_schema_1.UpdateCargoSchema) {
}
exports.UpdateCargoRequestDto = UpdateCargoRequestDto;
//# sourceMappingURL=cargo.dto.js.map