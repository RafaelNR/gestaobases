"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get CreateMedicoSchema () {
        return CreateMedicoSchema;
    },
    get UpdateMedicoSchema () {
        return UpdateMedicoSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateMedicoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    crm: _zod.z.string({
        error: 'CRM é requerido.'
    }).min(1, 'CRM é requerido.').max(20, 'CRM deve conter no máximo 20 caracteres.'),
    telefone: _zod.z.string().max(20, 'Telefone deve conter no máximo 20 caracteres.').optional().nullable(),
    email: _zod.z.string().email('E-mail inválido.').max(150, 'E-mail deve conter no máximo 150 caracteres.').optional().nullable()
}), {
    title: 'Request create medico',
    description: 'Um Médico'
});
const UpdateMedicoSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    id: _zod.z.string({
        error: 'Id do médico é requerido.'
    }),
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    crm: _zod.z.string({
        error: 'CRM é requerido.'
    }).min(1, 'CRM é requerido.').max(20, 'CRM deve conter no máximo 20 caracteres.'),
    telefone: _zod.z.string().max(20, 'Telefone deve conter no máximo 20 caracteres.').optional().nullable(),
    email: _zod.z.string().email('E-mail inválido.').max(150, 'E-mail deve conter no máximo 150 caracteres.').optional().nullable()
}), {
    title: 'Request update medico',
    description: 'Um Médico'
});

//# sourceMappingURL=medico.schema.js.map