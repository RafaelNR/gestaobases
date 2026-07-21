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
    get BloquearLoteDto () {
        return BloquearLoteDto;
    },
    get CreateEstoqueDto () {
        return CreateEstoqueDto;
    },
    get CreateLoteDto () {
        return CreateLoteDto;
    },
    get EstoqueQueryDto () {
        return EstoqueQueryDto;
    },
    get MovimentarEstoqueDto () {
        return MovimentarEstoqueDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _estoqueschema = require("../validation/estoque.schema");
let CreateEstoqueDto = class CreateEstoqueDto extends (0, _zodnestjs.createZodDto)(_estoqueschema.CreateEstoqueSchema) {
};
let CreateLoteDto = class CreateLoteDto extends (0, _zodnestjs.createZodDto)(_estoqueschema.CreateLoteSchema) {
};
let MovimentarEstoqueDto = class MovimentarEstoqueDto extends (0, _zodnestjs.createZodDto)(_estoqueschema.MovimentarEstoqueSchema) {
};
let BloquearLoteDto = class BloquearLoteDto extends (0, _zodnestjs.createZodDto)(_estoqueschema.BloquearLoteSchema) {
};
let EstoqueQueryDto = class EstoqueQueryDto extends (0, _zodnestjs.createZodDto)(_estoqueschema.EstoqueQuerySchema) {
};

//# sourceMappingURL=estoque.dto.js.map