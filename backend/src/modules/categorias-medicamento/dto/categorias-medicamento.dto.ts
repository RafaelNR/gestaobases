import { createZodDto } from '@anatine/zod-nestjs';
import {
  CreateCategoriasMedicamentoSchema,
  UpdateCategoriasMedicamentoSchema,
} from '../validation/categorias-medicamento.schema';

export class CreateCategoriasMedicamentoRequestDto extends createZodDto(
  CreateCategoriasMedicamentoSchema
) {}
export class UpdateCategoriasMedicamentoRequestDto extends createZodDto(
  UpdateCategoriasMedicamentoSchema
) {}
