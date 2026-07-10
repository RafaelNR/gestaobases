import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

@Global()
@Module({})
export class RolesModule {
  static forRoot() {
    return {
      module: RolesModule,
      providers: [
        {
          provide: APP_GUARD,
          useClass: RolesGuard,
        },
      ],
    };
  }
}
