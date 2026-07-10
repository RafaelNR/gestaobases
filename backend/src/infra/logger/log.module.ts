import { DynamicModule, Global, Module } from '@nestjs/common';
import { LogService } from './repository/log.repository';
import { DataBaseModule } from '../database/database.module';

@Global()
@Module({})
export class LogModule {
  static forRoot(): DynamicModule {
    return {
      imports: [DataBaseModule],
      module: LogModule,
      providers: [LogService],
      exports: [LogService],
      global: true,
    };
  }
}
