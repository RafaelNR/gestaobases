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
    get BloquearLoteSchema () {
        return BloquearLoteSchema;
    },
    get CreateEstoqueSchema () {
        return CreateEstoqueSchema;
    },
    get CreateLoteSchema () {
        return CreateLoteSchema;
    },
    get EstoqueQuerySchema () {
        return EstoqueQuerySchema;
    },
    get MovimentarEstoqueSchema () {
        return MovimentarEstoqueSchema;
    }
});
const _enums = require("../../../../generated/prisma/enums");
const _zod = require("zod");
const uuid = _zod.z.uuid();
const CreateEstoqueSchema = _zod.z.object({
    baseId: uuid,
    produtoId: uuid.optional(),
    medicamentoId: uuid.optional(),
    quantidadeMinima: _zod.z.int().nonnegative().default(0)
}).refine((data)=>!data.produtoId || !data.medicamentoId, {
    message: 'Informe somente um item por estoque, produto ou medicamento.'
});
const CreateLoteSchema = _zod.z.object({
    estoqueId: uuid,
    lote: _zod.z.string().trim().min(1).max(191).optional().nullable(),
    validade: _zod.z.coerce.date().optional().nullable(),
    quantidade: _zod.z.preprocess((value)=>Number(value), _zod.z.number('Quantidade inválida').min(1, 'Quantidade deve ser maior que 0'))
});
const MovimentarEstoqueSchema = _zod.z.object({
    tipo: _zod.z.enum(_enums.TipoMovimentacaoEstoque),
    quantidade: _zod.z.int().positive(),
    observacao: _zod.z.string().trim().max(500).optional()
}).superRefine((data, ctx)=>{
    const tiposSemObservacao = [
        _enums.TipoMovimentacaoEstoque.Entrada,
        _enums.TipoMovimentacaoEstoque.Saida,
        _enums.TipoMovimentacaoEstoque.TransferenciaEntrada,
        _enums.TipoMovimentacaoEstoque.TransferenciaSaida
    ];
    const exigeObservacao = !tiposSemObservacao.includes(data.tipo);
    if (exigeObservacao && !data.observacao) {
        ctx.addIssue({
            code: 'custom',
            path: [
                'observacao'
            ],
            message: 'Observação é obrigatória para esta movimentação.'
        });
    }
});
const BloquearLoteSchema = _zod.z.object({
    bloqueado: _zod.z.boolean(),
    motivoBloqueio: _zod.z.string().trim().min(3).max(191).optional()
}).superRefine((data, ctx)=>{
    if (data.bloqueado && !data.motivoBloqueio) {
        ctx.addIssue({
            code: 'custom',
            path: [
                'motivoBloqueio'
            ],
            message: 'Informe o motivo do bloqueio.'
        });
    }
});
const EstoqueQuerySchema = _zod.z.object({
    baseId: uuid.optional(),
    page: _zod.z.coerce.number().int().positive().default(1),
    limit: _zod.z.coerce.number().int().positive().max(100).default(20),
    search: _zod.z.string().trim().max(100).optional(),
    tipo: _zod.z.enum([
        'produto',
        'medicamento'
    ]).optional(),
    status: _zod.z.enum([
        'SemValidade',
        'Regular',
        'Atencao',
        'Alerta',
        'Vencido'
    ]).optional()
});

//# sourceMappingURL=estoque.schema.js.map