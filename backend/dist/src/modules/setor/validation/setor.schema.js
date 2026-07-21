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
    get CreateSetorSchema () {
        return CreateSetorSchema;
    },
    get UpdateSetorSchema () {
        return UpdateSetorSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateSetorSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    nomeVisivel: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.')
}), {
    title: 'Request create setor',
    description: 'A Setor'
});
const UpdateSetorSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    id: _zod.z.string({
        error: 'Id do setor é requerido.'
    }),
    nome: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.'),
    nomeVisivel: _zod.z.string({
        error: 'Nome é requerido'
    }).min(2, 'Nome deve conter pelo menos 2 caracteres.').max(100, 'Nome deve conter no máximo 100 caracteres.')
}), {
    title: 'Request update setor',
    description: 'A Setor'
});

//# sourceMappingURL=setor.schema.js.map