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
    get CreateProdutoRequestDto () {
        return CreateProdutoRequestDto;
    },
    get UpdateProdutoRequestDto () {
        return UpdateProdutoRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _produtoschema = require("../validation/produto.schema");
let CreateProdutoRequestDto = class CreateProdutoRequestDto extends (0, _zodnestjs.createZodDto)(_produtoschema.CreateProdutoSchema) {
};
let UpdateProdutoRequestDto = class UpdateProdutoRequestDto extends (0, _zodnestjs.createZodDto)(_produtoschema.UpdateProdutoSchema) {
};

//# sourceMappingURL=produto.dto.js.map