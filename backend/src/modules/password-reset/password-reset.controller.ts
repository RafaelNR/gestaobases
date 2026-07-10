import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
  BadRequestException,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';

import { PasswordResetService } from './password-reset.service';
import { RequestResetDto } from './dto/request-reset.dto';
import { ConfirmResetDto } from './dto/confirm-reset.dto';
import { Public } from '@infra/auth/auth.decorator';
import { BaseController } from '@common/bases/BaseController';

@Controller('auth/password-reset')
export class PasswordResetController extends BaseController {
  constructor(private readonly service: PasswordResetService) {
    super();
  }

  @Post('request')
  @Public()
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { ttl: 60000, limit: 3 } })
  async request(@Body() dto: RequestResetDto, @Ip() ip: string) {
    const response = this.service.requestReset(dto, ip);

    return this.handleSuccessResponse<any>({
      code: HttpStatus.OK,
      response,
      message: 'Instruções enviadas se o e-mail existir',
    });
  }

  // @Post('confirm')
  // @Public()
  // @HttpCode(HttpStatus.OK)
  // @Throttle({ default: { ttl: 60000, limit: 5 } })
  // async confirm(@Body() dto: ConfirmResetDto) {
  //   try {
  //     const response = await this.service.confirmReset(dto);

  //     return this.handleSuccessResponse<any>({
  //       code: HttpStatus.OK,
  //       response,
  //       message: 'Senha resetada com sucesso.',
  //     });
  //   } catch {
  //     // Resposta genérica — não vazar motivo do erro
  //     throw new BadRequestException('Token inválido ou expirado.');
  //   }
  // }
}
