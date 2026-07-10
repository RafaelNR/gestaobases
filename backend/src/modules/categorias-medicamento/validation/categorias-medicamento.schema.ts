import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const CreateCategoriasMedicamentoSchema = extendApi(
  z.object({
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
  }),
  {
    title: 'Request create categoria medicamento',
    description: 'Uma Categoria de Medicamento',
  }
);

export const UpdateCategoriasMedicamentoSchema = extendApi(
  z.object({
    id: z.string({ error: 'Id da categoria é requerido.' }),
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    active: z.boolean().optional(),
  }),
  {
    title: 'Request update categoria medicamento',
    description: 'Uma Categoria de Medicamento',
  }
);
