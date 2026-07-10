import argon2 from 'argon2';

const ARGON2_OPTIONS: argon2.Options = {
  type: argon2.argon2id,
  memoryCost: 65536, // 64 MB
  timeCost: 3,
  parallelism: 2,
};

export async function hashPassword(plain: string): Promise<string> {
  return argon2.hash(plain, ARGON2_OPTIONS);
}

export async function verifyPassword(
  hash: string,
  plain: string
): Promise<boolean> {
  try {
    return await argon2.verify(hash, plain, ARGON2_OPTIONS);
  } catch {
    return false;
  }
}

// Hash leve para refresh/reset tokens (não precisa ser tão custoso quanto senha)
export async function hashToken(token: string): Promise<string> {
  return argon2.hash(token, {
    ...ARGON2_OPTIONS,
    memoryCost: 4096,
    timeCost: 1,
  });
}

export async function verifyToken(
  hash: string,
  token: string
): Promise<boolean> {
  try {
    return await argon2.verify(hash, token);
  } catch {
    return false;
  }
}
