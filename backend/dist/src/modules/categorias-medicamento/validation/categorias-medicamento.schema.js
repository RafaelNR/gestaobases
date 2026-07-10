"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoriasMedicamentoSchema = exports.CreateCategoriasMedicamentoSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
exports.CreateCategoriasMedicamentoSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
}), {
    title: 'Request create categoria medicamento',
    description: 'Uma Categoria de Medicamento',
});
exports.UpdateCategoriasMedicamentoSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    id: zod_1.z.string({ error: 'Id da categoria é requerido.' }),
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    active: zod_1.z.boolean().optional(),
}), {
    title: 'Request update categoria medicamento',
    description: 'Uma Categoria de Medicamento',
});
//# sourceMappingURL=categorias-medicamento.schema.js.map