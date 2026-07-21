"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get PaginationDto () {
        return PaginationDto;
    },
    get PaginationSchema () {
        return PaginationSchema;
    },
    get paginate () {
        return paginate;
    }
});
const _zod = require("zod");
const _zodnestjs = require("@anatine/zod-nestjs");
const PaginationSchema = _zod.z.object({
    page: _zod.z.coerce.number().int().positive().default(1).optional(),
    limit: _zod.z.coerce.number().int().positive().max(200).default(20).optional()
});
let PaginationDto = class PaginationDto extends (0, _zodnestjs.createZodDto)(PaginationSchema) {
};
function paginate(pagination) {
    const page = pagination?.page || 1;
    const limit = pagination?.limit || 20;
    return {
        skip: (page - 1) * limit,
        take: limit
    };
}

//# sourceMappingURL=pagination.dto.js.map