import { createZodDto } from '@anatine/zod-nestjs';
import {
  CreateProdutoSchema,
  UpdateProdutoSchema,
} from '../validation/produto.schema';

export class CreateProdutoRequestDto extends createZodDto(
  CreateProdutoSchema
) {}
export class UpdateProdutoRequestDto extends createZodDto(
  UpdateProdutoSchema
) {}
