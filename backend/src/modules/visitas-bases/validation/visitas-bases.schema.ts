import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const CreateVisitaBaseSchema = extendApi(
  z
    .object({
      data: z.coerce.date('Data é requerida'),
      base: z.string().optional().nullable(),
      outro_motivo: z.string().optional().nullable(),
      descricao: z.string().optional().nullable(),
    })
    .superRefine(({ base, outro_motivo }, ctx) => {
      if (!base && !outro_motivo) {
        ctx.addIssue({
          code: 'custom',
          message: 'Deve informar uma base ou um outro motivo.',
          path: ['base'],
        });
        return;
      }

      if (base && outro_motivo) {
        ctx.addIssue({
          code: 'custom',
          message: 'Não pode informar uma base e um outro motivo.',
          path: ['base'],
        });
        return;
      }
    }),
  { title: 'Create Visita Base' }
);

export const UpdateVisitaBaseSchema = extendApi(
  z
    .object({
      data: z.coerce.date('Data é requerida'),
      base: z.string().optional().nullable(),
      outro_motivo: z.string().optional().nullable(),
      descricao: z.string().optional().nullable(),
    })
    .superRefine(({ base, outro_motivo }, ctx) => {
      if (!base && !outro_motivo) {
        ctx.addIssue({
          code: 'custom',
          message: 'Deve informar uma base ou um outro motivo.',
          path: ['base'],
        });
        return;
      }

      if (base && outro_motivo) {
        ctx.addIssue({
          code: 'custom',
          message: 'Não pode informar uma base e um outro motivo.',
          path: ['base'],
        });
        return;
      }
    }),
  { title: 'Update Visita Base' }
);
