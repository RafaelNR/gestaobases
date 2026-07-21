"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get envSchema () {
        return envSchema;
    },
    get validateEnv () {
        return validateEnv;
    }
});
const _zod = require("zod");
const envSchema = _zod.z.object({
    // Server
    PORT_HTTPS: _zod.z.string().default('5001'),
    DNS_HTTPS: _zod.z.string({
        error: 'DNS_HTTPS é obrigatório.'
    }),
    NODE_ENV: _zod.z.enum([
        'development',
        'production',
        'DEV'
    ]).default('development'),
    // Database
    DB_HOST: _zod.z.string({
        error: 'DB_HOST é obrigatório.'
    }),
    DB_PORT: _zod.z.string().default('3306'),
    DATABASE_URL: _zod.z.string({
        error: 'DATABASE_URL é obrigatório.'
    }),
    MYSQL_USER: _zod.z.string({
        error: 'MYSQL_USER é obrigatório.'
    }),
    MYSQL_PASSWORD: _zod.z.string({
        error: 'MYSQL_PASSWORD é obrigatório.'
    }),
    MYSQL_DB: _zod.z.string({
        error: 'MYSQL_DB é obrigatório.'
    }),
    FRONT_END: _zod.z.string({
        error: 'FRONT_END é obrigatório.'
    }),
    // Auth
    JWT_ACCESS_SECRET: _zod.z.string({
        error: 'JWT_ACCESS_SECRET é obrigatório.'
    }),
    JWT_EXPIRED_IN: _zod.z.string({
        error: 'JWT_EXPIRED_IN é obrigatório.'
    }).default('1d'),
    JWT_REFRESH_SECRET: _zod.z.string({
        error: 'JWT_REFRESH_SECRET é obrigatório.'
    }),
    JWT_REFRESH_EXPIRED_IN: _zod.z.string({
        error: 'JWT_REFRESH_EXPIRED_IN é obrigatório.'
    }).default('7d'),
    BCRYPT_ROUNDS: _zod.z.string({
        error: 'BCRYPT_ROUNDS é obrigatório.'
    }),
    // SSL (opcionais para dev)
    SSL_KEY: _zod.z.string({
        error: 'SSL_KEY é obrigatório.'
    }),
    SSL_CERT: _zod.z.string({
        error: 'SSL_CERT é obrigatório.'
    }),
    // SMTP
    SMTP_HOST: _zod.z.string().optional(),
    SMTP_PORT: _zod.z.string().optional(),
    SMTP_TLS: _zod.z.string().optional(),
    SMTP_USERNAME: _zod.z.string().optional(),
    SMTP_PASSWORD: _zod.z.string().optional(),
    SMTP_BCC: _zod.z.string().optional(),
    FROM_EMAIL: _zod.z.string().optional(),
    FROM_NAME: _zod.z.string().optional(),
    LOGO_CISRU_EMAIL_URL: _zod.z.string().optional(),
    LOGO_OISAMU_EMAIL_URL: _zod.z.string().optional(),
    // Google OAuth
    GOOGLE_CLIENT_ID: _zod.z.string().optional(),
    GOOGLE_CLIENT_SECRET: _zod.z.string().optional(),
    GOOGLE_CALLBACK_URL: _zod.z.string().optional(),
    // Stripe
    STRIPE_SECRET_KEY: _zod.z.string().optional(),
    STRIPE_WEBHOOK_SECRET: _zod.z.string().optional(),
    // Pagar.me
    PAGARME_API_KEY: _zod.z.string().optional(),
    PAGARME_WEBHOOK_SECRET: _zod.z.string().optional()
});
function validateEnv(config) {
    const result = envSchema.safeParse(config);
    if (!result.success) {
        const errors = result.error.message;
        // .map((e) => `  ❌ ${e.path.join('.')}: ${e.message}`)
        // .join('\n');
        throw new Error(`\n⚠️  Validação de variáveis de ambiente falhou:\n${errors}\n`);
    }
    return result.data;
}

//# sourceMappingURL=env.validation.js.map