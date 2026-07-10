import { MailerService, ISendMailOptions } from '@nestjs-modules/mailer';
import { PrismaService } from '../database/prisma/prisma.service';
import { TipoEmail } from "../../../generated/prisma/client";
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@src/common/types/env';
export declare class MailService {
    readonly mailerService: MailerService;
    private readonly prisma;
    private readonly configService;
    constructor(mailerService: MailerService, prisma: PrismaService, configService: ConfigService<EnvironmentVariables>);
    result({ callback, tipo, email, artefatoUUID, }: {
        callback: Promise<ISendMailOptions>;
        tipo: TipoEmail;
        email: string;
        artefatoUUID: string;
    }): Promise<boolean>;
}
