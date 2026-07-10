import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const CreateProdutoSchema = extendApi(
  z.object({
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: z
      .number({ error: 'Código é requerido' })
      .int('Código deve ser um número inteiro.')
      .positive('Código deve ser maior que 0.'),
    unidade: z.enum(['Unidade', 'Pacote', 'Kit', 'Caixa'], {
      error: 'Unidade deve ser Unidade, Pacote, Kit ou Caixa.',
    }),
    categoria: z.string({ error: 'Categoria é requerida.' }),
    usa: z.boolean().default(false),
    cme: z.boolean().default(false),
    fora_alx: z.boolean().default(false),
    ordem: z
      .number({ error: 'Ordem é requerida.' })
      .int('Ordem deve ser um número inteiro.')
      .min(0, 'Ordem deve ser maior ou igual a 0.'),
    descricao: z.string().max(500).optional().or(z.literal('')).nullable(),
    active: z.boolean().default(true),
  }),
  {
    title: 'Request create produto',
    description: 'Um Produto',
  }
);

export const UpdateProdutoSchema = extendApi(
  z.object({
    id: z.string({ error: 'Id do produto é requerido.' }),
    nome: z
      .string({ error: 'Nome é requerido' })
      .min(2, 'Nome deve conter pelo menos 2 caracteres.')
      .max(190, 'Nome deve conter no máximo 190 caracteres.'),
    codigo: z
      .number({ error: 'Código é requerido' })
      .int('Código deve ser um número inteiro.')
      .positive('Código deve ser maior que 0.'),
    unidade: z.enum(['Unidade', 'Pacote', 'Kit', 'Caixa'], {
      error: 'Unidade deve ser Unidade, Pacote, Kit ou Caixa.',
    }),
    categoria: z.string({ error: 'Categoria é requerida.' }),
    usa: z.boolean().default(false),
    cme: z.boolean().default(false),
    fora_alx: z.boolean().default(false),
    ordem: z
      .number({ error: 'Ordem é requerida.' })
      .int('Ordem deve ser um número inteiro.')
      .min(0, 'Ordem deve ser maior ou igual a 0.'),
    descricao: z.string().max(500).optional().or(z.literal('')).nullable(),
    active: z.boolean().default(true),
  }),
  {
    title: 'Request update produto',
    description: 'Um Produto',
  }
);
