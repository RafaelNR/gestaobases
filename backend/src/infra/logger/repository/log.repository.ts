import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Prisma, TipoLog } from '@generated/prisma/client';
import { PrismaService } from '@infra/database/prisma/prisma.service';

type Dados = Omit<Prisma.LogCreateInput, 'tipo' | 'User'> & {
  userId: string;
};

@Injectable()
export class LogService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private readonly prisma: PrismaService
  ) {}

  private async log(tipo: TipoLog, dados: Dados) {
    await this.prisma.log.create({
      data: {
        ip: dados.ip,
        mensagem: dados.mensagem,
        artefato: dados.artefato,
        modulo: dados.modulo,
        tipo,
        User: {
          connect: { id: dados.userId },
        },
      },
    });
  }

  async created(dados: Dados) {
    return this.log('created', dados);
  }

  async updated(dados: Dados) {
    return this.log('updated', dados);
  }

  async actived(dados: Dados) {
    return this.log('active', dados);
  }

  async deleted(dados: Dados) {
    return this.log('deleted', dados);
  }

  async disabled(dados: Dados) {
    return this.log('disable', dados);
  }

  async status(dados: Dados) {
    return this.log('status', dados);
  }

  async validation(dados: Dados) {
    return this.log('updated', dados);
  }
}
