import { Module } from '@nestjs/common';
import { MedicamentoController } from './medicamento.controller';
import { MedicamentoRepository } from './repository/medicamento.repository';

@Module({
  controllers: [MedicamentoController],
  providers: [MedicamentoRepository],
  exports: [MedicamentoRepository],
})
export class MedicamentoModule {}
