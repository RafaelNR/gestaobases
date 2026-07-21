import { Injectable, Logger } from '@nestjs/common';
import {
  Status,
  TipoNotificacao,
  TipoRequerimento,
} from '@generated/prisma/client';
import { UserService } from '@src/modules/users/repository/users.repository';
import { NotificacoesGateway } from '../gateway/notificacoes.gateway';
import { NotificacoesRepository } from '../repository/notification.repository';

type RequerimentoCriado = {
  id: string;
  numero: number;
  tipo: TipoRequerimento;
};

type RequerimentoStatusAlterado = RequerimentoCriado & {
  base: string;
};

@Injectable()
export class NotificacaoRequerimentoUseCase {
  private readonly logger = new Logger(NotificacaoRequerimentoUseCase.name);

  constructor(
    private readonly repository: NotificacoesRepository,
    private readonly userService: UserService,
    private readonly gateway: NotificacoesGateway
  ) {}

  // Notifica usuarios setores responsaveis quando um novo requerimento é criado.
  async notifyCreated(requerimento: RequerimentoCriado): Promise<void> {
    const setores = this.getSetoresResponsaveis(requerimento.tipo);
    const usuariosPorSetor = await Promise.all(
      setores.map((setor) => this.userService.usersNotificationBySetor(setor))
    );
    const userIds = this.uniqueIds(usuariosPorSetor.flat());

    await this.createAndEmit(userIds, {
      mensagem: `Novo requerimento #${requerimento.numero} recebido.`,
      artefatoUUID: requerimento.id,
      tipo: TipoNotificacao.Requerimento,
      evento: 'requerimento.criado',
      link: this.buildLink(requerimento.tipo, requerimento.id),
    });
  }

  // Notifica usuarios da base que o requerimento foi atualizado.
  async notifyStatusChanged(
    requerimento: RequerimentoStatusAlterado,
    status: Status
  ): Promise<void> {
    const usuarios = await this.userService.usersNotificationBySetorAndBase(
      'Base',
      requerimento.base
    );
    const userIds = this.uniqueIds(usuarios);

    await this.createAndEmit(userIds, {
      mensagem: `O requerimento #${requerimento.numero} foi atualizado para ${status}.`,
      artefatoUUID: requerimento.id,
      tipo: TipoNotificacao.Requerimento,
      evento: 'requerimento.status_alterado',
      link: this.buildLink(requerimento.tipo, requerimento.id),
    });
  }

  // Cria e emite a notificação para os usuários.
  private async createAndEmit(
    userIds: string[],
    data: {
      mensagem: string;
      artefatoUUID: string;
      tipo: TipoNotificacao;
      evento: string;
      link: string;
    }
  ): Promise<void> {
    if (!userIds.length) return;

    const createdAt = new Date().toISOString();
    await this.repository.createManyForUsers(userIds, data);
    this.gateway.emitToUsers(userIds, {
      ...data,
      lida: false,
      removida: false,
      created_at: createdAt,
    });
  }

  public dispatchNotification(
    task: () => Promise<void>,
    message: string
  ): void {
    void task().catch((error: unknown) => {
      this.logger.error(message, error);
    });
  }

  //------------------------------------- HELPER ---

  private getSetoresResponsaveis(tipo: TipoRequerimento): string[] {
    switch (tipo) {
      case TipoRequerimento.Almoxarifado:
        return ['Almoxarifado'];
      case TipoRequerimento.Farmacia:
        return ['Farmacia'];
      case TipoRequerimento.CME:
        return ['CME'];
      default:
        return [];
    }
  }

  private uniqueIds(usuarios: Array<{ id: string }>): string[] {
    return [...new Set(usuarios.map(({ id }) => id))];
  }

  private buildLink(tipo: TipoRequerimento, id: string): string {
    return `/requerimentos/${tipo.toLowerCase()}/view/${id}`;
  }
}
