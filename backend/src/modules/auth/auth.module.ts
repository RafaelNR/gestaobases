import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './use-cases/auth.service';
import { AuthRepository } from './repository/auth.repository';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { RefreshTokenService } from './repository/refresh.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({}), // secrets via ConfigService em cada strategy
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    RefreshTokenService,
    JwtAccessStrategy,
    JwtRefreshStrategy,
  ],
  exports: [AuthService, AuthRepository],
})
export class AuthModule {}
