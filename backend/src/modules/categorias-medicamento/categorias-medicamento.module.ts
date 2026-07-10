import { Module } from '@nestjs/common';
import { CategoriasMedicamentoController } from './categorias-medicamento.controller';
import { CategoriasMedicamentoRepository } from './repository/categorias-medicamento.repository';

@Module({
  controllers: [CategoriasMedicamentoController],
  providers: [CategoriasMedicamentoRepository],
  exports: [CategoriasMedicamentoRepository],
})
export class CategoriasMedicamentoModule {}
