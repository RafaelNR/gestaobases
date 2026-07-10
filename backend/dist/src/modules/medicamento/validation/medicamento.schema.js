"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicamentoSchema = exports.CreateMedicamentoSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
exports.CreateMedicamentoSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: zod_1.z
        .number({ error: 'Código é requerido' })
        .int('Código deve ser um inteiro.')
        .min(0, 'Código deve ser maior que 0')
        .max(99999, 'Código deve ser menor que 99999'),
    especificacao: zod_1.z
        .string({ error: 'Especificação é requerida' })
        .min(2, 'Especificação deve conter pelo menos 2 caracteres.'),
    categoria: zod_1.z.string({ error: 'Categoria é requerida.' }),
    descricao: zod_1.z.string().optional().nullable(),
}), {
    title: 'Request create medicamento',
    description: 'Um Medicamento',
});
exports.UpdateMedicamentoSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    id: zod_1.z.string({ error: 'Id do medicamento é requerido.' }),
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: zod_1.z
        .number({ error: 'Código é requerido' })
        .int('Código deve ser um inteiro.')
        .min(0, 'Código deve ser maior que 0')
        .max(99999, 'Código deve ser menor que 99999'),
    especificacao: zod_1.z
        .string({ error: 'Especificação é requerida' })
        .min(2, 'Especificação deve conter pelo menos 2 caracteres.'),
    categoria: zod_1.z.string({ error: 'Categoria é requerida.' }),
    descricao: zod_1.z.string().optional().nullable(),
    active: zod_1.z.boolean().optional(),
}), {
    title: 'Request update medicamento',
    description: 'Um Medicamento',
});
//# sourceMappingURL=medicamento.schema.js.map