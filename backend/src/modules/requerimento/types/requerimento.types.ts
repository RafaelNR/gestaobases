import { Prisma } from '@generated/prisma/client';

export const REQUERIMENTO_ITEM_INCLUDE = {
  Produto: {
    select: {
      id: true,
      nome: true,
      codigo: true,
      unidade: true,
      categoria: true,
      ordem: true,
      fora_alx: true,
    },
  },
  Medicamento: {
    select: {
      id: true,
      nome: true,
      codigo: true,
      categoria: true,
      especificacao: true,
    },
  },
  DeletedBy: { select: { nome: true, username: true } },
} as const;

export type RequerimentoItemResult = Prisma.RequerimentoItemGetPayload<{
  include: typeof REQUERIMENTO_ITEM_INCLUDE;
}>;

export type RequerimentoResult = Prisma.RequerimentoGetPayload<{
  include: {
    RequerimentoItems: {
      include: typeof REQUERIMENTO_ITEM_INCLUDE;
    };
    RequerimentoStatus: true;
    Ambulancia: { select: { id: true; nome: true; tipo: true } };
  };
}>;
