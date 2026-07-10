"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStatusReceituarioSchema = exports.UpdateMedicamentoSchema = exports.AddMedicamentoSchema = exports.UpdateReceituarioSchema = exports.CreateReceituarioSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
const MedicamentoItemSchema = zod_1.z.object({
    medicamento: zod_1.z.string({ error: 'Medicamento é requerido.' }),
    qnt: zod_1.z.number({ error: 'Quantidade é requerida.' }).int().positive(),
    unidade: zod_1.z.enum(['ampolas', 'ml'], { error: 'Unidade inválida.' }),
    administracao: zod_1.z.enum(['EV', 'IM', 'SC', 'IN', 'IR', 'IO'], {
        error: 'Via de administração inválida.',
    }),
    diluente: zod_1.z.enum(['agua_destilada', 'nacl09']).optional(),
    qnt_diluente: zod_1.z.number().int().optional(),
    qnt_tempo: zod_1.z.number().int().optional(),
    obs: zod_1.z.string().optional(),
});
exports.CreateReceituarioSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    data: zod_1.z.string({ error: 'Data é requerida.' }),
    data_ocorrencia: zod_1.z.string({ error: 'Data da ocorrência é requerida.' }),
    ocorrencia: zod_1.z.number({ error: 'Número da ocorrência é requerido.' }).int(),
    medicoId: zod_1.z.string({ error: 'Médico é requerido.' }),
    base: zod_1.z.string({ error: 'Base é requerida.' }),
    ambulancia: zod_1.z.string({ error: 'Ambulância é requerida.' }),
    requerimento: zod_1.z.string().optional(),
    obs: zod_1.z.string().optional(),
    medicamentos: zod_1.z.array(MedicamentoItemSchema).optional().default([]),
}), { title: 'Create Receituario' });
exports.UpdateReceituarioSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    data: zod_1.z.string().optional(),
    data_ocorrencia: zod_1.z.string().optional(),
    ocorrencia: zod_1.z.number().int().optional(),
    medicoId: zod_1.z.string().optional(),
    base: zod_1.z.string().optional(),
    ambulancia: zod_1.z.string().optional(),
    requerimento: zod_1.z.string().optional(),
    obs: zod_1.z.string().optional(),
}), { title: 'Update Receituario' });
exports.AddMedicamentoSchema = (0, zod_openapi_1.extendApi)(MedicamentoItemSchema, {
    title: 'Add Medicamento ao Receituario',
});
exports.UpdateMedicamentoSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    qnt: zod_1.z.number().int().positive().optional(),
    unidade: zod_1.z.enum(['ampolas', 'ml']).optional(),
    administracao: zod_1.z.enum(['EV', 'IM', 'SC', 'IN', 'IR', 'IO']).optional(),
    diluente: zod_1.z.enum(['agua_destilada', 'nacl09']).optional(),
    qnt_diluente: zod_1.z.number().int().optional(),
    qnt_tempo: zod_1.z.number().int().optional(),
    obs: zod_1.z.string().optional(),
}), { title: 'Update Medicamento do Receituario' });
exports.ChangeStatusReceituarioSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    status: zod_1.z.enum(['Aberto', 'Finalizado', 'Cancelado'], {
        error: 'Status inválido.',
    }),
}), { title: 'Alterar Status do Receituario' });
//# sourceMappingURL=receituarios.schema.js.map