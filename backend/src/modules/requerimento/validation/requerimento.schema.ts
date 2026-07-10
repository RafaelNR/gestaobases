import { Status, TipoRequerimento } from '@/generated/prisma/enums';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

const ItemSchema = z.object({
  id: z.string().optional(),
  produtoId: z.string().optional(),
  medicamentoId: z.string().optional(),
  quantidade: z
    .number({ error: 'Quantidade é requerida.' })
    .int()
    .positive('Quantidade deve ser positiva.'),
});

const ItemFarmaciaSchema = z
  .object({
    ocorrencia: z.string({ error: 'Ocorrência é obrigatória.' }),
  })
  .extend(ItemSchema.shape);

export const CreateRequerimentoAlmoxarifadoAndCMESchema = extendApi(
  z.object({
    tipo: z.enum(TipoRequerimento, {
      error: 'Tipo inválido.',
    }),
    setor: z.string({ error: 'Setor é requerido.' }),
    base: z.string({ error: 'Base é requerida.' }),
    status: z.enum([Status.Rascunho, Status.Recebido], {
      error: 'Status inválido.',
    }),
    obs: z.string().optional(),
    itens: z
      .array(ItemSchema)
      .min(1, 'O requerimento deve conter pelo menos 1 item')
      .max(1000, 'O requerimento deve conter no máximo 1000 itens'),
  }),
  { title: 'Criar Requerimento Almoxarifado/CME' }
);

export const CreateRequerimentoFarmaciaSchema = extendApi(
  z.object({
    tipo: z.enum(TipoRequerimento, {
      error: 'Tipo inválido.',
    }),
    setor: z.string({ error: 'Setor é requerido.' }),
    base: z.string({ error: 'Base é requerida.' }),
    ambulanciaId: z.string({ error: 'Ambulancia é requerida.' }),
    obs: z.string().optional(),
    status: z.enum([Status.Rascunho, Status.Recebido], {
      error: 'Status inválido.',
    }),
    itens: z
      .array(ItemFarmaciaSchema)
      .min(1, 'O requerimento deve conter pelo menos 1 item')
      .max(1000, 'O requerimento deve conter no máximo 1000 itens'),
  }),
  { title: 'Criar Requerimento Farmácia' }
);

export const UpdateRequerimentoAlmoxarifadoAndCMESchema = extendApi(
  z.object({
    setor: z.string().optional(),
    base: z.string().optional(),
    obs: z.string().optional(),
    itens: z
      .array(ItemSchema)
      .min(1, 'O requerimento deve conter pelo menos 1 item')
      .max(1000, 'O requerimento deve conter no máximo 1000 itens')
      .optional(),
  }),
  { title: 'Atualizar Requerimento Almoxarifado/CME' }
);

export const UpdateRequerimentoFarmaciaSchema = extendApi(
  z.object({
    setor: z.string().optional(),
    base: z.string().optional(),
    ambulanciaId: z.string({ error: 'Ambulancia é requerida.' }).optional(),
    obs: z.string().optional(),
    itens: z
      .array(ItemFarmaciaSchema)
      .min(1, 'O requerimento deve conter pelo menos 1 item')
      .max(1000, 'O requerimento deve conter no máximo 1000 itens')
      .optional(),
  }),
  { title: 'Atualizar Requerimento Farmácia' }
);

export const AddItemSchema = extendApi(
  z.object({
    produtoId: z.string().optional(),
    medicamentoId: z.string().optional(),
    quantidade: z
      .number({ error: 'Quantidade é requerida.' })
      .int()
      .positive('Quantidade deve ser positiva.'),
    ocorrencia: z.string().optional(),
  }),
  { title: 'Adicionar Item ao Requerimento' }
);

export const UpdateItemSchema = extendApi(
  z.object({
    quantidade: z.number().int().positive('Quantidade deve ser positiva.'),
    ocorrencia: z.string().nullable().optional(),
  }),
  { title: 'Atualizar Item do Requerimento' }
);

export const ChangeStatusSchema = extendApi(
  z.object({
    status: z.enum(
      ['Recebido', 'Analise', 'Separacao', 'Finalizado', 'Cancelado'],
      { error: 'Status inválido.' }
    ),
  }),
  { title: 'Alterar Status do Requerimento' }
);
