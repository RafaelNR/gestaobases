import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const CreateMedicamentoSchema = extendApi(
  z.object({
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: z
      .number({ error: 'Código é requerido' })
      .int('Código deve ser um inteiro.')
      .min(0, 'Código deve ser maior que 0')
      .max(99999, 'Código deve ser menor que 99999'),
    especificacao: z
      .string({ error: 'Especificação é requerida' })
      .min(2, 'Especificação deve conter pelo menos 2 caracteres.'),
    categoria: z.string({ error: 'Categoria é requerida.' }),
    descricao: z.string().optional().nullable(),
  }),
  {
    title: 'Request create medicamento',
    description: 'Um Medicamento',
  }
);

export const UpdateMedicamentoSchema = extendApi(
  z.object({
    id: z.string({ error: 'Id do medicamento é requerido.' }),
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: z
      .number({ error: 'Código é requerido' })
      .int('Código deve ser um inteiro.')
      .min(0, 'Código deve ser maior que 0')
      .max(99999, 'Código deve ser menor que 99999'),
    especificacao: z
      .string({ error: 'Especificação é requerida' })
      .min(2, 'Especificação deve conter pelo menos 2 caracteres.'),
    categoria: z.string({ error: 'Categoria é requerida.' }),
    descricao: z.string().optional().nullable(),
    active: z.boolean().optional(),
  }),
  {
    title: 'Request update medicamento',
    description: 'Um Medicamento',
  }
);
