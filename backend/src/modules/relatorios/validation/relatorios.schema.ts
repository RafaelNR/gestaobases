import { z } from 'zod';
import { TipoMovimentacaoEstoque } from '@generated/prisma/client';

export const relatorioGeralRequerimentosSchema = z
  .object({
    dataInicial: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
    dataFinal: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
    base: z.string().trim().min(1).optional(),
    ambulanciaId: z.string().trim().min(1).optional(),
    tipo: z.enum(['Almoxarifado', 'Farmacia', 'CME']).optional(),
  })
  .refine(
    ({ dataInicial, dataFinal }) =>
      !dataInicial || !dataFinal || dataInicial <= dataFinal,
    { message: 'A data inicial deve ser menor ou igual à data final.' }
  );

export const relatorioEstoqueMovimentacoesSchema = z
  .object({
    baseId: z.uuid(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(20),
    dataInicial: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    dataFinal: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    tipo: z.enum(TipoMovimentacaoEstoque).optional(),
    itemTipo: z.enum(['produto', 'medicamento']).optional(),
    search: z.string().trim().max(100).optional(),
    validade: z
      .enum(['SemValidade', 'Regular', 'Atencao', 'Alerta', 'Vencido'])
      .optional(),
  })
  .refine(
    ({ dataInicial, dataFinal }) =>
      !dataInicial || !dataFinal || dataInicial <= dataFinal,
    { message: 'A data inicial deve ser menor ou igual à data final.' }
  );
