require('dotenv').config({ path: '.env.production' });

module.exports = {
  apps: [
    {
      name: 'gestao-bases-api',
      script: './dist/main.js',
      autorestart: true,
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      max_restarts: 10,
      restart_delay: 3000,
      kill_timeout: 5000,
      env_production: {
        NODE_ENV: 'production',
        APP_NAME: 'gestao-bases-api',
        // Database
        MYSQL_USER: process.env.MYSQL_USER,
        MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
        MYSQL_DB: process.env.MYSQL_DB,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DATABASE_URL: process.env.DATABASE_URL,
        // Server
        IP: process.env.IP,
        PORT_HTTPS: process.env.PORT_HTTPS,
        DNS_HTTPS: process.env.DNS_HTTPS,
        // SSL
        SSL_KEY: process.env.SSL_KEY,
        SSL_CERT: process.env.SSL_CERT,
        // JWT
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
        JWT_EXPIRED_IN: process.env.JWT_EXPIRED_IN,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
        JWT_REFRESH_EXPIRED_IN: process.env.JWT_REFRESH_EXPIRED_IN,
        BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS,
        // Frontend
        FRONT_END: process.env.FRONT_END,
        // SMTP
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_TLS: process.env.SMTP_TLS,
        SMTP_USERNAME: process.env.SMTP_USERNAME,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        SMTP_BCC: process.env.SMTP_BCC,
        FROM_EMAIL: process.env.FROM_EMAIL,
        FROM_NAME: process.env.FROM_NAME,
        LOGO_URL: process.env.LOGO_URL,
      },
    },
  ],
};
