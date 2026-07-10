"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCargoSchema = exports.CreateCargoSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
const cargoBaseSchema = zod_1.z.object({
    nome: zod_1.z
        .string({
        error: 'Nome é requerido',
    })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    nomeVisivel: zod_1.z
        .string({
        error: 'Nome visível é requerido',
    })
        .min(2, 'Nome visível deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome visível deve conter no máximo 100 caracteres.'),
    setor: zod_1.z
        .string({
        error: 'Setor é requerido',
    })
        .min(2, 'Setor deve conter pelo menos 2 caracteres.')
        .max(100, 'Setor deve conter no máximo 100 caracteres.'),
});
exports.CreateCargoSchema = (0, zod_openapi_1.extendApi)(cargoBaseSchema, {
    title: 'Request create cargo',
    description: 'A Cargo',
});
exports.UpdateCargoSchema = (0, zod_openapi_1.extendApi)(cargoBaseSchema.extend({
    id: zod_1.z.string({ error: 'Id do cargo é requerido.' }),
}), {
    title: 'Request update cargo',
    description: 'A Cargo',
});
//# sourceMappingURL=cargo.schema.js.map