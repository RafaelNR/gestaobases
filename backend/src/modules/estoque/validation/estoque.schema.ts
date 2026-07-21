import { TipoMovimentacaoEstoque } from '@generated/prisma/enums';
import { z } from 'zod';

const uuid = z.uuid();

export const CreateEstoqueSchema = z
  .object({
    baseId: uuid,
    produtoId: uuid.optional(),
    medicamentoId: uuid.optional(),
    quantidadeMinima: z.int().nonnegative().default(0),
  })
  .refine((data) => !data.produtoId || !data.medicamentoId, {
    message: 'Informe somente um item por estoque, produto ou medicamento.',
  });

export const CreateLoteSchema = z.object({
  estoqueId: uuid,
  lote: z.string().trim().min(1).max(191).optional().nullable(),
  validade: z.coerce.date().optional().nullable(),
  quantidade: z.preprocess(
    (value) => Number(value),
    z.number('Quantidade inválida').min(1, 'Quantidade deve ser maior que 0')
  ),
});

export const MovimentarEstoqueSchema = z
  .object({
    tipo: z.enum(TipoMovimentacaoEstoque),
    quantidade: z.int().positive(),
    observacao: z.string().trim().max(500).optional(),
  })
  .superRefine((data, ctx) => {
    const tiposSemObservacao: TipoMovimentacaoEstoque[] = [
      TipoMovimentacaoEstoque.Entrada,
      TipoMovimentacaoEstoque.Saida,
      TipoMovimentacaoEstoque.TransferenciaEntrada,
      TipoMovimentacaoEstoque.TransferenciaSaida,
    ];
    const exigeObservacao = !tiposSemObservacao.includes(data.tipo);
    if (exigeObservacao && !data.observacao) {
      ctx.addIssue({
        code: 'custom',
        path: ['observacao'],
        message: 'Observação é obrigatória para esta movimentação.',
      });
    }
  });

export const BloquearLoteSchema = z
  .object({
    bloqueado: z.boolean(),
    motivoBloqueio: z.string().trim().min(3).max(191).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.bloqueado && !data.motivoBloqueio) {
      ctx.addIssue({
        code: 'custom',
        path: ['motivoBloqueio'],
        message: 'Informe o motivo do bloqueio.',
      });
    }
  });

export const EstoqueQuerySchema = z.object({
  baseId: uuid.optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().trim().max(100).optional(),
  tipo: z.enum(['produto', 'medicamento']).optional(),
  status: z
    .enum(['SemValidade', 'Regular', 'Atencao', 'Alerta', 'Vencido'])
    .optional(),
});
