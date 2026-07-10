import { extendApi } from '@anatine/zod-openapi';
import { TipoLog } from '@generated/prisma/client';
import z from 'zod';

export const logCreateSchema = extendApi(
  z.object({
    modulo: z
      .string({ error: 'Nome do modulo é requerido.' })
      .min(3)
      .max(190),
    moduloId: z.number({ error: 'Id do modulo é requerido.' }),
    tipo: z.nativeEnum(TipoLog),
    mensagem: z.string({ error: 'Mensagem é requerido.' }).min(3),
    userUUID: z
      .string({ error: 'Usuário é requerido.' })
      .min(3)
      .max(190),
  })
);
