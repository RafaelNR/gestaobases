import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const CreateCategoriaProdutoSchema = extendApi(
  z.object({
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
  }),
  {
    title: 'Request create categoria produto',
    description: 'Uma Categoria de Produto',
  }
);

export const UpdateCategoriaProdutoSchema = extendApi(
  z.object({
    id: z.string({ error: 'Id da categoria é requerido.' }),
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
  }),
  {
    title: 'Request update categoria produto',
    description: 'Uma Categoria de Produto',
  }
);
