"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePerfilRequestSchema = exports.UpdateUserRequestSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
exports.UpdateUserRequestSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    id: zod_1.z.uuid('Id do usuário é requerido.'),
    username: zod_1.z
        .string({
        error: 'Nome de usuário é requerido',
    })
        .min(5, 'Nome de usuário deve conter pelo menos 5 caracteres.')
        .max(190, 'Nome de usuário deve conter no max. 190 caracteres.'),
    nome: zod_1.z
        .string({
        error: 'Nome é requerido',
    })
        .min(5, 'Nome deve conter pelo menos 5 caracteres.')
        .max(190, 'Nome deve conter no max. 190 caracteres.'),
    email: zod_1.z.email().optional().nullable(),
    telefone: zod_1.z.preprocess((val) => (val === '' ? null : val), zod_1.z
        .string()
        .min(14, 'Telefone deve conter no mínimo 14 caracteres')
        .max(15, 'Telefone deve conter no máximo 15 caracteres')
        .nullable()
        .optional()),
    baseId: zod_1.z.uuid('Base é requerida'),
    cargoId: zod_1.z.uuid('Cargo é requerido.'),
    setorId: zod_1.z.uuid('Setor é requerido.'),
    password: zod_1.z
        .string({
        error: 'Senha é requerida',
    })
        .min(8, 'Password deve conter pelo menos 8 caracteres.')
        .max(32, 'Password deve ter no máximo 32 caracteres.'),
    active: zod_1.z.boolean().default(true),
}), {
    title: 'Request update user',
    description: 'A User',
});
exports.UpdatePerfilRequestSchema = (0, zod_openapi_1.extendApi)(zod_1.z.object({
    id: zod_1.z.string('Id do usuário é requerido.'),
    nome: zod_1.z
        .string({
        error: 'Nome é requerido',
    })
        .min(5, 'Nome deve conter pelo menos 5 caracteres.')
        .max(190, 'Nome deve conter no max. 190 caracteres.'),
    email: zod_1.z.email().optional(),
    telefone: zod_1.z.preprocess((val) => (val === '' ? null : val), zod_1.z
        .string()
        .min(14, 'Telefone deve conter no mínimo 14 caracteres')
        .max(15, 'Telefone deve conter no máximo 15 caracteres')
        .nullable()
        .optional()),
    password: zod_1.z
        .string({
        error: 'Senha é requerida',
    })
        .min(8, 'Password deve conter pelo menos 8 caracteres.')
        .max(32, 'Password deve ter no máximo 32 caracteres.'),
}), {
    title: 'Request update perfil user',
    description: 'A User',
});
//# sourceMappingURL=update.schema.js.map