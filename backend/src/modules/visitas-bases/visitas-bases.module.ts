import { Module } from '@nestjs/common';
import { VisitasBasesController } from './visitas-bases.controller';
import { VisitasBasesService } from './repository/visitas-bases.repository';

@Module({
  controllers: [VisitasBasesController],
  providers: [VisitasBasesService],
  exports: [VisitasBasesService],
})
export class VisitasBasesModule {}
