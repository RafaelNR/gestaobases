import { Module } from '@nestjs/common';
import { BasesController } from './base.controller';
import { BaseRepository } from './repository/base.repository';

@Module({
  controllers: [BasesController],
  providers: [BaseRepository],
  exports: [BaseRepository],
})
export class BaseModule {}
