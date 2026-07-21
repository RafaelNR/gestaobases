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
    get CreateCategoriaProdutoSchema () {
        return CreateCategoriaProdutoSchema;
    },
    get UpdateCategoriaProdutoSchema () {
        return UpdateCategoriaProdutoSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateCategoriaProdutoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.')
}), {
    title: 'Request create categoria produto',
    description: 'Uma Categoria de Produto'
});
const UpdateCategoriaProdutoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    id: _zod.z.string({
        error: 'Id da categoria é requerido.'
    }),
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.')
}), {
    title: 'Request update categoria produto',
    description: 'Uma Categoria de Produto'
});

//# sourceMappingURL=categoria-produto.schema.js.map