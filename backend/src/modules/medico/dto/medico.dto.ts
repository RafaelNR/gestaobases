import { createZodDto } from '@anatine/zod-nestjs';
import { CreateMedicoSchema, UpdateMedicoSchema } from '../validation/medico.schema';

export class CreateMedicoRequestDto extends createZodDto(CreateMedicoSchema) {}
export class UpdateMedicoRequestDto extends createZodDto(UpdateMedicoSchema) {}
