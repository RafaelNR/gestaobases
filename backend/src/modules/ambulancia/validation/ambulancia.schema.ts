import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const CreateAmbulanciaSchema = extendApi(
  z.object({
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo: z.enum(['USA', 'USB'], { error: 'Tipo deve ser USA ou USB.' }),
    baseId: z.string({ error: 'Base é requerida.' }),
  }),
  {
    title: 'Request create ambulancia',
    description: 'Uma Ambulancia',
  }
);

export const UpdateAmbulanciaSchema = extendApi(
  z.object({
    id: z.string({ error: 'Id da ambulância é requerido.' }),
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    tipo: z.enum(['USA', 'USB'], { error: 'Tipo deve ser USA ou USB.' }),
    baseId: z.string({ error: 'Base é requerida.' }),
  }),
  {
    title: 'Request update ambulancia',
    description: 'Uma Ambulancia',
  }
);
