import { Global, Module } from '@nestjs/common';
import { RecaptchaService } from './recaptcha';

@Global()
@Module({
  providers: [RecaptchaService],
})
export class RecaptchaModule {}
