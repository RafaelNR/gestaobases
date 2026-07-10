import { createZodDto } from '@anatine/zod-nestjs';
import {
  AddItemSchema,
  UpdateItemSchema,
  ChangeStatusSchema,
  CreateRequerimentoAlmoxarifadoAndCMESchema,
  CreateRequerimentoFarmaciaSchema,
  UpdateRequerimentoAlmoxarifadoAndCMESchema,
  UpdateRequerimentoFarmaciaSchema,
} from '../validation/requerimento.schema';

export class CreateRequerimentoAlmoxarifadoAndCMERequestDto extends createZodDto(
  CreateRequerimentoAlmoxarifadoAndCMESchema
) {}
export class CreateRequerimentoFarmaciaRequestDto extends createZodDto(
  CreateRequerimentoFarmaciaSchema
) {}
export class UpdateRequerimentoAlmoxarifadoAndCMERequestDto extends createZodDto(
  UpdateRequerimentoAlmoxarifadoAndCMESchema
) {}
export class UpdateRequerimentoFarmaciaRequestDto extends createZodDto(
  UpdateRequerimentoFarmaciaSchema
) {}
export class AddItemRequestDto extends createZodDto(AddItemSchema) {}
export class UpdateItemRequestDto extends createZodDto(UpdateItemSchema) {}
export class ChangeStatusRequestDto extends createZodDto(ChangeStatusSchema) {}
