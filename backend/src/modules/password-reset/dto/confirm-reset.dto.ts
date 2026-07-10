import { z } from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';

export const ConfirmResetSchema = extendApi(
  z.object({
    token: z.string().min(1),
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
      .regex(/[0-9]/, 'Deve conter ao menos um número')
      .regex(/[^A-Za-z0-9]/, 'Deve conter ao menos um caractere especial'),
  }),
  { title: 'ConfirmResetDto', description: 'Confirmar reset de senha com token' },
);

export class ConfirmResetDto extends createZodDto(ConfirmResetSchema) {}
