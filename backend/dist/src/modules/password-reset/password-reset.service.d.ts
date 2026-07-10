import { ConfigService } from '@nestjs/config';
import { PasswordResetRepository } from './repository/password-reset.repository';
import { RequestResetDto } from './dto/request-reset.dto';
import { MailService } from "../../infra/mail/mail.service";
export declare class PasswordResetService {
    private readonly repo;
    private readonly config;
    private readonly mail;
    private readonly logger;
    constructor(repo: PasswordResetRepository, config: ConfigService, mail: MailService);
    requestReset(dto: RequestResetDto, _ip: string): Promise<{
        message: string;
    }>;
}
