import { createZodDto } from '@anatine/zod-nestjs';
import { CreateBaseSchema, UpdateBaseSchema } from '../validation/base.schema';

export class CreateBaseRequestDto extends createZodDto(CreateBaseSchema) {}
export class UpdateBaseRequestDto extends createZodDto(UpdateBaseSchema) {}
