import { z } from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';

export const RequestResetSchema = extendApi(
  z.object({ username: z.string("O campo 'username' é obrigatório") }),
  { title: 'RequestResetDto', description: 'Solicitar reset de senha' }
);

export class RequestResetDto extends createZodDto(RequestResetSchema) {}
