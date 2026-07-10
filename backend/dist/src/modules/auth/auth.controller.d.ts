import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { AuthService } from './use-cases/auth.service';
import { AuthRepository } from './repository/auth.repository';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { IUser } from "../../common/decorator/user.decorator";
import { BaseController } from "../../common/bases/BaseController";
export declare class AuthController extends BaseController {
    private readonly authService;
    private readonly authRepo;
    private readonly config;
    private readonly refreshTokenDuration;
    private readonly accessTokenDuration;
    constructor(authService: AuthService, authRepo: AuthRepository, config: ConfigService);
    login(dto: LoginCredentialsDto, req: Request, res: Response): Promise<import("@src/common/bases/BaseController").IResponse<any>>;
    refresh(req: Request, res: Response): Promise<import("@src/common/bases/BaseController").IResponse<any>>;
    logout(req: Request, res: Response): Promise<import("@src/common/bases/BaseController").IResponse<any>>;
    me(user: IUser): Promise<import("@src/common/bases/BaseController").IResponse<any>>;
    private setAccessCookie;
    private setRefreshCookie;
    private clearAuthCookies;
}
