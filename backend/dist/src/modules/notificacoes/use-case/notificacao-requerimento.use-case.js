"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotificacaoRequerimentoUseCase", {
    enumerable: true,
    get: function() {
        return NotificacaoRequerimentoUseCase;
    }
});
const _common = require("@nestjs/common");
const _client = require("../../../../generated/prisma/client");
const _usersrepository = require("../../users/repository/users.repository");
const _notificacoesgateway = require("../gateway/notificacoes.gateway");
const _notificationrepository = require("../repository/notification.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let NotificacaoRequerimentoUseCase = class NotificacaoRequerimentoUseCase {
    constructor(repository, userService, gateway){
        this.repository = repository;
        this.userService = userService;
        this.gateway = gateway;
        this.logger = new _common.Logger(NotificacaoRequerimentoUseCase.name);
    }
    // Notifica usuarios setores responsaveis quando um novo requerimento é criado.
    async notifyCreated(requerimento) {
        const setores = this.getSetoresResponsaveis(requerimento.tipo);
        const usuariosPorSetor = await Promise.all(setores.map((setor)=>this.userService.usersNotificationBySetor(setor)));
        const userIds = this.uniqueIds(usuariosPorSetor.flat());
        await this.createAndEmit(userIds, {
            mensagem: `Novo requerimento #${requerimento.numero} recebido.`,
            artefatoUUID: requerimento.id,
            tipo: _client.TipoNotificacao.Requerimento,
            evento: 'requerimento.criado',
            link: this.buildLink(requerimento.tipo, requerimento.id)
        });
    }
    // Notifica usuarios da base que o requerimento foi atualizado.
    async notifyStatusChanged(requerimento, status) {
        const usuarios = await this.userService.usersNotificationBySetorAndBase('Base', requerimento.base);
        const userIds = this.uniqueIds(usuarios);
        await this.createAndEmit(userIds, {
            mensagem: `O requerimento #${requerimento.numero} foi atualizado para ${status}.`,
            artefatoUUID: requerimento.id,
            tipo: _client.TipoNotificacao.Requerimento,
            evento: 'requerimento.status_alterado',
            link: this.buildLink(requerimento.tipo, requerimento.id)
        });
    }
    // Cria e emite a notificação para os usuários.
    async createAndEmit(userIds, data) {
        if (!userIds.length) return;
        const createdAt = new Date().toISOString();
        await this.repository.createManyForUsers(userIds, data);
        this.gateway.emitToUsers(userIds, {
            ...data,
            lida: false,
            removida: false,
            created_at: createdAt
        });
    }
    dispatchNotification(task, message) {
        void task().catch((error)=>{
            this.logger.error(message, error);
        });
    }
    //------------------------------------- HELPER ---
    getSetoresResponsaveis(tipo) {
        switch(tipo){
            case _client.TipoRequerimento.Almoxarifado:
                return [
                    'Almoxarifado'
                ];
            case _client.TipoRequerimento.Farmacia:
                return [
                    'Farmacia'
                ];
            case _client.TipoRequerimento.CME:
                return [
                    'CME'
                ];
            default:
                return [];
        }
    }
    uniqueIds(usuarios) {
        return [
            ...new Set(usuarios.map(({ id })=>id))
        ];
    }
    buildLink(tipo, id) {
        return `/requerimentos/${tipo.toLowerCase()}/view/${id}`;
    }
};
NotificacaoRequerimentoUseCase = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _notificationrepository.NotificacoesRepository === "undefined" ? Object : _notificationrepository.NotificacoesRepository,
        typeof _usersrepository.UserService === "undefined" ? Object : _usersrepository.UserService,
        typeof _notificacoesgateway.NotificacoesGateway === "undefined" ? Object : _notificacoesgateway.NotificacoesGateway
    ])
], NotificacaoRequerimentoUseCase);

//# sourceMappingURL=notificacao-requerimento.use-case.js.map