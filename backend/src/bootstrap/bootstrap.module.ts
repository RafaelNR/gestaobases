import { Global, Module } from '@nestjs/common';
import { BootstrapService } from './bootstrap.service';
import { DataBaseModule } from '../infra/database/database.module';
// import { CacheModule } from '@src/infra/cache/cache.module';

@Global()
@Module({
  imports: [DataBaseModule],
  providers: [BootstrapService],
})
export class BootStrapModule {}
