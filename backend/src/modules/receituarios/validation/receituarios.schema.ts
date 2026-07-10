import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

const MedicamentoItemSchema = z.object({
  medicamento: z.string({ error: 'Medicamento é requerido.' }),
  qnt: z.number({ error: 'Quantidade é requerida.' }).int().positive(),
  unidade: z.enum(['ampolas', 'ml'], { error: 'Unidade inválida.' }),
  administracao: z.enum(['EV', 'IM', 'SC', 'IN', 'IR', 'IO'], {
    error: 'Via de administração inválida.',
  }),
  diluente: z.enum(['agua_destilada', 'nacl09']).optional(),
  qnt_diluente: z.number().int().optional(),
  qnt_tempo: z.number().int().optional(),
  obs: z.string().optional(),
});

export const CreateReceituarioSchema = extendApi(
  z.object({
    data: z.string({ error: 'Data é requerida.' }),
    data_ocorrencia: z.string({ error: 'Data da ocorrência é requerida.' }),
    ocorrencia: z.number({ error: 'Número da ocorrência é requerido.' }).int(),
    medicoId: z.string({ error: 'Médico é requerido.' }),
    base: z.string({ error: 'Base é requerida.' }),
    ambulancia: z.string({ error: 'Ambulância é requerida.' }),
    requerimento: z.string().optional(),
    obs: z.string().optional(),
    medicamentos: z.array(MedicamentoItemSchema).optional().default([]),
  }),
  { title: 'Create Receituario' }
);

export const UpdateReceituarioSchema = extendApi(
  z.object({
    data: z.string().optional(),
    data_ocorrencia: z.string().optional(),
    ocorrencia: z.number().int().optional(),
    medicoId: z.string().optional(),
    base: z.string().optional(),
    ambulancia: z.string().optional(),
    requerimento: z.string().optional(),
    obs: z.string().optional(),
  }),
  { title: 'Update Receituario' }
);

export const AddMedicamentoSchema = extendApi(MedicamentoItemSchema, {
  title: 'Add Medicamento ao Receituario',
});

export const UpdateMedicamentoSchema = extendApi(
  z.object({
    qnt: z.number().int().positive().optional(),
    unidade: z.enum(['ampolas', 'ml']).optional(),
    administracao: z.enum(['EV', 'IM', 'SC', 'IN', 'IR', 'IO']).optional(),
    diluente: z.enum(['agua_destilada', 'nacl09']).optional(),
    qnt_diluente: z.number().int().optional(),
    qnt_tempo: z.number().int().optional(),
    obs: z.string().optional(),
  }),
  { title: 'Update Medicamento do Receituario' }
);

export const ChangeStatusReceituarioSchema = extendApi(
  z.object({
    status: z.enum(['Aberto', 'Finalizado', 'Cancelado'], {
      error: 'Status inválido.',
    }),
  }),
  { title: 'Alterar Status do Receituario' }
);
