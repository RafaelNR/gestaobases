import { Module } from '@nestjs/common';
import { RelatoriosController } from './relatorios.controller';
import { RelatoriosRepository } from './repository/relatorios.repository';
import { RelatoriosService } from './services/relatorios.service';

@Module({
  controllers: [RelatoriosController],
  providers: [RelatoriosRepository, RelatoriosService],
})
export class RelatoriosModule {}
