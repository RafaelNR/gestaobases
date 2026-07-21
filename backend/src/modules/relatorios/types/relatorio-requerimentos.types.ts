import { Status, TipoRequerimento } from '@generated/prisma/client';

export type RelatorioGeralRequerimentosFiltro = {
  dataInicial?: Date;
  dataFinal?: Date;
  base?: string;
  ambulanciaId?: string;
  tipo?: TipoRequerimento;
  status: Status[];
};

export type RelatorioGeralRequerimentosRow = {
  base: string;
  ambulancia: { id: string; nome: string; tipo: string } | null;
  requerimentosMedicamentos: number;
  quantidadeMedicamentos: number;
  requerimentosProdutos: number;
  quantidadeProdutos: number;
};
