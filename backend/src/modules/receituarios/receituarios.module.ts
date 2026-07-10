import { Module } from '@nestjs/common';
import { ReceituariosController } from './receituarios.controller';
import { ReceituariosRepository } from './repository/receituarios.repository';
import { ReceituariosService } from './services/receituarios.service';

@Module({
  controllers: [ReceituariosController],
  providers: [ReceituariosRepository, ReceituariosService],
  exports: [ReceituariosService],
})
export class ReceituariosModule {}
