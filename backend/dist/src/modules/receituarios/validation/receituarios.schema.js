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
    get AddMedicamentoSchema () {
        return AddMedicamentoSchema;
    },
    get ChangeStatusReceituarioSchema () {
        return ChangeStatusReceituarioSchema;
    },
    get CreateReceituarioSchema () {
        return CreateReceituarioSchema;
    },
    get UpdateMedicamentoSchema () {
        return UpdateMedicamentoSchema;
    },
    get UpdateReceituarioSchema () {
        return UpdateReceituarioSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const MedicamentoItemSchema = _zod.z.object({
    medicamento: _zod.z.string({
        error: 'Medicamento é requerido.'
    }),
    qnt: _zod.z.number({
        error: 'Quantidade é requerida.'
    }).int().positive(),
    unidade: _zod.z.enum([
        'ampolas',
        'ml'
    ], {
        error: 'Unidade inválida.'
    }),
    administracao: _zod.z.enum([
        'EV',
        'IM',
        'SC',
        'IN',
        'IR',
        'IO'
    ], {
        error: 'Via de administração inválida.'
    }),
    diluente: _zod.z.enum([
        'agua_destilada',
        'nacl09'
    ]).optional(),
    qnt_diluente: _zod.z.number().int().optional(),
    qnt_tempo: _zod.z.number().int().optional(),
    obs: _zod.z.string().optional()
});
const CreateReceituarioSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    data: _zod.z.string({
        error: 'Data é requerida.'
    }),
    data_ocorrencia: _zod.z.string({
        error: 'Data da ocorrência é requerida.'
    }),
    ocorrencia: _zod.z.number({
        error: 'Número da ocorrência é requerido.'
    }).int(),
    medicoId: _zod.z.string({
        error: 'Médico é requerido.'
    }),
    base: _zod.z.string({
        error: 'Base é requerida.'
    }),
    ambulancia: _zod.z.string({
        error: 'Ambulância é requerida.'
    }),
    requerimento: _zod.z.string().optional(),
    obs: _zod.z.string().optional(),
    medicamentos: _zod.z.array(MedicamentoItemSchema).optional().default([])
}), {
    title: 'Create Receituario'
});
const UpdateReceituarioSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    data: _zod.z.string().optional(),
    data_ocorrencia: _zod.z.string().optional(),
    ocorrencia: _zod.z.number().int().optional(),
    medicoId: _zod.z.string().optional(),
    base: _zod.z.string().optional(),
    ambulancia: _zod.z.string().optional(),
    requerimento: _zod.z.string().optional(),
    obs: _zod.z.string().optional()
}), {
    title: 'Update Receituario'
});
const AddMedicamentoSchema = (0, _zodopenapi.extendApi)(MedicamentoItemSchema, {
    title: 'Add Medicamento ao Receituario'
});
const UpdateMedicamentoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    qnt: _zod.z.number().int().positive().optional(),
    unidade: _zod.z.enum([
        'ampolas',
        'ml'
    ]).optional(),
    administracao: _zod.z.enum([
        'EV',
        'IM',
        'SC',
        'IN',
        'IR',
        'IO'
    ]).optional(),
    diluente: _zod.z.enum([
        'agua_destilada',
        'nacl09'
    ]).optional(),
    qnt_diluente: _zod.z.number().int().optional(),
    qnt_tempo: _zod.z.number().int().optional(),
    obs: _zod.z.string().optional()
}), {
    title: 'Update Medicamento do Receituario'
});
const ChangeStatusReceituarioSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    status: _zod.z.enum([
        'Aberto',
        'Finalizado',
        'Cancelado'
    ], {
        error: 'Status inválido.'
    })
}), {
    title: 'Alterar Status do Receituario'
});

//# sourceMappingURL=receituarios.schema.js.map