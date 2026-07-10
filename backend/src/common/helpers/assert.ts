import { HttpException, HttpStatus } from '@nestjs/common';

// Verifica se o valor é nulo ou undefined e caso seja, lança um erro 404
export const assertFound = <T>(
  value: T | null | undefined,
  message = 'Requerimento não encontrado.'
): T => {
  if (value == null) {
    throw new HttpException(message, HttpStatus.NOT_FOUND);
  }
  return value;
};

// Verifica alguma condicao e caso seja falsa, lança um erro 403
export const assertPermission = (
  condition: boolean,
  message = 'Sem permissão.'
): void => {
  if (!condition) {
    throw new HttpException(message, HttpStatus.FORBIDDEN);
  }
};

// Verifica alguma condicao e caso seja falsa, lança um erro
export const assertCondition = (condition: boolean, message: string): void => {
  if (!condition) {
    throw new HttpException(message, HttpStatus.BAD_REQUEST);
  }
};
