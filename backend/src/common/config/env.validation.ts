import { z } from 'zod';

/**
 * Schema Zod para validação de variáveis de ambiente.
 * Se alguma variável obrigatória estiver ausente, o servidor
 * não inicia e exibe um erro claro indicando o que falta.
 */
export const envSchema = z.object({
  // Server
  PORT_HTTPS: z.string().default('5001'),
  DNS_HTTPS: z.string({ error: 'DNS_HTTPS é obrigatório.' }),
  NODE_ENV: z.enum(['development', 'production', 'DEV']).default('development'),

  // Database
  DB_HOST: z.string({ error: 'DB_HOST é obrigatório.' }),
  DB_PORT: z.string().default('3306'),
  DATABASE_URL: z.string({ error: 'DATABASE_URL é obrigatório.' }),
  MYSQL_USER: z.string({ error: 'MYSQL_USER é obrigatório.' }),
  MYSQL_PASSWORD: z.string({ error: 'MYSQL_PASSWORD é obrigatório.' }),
  MYSQL_DB: z.string({ error: 'MYSQL_DB é obrigatório.' }),

  FRONT_END: z.string({ error: 'FRONT_END é obrigatório.' }),

  // Auth
  JWT_ACCESS_SECRET: z.string({ error: 'JWT_ACCESS_SECRET é obrigatório.' }),
  JWT_EXPIRED_IN: z.string({ error: 'JWT_EXPIRED_IN é obrigatório.' }).default('1d'),
  JWT_REFRESH_SECRET: z.string({ error: 'JWT_REFRESH_SECRET é obrigatório.' }),
  JWT_REFRESH_EXPIRED_IN: z.string({ error: 'JWT_REFRESH_EXPIRED_IN é obrigatório.' }).default('7d'),
  BCRYPT_ROUNDS: z.string({ error: 'BCRYPT_ROUNDS é obrigatório.' }),

  // SSL (opcionais para dev)
  SSL_KEY: z.string({ error: 'SSL_KEY é obrigatório.' }),
  SSL_CERT: z.string({ error: 'SSL_CERT é obrigatório.' }),

  // SMTP
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_TLS: z.string().optional(),
  SMTP_USERNAME: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_BCC: z.string().optional(),
  FROM_EMAIL: z.string().optional(),
  FROM_NAME: z.string().optional(),
  LOGO_CISRU_EMAIL_URL: z.string().optional(),
  LOGO_OISAMU_EMAIL_URL: z.string().optional(),

  // Google OAuth
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GOOGLE_CALLBACK_URL: z.string().optional(),

  // Stripe
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // Pagar.me
  PAGARME_API_KEY: z.string().optional(),
  PAGARME_WEBHOOK_SECRET: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

/**
 * Valida as variáveis de ambiente e retorna os valores tipados.
 * Lança erro descritivo se faltar alguma variável obrigatória.
 */
export function validateEnv(config: Record<string, unknown>): Env {
  const result = envSchema.safeParse(config);

  if (!result.success) {
    const errors = result.error.message
    // .map((e) => `  ❌ ${e.path.join('.')}: ${e.message}`)
    // .join('\n');

    throw new Error(
      `\n⚠️  Validação de variáveis de ambiente falhou:\n${errors}\n`
    );
  }

  return result.data;
}
