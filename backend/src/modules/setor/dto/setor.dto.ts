import { createZodDto } from '@anatine/zod-nestjs';
import {
  CreateSetorSchema,
  UpdateSetorSchema,
} from '../validation/setor.schema';

export class CreateSetorRequestDto extends createZodDto(CreateSetorSchema) {}
export class UpdateSetorRequestDto extends createZodDto(UpdateSetorSchema) {}
