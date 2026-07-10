import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoRepository } from './repository/produto.repository';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
  exports: [ProdutoRepository],
})
export class ProdutoModule {}
