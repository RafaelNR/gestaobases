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
    get CreateAmbulanciaSchema () {
        return CreateAmbulanciaSchema;
    },
    get UpdateAmbulanciaSchema () {
        return UpdateAmbulanciaSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateAmbulanciaSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo: _zod.z.enum([
        'USA',
        'USB'
    ], {
        error: 'Tipo deve ser USA ou USB.'
    }),
    baseId: _zod.z.string({
        error: 'Base é requerida.'
    })
}), {
    title: 'Request create ambulancia',
    description: 'Uma Ambulancia'
});
const UpdateAmbulanciaSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    id: _zod.z.string({
        error: 'Id da ambulância é requerido.'
    }),
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo: _zod.z.enum([
        'USA',
        'USB'
    ], {
        error: 'Tipo deve ser USA ou USB.'
    }),
    baseId: _zod.z.string({
        error: 'Base é requerida.'
    })
}), {
    title: 'Request update ambulancia',
    description: 'Uma Ambulancia'
});

//# sourceMappingURL=ambulancia.schema.js.map