export const normalizeEnum = (val: unknown) => {
  if (typeof val !== 'string') return val;

  return val
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .trim()
    .replace(/\s+/g, '_');
};
