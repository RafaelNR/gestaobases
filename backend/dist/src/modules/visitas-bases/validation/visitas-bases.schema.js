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
    get CreateVisitaBaseSchema () {
        return CreateVisitaBaseSchema;
    },
    get UpdateVisitaBaseSchema () {
        return UpdateVisitaBaseSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _zod = require("zod");
const CreateVisitaBaseSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    data: _zod.z.coerce.date('Data é requerida'),
    base: _zod.z.string().optional().nullable(),
    outro_motivo: _zod.z.string().optional().nullable(),
    descricao: _zod.z.string().optional().nullable()
}).superRefine(({ base, outro_motivo }, ctx)=>{
    if (!base && !outro_motivo) {
        ctx.addIssue({
            code: 'custom',
            message: 'Deve informar uma base ou um outro motivo.',
            path: [
                'base'
            ]
        });
        return;
    }
    if (base && outro_motivo) {
        ctx.addIssue({
            code: 'custom',
            message: 'Não pode informar uma base e um outro motivo.',
            path: [
                'base'
            ]
        });
        return;
    }
}), {
    title: 'Create Visita Base'
});
const UpdateVisitaBaseSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    data: _zod.z.coerce.date('Data é requerida'),
    base: _zod.z.string().optional().nullable(),
    outro_motivo: _zod.z.string().optional().nullable(),
    descricao: _zod.z.string().optional().nullable()
}).superRefine(({ base, outro_motivo }, ctx)=>{
    if (!base && !outro_motivo) {
        ctx.addIssue({
            code: 'custom',
            message: 'Deve informar uma base ou um outro motivo.',
            path: [
                'base'
            ]
        });
        return;
    }
    if (base && outro_motivo) {
        ctx.addIssue({
            code: 'custom',
            message: 'Não pode informar uma base e um outro motivo.',
            path: [
                'base'
            ]
        });
        return;
    }
}), {
    title: 'Update Visita Base'
});

//# sourceMappingURL=visitas-bases.schema.js.map