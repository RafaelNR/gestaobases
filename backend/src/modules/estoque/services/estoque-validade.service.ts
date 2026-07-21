export enum StatusValidadeEstoque {
  SemValidade = 'SemValidade',
  Regular = 'Regular',
  Atencao = 'Atencao',
  Alerta = 'Alerta',
  Vencido = 'Vencido',
}

const MS_POR_DIA = 86_400_000;

function inicioDiaUtc(data: Date): number {
  return Date.UTC(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate());
}

export function buildChaveLote(lote?: string | null, validade?: Date | null): string {
  const loteNormalizado = lote?.trim().replace(/\s+/g, ' ').toUpperCase() || 'SEM_LOTE';

  if (!lote && !validade) return 'SEM_LOTE';

  const validadeNormalizada = validade
    ? validade.toISOString().slice(0, 10)
    : 'SEM_VALIDADE';

  return `LOTE:${loteNormalizado}|VALIDADE:${validadeNormalizada}`;
}

export function classificarValidade(validade: Date | null, hoje = new Date()) {
  if (!validade) {
    return { status: StatusValidadeEstoque.SemValidade, diasParaVencer: null };
  }

  const diasParaVencer = Math.round(
    (inicioDiaUtc(validade) - inicioDiaUtc(hoje)) / MS_POR_DIA
  );

  const status =
    diasParaVencer < 0
      ? StatusValidadeEstoque.Vencido
      : diasParaVencer <= 7
        ? StatusValidadeEstoque.Alerta
        : diasParaVencer <= 15
          ? StatusValidadeEstoque.Atencao
          : StatusValidadeEstoque.Regular;

  return { status, diasParaVencer };
}
