import { describe, expect, it } from '@jest/globals';

import { RefreshTokenSchema } from '../dto/refresh-token.dto';

describe('RefreshTokenDto', () => {
  it('aceita body ausente para refresh via cookie httpOnly', () => {
    const result = RefreshTokenSchema.safeParse(undefined);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({});
    }
  });

  it('rejeita refreshToken no body para manter refresh cookie-only', () => {
    const result = RefreshTokenSchema.safeParse({
      refreshToken: 'legacy-refresh-token',
    });

    expect(result.success).toBe(false);
  });
});
