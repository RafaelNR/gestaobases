"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
exports.validateEnv = validateEnv;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    PORT_HTTPS: zod_1.z.string().default('5001'),
    DNS_HTTPS: zod_1.z.string({ error: 'DNS_HTTPS é obrigatório.' }),
    NODE_ENV: zod_1.z.enum(['development', 'production', 'DEV']).default('development'),
    DB_HOST: zod_1.z.string({ error: 'DB_HOST é obrigatório.' }),
    DB_PORT: zod_1.z.string().default('3306'),
    DATABASE_URL: zod_1.z.string({ error: 'DATABASE_URL é obrigatório.' }),
    MYSQL_USER: zod_1.z.string({ error: 'MYSQL_USER é obrigatório.' }),
    MYSQL_PASSWORD: zod_1.z.string({ error: 'MYSQL_PASSWORD é obrigatório.' }),
    MYSQL_DB: zod_1.z.string({ error: 'MYSQL_DB é obrigatório.' }),
    FRONT_END: zod_1.z.string({ error: 'FRONT_END é obrigatório.' }),
    JWT_ACCESS_SECRET: zod_1.z.string({ error: 'JWT_ACCESS_SECRET é obrigatório.' }),
    JWT_EXPIRED_IN: zod_1.z.string({ error: 'JWT_EXPIRED_IN é obrigatório.' }).default('1d'),
    JWT_REFRESH_SECRET: zod_1.z.string({ error: 'JWT_REFRESH_SECRET é obrigatório.' }),
    JWT_REFRESH_EXPIRED_IN: zod_1.z.string({ error: 'JWT_REFRESH_EXPIRED_IN é obrigatório.' }).default('7d'),
    BCRYPT_ROUNDS: zod_1.z.string({ error: 'BCRYPT_ROUNDS é obrigatório.' }),
    SSL_KEY: zod_1.z.string({ error: 'SSL_KEY é obrigatório.' }),
    SSL_CERT: zod_1.z.string({ error: 'SSL_CERT é obrigatório.' }),
    SMTP_HOST: zod_1.z.string().optional(),
    SMTP_PORT: zod_1.z.string().optional(),
    SMTP_TLS: zod_1.z.string().optional(),
    SMTP_USERNAME: zod_1.z.string().optional(),
    SMTP_PASSWORD: zod_1.z.string().optional(),
    SMTP_BCC: zod_1.z.string().optional(),
    FROM_EMAIL: zod_1.z.string().optional(),
    FROM_NAME: zod_1.z.string().optional(),
    LOGO_CISRU_EMAIL_URL: zod_1.z.string().optional(),
    LOGO_OISAMU_EMAIL_URL: zod_1.z.string().optional(),
    GOOGLE_CLIENT_ID: zod_1.z.string().optional(),
    GOOGLE_CLIENT_SECRET: zod_1.z.string().optional(),
    GOOGLE_CALLBACK_URL: zod_1.z.string().optional(),
    STRIPE_SECRET_KEY: zod_1.z.string().optional(),
    STRIPE_WEBHOOK_SECRET: zod_1.z.string().optional(),
    PAGARME_API_KEY: zod_1.z.string().optional(),
    PAGARME_WEBHOOK_SECRET: zod_1.z.string().optional(),
});
function validateEnv(config) {
    const result = exports.envSchema.safeParse(config);
    if (!result.success) {
        const errors = result.error.message;
        throw new Error(`\n⚠️  Validação de variáveis de ambiente falhou:\n${errors}\n`);
    }
    return result.data;
}
//# sourceMappingURL=env.validation.js.map