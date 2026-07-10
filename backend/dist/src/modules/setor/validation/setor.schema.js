"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSetorSchema = exports.CreateSetorSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
exports.CreateSetorSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    nome: zod_1.z
        .string({
        error: 'Nome é requerido',
    })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    nomeVisivel: zod_1.z
        .string({
        error: 'Nome é requerido',
    })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
}), {
    title: 'Request create setor',
    description: 'A Setor',
});
exports.UpdateSetorSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    id: zod_1.z.string({ error: 'Id do setor é requerido.' }),
    nome: zod_1.z
        .string({
        error: 'Nome é requerido',
    })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    nomeVisivel: zod_1.z
        .string({
        error: 'Nome é requerido',
    })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
}), {
    title: 'Request update setor',
    description: 'A Setor',
});
//# sourceMappingURL=setor.schema.js.map