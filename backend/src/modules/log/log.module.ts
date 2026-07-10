import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogRepository } from './repository/log.repository';

@Module({
  imports: [],
  controllers: [LogController],
  providers: [LogRepository],
})
export class LogModule { }
