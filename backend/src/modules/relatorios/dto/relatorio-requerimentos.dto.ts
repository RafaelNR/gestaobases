import { createZodDto } from '@anatine/zod-nestjs';
import { relatorioGeralRequerimentosSchema } from '../validation/relatorios.schema';

export class RelatorioGeralRequerimentosQueryDto extends createZodDto(
  relatorioGeralRequerimentosSchema
) {}
