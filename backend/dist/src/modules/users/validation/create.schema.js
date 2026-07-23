"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUserRequestSchema", {
    enumerable: true,
    get: function() {
        return CreateUserRequestSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateUserRequestSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    username: _zod.z.string({
        error: 'Nome de usuário é requerido'
    }).min(3, 'Nome de usuário deve conter pelo menos 3 caracteres.').max(190, 'Nome de usuário deve conter no max. 190 caracteres.'),
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(3, 'Nome deve conter pelo menos 3 caracteres.').max(190, 'Nome deve conter no max. 190 caracteres.'),
    email: _zod.z.email().optional().nullable(),
    telefone: _zod.z.preprocess((val)=>val === '' ? null : val, _zod.z.string().min(14, 'Telefone deve conter no mínimo 14 caracteres').max(15, 'Telefone deve conter no máximo 15 caracteres').nullable().optional()),
    baseId: _zod.z.uuid('Base é requerida'),
    cargoId: _zod.z.uuid('Cargo é requerido.'),
    setorId: _zod.z.uuid('Setor é requerido.'),
    password: _zod.z.string({
        error: 'Senha é requerida'
    }).min(8, 'Password deve conter pelo menos 8 caracteres.').max(32, 'Password deve ter no máximo 32 caracteres.'),
    active: _zod.z.boolean().default(true)
}), {
    title: 'Request create user',
    description: 'A User'
});

//# sourceMappingURL=create.schema.js.map