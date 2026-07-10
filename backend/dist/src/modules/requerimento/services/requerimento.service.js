"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequerimentoService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const roles_decorator_1 = require("../../../infra/guard/roles.decorator");
const requerimento_repository_1 = require("../repository/requerimento.repository");
const normalize_1 = require("../../../common/helpers/normalize");
const assert_1 = require("../../../common/helpers/assert");
const STATUS_TRANSITIONS = {
    [client_1.Status.Recebido]: [client_1.Status.Analise, client_1.Status.Cancelado],
    [client_1.Status.Analise]: [client_1.Status.Separacao, client_1.Status.Cancelado],
    [client_1.Status.Separacao]: [client_1.Status.Finalizado, client_1.Status.Cancelado],
};
const TERMINAL_STATUS = [client_1.Status.Finalizado, client_1.Status.Cancelado];
let RequerimentoService = class RequerimentoService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    isGetAll(user, TIPO) {
        console.log('isGetAll', user, TIPO);
        if (TIPO === client_1.TipoRequerimento.Farmacia) {
            return (user.setor === roles_decorator_1.TypeSetor.Administrador ||
                user.setor === roles_decorator_1.TypeSetor.Farmacia ||
                user.setor === roles_decorator_1.TypeSetor.Frota);
        }
        if (TIPO === client_1.TipoRequerimento.Almoxarifado) {
            return (user.setor === roles_decorator_1.TypeSetor.Administrador ||
                user.setor === roles_decorator_1.TypeSetor.Almoxarifado ||
                user.setor === roles_decorator_1.TypeSetor.Frota);
        }
        if (TIPO === client_1.TipoRequerimento.CME) {
            return (user.setor === roles_decorator_1.TypeSetor.Administrador ||
                user.setor === roles_decorator_1.TypeSetor.CME ||
                user.setor === roles_decorator_1.TypeSetor.Frota);
        }
        return false;
    }
    buildFiltroWhere(filtro) {
        const where = {};
        const status = (0, normalize_1.normalizeText)(filtro.status);
        const dataInicial = (0, normalize_1.normalizeDate)(filtro.data_inicial);
        const dataFinal = (0, normalize_1.normalizeDate)(filtro.data_final, true);
        if (status) {
            (0, assert_1.assertCondition)(Object.values(client_1.Status).includes(status), 'Status inválido.');
            where.status = status;
        }
        const base = (0, normalize_1.normalizeText)(filtro.base);
        const userId = (0, normalize_1.normalizeText)(filtro.userId);
        const ambulanciaId = (0, normalize_1.normalizeText)(filtro.ambulanciaId);
        const numero = (0, normalize_1.normalizeNumero)(filtro.numero);
        if (base)
            where.base = base;
        if (userId)
            where.userId = userId;
        if (ambulanciaId)
            where.ambulanciaId = ambulanciaId;
        if (numero)
            where.numero = numero;
        if (dataInicial || dataFinal) {
            where.data_inicio = {
                ...(dataInicial && { gte: dataInicial }),
                ...(dataFinal && { lte: dataFinal }),
            };
        }
        return where;
    }
    validateItemProduct(produto, medicamento) {
        (0, assert_1.assertCondition)(!!(produto || medicamento), 'Cada item deve ter um produto ou medicamento informado.');
        (0, assert_1.assertCondition)(!(produto && medicamento), 'Um item não pode ter produto e medicamento simultaneamente.');
    }
    async syncItems(requerimentoId, itens, user) {
        if (!itens)
            return;
        for (const item of itens) {
            this.validateItemProduct(item.produtoId, item.medicamentoId);
        }
        const currentItems = await this.repo.findActiveItems(requerimentoId);
        const currentItemIds = new Set(currentItems.map((item) => item.id));
        const incomingItemIds = new Set(itens.map((item) => item.id).filter((id) => Boolean(id)));
        for (const itemId of incomingItemIds) {
            (0, assert_1.assertCondition)(currentItemIds.has(itemId), 'Item informado não pertence ao requerimento.');
        }
        await this.repo.prisma.$transaction(async (tx) => {
            for (const currentItem of currentItems) {
                if (!incomingItemIds.has(currentItem.id)) {
                    await tx.requerimentoItem.update({
                        where: { id: currentItem.id },
                        data: { deleted_by: user.id, deleted_at: new Date() },
                    });
                }
            }
            for (const item of itens) {
                if (item.id) {
                    await tx.requerimentoItem.update({
                        where: { id: item.id },
                        data: {
                            produtoId: item.produtoId ?? null,
                            medicamentoId: item.medicamentoId ?? null,
                            quantidade: item.quantidade,
                            ocorrencia: item.ocorrencia ?? null,
                            deleted_by: null,
                            deleted_at: null,
                        },
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
                        userId: user.id,
                    },
                });
            }
        });
    }
    async findAll(tipo, user) {
        const where = this.isGetAll(user, tipo) ? {} : { base: user.base };
        return this.repo.findAll(tipo, where);
    }
    async findByFiltro(tipo, filtro, user) {
        const filtroWhere = this.buildFiltroWhere(filtro);
        const accessWhere = this.isGetAll(user, tipo) ? {} : { base: user.base };
        return this.repo.findAll(tipo, { ...filtroWhere, ...accessWhere });
    }
    async findStatus(tipo, user) {
        const where = this.isGetAll(user, tipo) ? {} : { base: user.base };
        return this.repo.findAll(tipo, {
            base: where.base,
            status: { in: [client_1.Status.Recebido, client_1.Status.Separacao, client_1.Status.Finalizado] },
        });
    }
    async findOne(id, tipo, user) {
        let req = await this.repo.findById(id, tipo);
        if (!req) {
            (0, assert_1.assertPermission)(this.isGetAll(user, tipo), 'Requisição não encontrada ou sem permissão.');
        }
        if (req?.base !== user.base) {
            (0, assert_1.assertPermission)(this.isGetAll(user, tipo), 'Sem permissão para acessar requerimento de outra base.');
        }
        if (req?.setor !== user.setor) {
            (0, assert_1.assertPermission)(this.isGetAll(user, tipo), 'Sem permissão para acessar requerimento de outro setor.');
        }
        req = (0, assert_1.assertFound)(req);
        req.RequerimentoItems = this.orderItems(req.RequerimentoItems);
        return req;
    }
    async create(tipo, dto, user) {
        const itens = dto.itens ?? [];
        for (const item of itens) {
            this.validateItemProduct(item.produtoId, item.medicamentoId);
        }
        const numero = await this.repo.getNextNumero();
        let setor = dto.setor;
        let base = dto.base;
        if (user.setor !== roles_decorator_1.TypeSetor.Administrador) {
            setor = user.setor;
            base = user.base;
        }
        if (dto.status === client_1.Status.Rascunho) {
            const existRascunho = await this.repo.findAll(tipo, {
                base: base,
                setor: setor,
                ambulanciaId: dto.ambulanciaId ?? null,
                status: client_1.Status.Rascunho,
                userId: user.id,
            });
            if (existRascunho.length > 0) {
                throw new common_1.HttpException('Já existe um requerimento em rascunho com esses dados. Envie ou remove o rascunho aberto.', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        const requerimento = await this.repo.prisma.$transaction(async (tx) => {
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
                    userId: user.id,
                },
            });
            await tx.requerimentoItem.createMany({
                data: itens.map((item) => ({
                    requerimentoId: reqCreated.id,
                    produtoId: item.produtoId ?? null,
                    medicamentoId: item.medicamentoId ?? null,
                    quantidade: item.quantidade,
                    ocorrencia: item.ocorrencia ?? null,
                    userId: user.id,
                })),
            });
            return reqCreated;
        });
        return this.findOne(requerimento.id, tipo, user);
    }
    async update(id, tipo, dto, user) {
        const req = (0, assert_1.assertFound)(await this.repo.findRawById(id, tipo));
        (0, assert_1.assertPermission)(this.isGetAll(user, tipo) || req.status === client_1.Status.Rascunho, 'Requerimentos somente podem ser editados quando em rascunho.');
        (0, assert_1.assertPermission)(this.isGetAll(user, tipo) || req.base === user.base);
        await this.repo.update(id, {
            ...(this.isGetAll(user, tipo) &&
                dto.base !== undefined && { base: dto.base }),
            ...(this.isGetAll(user, tipo) &&
                dto.setor !== undefined && { setor: dto.setor }),
            ...(dto.obs !== undefined && { obs: dto.obs }),
            ...(dto.ambulanciaId !==
                undefined && {
                ambulanciaId: dto.ambulanciaId ?? null,
            }),
        });
        await this.syncItems(id, dto.itens, user);
        return this.findOne(id, tipo, user);
    }
    async enviar(id, tipo, user) {
        const req = (0, assert_1.assertFound)(await this.repo.findRawById(id, tipo));
        (0, assert_1.assertCondition)(req.status === client_1.Status.Rascunho, 'Apenas requerimentos em rascunho podem ser enviados.');
        (0, assert_1.assertPermission)(this.isGetAll(user, tipo) || req.base === user.base);
        const totalItens = await this.repo.countActiveItems(id);
        (0, assert_1.assertCondition)(totalItens > 0, 'O requerimento deve ter pelo menos um item antes de ser enviado.');
        await this.repo.updateStatus(id, client_1.Status.Recebido, user.id);
        return this.findOne(id, tipo, user);
    }
    async changeStatus(id, tipo, dto, user) {
        const req = (0, assert_1.assertFound)(await this.repo.findRawById(id, tipo));
        const novoStatus = dto.status;
        (0, assert_1.assertCondition)(!TERMINAL_STATUS.includes(req.status), `Requerimento com status "${req.status}" não pode ser alterado.`);
        (0, assert_1.assertCondition)(novoStatus !== client_1.Status.Rascunho, 'Não é possível retornar ao status Rascunho.');
        if (!this.isGetAll(user, tipo)) {
            const permitidos = STATUS_TRANSITIONS[req.status] ?? [];
            (0, assert_1.assertCondition)(permitidos.includes(novoStatus), `Transição inválida: ${req.status} → ${novoStatus}.`);
        }
        await this.repo.updateStatus(id, novoStatus, user.id);
        return this.findOne(id, tipo, user);
    }
    async delete(id, tipo, user) {
        const req = (0, assert_1.assertFound)(await this.repo.findRawById(id, tipo));
        if (TERMINAL_STATUS.includes(req.status)) {
            throw new common_1.HttpException('Requerimento finalizado ou cancelado não pode ser excluído.', common_1.HttpStatus.BAD_REQUEST);
        }
        if (user.setor === roles_decorator_1.TypeSetor.Administrador ||
            user.cargo === roles_decorator_1.TypeCargo.Almoxarifado) {
            return await this.repo.delete(id);
        }
        (0, assert_1.assertCondition)(req.userId === user.id, 'Você não tem permissão para excluir este requerimento.');
        if (req.status !== client_1.Status.Rascunho) {
            throw new common_1.HttpException('Apenas requerimentos em rascunho podem ser excluídos.', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.repo.delete(id);
    }
    async addItem(id, tipo, dto, user) {
        const req = (0, assert_1.assertFound)(await this.repo.findRawById(id, tipo));
        (0, assert_1.assertPermission)(this.isGetAll(user, tipo) || req.status === client_1.Status.Rascunho, 'Itens só podem ser adicionados pelo administrador após o envio.');
        this.validateItemProduct(dto.produtoId, dto.medicamentoId);
        return this.repo.createItem({
            requerimentoId: id,
            produtoId: dto.produtoId ?? null,
            medicamentoId: dto.medicamentoId ?? null,
            quantidade: dto.quantidade,
            ocorrencia: dto.ocorrencia ?? null,
            userId: user.id,
        });
    }
    async updateItem(requerimentoId, itemId, tipo, dto, user) {
        const req = (0, assert_1.assertFound)(await this.repo.findRawById(requerimentoId, tipo));
        (0, assert_1.assertPermission)(this.isGetAll(user, tipo) || req.status === client_1.Status.Rascunho, 'Itens só podem ser editados pelo administrador após o envio.');
        (0, assert_1.assertFound)(await this.repo.findItem(itemId, requerimentoId), 'Item não encontrado.');
        return this.repo.updateItem(itemId, {
            quantidade: dto.quantidade,
            ...(dto.ocorrencia !== undefined && { ocorrencia: dto.ocorrencia }),
        });
    }
    async removeItem(requerimentoId, itemId, tipo, user) {
        const req = (0, assert_1.assertFound)(await this.repo.findRawById(requerimentoId, tipo));
        (0, assert_1.assertPermission)(this.isGetAll(user, tipo) || req.status === client_1.Status.Rascunho, 'Itens só podem ser removidos pelo administrador após o envio.');
        (0, assert_1.assertFound)(await this.repo.findItem(itemId, requerimentoId), 'Item não encontrado.');
        await this.repo.softDeleteItem(itemId, user.id);
    }
    orderItems(items) {
        return items.sort((a, b) => {
            const ordemA = a.Produto?.ordem;
            const ordemB = b.Produto?.ordem;
            const nomeA = a.Produto?.nome ?? a.Medicamento?.nome ?? '';
            const nomeB = b.Produto?.nome ?? b.Medicamento?.nome ?? '';
            const aTemOrdemValida = ordemA !== null && ordemA !== undefined && ordemA > 0;
            const bTemOrdemValida = ordemB !== null && ordemB !== undefined && ordemB > 0;
            if (aTemOrdemValida && !bTemOrdemValida)
                return -1;
            if (!aTemOrdemValida && bTemOrdemValida)
                return 1;
            if (aTemOrdemValida && bTemOrdemValida) {
                if (ordemA !== ordemB) {
                    return ordemA - ordemB;
                }
                return nomeA.localeCompare(nomeB, 'pt-BR');
            }
            return nomeA.localeCompare(nomeB, 'pt-BR');
        });
    }
};
exports.RequerimentoService = RequerimentoService;
exports.RequerimentoService = RequerimentoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [requerimento_repository_1.RequerimentoRepository])
], RequerimentoService);
//# sourceMappingURL=requerimento.service.js.map