import { z } from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';

export const PaginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1).optional(),
  limit: z.coerce.number().int().positive().max(200).default(20).optional(),
});

export class PaginationDto extends createZodDto(PaginationSchema) {}

/**
 * Calcula skip e take a partir dos parâmetros de paginação.
 */
export function paginate(pagination?: { page?: number; limit?: number }) {
  const page = pagination?.page || 1;
  const limit = pagination?.limit || 20;
  return {
    skip: (page - 1) * limit,
    take: limit,
  };
}
