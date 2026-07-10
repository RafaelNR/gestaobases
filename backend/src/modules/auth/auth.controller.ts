import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { SkipThrottle, Throttle } from '@nestjs/throttler';

import { AuthService } from './use-cases/auth.service';
import { AuthRepository } from './repository/auth.repository';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { Public } from '@infra/auth/auth.decorator';
import { User, IUser } from '@common/decorator/user.decorator';
import { BaseController } from '@src/common/bases/BaseController';
import { parseDuration } from '@src/common/helpers/parseDurationToken';
import { JwtRefreshAuthGuard } from '@/src/infra/auth/jwt-refresh-auth.guard';

const isProd = process.env.NODE_ENV === 'production';

const COOKIE_OPTS = {
  httpOnly: true,
  secure: true,
  sameSite: (isProd ? 'strict' : 'none') as 'strict' | 'none',
  path: '/',
};

// O refresh token só é consumido pelas rotas /auth/* (refresh, logout) —
// path restrito evita que ele viaje em todas as requisições da API.
const REFRESH_COOKIE_OPTS = {
  ...COOKIE_OPTS,
  path: '/auth',
};

@Controller('auth')
export class AuthController extends BaseController {
  private readonly refreshTokenDuration!: number;
  private readonly accessTokenDuration!: number;

  constructor(
    private readonly authService: AuthService,
    private readonly authRepo: AuthRepository,
    private readonly config: ConfigService
  ) {
    super();
    this.refreshTokenDuration = parseDuration(
      this.config.getOrThrow<string>('JWT_REFRESH_EXPIRED_IN')
    );
    this.accessTokenDuration = parseDuration(
      this.config.getOrThrow<string>('JWT_EXPIRED_IN')
    );
  }

  // ─── Login credentials ────────────────────────────────────────────────────

  @Post('login')
  @Public()
  @HttpCode(HttpStatus.OK)
  @Throttle({
    auth: { limit: 10, ttl: 60000 },
    default: { limit: 10, ttl: 60000 },
  })
  async login(
    @Body() dto: LoginCredentialsDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const tokens = await this.authService.loginCredentials(dto, req);
    this.setAccessCookie(res, tokens.accessToken);
    this.setRefreshCookie(res, tokens.refreshToken);
    return this.handleSuccessResponse<any>({
      code: HttpStatus.OK,
      response: { authenticated: true },
    });
  }

  // ─── Refresh token ────────────────────────────────────────────────────────
  // Fluxo 100% cookie httpOnly jwt_refresh — o fallback por body foi removido
  // junto com os clientes legados (evitava reuso falso por token em memória stale).

  @Post('refresh')
  @Public()
  @UseGuards(JwtRefreshAuthGuard)
  @SkipThrottle()
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const payload = req.user as {
      id: string;
      refreshToken: string;
    };
    try {
      const tokens = await this.authService.refreshTokens(
        payload.id,
        payload.refreshToken,
        req
      );
      this.setAccessCookie(res, tokens.accessToken);
      this.setRefreshCookie(res, tokens.refreshToken);
      return this.handleSuccessResponse<any>({
        code: HttpStatus.OK,
        response: { refreshed: true },
      });
    } catch (error) {
      this.clearAuthCookies(res);
      throw error;
    }
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @Throttle({
    auth: { limit: 10, ttl: 60000 },
    default: { limit: 10, ttl: 60000 },
  })
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const user = (req as Request & { user?: IUser }).user;
    if (user?.id) {
      await this.authService.logout(user.id);
    }
    this.clearAuthCookies(res);
    return this.handleSuccessResponse<any>({
      code: HttpStatus.OK,
      message: 'Sessão encerrada.',
    });
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async me(@User() user: IUser) {
    if (!user) throw new UnauthorizedException('Token inválido');

    const profile = await this.authRepo.findUserWithProfile(user.id);
    if (!profile) throw new UnauthorizedException('Usuário não encontrado');

    return this.handleSuccessResponse<any>({
      code: HttpStatus.OK,
      response: profile,
    });
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private setAccessCookie(res: Response, token: string) {
    res.cookie('jwt_token', token, {
      ...COOKIE_OPTS,
      maxAge: this.accessTokenDuration,
    });
  }

  private setRefreshCookie(res: Response, token: string) {
    res.cookie('jwt_refresh', token, {
      ...REFRESH_COOKIE_OPTS,
      maxAge: this.refreshTokenDuration,
    });
    // Remove o cookie legado com path '/' para não conviver com o novo path
    // restrito (browsers enviariam os dois).
    res.clearCookie('jwt_refresh', COOKIE_OPTS);
  }

  private clearAuthCookies(res: Response) {
    res.clearCookie('jwt_token', COOKIE_OPTS);
    res.clearCookie('jwt_refresh', REFRESH_COOKIE_OPTS);
    res.clearCookie('jwt_refresh', COOKIE_OPTS); // cookie legado path '/'
  }
}
