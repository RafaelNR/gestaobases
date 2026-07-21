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
    get CreateCategoriasMedicamentoSchema () {
        return CreateCategoriasMedicamentoSchema;
    },
    get UpdateCategoriasMedicamentoSchema () {
        return UpdateCategoriasMedicamentoSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateCategoriasMedicamentoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.')
}), {
    title: 'Request create categoria medicamento',
    description: 'Uma Categoria de Medicamento'
});
const UpdateCategoriasMedicamentoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    id: _zod.z.string({
        error: 'Id da categoria é requerido.'
    }),
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    active: _zod.z.boolean().optional()
}), {
    title: 'Request update categoria medicamento',
    description: 'Uma Categoria de Medicamento'
});

//# sourceMappingURL=categorias-medicamento.schema.js.map