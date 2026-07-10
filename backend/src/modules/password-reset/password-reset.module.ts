import { Module } from '@nestjs/common';

import { PasswordResetController } from './password-reset.controller';
import { PasswordResetService } from './password-reset.service';
import { PasswordResetRepository } from './repository/password-reset.repository';
import { MailModule } from '@infra/mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [PasswordResetController],
  providers: [PasswordResetService, PasswordResetRepository],
})
export class PasswordResetModule { }
