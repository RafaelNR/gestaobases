import { createZodDto } from '@anatine/zod-nestjs';
import {
  AddMedicamentoSchema,
  ChangeStatusReceituarioSchema,
  CreateReceituarioSchema,
  UpdateMedicamentoSchema,
  UpdateReceituarioSchema,
} from '../validation/receituarios.schema';

export class CreateReceituarioRequestDto extends createZodDto(CreateReceituarioSchema) {}
export class UpdateReceituarioRequestDto extends createZodDto(UpdateReceituarioSchema) {}
export class AddMedicamentoRequestDto extends createZodDto(AddMedicamentoSchema) {}
export class UpdateMedicamentoRequestDto extends createZodDto(UpdateMedicamentoSchema) {}
export class ChangeStatusReceituarioRequestDto extends createZodDto(ChangeStatusReceituarioSchema) {}
