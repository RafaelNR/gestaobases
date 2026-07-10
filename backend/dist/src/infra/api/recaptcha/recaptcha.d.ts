import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@src/common/types/env';
export declare class RecaptchaService {
    private configService;
    private URL;
    constructor(configService: ConfigService<EnvironmentVariables>);
}
