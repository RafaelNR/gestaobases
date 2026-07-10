"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationDto = exports.PaginationSchema = void 0;
exports.paginate = paginate;
const zod_1 = require("zod");
const zod_nestjs_1 = require("@anatine/zod-nestjs");
exports.PaginationSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().default(1).optional(),
    limit: zod_1.z.coerce.number().int().positive().max(200).default(20).optional(),
});
class PaginationDto extends (0, zod_nestjs_1.createZodDto)(exports.PaginationSchema) {
}
exports.PaginationDto = PaginationDto;
function paginate(pagination) {
    const page = pagination?.page || 1;
    const limit = pagination?.limit || 20;
    return {
        skip: (page - 1) * limit,
        take: limit,
    };
}
//# sourceMappingURL=pagination.dto.js.map