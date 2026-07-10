import { createZodDto } from '@anatine/zod-nestjs';
import { CreateVisitaBaseSchema, UpdateVisitaBaseSchema } from '../validation/visitas-bases.schema';

export class CreateVisitaBaseRequestDto extends createZodDto(CreateVisitaBaseSchema) {}
export class UpdateVisitaBaseRequestDto extends createZodDto(UpdateVisitaBaseSchema) {}
