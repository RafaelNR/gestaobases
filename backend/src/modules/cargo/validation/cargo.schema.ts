import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

const cargoBaseSchema = z.object({
  nome: z
    .string({
      error: 'Nome é requerido',
    })
    .min(2, 'Nome deve conter pelo menos 2 caracteres.')
    .max(100, 'Nome deve conter no máximo 100 caracteres.'),
  nomeVisivel: z
    .string({
      error: 'Nome visível é requerido',
    })
    .min(2, 'Nome visível deve conter pelo menos 2 caracteres.')
    .max(100, 'Nome visível deve conter no máximo 100 caracteres.'),
  setor: z
    .string({
      error: 'Setor é requerido',
    })
    .min(2, 'Setor deve conter pelo menos 2 caracteres.')
    .max(100, 'Setor deve conter no máximo 100 caracteres.'),
});

export const CreateCargoSchema = extendApi(cargoBaseSchema, {
  title: 'Request create cargo',
  description: 'A Cargo',
});

export const UpdateCargoSchema = extendApi(
  cargoBaseSchema.extend({
    id: z.string({ error: 'Id do cargo é requerido.' }),
  }),
  {
    title: 'Request update cargo',
    description: 'A Cargo',
  }
);
