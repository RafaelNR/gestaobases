"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAmbulanciaSchema = exports.CreateAmbulanciaSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
exports.CreateAmbulanciaSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo: zod_1.z.enum(['USA', 'USB'], { error: 'Tipo deve ser USA ou USB.' }),
    baseId: zod_1.z.string({ error: 'Base é requerida.' }),
}), {
    title: 'Request create ambulancia',
    description: 'Uma Ambulancia',
});
exports.UpdateAmbulanciaSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    id: zod_1.z.string({ error: 'Id da ambulância é requerido.' }),
    nome: zod_1.z
        .string({ error: 'Nome é requerido' })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo: zod_1.z.enum(['USA', 'USB'], { error: 'Tipo deve ser USA ou USB.' }),
    baseId: zod_1.z.string({ error: 'Base é requerida.' }),
}), {
    title: 'Request update ambulancia',
    description: 'Uma Ambulancia',
});
//# sourceMappingURL=ambulancia.schema.js.map