import { Module } from '@nestjs/common';
import { EstoqueController } from './estoque.controller';
import { EstoqueRepository } from './repository/estoque.repository';
import { EstoqueService } from './services/estoque.service';

@Module({
  controllers: [EstoqueController],
  providers: [EstoqueRepository, EstoqueService],
  exports: [EstoqueService],
})
export class EstoqueModule {}
