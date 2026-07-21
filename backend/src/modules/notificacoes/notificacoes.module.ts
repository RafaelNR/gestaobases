import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NotificacoesRepository } from './repository/notification.repository';
import { NotificacoesGateway } from './gateway/notificacoes.gateway';
import { NotificacoesController } from './notification.controller';
import { UserService } from '@src/modules/users/repository/users.repository';
import { EnvironmentVariables } from '@src/common/types/env';
import { NotificacaoRequerimentoUseCase } from './use-case/notificacao-requerimento.use-case';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService<EnvironmentVariables>) => ({
        secret: config.get<string>('JWT_ACCESS_SECRET'),
      }),
    }),
  ],
  controllers: [NotificacoesController],
  providers: [
    NotificacoesRepository,
    NotificacoesGateway,
    NotificacaoRequerimentoUseCase,
    UserService,
  ],
  exports: [
    NotificacoesRepository,
    NotificacoesGateway,
    NotificacaoRequerimentoUseCase,
  ],
})
export class NotificacaoModule {}
