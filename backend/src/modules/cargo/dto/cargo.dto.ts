import { createZodDto } from '@anatine/zod-nestjs';
import {
  CreateCargoSchema,
  UpdateCargoSchema,
} from '../validation/cargo.schema';

export class CreateCargoRequestDto extends createZodDto(CreateCargoSchema) {}
export class UpdateCargoRequestDto extends createZodDto(UpdateCargoSchema) {}
