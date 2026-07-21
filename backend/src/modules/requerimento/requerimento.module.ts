import { Module } from '@nestjs/common';
import { AlmoxarifadoController } from './controllers/almoxarifado.controller';
import { CmeController } from './controllers/cme.controller';
import { FarmaciaController } from './controllers/farmacia.controller';
import { RequerimentoRepository } from './repository/requerimento.repository';
import { RequerimentoService } from './services/requerimento.service';
import { NotificacaoModule } from '../notificacoes/notificacoes.module';

@Module({
  imports: [NotificacaoModule],
  controllers: [AlmoxarifadoController, FarmaciaController, CmeController],
  providers: [RequerimentoRepository, RequerimentoService],
  exports: [RequerimentoService],
})
export class RequerimentoModule {}
