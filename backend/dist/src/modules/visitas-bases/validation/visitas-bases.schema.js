"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisitaBaseSchema = exports.CreateVisitaBaseSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const zod_1 = require("zod");
exports.CreateVisitaBaseSchema = (0, zod_openapi_1.extendApi)(zod_1.z
    .object({
    data: zod_1.z.coerce.date('Data é requerida'),
    base: zod_1.z.string().optional().nullable(),
    outro_motivo: zod_1.z.string().optional().nullable(),
    descricao: zod_1.z.string().optional().nullable(),
})
    .superRefine(({ base, outro_motivo }, ctx) => {
    if (!base && !outro_motivo) {
        ctx.addIssue({
            code: 'custom',
            message: 'Deve informar uma base ou um outro motivo.',
            path: ['base'],
        });
        return;
    }
    if (base && outro_motivo) {
        ctx.addIssue({
            code: 'custom',
            message: 'Não pode informar uma base e um outro motivo.',
            path: ['base'],
        });
        return;
    }
}), { title: 'Create Visita Base' });
exports.UpdateVisitaBaseSchema = (0, zod_openapi_1.extendApi)(zod_1.z
    .object({
    data: zod_1.z.coerce.date('Data é requerida'),
    base: zod_1.z.string().optional().nullable(),
    outro_motivo: zod_1.z.string().optional().nullable(),
    descricao: zod_1.z.string().optional().nullable(),
})
    .superRefine(({ base, outro_motivo }, ctx) => {
    if (!base && !outro_motivo) {
        ctx.addIssue({
            code: 'custom',
            message: 'Deve informar uma base ou um outro motivo.',
            path: ['base'],
        });
        return;
    }
    if (base && outro_motivo) {
        ctx.addIssue({
            code: 'custom',
            message: 'Não pode informar uma base e um outro motivo.',
            path: ['base'],
        });
        return;
    }
}), { title: 'Update Visita Base' });
//# sourceMappingURL=visitas-bases.schema.js.map