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
    get CreateCategoriaProdutoRequestDto () {
        return CreateCategoriaProdutoRequestDto;
    },
    get UpdateCategoriaProdutoRequestDto () {
        return UpdateCategoriaProdutoRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _categoriaprodutoschema = require("../validation/categoria-produto.schema");
let CreateCategoriaProdutoRequestDto = class CreateCategoriaProdutoRequestDto extends (0, _zodnestjs.createZodDto)(_categoriaprodutoschema.CreateCategoriaProdutoSchema) {
};
let UpdateCategoriaProdutoRequestDto = class UpdateCategoriaProdutoRequestDto extends (0, _zodnestjs.createZodDto)(_categoriaprodutoschema.UpdateCategoriaProdutoSchema) {
};

//# sourceMappingURL=categoria-produto.dto.js.map