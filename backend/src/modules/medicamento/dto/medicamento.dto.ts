import { createZodDto } from '@anatine/zod-nestjs';
import {
  CreateMedicamentoSchema,
  UpdateMedicamentoSchema,
} from '../validation/medicamento.schema';

export class CreateMedicamentoRequestDto extends createZodDto(
  CreateMedicamentoSchema
) {}
export class UpdateMedicamentoRequestDto extends createZodDto(
  UpdateMedicamentoSchema
) {}
