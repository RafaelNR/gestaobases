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
    get AddItemSchema () {
        return AddItemSchema;
    },
    get ChangeStatusSchema () {
        return ChangeStatusSchema;
    },
    get CreateRequerimentoAlmoxarifadoAndCMESchema () {
        return CreateRequerimentoAlmoxarifadoAndCMESchema;
    },
    get CreateRequerimentoFarmaciaSchema () {
        return CreateRequerimentoFarmaciaSchema;
    },
    get UpdateItemSchema () {
        return UpdateItemSchema;
    },
    get UpdateRequerimentoAlmoxarifadoAndCMESchema () {
        return UpdateRequerimentoAlmoxarifadoAndCMESchema;
    },
    get UpdateRequerimentoFarmaciaSchema () {
        return UpdateRequerimentoFarmaciaSchema;
    }
});
const _enums = require("../../../../generated/prisma/enums");
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const ItemSchema = _zod.z.object({
    id: _zod.z.string().optional(),
    produtoId: _zod.z.string().optional(),
    medicamentoId: _zod.z.string().optional(),
    quantidade: _zod.z.number({
        error: 'Quantidade é requerida.'
    }).int().positive('Quantidade deve ser positiva.')
});
const ItemFarmaciaSchema = _zod.z.object({
    ocorrencia: _zod.z.string({
        error: 'Ocorrência é obrigatória.'
    })
}).extend(ItemSchema.shape);
const CreateRequerimentoAlmoxarifadoAndCMESchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    tipo: _zod.z.enum(_enums.TipoRequerimento, {
        error: 'Tipo inválido.'
    }),
    setor: _zod.z.string({
        error: 'Setor é requerido.'
    }),
    base: _zod.z.string({
        error: 'Base é requerida.'
    }),
    status: _zod.z.enum([
        _enums.Status.Rascunho,
        _enums.Status.Recebido
    ], {
        error: 'Status inválido.'
    }),
    obs: _zod.z.string().optional(),
    itens: _zod.z.array(ItemSchema).min(1, 'O requerimento deve conter pelo menos 1 item').max(1000, 'O requerimento deve conter no máximo 1000 itens')
}), {
    title: 'Criar Requerimento Almoxarifado/CME'
});
const CreateRequerimentoFarmaciaSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    tipo: _zod.z.enum(_enums.TipoRequerimento, {
        error: 'Tipo inválido.'
    }),
    setor: _zod.z.string({
        error: 'Setor é requerido.'
    }),
    base: _zod.z.string({
        error: 'Base é requerida.'
    }),
    ambulanciaId: _zod.z.string({
        error: 'Ambulancia é requerida.'
    }),
    obs: _zod.z.string().optional(),
    status: _zod.z.enum([
        _enums.Status.Rascunho,
        _enums.Status.Recebido
    ], {
        error: 'Status inválido.'
    }),
    itens: _zod.z.array(ItemFarmaciaSchema).min(1, 'O requerimento deve conter pelo menos 1 item').max(1000, 'O requerimento deve conter no máximo 1000 itens')
}), {
    title: 'Criar Requerimento Farmácia'
});
const UpdateRequerimentoAlmoxarifadoAndCMESchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    setor: _zod.z.string().optional(),
    base: _zod.z.string().optional(),
    obs: _zod.z.string().optional(),
    itens: _zod.z.array(ItemSchema).min(1, 'O requerimento deve conter pelo menos 1 item').max(1000, 'O requerimento deve conter no máximo 1000 itens').optional()
}), {
    title: 'Atualizar Requerimento Almoxarifado/CME'
});
const UpdateRequerimentoFarmaciaSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    setor: _zod.z.string().optional(),
    base: _zod.z.string().optional(),
    ambulanciaId: _zod.z.string({
        error: 'Ambulancia é requerida.'
    }).optional(),
    obs: _zod.z.string().optional(),
    itens: _zod.z.array(ItemFarmaciaSchema).min(1, 'O requerimento deve conter pelo menos 1 item').max(1000, 'O requerimento deve conter no máximo 1000 itens').optional()
}), {
    title: 'Atualizar Requerimento Farmácia'
});
const AddItemSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    produtoId: _zod.z.string().optional(),
    medicamentoId: _zod.z.string().optional(),
    quantidade: _zod.z.number({
        error: 'Quantidade é requerida.'
    }).int().positive('Quantidade deve ser positiva.'),
    ocorrencia: _zod.z.string().optional()
}), {
    title: 'Adicionar Item ao Requerimento'
});
const UpdateItemSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    quantidade: _zod.z.number().int().positive('Quantidade deve ser positiva.'),
    ocorrencia: _zod.z.string().nullable().optional()
}), {
    title: 'Atualizar Item do Requerimento'
});
const ChangeStatusSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    status: _zod.z.enum([
        'Recebido',
        'Analise',
        'Separacao',
        'Finalizado',
        'Cancelado'
    ], {
        error: 'Status inválido.'
    })
}), {
    title: 'Alterar Status do Requerimento'
});

//# sourceMappingURL=requerimento.schema.js.map