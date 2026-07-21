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
    get CreateCategoriasMedicamentoRequestDto () {
        return CreateCategoriasMedicamentoRequestDto;
    },
    get UpdateCategoriasMedicamentoRequestDto () {
        return UpdateCategoriasMedicamentoRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _categoriasmedicamentoschema = require("../validation/categorias-medicamento.schema");
let CreateCategoriasMedicamentoRequestDto = class CreateCategoriasMedicamentoRequestDto extends (0, _zodnestjs.createZodDto)(_categoriasmedicamentoschema.CreateCategoriasMedicamentoSchema) {
};
let UpdateCategoriasMedicamentoRequestDto = class UpdateCategoriasMedicamentoRequestDto extends (0, _zodnestjs.createZodDto)(_categoriasmedicamentoschema.UpdateCategoriasMedicamentoSchema) {
};

//# sourceMappingURL=categorias-medicamento.dto.js.map