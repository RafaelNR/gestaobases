import { assertCondition } from './assert';

export const normalizeEnum = (val: unknown) => {
  if (typeof val !== 'string') return val;

  return val
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .trim()
    .replace(/\s+/g, '_');
};

export const normalizeText = (value?: string): string | undefined => {
  const normalized = value?.trim();
  return normalized || undefined;
};

export const normalizeNumero = (
  value?: number | string
): number | undefined => {
  if (value === undefined || value === null || value === '') return undefined;

  const numero = Number(value);
  assertCondition(
    Number.isInteger(numero) && numero > 0,
    'Número do requerimento inválido.'
  );
  return numero;
};

export const normalizeDate = (
  value: Date | string | undefined,
  endOfDay = false
): Date | undefined => {
  if (!value) return undefined;

  const date =
    value instanceof Date
      ? new Date(value)
      : new Date(`${value.slice(0, 10)}T00:00:00.000Z`);

  assertCondition(!Number.isNaN(date.getTime()), 'Data inválida.');

  if (endOfDay) {
    date.setUTCHours(23, 59, 59, 999);
  }

  return date;
};
