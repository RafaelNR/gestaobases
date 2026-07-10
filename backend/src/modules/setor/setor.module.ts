import { Module } from '@nestjs/common';
import { SetorController } from './setor.controller';
import { SetorService } from './repository/setor.repository';

@Module({
  controllers: [SetorController],
  providers: [SetorService],
  exports: [SetorService],
})
export class SetorModule {}
