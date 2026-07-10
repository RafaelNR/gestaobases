"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStatusSchema = exports.UpdateItemSchema = exports.AddItemSchema = exports.UpdateRequerimentoFarmaciaSchema = exports.UpdateRequerimentoAlmoxarifadoAndCMESchema = exports.CreateRequerimentoFarmaciaSchema = exports.CreateRequerimentoAlmoxarifadoAndCMESchema = void 0;
const enums_1 = require("../../../../generated/prisma/enums");
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
const ItemSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    produtoId: zod_1.z.string().optional(),
    medicamentoId: zod_1.z.string().optional(),
    quantidade: zod_1.z
        .number({ error: 'Quantidade é requerida.' })
        .int()
        .positive('Quantidade deve ser positiva.'),
});
const ItemFarmaciaSchema = zod_1.z
    .object({
    ocorrencia: zod_1.z.string({ error: 'Ocorrência é obrigatória.' }),
})
    .extend(ItemSchema.shape);
exports.CreateRequerimentoAlmoxarifadoAndCMESchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    tipo: zod_1.z.enum(enums_1.TipoRequerimento, {
        error: 'Tipo inválido.',
    }),
    setor: zod_1.z.string({ error: 'Setor é requerido.' }),
    base: zod_1.z.string({ error: 'Base é requerida.' }),
    status: zod_1.z.enum([enums_1.Status.Rascunho, enums_1.Status.Recebido], {
        error: 'Status inválido.',
    }),
    obs: zod_1.z.string().optional(),
    itens: zod_1.z
        .array(ItemSchema)
        .min(1, 'O requerimento deve conter pelo menos 1 item')
        .max(1000, 'O requerimento deve conter no máximo 1000 itens'),
}), { title: 'Criar Requerimento Almoxarifado/CME' });
exports.CreateRequerimentoFarmaciaSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    tipo: zod_1.z.enum(enums_1.TipoRequerimento, {
        error: 'Tipo inválido.',
    }),
    setor: zod_1.z.string({ error: 'Setor é requerido.' }),
    base: zod_1.z.string({ error: 'Base é requerida.' }),
    ambulanciaId: zod_1.z.string({ error: 'Ambulancia é requerida.' }),
    obs: zod_1.z.string().optional(),
    status: zod_1.z.enum([enums_1.Status.Rascunho, enums_1.Status.Recebido], {
        error: 'Status inválido.',
    }),
    itens: zod_1.z
        .array(ItemFarmaciaSchema)
        .min(1, 'O requerimento deve conter pelo menos 1 item')
        .max(1000, 'O requerimento deve conter no máximo 1000 itens'),
}), { title: 'Criar Requerimento Farmácia' });
exports.UpdateRequerimentoAlmoxarifadoAndCMESchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    setor: zod_1.z.string().optional(),
    base: zod_1.z.string().optional(),
    obs: zod_1.z.string().optional(),
    itens: zod_1.z
        .array(ItemSchema)
        .min(1, 'O requerimento deve conter pelo menos 1 item')
        .max(1000, 'O requerimento deve conter no máximo 1000 itens')
        .optional(),
}), { title: 'Atualizar Requerimento Almoxarifado/CME' });
exports.UpdateRequerimentoFarmaciaSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    setor: zod_1.z.string().optional(),
    base: zod_1.z.string().optional(),
    ambulanciaId: zod_1.z.string({ error: 'Ambulancia é requerida.' }).optional(),
    obs: zod_1.z.string().optional(),
    itens: zod_1.z
        .array(ItemFarmaciaSchema)
        .min(1, 'O requerimento deve conter pelo menos 1 item')
        .max(1000, 'O requerimento deve conter no máximo 1000 itens')
        .optional(),
}), { title: 'Atualizar Requerimento Farmácia' });
exports.AddItemSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    produtoId: zod_1.z.string().optional(),
    medicamentoId: zod_1.z.string().optional(),
    quantidade: zod_1.z
        .number({ error: 'Quantidade é requerida.' })
        .int()
        .positive('Quantidade deve ser positiva.'),
    ocorrencia: zod_1.z.string().optional(),
}), { title: 'Adicionar Item ao Requerimento' });
exports.UpdateItemSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    quantidade: zod_1.z.number().int().positive('Quantidade deve ser positiva.'),
    ocorrencia: zod_1.z.string().nullable().optional(),
}), { title: 'Atualizar Item do Requerimento' });
exports.ChangeStatusSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    status: zod_1.z.enum(['Recebido', 'Analise', 'Separacao', 'Finalizado', 'Cancelado'], { error: 'Status inválido.' }),
}), { title: 'Alterar Status do Requerimento' });
//# sourceMappingURL=requerimento.schema.js.map