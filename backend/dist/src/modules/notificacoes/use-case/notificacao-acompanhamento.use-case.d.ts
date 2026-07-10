import { NotificacoesRepository } from '../repository/notification.repository';
import { NotificacoesGateway } from '../gateway/notificacoes.gateway';
export declare class NotificacaoAcompanhamentosUseCase {
    private readonly repository;
    private readonly gateway;
    constructor(repository: NotificacoesRepository, gateway: NotificacoesGateway);
}
