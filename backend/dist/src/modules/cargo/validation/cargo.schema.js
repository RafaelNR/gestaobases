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
    get CreateCargoSchema () {
        return CreateCargoSchema;
    },
    get UpdateCargoSchema () {
        return UpdateCargoSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const cargoBaseSchema = _zod.z.object({
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    nomeVisivel: _zod.z.string({
        error: 'Nome visível é requerido'
    }).min(2, 'Nome visível deve conter pelo menos 2 caracteres.').max(100, 'Nome visível deve conter no máximo 100 caracteres.'),
    setor: _zod.z.string({
        error: 'Setor é requerido'
    }).min(2, 'Setor deve conter pelo menos 2 caracteres.').max(100, 'Setor deve conter no máximo 100 caracteres.')
});
const CreateCargoSchema = (0, _zodopenapi.extendApi)(cargoBaseSchema, {
    title: 'Request create cargo',
    description: 'A Cargo'
});
const UpdateCargoSchema = (0, _zodopenapi.extendApi)(cargoBaseSchema.extend({
    id: _zod.z.string({
        error: 'Id do cargo é requerido.'
    })
}), {
    title: 'Request update cargo',
    description: 'A Cargo'
});

//# sourceMappingURL=cargo.schema.js.map