import { Module } from '@nestjs/common';
import { CargoController } from './cargo.controller';
import { CargoRepository } from './repository/cargo.repository';

@Module({
  controllers: [CargoController],
  providers: [CargoRepository],
  exports: [CargoRepository],
})
export class CargoModule {}
