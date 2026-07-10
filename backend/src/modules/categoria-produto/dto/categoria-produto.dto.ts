import { createZodDto } from '@anatine/zod-nestjs';
import {
  CreateCategoriaProdutoSchema,
  UpdateCategoriaProdutoSchema,
} from '../validation/categoria-produto.schema';

export class CreateCategoriaProdutoRequestDto extends createZodDto(
  CreateCategoriaProdutoSchema
) {}
export class UpdateCategoriaProdutoRequestDto extends createZodDto(
  UpdateCategoriaProdutoSchema
) {}
