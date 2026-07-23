import { extendApi } from '@anatine/zod-openapi';
import { TypeCargo, TypeSetor } from '@src/infra/guard/roles.decorator';
import { z } from 'zod';

export const CreateUserRequestSchema = extendApi(
  z.object({
    username: z
      .string({
        error: 'Nome de usuário é requerido',
      })
      .min(3, 'Nome de usuário deve conter pelo menos 3 caracteres.')
      .max(190, 'Nome de usuário deve conter no max. 190 caracteres.'),
    nome: z
      .string({
        error: 'Nome é requerido',
      })
      .min(3, 'Nome deve conter pelo menos 3 caracteres.')
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
    title: 'Request create user',
    description: 'A User',
  }
);
