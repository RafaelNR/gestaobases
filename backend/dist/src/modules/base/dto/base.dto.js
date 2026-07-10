"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBaseRequestDto = exports.CreateBaseRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const base_schema_1 = require("../validation/base.schema");
class CreateBaseRequestDto extends (0, zod_nestjs_1.createZodDto)(base_schema_1.CreateBaseSchema) {
}
exports.CreateBaseRequestDto = CreateBaseRequestDto;
class UpdateBaseRequestDto extends (0, zod_nestjs_1.createZodDto)(base_schema_1.UpdateBaseSchema) {
}
exports.UpdateBaseRequestDto = UpdateBaseRequestDto;
//# sourceMappingURL=base.dto.js.map