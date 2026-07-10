import { Prisma } from '@generated/prisma/client';

export const RECEITUARIO_INCLUDE = {
  ReceituarioMedicamentos: {
    include: {
      Medicamento: {
        select: { id: true, nome: true, codigo: true, especificacao: true },
      },
    },
    orderBy: { created_at: 'asc' as const },
  },
  Medico: { select: { nome: true, crm: true } },
  Base: { select: { id: true, nome: true } },
  Ambulancia: { select: { id: true, nome: true, tipo: true } },
} as const;

export type ReceituarioResult = Prisma.ReceituarioGetPayload<{
  include: typeof RECEITUARIO_INCLUDE;
}>;

export const RECEITUARIO_MEDICAMENTO_INCLUDE = {
  Medicamento: {
    select: { id: true, nome: true, codigo: true, especificacao: true },
  },
} as const;

export type ReceituarioMedicamentoResult =
  Prisma.ReceituarioMedicamentosGetPayload<{
    include: typeof RECEITUARIO_MEDICAMENTO_INCLUDE;
  }>;
