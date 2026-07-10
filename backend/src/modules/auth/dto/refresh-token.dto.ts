import { z } from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';

export const RefreshTokenSchema = extendApi(
  z.preprocess(
    (value) => (value === undefined ? {} : value),
    z.strictObject({})
  ),
  { title: 'RefreshTokenDto' },
);

export class RefreshTokenDto extends createZodDto(RefreshTokenSchema) {}
