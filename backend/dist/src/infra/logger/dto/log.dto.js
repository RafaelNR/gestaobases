"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logCreateSchemaDto = void 0;
const log_schema_1 = require("../validation/log.schema");
const zod_nestjs_1 = require("@anatine/zod-nestjs");
class logCreateSchemaDto extends (0, zod_nestjs_1.createZodDto)(log_schema_1.logCreateSchema) {
}
exports.logCreateSchemaDto = logCreateSchemaDto;
//# sourceMappingURL=log.dto.js.map