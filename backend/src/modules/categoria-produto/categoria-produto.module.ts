import { Module } from '@nestjs/common';
import { CategoriaProdutoController } from './categoria-produto.controller';
import { CategoriaProdutoRepository } from './repository/categoria-produto.repository';

@Module({
  controllers: [CategoriaProdutoController],
  providers: [CategoriaProdutoRepository],
  exports: [CategoriaProdutoRepository],
})
export class CategoriaProdutoModule {}
