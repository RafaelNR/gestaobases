import { z } from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';

export const LoginCredentialsSchema = extendApi(
  z.object({
    username: z
      .string("O campo 'username' é obrigatório.")
      .min(1, "O campo 'username' é obrigatório."),
    password: z
      .string("O campo 'password' é obrigatório.")
      .min(1, "O campo 'password' é obrigatório."),
  }),
  { title: 'LoginCredentialsDto', description: 'Credenciais de login' }
);

export class LoginCredentialsDto extends createZodDto(LoginCredentialsSchema) {}
