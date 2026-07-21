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
    get CreateMedicamentoSchema () {
        return CreateMedicamentoSchema;
    },
    get UpdateMedicamentoSchema () {
        return UpdateMedicamentoSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateMedicamentoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: _zod.z.number({
        error: 'Código é requerido'
    }).int('Código deve ser um inteiro.').min(0, 'Código deve ser maior que 0').max(99999, 'Código deve ser menor que 99999'),
    especificacao: _zod.z.string({
        error: 'Especificação é requerida'
    }).min(2, 'Especificação deve conter pelo menos 2 caracteres.'),
    categoria: _zod.z.string({
        error: 'Categoria é requerida.'
    }),
    descricao: _zod.z.string().optional().nullable()
}), {
    title: 'Request create medicamento',
    description: 'Um Medicamento'
});
const UpdateMedicamentoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    id: _zod.z.string({
        error: 'Id do medicamento é requerido.'
    }),
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: _zod.z.number({
        error: 'Código é requerido'
    }).int('Código deve ser um inteiro.').min(0, 'Código deve ser maior que 0').max(99999, 'Código deve ser menor que 99999'),
    especificacao: _zod.z.string({
        error: 'Especificação é requerida'
    }).min(2, 'Especificação deve conter pelo menos 2 caracteres.'),
    categoria: _zod.z.string({
        error: 'Categoria é requerida.'
    }),
    descricao: _zod.z.string().optional().nullable(),
    active: _zod.z.boolean().optional()
}), {
    title: 'Request update medicamento',
    description: 'Um Medicamento'
});

//# sourceMappingURL=medicamento.schema.js.map