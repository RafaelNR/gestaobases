import { Module } from '@nestjs/common';
import { MedicoController } from './medico.controller';
import { MedicoRepository } from './repository/medico.repository';

@Module({
  controllers: [MedicoController],
  providers: [MedicoRepository],
  exports: [MedicoRepository],
})
export class MedicoModule {}
