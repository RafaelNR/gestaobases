"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProdutoSchema = exports.CreateProdutoSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
exports.CreateProdutoSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: zod_1.z
        .number({ error: 'Código é requerido' })
        .int('Código deve ser um número inteiro.')
        .positive('Código deve ser maior que 0.'),
    unidade: zod_1.z.enum(['Unidade', 'Pacote', 'Kit', 'Caixa'], {
        error: 'Unidade deve ser Unidade, Pacote, Kit ou Caixa.',
    }),
    categoria: zod_1.z.string({ error: 'Categoria é requerida.' }),
    usa: zod_1.z.boolean().default(false),
    cme: zod_1.z.boolean().default(false),
    fora_alx: zod_1.z.boolean().default(false),
    ordem: zod_1.z
        .number({ error: 'Ordem é requerida.' })
        .int('Ordem deve ser um número inteiro.')
        .min(0, 'Ordem deve ser maior ou igual a 0.'),
    descricao: zod_1.z.string().max(500).optional().or(zod_1.z.literal('')).nullable(),
    active: zod_1.z.boolean().default(true),
}), {
    title: 'Request create produto',
    description: 'Um Produto',
});
exports.UpdateProdutoSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    id: zod_1.z.string({ error: 'Id do produto é requerido.' }),
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: zod_1.z
        .number({ error: 'Código é requerido' })
        .int('Código deve ser um número inteiro.')
        .positive('Código deve ser maior que 0.'),
    unidade: zod_1.z.enum(['Unidade', 'Pacote', 'Kit', 'Caixa'], {
        error: 'Unidade deve ser Unidade, Pacote, Kit ou Caixa.',
    }),
    categoria: zod_1.z.string({ error: 'Categoria é requerida.' }),
    usa: zod_1.z.boolean().default(false),
    cme: zod_1.z.boolean().default(false),
    fora_alx: zod_1.z.boolean().default(false),
    ordem: zod_1.z
        .number({ error: 'Ordem é requerida.' })
        .int('Ordem deve ser um número inteiro.')
        .min(0, 'Ordem deve ser maior ou igual a 0.'),
    descricao: zod_1.z.string().max(500).optional().or(zod_1.z.literal('')).nullable(),
    active: zod_1.z.boolean().default(true),
}), {
    title: 'Request update produto',
    description: 'Um Produto',
});
//# sourceMappingURL=produto.schema.js.map