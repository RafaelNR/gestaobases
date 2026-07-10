import { createZodDto } from '@anatine/zod-nestjs';
import {
  UpdatePerfilRequestSchema,
  UpdateUserRequestSchema,
} from '../validation/update.schema';
import { CreateUserRequestSchema } from '../validation/create.schema';

export class CreateUserRequestDto extends createZodDto(
  CreateUserRequestSchema
) {}
export class UpdateUserRequestDto extends createZodDto(
  UpdateUserRequestSchema
) {}
export class UpdatePerfilRequestDto extends createZodDto(
  UpdatePerfilRequestSchema
) {}
