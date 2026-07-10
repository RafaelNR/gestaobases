import { MailerModule } from '@nestjs-modules/mailer';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataBaseModule } from '../database/database.module';
import { EnvironmentVariables } from '@src/common/types/env';

const isProd = process.env.NODE_ENV === 'production';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule, DataBaseModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService<EnvironmentVariables>) => ({
        transport: {
          host: config.get<string>('SMTP_HOST'),
          port: parseInt(config.get<string>('SMTP_PORT') as string),
          auth: {
            user: config.get<string>('SMTP_USERNAME'),
            pass: config.get<string>('SMTP_PASSWORD'),
          },
        },
        defaults: {
          from: `"${config.get<string>('FROM_NAME')}" < ${config.get<string>('FROM_EMAIL')} >`,
        },
        template: {
          dir: isProd
            ? join(process.cwd(), 'dist/infra/mail/templates')
            : join(process.cwd(), 'src/infra/mail/templates'),
          // adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
          options: {
            strict: true,
          },
        },
        options: {
          partials: {
            dir: isProd
              ? join(process.cwd(), 'dist/infra/mail/templates/partials')
              : join(process.cwd(), 'src/infra/mail/templates/partials'),
            options: {
              strict: true,
            },
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule { }
