import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const CreateSetorSchema = extendApi(
  z.object({
    nome: z
      .string({
        error: 'Nome é requerido',
      })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    nomeVisivel: z
      .string({
        error: 'Nome é requerido',
      })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
  }),
  {
    title: 'Request create setor',
    description: 'A Setor',
  }
);

export const UpdateSetorSchema = extendApi(
  z.object({
    id: z.string({ error: 'Id do setor é requerido.' }),
    nome: z
      .string({
        error: 'Nome é requerido',
      })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    nomeVisivel: z
      .string({
        error: 'Nome é requerido',
      })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
  }),
  {
    title: 'Request update setor',
    description: 'A Setor',
  }
);
