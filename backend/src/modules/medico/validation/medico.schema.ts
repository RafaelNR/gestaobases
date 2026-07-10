import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const CreateMedicoSchema = extendApi(
  z.object({
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    crm: z
      .string({ error: 'CRM é requerido.' })
      .min(1, 'CRM é requerido.')
      .max(20, 'CRM deve conter no máximo 20 caracteres.'),
    telefone: z
      .string()
      .max(20, 'Telefone deve conter no máximo 20 caracteres.')
      .optional()
      .nullable(),
    email: z
      .string()
      .email('E-mail inválido.')
      .max(150, 'E-mail deve conter no máximo 150 caracteres.')
      .optional()
      .nullable(),
  }),
  {
    title: 'Request create medico',
    description: 'Um Médico',
  }
);

export const UpdateMedicoSchema = extendApi(
  z.object({
    id: z.string({ error: 'Id do médico é requerido.' }),
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(100, 'Nome deve conter no máximo 100 caracteres.'),
    crm: z
      .string({ error: 'CRM é requerido.' })
      .min(1, 'CRM é requerido.')
      .max(20, 'CRM deve conter no máximo 20 caracteres.'),
    telefone: z
      .string()
      .max(20, 'Telefone deve conter no máximo 20 caracteres.')
      .optional()
      .nullable(),
    email: z
      .string()
      .email('E-mail inválido.')
      .max(150, 'E-mail deve conter no máximo 150 caracteres.')
      .optional()
      .nullable(),
  }),
  {
    title: 'Request update medico',
    description: 'Um Médico',
  }
);
