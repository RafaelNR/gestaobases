import { createZodDto } from '@anatine/zod-nestjs';
import {
  BloquearLoteSchema,
  CreateEstoqueSchema,
  CreateLoteSchema,
  EstoqueQuerySchema,
  MovimentarEstoqueSchema,
} from '../validation/estoque.schema';

export class CreateEstoqueDto extends createZodDto(CreateEstoqueSchema) {}
export class CreateLoteDto extends createZodDto(CreateLoteSchema) {}
export class MovimentarEstoqueDto extends createZodDto(MovimentarEstoqueSchema) {}
export class BloquearLoteDto extends createZodDto(BloquearLoteSchema) {}
export class EstoqueQueryDto extends createZodDto(EstoqueQuerySchema) {}
