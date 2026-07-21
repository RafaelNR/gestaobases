import { createZodDto } from '@anatine/zod-nestjs';
import { relatorioEstoqueMovimentacoesSchema } from '../validation/relatorios.schema';

export class RelatorioEstoqueMovimentacoesQueryDto extends createZodDto(
  relatorioEstoqueMovimentacoesSchema
) {}
