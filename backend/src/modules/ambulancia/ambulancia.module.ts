import { Module } from '@nestjs/common';
import { AmbulanciaController } from './ambulancia.controller';
import { AmbulanciaRepository } from './repository/ambulancia.repository';

@Module({
  controllers: [AmbulanciaController],
  providers: [AmbulanciaRepository],
  exports: [AmbulanciaRepository],
})
export class AmbulanciaModule {}
