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
    get CreateBaseSchema () {
        return CreateBaseSchema;
    },
    get UpdateBaseSchema () {
        return UpdateBaseSchema;
    }
});
const _enums = require("../../../../generated/prisma/enums");
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateBaseSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo_ambulancias: _zod.z.nativeEnum(_enums.TipoAmbulancias)
}), {
    title: 'Request create base',
    description: 'A Base'
});
const UpdateBaseSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    id: _zod.z.string({
        error: 'Id da base é requerido.'
    }),
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo_ambulancias: _zod.z.nativeEnum(_enums.TipoAmbulancias)
}), {
    title: 'Request update base',
    description: 'A Base'
});

//# sourceMappingURL=base.schema.js.map