import { MailerService, ISendMailOptions } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

//* TYPES
import { TipoEmail } from '@generated/prisma/client';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { EnvironmentVariables } from '@src/common/types/env';

@Injectable()
export class MailService {
  constructor(
    public readonly mailerService: MailerService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService<EnvironmentVariables>
  ) {
  }

  async result({
    callback,
    tipo,
    email,
    artefatoUUID,
  }: {
    callback: Promise<ISendMailOptions>;
    tipo: TipoEmail;
    email: string;
    artefatoUUID: string;
  }) {
    return callback
      .then(async (result) => {
        await this.prisma.sendEmail.create({
          data: {
            email: email,
            status: 'success',
            tipo: tipo,
            artefatoUUID: artefatoUUID,
            message: JSON.stringify(result),
          },
        });
        return true;
      })
      .catch(async (error) => {
        console.log(error);
        await this.prisma.sendEmail.create({
          data: {
            email: email,
            status: 'error',
            tipo: tipo,
            artefatoUUID: artefatoUUID,
            message: JSON.stringify(error),
          },
        });
        return false;
      });
  }
}
