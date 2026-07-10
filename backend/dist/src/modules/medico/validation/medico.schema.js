"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicoSchema = exports.CreateMedicoSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
exports.CreateMedicoSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    crm: zod_1.z
        .string({ error: 'CRM é requerido.' })
        .min(1, 'CRM é requerido.')
        .max(20, 'CRM deve conter no máximo 20 caracteres.'),
    telefone: zod_1.z
        .string()
        .max(20, 'Telefone deve conter no máximo 20 caracteres.')
        .optional()
        .nullable(),
    email: zod_1.z
        .string()
        .email('E-mail inválido.')
        .max(150, 'E-mail deve conter no máximo 150 caracteres.')
        .optional()
        .nullable(),
}), {
    title: 'Request create medico',
    description: 'Um Médico',
});
exports.UpdateMedicoSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    id: zod_1.z.string({ error: 'Id do médico é requerido.' }),
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    crm: zod_1.z
        .string({ error: 'CRM é requerido.' })
        .min(1, 'CRM é requerido.')
        .max(20, 'CRM deve conter no máximo 20 caracteres.'),
    telefone: zod_1.z
        .string()
        .max(20, 'Telefone deve conter no máximo 20 caracteres.')
        .optional()
        .nullable(),
    email: zod_1.z
        .string()
        .email('E-mail inválido.')
        .max(150, 'E-mail deve conter no máximo 150 caracteres.')
        .optional()
        .nullable(),
}), {
    title: 'Request update medico',
    description: 'Um Médico',
});
//# sourceMappingURL=medico.schema.js.map