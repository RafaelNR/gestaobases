import { createZodDto } from '@anatine/zod-nestjs';
import {
  CreateAmbulanciaSchema,
  UpdateAmbulanciaSchema,
} from '../validation/ambulancia.schema';

export class CreateAmbulanciaRequestDto extends createZodDto(
  CreateAmbulanciaSchema
) {}
export class UpdateAmbulanciaRequestDto extends createZodDto(
  UpdateAmbulanciaSchema
) {}
