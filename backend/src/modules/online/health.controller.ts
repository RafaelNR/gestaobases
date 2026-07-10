import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  PrismaHealthIndicator,
  MemoryHealthIndicator,
  DiskHealthIndicator,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { PrismaService } from '@src/infra/database/prisma/prisma.service';
import { Public } from '@src/infra/auth/auth.decorator';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@src/common/types/env';

@Controller('online')
export class HealthController {
  private frontendUrl: string;
  constructor(
    private health: HealthCheckService,
    private prismaHealth: PrismaHealthIndicator,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator,
    private http: HttpHealthIndicator,
    private prisma: PrismaService,
    private readonly configService: ConfigService<EnvironmentVariables>
  ) {
    this.frontendUrl = this.configService.getOrThrow('FRONT_END') as string;
  }

  @Get()
  @Public()
  @HealthCheck()
  check() {
    return this.health.check([
      // 1. Verifica se o banco de dados está respondendo
      () => this.prismaHealth.pingCheck('database', this.prisma),

      // 2. Verifica se o processo Node.js não está consumindo mais de 150MB de memória Heap
      // (ajuste os valores conforme o consumo normal da sua aplicação)
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),

      // 3. Verifica se o total de memória RAM alocada pelo processo não ultrapassa 300MB
      () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),

      // 4. Verifica se o disco não está com mais de 90% (0.9) de espaço de armazenamento cheio
      () =>
        this.disk.checkStorage('storage', {
          path: process.cwd(), // Usa o diretório atual do projeto
          thresholdPercent: 0.9,
        }),

      // 5. Verifica se uma API externa está respondendo (exemplo com o Google)
      // Substitua a URL pela API de pagamentos ou serviço real que você utiliza
      () => this.http.pingCheck('api-externa', this.frontendUrl),
    ]);
  }
}
