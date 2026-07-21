"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RequerimentoService", {
    enumerable: true,
    get: function() {
        return RequerimentoService;
    }
});
const _common = require("@nestjs/common");
const _client = require("../../../../generated/prisma/client");
const _rolesdecorator = require("../../../infra/guard/roles.decorator");
const _requerimentorepository = require("../repository/requerimento.repository");
const _normalize = require("../../../common/helpers/normalize");
const _assert = require("../../../common/helpers/assert");
const _notificacaorequerimentousecase = require("../../notificacoes/use-case/notificacao-requerimento.use-case");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
// Transições de status permitidas para não-admins
const STATUS_TRANSITIONS = {
    [_client.Status.Recebido]: [
        _client.Status.Analise,
        _client.Status.Cancelado
    ],
    [_client.Status.Analise]: [
        _client.Status.Separacao,
        _client.Status.Cancelado
    ],
    [_client.Status.Separacao]: [
        _client.Status.Finalizado,
        _client.Status.Cancelado
    ]
};
// Estados terminais — não podem ser alterados
const TERMINAL_STATUS = [
    _client.Status.Finalizado,
    _client.Status.Cancelado
];
let RequerimentoService = class RequerimentoService {
    constructor(repo, notificacaoUseCase){
        this.repo = repo;
        this.notificacaoUseCase = notificacaoUseCase;
        this.logger = new _common.Logger(RequerimentoService.name);
    }
    // ── Helpers ───────────────────────────────────────────────────────────────
    // Verifica se o usuario tem permissão para ver todos os requerimentos
    isGetAll(user, TIPO) {
        // console.log('isGetAll', user, TIPO);
        if (TIPO === _client.TipoRequerimento.Farmacia) {
            return user.setor === _rolesdecorator.TypeSetor.Administrador || user.setor === _rolesdecorator.TypeSetor.Farmacia || user.setor === _rolesdecorator.TypeSetor.Frota;
        }
        if (TIPO === _client.TipoRequerimento.Almoxarifado) {
            return user.setor === _rolesdecorator.TypeSetor.Administrador || user.setor === _rolesdecorator.TypeSetor.Almoxarifado || user.setor === _rolesdecorator.TypeSetor.Frota;
        }
        if (TIPO === _client.TipoRequerimento.CME) {
            return user.setor === _rolesdecorator.TypeSetor.Administrador || user.setor === _rolesdecorator.TypeSetor.CME || user.setor === _rolesdecorator.TypeSetor.Frota;
        }
        return false;
    }
    buildFiltroWhere(filtro) {
        const where = {};
        const status = (0, _normalize.normalizeText)(filtro.status);
        const dataInicial = (0, _normalize.normalizeDate)(filtro.data_inicial);
        const dataFinal = (0, _normalize.normalizeDate)(filtro.data_final, true);
        if (status) {
            (0, _assert.assertCondition)(Object.values(_client.Status).includes(status), 'Status inválido.');
            where.status = status;
        }
        const base = (0, _normalize.normalizeText)(filtro.base);
        const userId = (0, _normalize.normalizeText)(filtro.userId);
        const ambulanciaId = (0, _normalize.normalizeText)(filtro.ambulanciaId);
        const numero = (0, _normalize.normalizeNumero)(filtro.numero);
        if (base) where.base = base;
        if (userId) where.userId = userId;
        if (ambulanciaId) where.ambulanciaId = ambulanciaId;
        if (numero) where.numero = numero;
        if (dataInicial || dataFinal) {
            where.data_inicio = {
                ...dataInicial && {
                    gte: dataInicial
                },
                ...dataFinal && {
                    lte: dataFinal
                }
            };
        }
        return where;
    }
    // Valida o item para ter certeza que tem um produto ou medicamento
    validateItemProduct(produto, medicamento) {
        (0, _assert.assertCondition)(!!(produto || medicamento), 'Cada item deve ter um produto ou medicamento informado.');
        (0, _assert.assertCondition)(!(produto && medicamento), 'Um item não pode ter produto e medicamento simultaneamente.');
    }
    // Sincroniza os itens do requerimento com o banco de dados
    async syncItems(requerimentoId, itens, user) {
        if (!itens) return;
        for (const item of itens){
            this.validateItemProduct(item.produtoId, item.medicamentoId);
        }
        const currentItems = await this.repo.findActiveItems(requerimentoId);
        const currentItemIds = new Set(currentItems.map((item)=>item.id));
        const incomingItemIds = new Set(itens.map((item)=>item.id).filter((id)=>Boolean(id)));
        for (const itemId of incomingItemIds){
            (0, _assert.assertCondition)(currentItemIds.has(itemId), 'Item informado não pertence ao requerimento.');
        }
        await this.repo.prisma.$transaction(async (tx)=>{
            for (const currentItem of currentItems){
                if (!incomingItemIds.has(currentItem.id)) {
                    await tx.requerimentoItem.update({
                        where: {
                            id: currentItem.id
                        },
                        data: {
                            deleted_by: user.id,
                            deleted_at: new Date()
                        }
                    });
                }
            }
            for (const item of itens){
                if (item.id) {
                    await tx.requerimentoItem.update({
                        where: {
                            id: item.id
                        },
                        data: {
                            produtoId: item.produtoId ?? null,
                            medicamentoId: item.medicamentoId ?? null,
                            quantidade: item.quantidade,
                            ocorrencia: item.ocorrencia ?? null,
                            deleted_by: null,
                            deleted_at: null
                        }
                    });
                    continue;
                }
                await tx.requerimentoItem.create({
                    data: {
                        requerimentoId,
                        produtoId: item.produtoId ?? null,
                        medicamentoId: item.medicamentoId ?? null,
                        quantidade: item.quantidade,
                        ocorrencia: item.ocorrencia ?? null,
                        userId: user.id
                    }
                });
            }
        });
    }
    // ── Queries ───────────────────────────────────────────────────────────────
    async findAll(tipo, user) {
        let where = {};
        if (this.isGetAll(user, tipo)) {
            where = {
                status: {
                    notIn: [
                        _client.Status.Rascunho,
                        _client.Status.Cancelado
                    ]
                }
            };
        } else {
            where = {
                // status: { notIn: [Status.Rascunho, Status.Cancelado] },
                base: user.base
            };
        }
        return this.repo.findAll(tipo, where);
    }
    async findByFiltro(tipo, filtro, user) {
        const filtroWhere = this.buildFiltroWhere(filtro);
        const accessWhere = this.isGetAll(user, tipo) ? {} : {
            base: user.base
        };
        return this.repo.findAll(tipo, {
            ...filtroWhere,
            ...accessWhere
        });
    }
    async findStatus(tipo, user) {
        const where = this.isGetAll(user, tipo) ? {} : {
            base: user.base
        };
        return this.repo.findAll(tipo, {
            base: where.base,
            status: {
                in: [
                    _client.Status.Recebido,
                    _client.Status.Separacao,
                    _client.Status.Finalizado
                ]
            }
        });
    }
    async findOne(id, tipo, user) {
        let req = await this.repo.findById(id, tipo);
        if (!req) {
            (0, _assert.assertPermission)(this.isGetAll(user, tipo), 'Requisição não encontrada ou sem permissão.');
        }
        if (_rolesdecorator.TypeSetor.Base === user.setor && req?.base !== user.base) {
            (0, _assert.assertPermission)(this.isGetAll(user, tipo), 'Sem permissão para acessar requerimento de outra base.');
        }
        if (_rolesdecorator.TypeSetor.Administrativo === user.setor && req?.setor !== user.setor) {
            (0, _assert.assertPermission)(this.isGetAll(user, tipo), 'Sem permissão para acessar requerimento de outro setor.');
        }
        req = (0, _assert.assertFound)(req);
        req.RequerimentoItems = this.orderItems(req.RequerimentoItems);
        return req;
    }
    // ── Mutations ─────────────────────────────────────────────────────────────
    async create(tipo, dto, user) {
        const itens = dto.itens ?? [];
        for (const item of itens){
            this.validateItemProduct(item.produtoId, item.medicamentoId);
        }
        const numero = await this.repo.getNextNumero();
        let setor = dto.setor;
        let base = dto.base;
        // ADM pode abrir para qualquer setor
        if (user.setor !== _rolesdecorator.TypeSetor.Administrador) {
            setor = user.setor;
            base = user.base;
        }
        if (dto.status === _client.Status.Rascunho) {
            const existRascunho = await this.repo.findAll(tipo, {
                base: base,
                setor: setor,
                ambulanciaId: dto.ambulanciaId ?? null,
                status: _client.Status.Rascunho,
                userId: user.id
            });
            if (existRascunho.length > 0) {
                throw new _common.HttpException('Já existe um requerimento em rascunho com esses dados. Envie ou remove o rascunho aberto.', _common.HttpStatus.BAD_REQUEST);
            }
        }
        const requerimento = await this.repo.prisma.$transaction(async (tx)=>{
            const reqCreated = await tx.requerimento.create({
                data: {
                    numero,
                    tipo,
                    status: dto.status,
                    data_inicio: new Date(),
                    data_fim: null,
                    obs: dto.obs ?? null,
                    base: base,
                    setor: setor,
                    cargo: user.cargo,
                    ambulanciaId: dto.ambulanciaId ?? null,
                    userId: user.id
                }
            });
            await tx.requerimentoItem.createMany({
                data: itens.map((item)=>({
                        requerimentoId: reqCreated.id,
                        produtoId: item.produtoId ?? null,
                        medicamentoId: item.medicamentoId ?? null,
                        quantidade: item.quantidade,
                        ocorrencia: item.ocorrencia ?? null,
                        userId: user.id
                    }))
            });
            return reqCreated;
        });
        if (requerimento.status === _client.Status.Recebido) {
            this.notificacaoUseCase.dispatchNotification(()=>this.notificacaoUseCase.notifyCreated({
                    id: requerimento.id,
                    numero: requerimento.numero,
                    tipo: requerimento.tipo
                }), `Falha ao notificar criação do requerimento #${requerimento.numero}`);
        }
        return this.findOne(requerimento.id, tipo, user);
    }
    async update(id, tipo, dto, user) {
        const req = (0, _assert.assertFound)(await this.repo.findRawById(id, tipo));
        (0, _assert.assertPermission)(this.isGetAll(user, tipo) || req.status === _client.Status.Rascunho, 'Requerimentos somente podem ser editados quando em rascunho.');
        (0, _assert.assertPermission)(this.isGetAll(user, tipo) || req.base === user.base);
        await this.repo.update(id, {
            ...this.isGetAll(user, tipo) && dto.base !== undefined && {
                base: dto.base
            },
            ...this.isGetAll(user, tipo) && dto.setor !== undefined && {
                setor: dto.setor
            },
            ...dto.obs !== undefined && {
                obs: dto.obs
            },
            ...dto.ambulanciaId !== undefined && {
                ambulanciaId: dto.ambulanciaId ?? null
            }
        });
        await this.syncItems(id, dto.itens, user);
        return this.findOne(id, tipo, user);
    }
    // USADO NAS PAGINAS DE GESTÃO DOS REQUERIMENTOS COM BUTTONS SEND
    async enviar(id, tipo, user) {
        const req = (0, _assert.assertFound)(await this.repo.findRawById(id, tipo));
        (0, _assert.assertCondition)(req.status === _client.Status.Rascunho, 'Apenas requerimentos em rascunho podem ser enviados.');
        (0, _assert.assertPermission)(this.isGetAll(user, tipo) || req.base === user.base);
        const totalItens = await this.repo.countActiveItems(id);
        (0, _assert.assertCondition)(totalItens > 0, 'O requerimento deve ter pelo menos um item antes de ser enviado.');
        await this.repo.updateStatus(id, _client.Status.Recebido, user.id);
        this.notificacaoUseCase.dispatchNotification(()=>this.notificacaoUseCase.notifyCreated({
                id: req.id,
                numero: req.numero,
                tipo: req.tipo
            }), `Falha ao notificar criação o status do requerimento #${req.numero}`);
        return this.findOne(id, tipo, user);
    }
    async changeStatus(id, tipo, dto, user) {
        const req = (0, _assert.assertFound)(await this.repo.findRawById(id, tipo));
        const novoStatus = dto.status;
        (0, _assert.assertCondition)(!TERMINAL_STATUS.includes(req.status), `Requerimento com status "${req.status}" não pode ser alterado.`);
        (0, _assert.assertCondition)(novoStatus !== _client.Status.Rascunho, 'Não é possível retornar ao status Rascunho.');
        if (!this.isGetAll(user, tipo)) {
            const permitidos = STATUS_TRANSITIONS[req.status] ?? [];
            (0, _assert.assertCondition)(permitidos.includes(novoStatus), `Transição inválida: ${req.status} → ${novoStatus}.`);
        }
        await this.repo.updateStatus(id, novoStatus, user.id);
        // USADO NAS PAGINAS DE GESTÃO DOS REQUERIMENTOS COM BUTTONS STATUS
        this.notificacaoUseCase.dispatchNotification(()=>this.notificacaoUseCase.notifyStatusChanged({
                id: req.id,
                numero: req.numero,
                tipo: req.tipo,
                base: req.base
            }, novoStatus), `Falha ao notificar status alterado do requerimento #${req.numero}`);
        return this.findOne(id, tipo, user);
    }
    async delete(id, tipo, user) {
        const req = (0, _assert.assertFound)(await this.repo.findRawById(id, tipo));
        if (TERMINAL_STATUS.includes(req.status)) {
            throw new _common.HttpException('Requerimento finalizado ou cancelado não pode ser excluído.', _common.HttpStatus.BAD_REQUEST);
        }
        // ADM e COORDENADOR do almoxarifado
        if (user.setor === _rolesdecorator.TypeSetor.Administrador || user.cargo === _rolesdecorator.TypeCargo.Almoxarifado) {
            return await this.repo.delete(id);
        }
        (0, _assert.assertCondition)(req.userId === user.id, 'Você não tem permissão para excluir este requerimento.');
        if (req.status !== _client.Status.Rascunho) {
            throw new _common.HttpException('Apenas requerimentos em rascunho podem ser excluídos.', _common.HttpStatus.BAD_REQUEST);
        }
        await this.repo.delete(id);
    }
    async addItem(id, tipo, dto, user) {
        const req = (0, _assert.assertFound)(await this.repo.findRawById(id, tipo));
        (0, _assert.assertPermission)(this.isGetAll(user, tipo) || req.status === _client.Status.Rascunho, 'Itens só podem ser adicionados pelo administrador após o envio.');
        this.validateItemProduct(dto.produtoId, dto.medicamentoId);
        return this.repo.createItem({
            requerimentoId: id,
            produtoId: dto.produtoId ?? null,
            medicamentoId: dto.medicamentoId ?? null,
            quantidade: dto.quantidade,
            ocorrencia: dto.ocorrencia ?? null,
            userId: user.id
        });
    }
    async updateItem(requerimentoId, itemId, tipo, dto, user) {
        const req = (0, _assert.assertFound)(await this.repo.findRawById(requerimentoId, tipo));
        (0, _assert.assertPermission)(this.isGetAll(user, tipo) || req.status === _client.Status.Rascunho, 'Itens só podem ser editados pelo administrador após o envio.');
        (0, _assert.assertFound)(await this.repo.findItem(itemId, requerimentoId), 'Item não encontrado.');
        return this.repo.updateItem(itemId, {
            quantidade: dto.quantidade,
            ...dto.ocorrencia !== undefined && {
                ocorrencia: dto.ocorrencia
            }
        });
    }
    async removeItem(requerimentoId, itemId, tipo, user) {
        const req = (0, _assert.assertFound)(await this.repo.findRawById(requerimentoId, tipo));
        (0, _assert.assertPermission)(this.isGetAll(user, tipo) || req.status === _client.Status.Rascunho, 'Itens só podem ser removidos pelo administrador após o envio.');
        (0, _assert.assertFound)(await this.repo.findItem(itemId, requerimentoId), 'Item não encontrado.');
        await this.repo.softDeleteItem(itemId, user.id);
    }
    orderItems(items) {
        return items.sort((a, b)=>{
            const ordemA = a.Produto?.ordem;
            const ordemB = b.Produto?.ordem;
            const nomeA = a.Produto?.nome ?? a.Medicamento?.nome ?? '';
            const nomeB = b.Produto?.nome ?? b.Medicamento?.nome ?? '';
            const aTemOrdemValida = ordemA !== null && ordemA !== undefined && ordemA > 0;
            const bTemOrdemValida = ordemB !== null && ordemB !== undefined && ordemB > 0;
            // Quem tem ordem válida vem primeiro
            if (aTemOrdemValida && !bTemOrdemValida) return -1;
            if (!aTemOrdemValida && bTemOrdemValida) return 1;
            // Se os dois têm ordem válida, ordena pela ordem
            if (aTemOrdemValida && bTemOrdemValida) {
                if (ordemA !== ordemB) {
                    return ordemA - ordemB;
                }
                // Se a ordem for igual, ordena por nome
                return nomeA.localeCompare(nomeB, 'pt-BR');
            }
            // Se os dois são ordem 0/null/undefined, ordena por nome no final
            return nomeA.localeCompare(nomeB, 'pt-BR');
        });
    }
};
RequerimentoService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _requerimentorepository.RequerimentoRepository === "undefined" ? Object : _requerimentorepository.RequerimentoRepository,
        typeof _notificacaorequerimentousecase.NotificacaoRequerimentoUseCase === "undefined" ? Object : _notificacaorequerimentousecase.NotificacaoRequerimentoUseCase
    ])
], RequerimentoService);

//# sourceMappingURL=requerimento.service.js.map