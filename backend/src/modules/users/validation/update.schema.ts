import { extendApi } from '@anatine/zod-openapi';

import { z } from 'zod';

export const UpdateUserRequestSchema = extendApi(
  z.object({
    id: z.uuid('Id do usuário é requerido.'),
    username: z
      .string({
        error: 'Nome de usuário é requerido',
      })
      .min(5, 'Nome de usuário deve conter pelo menos 5 caracteres.')
      .max(190, 'Nome de usuário deve conter no max. 190 caracteres.'),
    nome: z
      .string({
        error: 'Nome é requerido',
      })
      .min(5, 'Nome deve conter pelo menos 5 caracteres.')
      .max(190, 'Nome deve conter no max. 190 caracteres.'),
    email: z.email().optional().nullable(),
    telefone: z.preprocess(
      (val) => (val === '' ? null : val),
      z
        .string()
        .min(14, 'Telefone deve conter no mínimo 14 caracteres')
        .max(15, 'Telefone deve conter no máximo 15 caracteres')
        .nullable()
        .optional()
    ),
    baseId: z.uuid('Base é requerida'),
    cargoId: z.uuid('Cargo é requerido.'),
    setorId: z.uuid('Setor é requerido.'),
    password: z
      .string({
        error: 'Senha é requerida',
      })
      .min(8, 'Password deve conter pelo menos 8 caracteres.')
      .max(32, 'Password deve ter no máximo 32 caracteres.'),
    active: z.boolean().default(true),
  }),
  {
    title: 'Request update user',
    description: 'A User',
  }
);

export const UpdatePerfilRequestSchema = extendApi(
  z.object({
    id: z.string('Id do usuário é requerido.'),
    nome: z
      .string({
        error: 'Nome é requerido',
      })
      .min(5, 'Nome deve conter pelo menos 5 caracteres.')
      .max(190, 'Nome deve conter no max. 190 caracteres.'),
    email: z.email().optional(),
    telefone: z.preprocess(
      (val) => (val === '' ? null : val),
      z
        .string()
        .min(14, 'Telefone deve conter no mínimo 14 caracteres')
        .max(15, 'Telefone deve conter no máximo 15 caracteres')
        .nullable()
        .optional()
    ),
    password: z
      .string({
        error: 'Senha é requerida',
      })
      .min(8, 'Password deve conter pelo menos 8 caracteres.')
      .max(32, 'Password deve ter no máximo 32 caracteres.'),
  }),
  {
    title: 'Request update perfil user',
    description: 'A User',
  }
);
