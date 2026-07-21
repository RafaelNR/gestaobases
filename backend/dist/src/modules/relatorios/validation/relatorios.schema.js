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
    get relatorioEstoqueMovimentacoesSchema () {
        return relatorioEstoqueMovimentacoesSchema;
    },
    get relatorioGeralRequerimentosSchema () {
        return relatorioGeralRequerimentosSchema;
    }
});
const _zod = require("zod");
const _client = require("../../../../generated/prisma/client");
const relatorioGeralRequerimentosSchema = _zod.z.object({
    dataInicial: _zod.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    dataFinal: _zod.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    base: _zod.z.string().trim().min(1).optional(),
    ambulanciaId: _zod.z.string().trim().min(1).optional(),
    tipo: _zod.z.enum([
        'Almoxarifado',
        'Farmacia',
        'CME'
    ]).optional()
}).refine(({ dataInicial, dataFinal })=>!dataInicial || !dataFinal || dataInicial <= dataFinal, {
    message: 'A data inicial deve ser menor ou igual à data final.'
});
const relatorioEstoqueMovimentacoesSchema = _zod.z.object({
    baseId: _zod.z.uuid(),
    page: _zod.z.coerce.number().int().positive().default(1),
    limit: _zod.z.coerce.number().int().positive().max(100).default(20),
    dataInicial: _zod.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    dataFinal: _zod.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    tipo: _zod.z.enum(_client.TipoMovimentacaoEstoque).optional(),
    itemTipo: _zod.z.enum([
        'produto',
        'medicamento'
    ]).optional(),
    search: _zod.z.string().trim().max(100).optional(),
    validade: _zod.z.enum([
        'SemValidade',
        'Regular',
        'Atencao',
        'Alerta',
        'Vencido'
    ]).optional()
}).refine(({ dataInicial, dataFinal })=>!dataInicial || !dataFinal || dataInicial <= dataFinal, {
    message: 'A data inicial deve ser menor ou igual à data final.'
});

//# sourceMappingURL=relatorios.schema.js.map