import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthRepository } from '../repository/auth.repository';
import { RefreshTokenService } from '../repository/refresh.service';
import { LoginCredentialsDto } from '../dto/login-credentials.dto';
export declare class AuthService {
    private readonly repo;
    private readonly refreshTokenService;
    private readonly jwt;
    private readonly config;
    constructor(repo: AuthRepository, refreshTokenService: RefreshTokenService, jwt: JwtService, config: ConfigService);
    loginCredentials(dto: LoginCredentialsDto, req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: Date;
    }>;
    refreshTokens(userId: string, rawRefreshToken: string, req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: Date;
    }>;
    logout(userId: string): Promise<void>;
    private issueTokens;
    private verifyRefreshTokenHash;
}
