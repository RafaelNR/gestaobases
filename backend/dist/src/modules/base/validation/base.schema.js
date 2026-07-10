"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBaseSchema = exports.CreateBaseSchema = void 0;
const enums_1 = require("../../../../generated/prisma/enums");
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
exports.CreateBaseSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    nome: zod_1.z
        .string({
        error: 'Nome é requerido',
    })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo_ambulancias: zod_1.z.nativeEnum(enums_1.TipoAmbulancias),
}), {
    title: 'Request create base',
    description: 'A Base',
});
exports.UpdateBaseSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    id: zod_1.z.string({ error: 'Id da base é requerido.' }),
    nome: zod_1.z
        .string({
        error: 'Nome é requerido',
    })
        .min(2, 'Nome deve conter pelo menos 2 caracteres.')
        .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo_ambulancias: zod_1.z.nativeEnum(enums_1.TipoAmbulancias),
}), {
    title: 'Request update base',
    description: 'A Base',
});
//# sourceMappingURL=base.schema.js.map