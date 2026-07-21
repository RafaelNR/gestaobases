import { describe, expect, it } from '@jest/globals';

import {
  StatusValidadeEstoque,
  buildChaveLote,
  classificarValidade,
} from '../services/estoque-validade.service';

describe('estoque-validade', () => {
  const hoje = new Date('2026-07-12T12:00:00.000Z');

  it.each([
    [null, StatusValidadeEstoque.SemValidade],
    ['2026-07-28', StatusValidadeEstoque.Regular],
    ['2026-07-27', StatusValidadeEstoque.Atencao],
    ['2026-07-20', StatusValidadeEstoque.Atencao],
    ['2026-07-19', StatusValidadeEstoque.Alerta],
    ['2026-07-12', StatusValidadeEstoque.Alerta],
    ['2026-07-11', StatusValidadeEstoque.Vencido],
  ])('classifica validade %s como %s', (validade, status) => {
    expect(
      classificarValidade(validade ? new Date(`${validade}T12:00:00.000Z`) : null, hoje)
        .status
    ).toBe(status);
  });

  it('usa chave fixa para saldo sem lote e validade', () => {
    expect(buildChaveLote()).toBe('SEM_LOTE');
  });

  it('normaliza lote e validade na chave', () => {
    expect(buildChaveLote(' ab  123 ', new Date('2026-08-05T12:00:00Z'))).toBe(
      'LOTE:AB 123|VALIDADE:2026-08-05'
    );
  });
});
