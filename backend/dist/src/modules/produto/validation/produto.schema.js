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
    get CreateProdutoSchema () {
        return CreateProdutoSchema;
    },
    get UpdateProdutoSchema () {
        return UpdateProdutoSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateProdutoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: _zod.z.number({
        error: 'Código é requerido'
    }).int('Código deve ser um número inteiro.').positive('Código deve ser maior que 0.'),
    unidade: _zod.z.enum([
        'Unidade',
        'Pacote',
        'Kit',
        'Caixa'
    ], {
        error: 'Unidade deve ser Unidade, Pacote, Kit ou Caixa.'
    }),
    categoria: _zod.z.string({
        error: 'Categoria é requerida.'
    }),
    usa: _zod.z.boolean().default(false),
    cme: _zod.z.boolean().default(false),
    fora_alx: _zod.z.boolean().default(false),
    ordem: _zod.z.number({
        error: 'Ordem é requerida.'
    }).int('Ordem deve ser um número inteiro.').min(0, 'Ordem deve ser maior ou igual a 0.'),
    descricao: _zod.z.string().max(500).optional().or(_zod.z.literal('')).nullable(),
    active: _zod.z.boolean().default(true)
}), {
    title: 'Request create produto',
    description: 'Um Produto'
});
const UpdateProdutoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    id: _zod.z.string({
        error: 'Id do produto é requerido.'
    }),
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: _zod.z.number({
        error: 'Código é requerido'
    }).int('Código deve ser um número inteiro.').positive('Código deve ser maior que 0.'),
    unidade: _zod.z.enum([
        'Unidade',
        'Pacote',
        'Kit',
        'Caixa'
    ], {
        error: 'Unidade deve ser Unidade, Pacote, Kit ou Caixa.'
    }),
    categoria: _zod.z.string({
        error: 'Categoria é requerida.'
    }),
    usa: _zod.z.boolean().default(false),
    cme: _zod.z.boolean().default(false),
    fora_alx: _zod.z.boolean().default(false),
    ordem: _zod.z.number({
        error: 'Ordem é requerida.'
    }).int('Ordem deve ser um número inteiro.').min(0, 'Ordem deve ser maior ou igual a 0.'),
    descricao: _zod.z.string().max(500).optional().or(_zod.z.literal('')).nullable(),
    active: _zod.z.boolean().default(true)
}), {
    title: 'Request update produto',
    description: 'Um Produto'
});

//# sourceMappingURL=produto.schema.js.map