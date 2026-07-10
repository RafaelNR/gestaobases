import { TipoAmbulancias } from '@/generated/prisma/enums';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const CreateBaseSchema = extendApi(
  z.object({
    nome: z
      .string({
        error: 'Nome é requerido',
      })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo_ambulancias: z.nativeEnum(TipoAmbulancias),
  }),
  {
    title: 'Request create base',
    description: 'A Base',
  }
);

export const UpdateBaseSchema = extendApi(
  z.object({
    id: z.string({ error: 'Id da base é requerido.' }),
    nome: z
      .string({
        error: 'Nome é requerido',
      })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo_ambulancias: z.nativeEnum(TipoAmbulancias),
  }),
  {
    title: 'Request update base',
    description: 'A Base',
  }
);
