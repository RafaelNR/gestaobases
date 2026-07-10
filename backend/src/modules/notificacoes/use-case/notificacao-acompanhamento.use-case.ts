import { Injectable } from '@nestjs/common';
import { NotificacoesRepository } from '../repository/notification.repository';
import { NotificacoesGateway } from '../gateway/notificacoes.gateway';

@Injectable()
export class NotificacaoAcompanhamentosUseCase {
  constructor(
    private readonly repository: NotificacoesRepository,
    private readonly gateway: NotificacoesGateway
  ) {}

  // async notify(
  //   evento: EventAcompanhamentos,
  //   manifestacao: AcompanhamentoNotifPayload
  // ): Promise<void> {
  //   const destinatarios = await this.resolveDestinatarios(evento, manifestacao);
  //   if (!destinatarios.length) return;

  //   const mensagem = this.buildMensagem(evento, manifestacao);
  //   const link = `/manifestacoes/view/${manifestacao.uuid}`;

  //   // Persiste no banco
  //   await this.notificacoesService.createManyForUsers(destinatarios, {
  //     mensagem,
  //     artefatoUUID: manifestacao.uuid,
  //     tipo: TipoNotificacao.Manifestacao,
  //     evento,
  //     link,
  //   });

  //   // Emite em tempo real para conectados
  //   const notifPayload = {
  //     mensagem,
  //     artefatoUUID: manifestacao.uuid,
  //     tipo: TipoNotificacao.Manifestacao,
  //     evento,
  //     link,
  //     lida: false,
  //     created_at: new Date().toISOString(),
  //   };
  //   this.gateway.emitToUsers(destinatarios, notifPayload);
  // }

  // private resolveDestinatarios(
  //   evento: EventAcompanhamentos,
  //   manifestacao: AcompanhamentoNotifPayload
  // ): string[] {
  //   const uuids = new Set<string>();

  //   if (evento === "interno") {
  //     // Evento de vínculo: notifica apenas os vinculados
  //     if (manifestacao.responsavelUUID) uuids.add(manifestacao.responsavelUUID);
  //     if (manifestacao.co_responsavelUUID)
  //       uuids.add(manifestacao.co_responsavelUUID);
  //     if (manifestacao.ouvidorUUID) uuids.add(manifestacao.ouvidorUUID);
  //     return [...uuids];
  //   }

  //   if (evento === "externo") {
  //     if (manifestacao.manifestanteUUID) uuids.add(manifestacao.manifestanteUUID);
  //     if (manifestacao.ouvidorUUID) uuids.add(manifestacao.ouvidorUUID);
  //     return [...uuids];
  //   }

  //   if (evento === "resposta") {
  //     if (manifestacao.ouvidorUUID) uuids.add(manifestacao.ouvidorUUID);
  //     if (manifestacao.responsavelUUID) uuids.add(manifestacao.responsavelUUID);
  //     if (manifestacao.co_responsavelUUID) uuids.add(manifestacao.co_responsavelUUID);
  //     return [...uuids];
  //   }

  //   if (manifestacao.ouvidorUUID) uuids.add(manifestacao.ouvidorUUID);
  //   if (manifestacao.responsavelUUID) uuids.add(manifestacao.responsavelUUID);
  //   if (manifestacao.co_responsavelUUID) uuids.add(manifestacao.co_responsavelUUID);
  //   return [...uuids];

  // }

  // private buildMensagem(
  //   evento: EventAcompanhamentos,
  //   manifestacao: AcompanhamentoNotifPayload
  // ): string {
  //   const p = manifestacao.protocolo;
  //   switch (evento) {
  //     case 'interno':
  //       return `Um novo acompanhamento interno foi adicionado à manifestação ${p}`;
  //     case 'externo':
  //       return `Um novo acompanhamento externo foi adicionado à manifestação ${p}`;
  //     case 'resposta':
  //       return `Uma resposta foi adicionada à manifestação ${p}`;
  //     case 'anexo':
  //       return `Um novo anexo foi adicionado à manifestação ${p}`;

  //   }
  // }
}
