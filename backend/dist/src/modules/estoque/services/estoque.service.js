"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EstoqueService", {
    enumerable: true,
    get: function() {
        return EstoqueService;
    }
});
const _common = require("@nestjs/common");
const _client = require("../../../../generated/prisma/client");
const _estoquerepository = require("../repository/estoque.repository");
const _estoquevalidadeservice = require("./estoque-validade.service");
const _rolesdecorator = require("../../../infra/guard/roles.decorator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const TIPOS_ENTRADA = new Set([
    _client.TipoMovimentacaoEstoque.Entrada,
    _client.TipoMovimentacaoEstoque.AjusteEntrada,
    _client.TipoMovimentacaoEstoque.TransferenciaEntrada
]);
const TIPOS_SAIDA_BLOQUEADA = new Set([
    _client.TipoMovimentacaoEstoque.Saida,
    _client.TipoMovimentacaoEstoque.TransferenciaSaida
]);
let EstoqueService = class EstoqueService {
    constructor(repository){
        this.repository = repository;
    }
    async createEstoque(data) {
        return this.repository.prisma.estoque.create({
            data
        });
    }
    async createLote(data, userId) {
        const existeEstoque = await this.repository.prisma.estoque.count({
            where: {
                id: data.estoqueId
            }
        });
        if (existeEstoque !== 1) throw new _common.NotFoundException('Estoque não encontrado.');
        const chaveLote = (0, _estoquevalidadeservice.buildChaveLote)(data.lote, data.validade);
        return this.repository.prisma.$transaction(async (tx)=>{
            const lote = await tx.estoqueLote.upsert({
                where: {
                    estoqueId_chaveLote: {
                        estoqueId: data.estoqueId,
                        chaveLote
                    }
                },
                update: {
                    quantidade: {
                        increment: data.quantidade
                    },
                    active: true
                },
                create: {
                    ...data,
                    chaveLote
                }
            });
            await tx.estoqueMovimentacao.create({
                data: {
                    loteId: lote.id,
                    userId,
                    tipo: 'Entrada',
                    quantidade: data.quantidade,
                    saldoAnterior: lote.quantidade - data.quantidade,
                    saldoPosterior: lote.quantidade,
                    observacao: 'Entrada via abertura de lote.'
                }
            });
            return lote;
        });
    }
    async movimentar(loteId, user, data) {
        return this.repository.prisma.$transaction(async (tx)=>{
            const lote = await tx.estoqueLote.findUnique({
                where: {
                    id: loteId
                },
                include: {
                    Estoque: {
                        select: {
                            baseId: true
                        }
                    }
                }
            });
            if (!lote) throw new _common.NotFoundException('Lote de estoque não encontrado.');
            // Verifica se o usuário é da base e se o lote pertence a essa base
            if (user.setor === _rolesdecorator.TypeSetor.Base) {
                if (user.baseId !== lote.Estoque.baseId) {
                    throw new _common.BadRequestException('Você não tem permissão para movimentar estoque nesta base.');
                }
            }
            const status = (0, _estoquevalidadeservice.classificarValidade)(lote.validade).status;
            if (TIPOS_SAIDA_BLOQUEADA.has(data.tipo) && (lote.bloqueado || status === _estoquevalidadeservice.StatusValidadeEstoque.Vencido)) {
                throw new _common.ConflictException('Lote bloqueado ou vencido não permite saída.');
            }
            const entrada = TIPOS_ENTRADA.has(data.tipo);
            if (!entrada) {
                const debitado = await tx.estoqueLote.updateMany({
                    where: {
                        id: loteId,
                        quantidade: {
                            gte: data.quantidade
                        }
                    },
                    data: {
                        quantidade: {
                            decrement: data.quantidade
                        }
                    }
                });
                if (debitado.count !== 1) throw new _common.ConflictException('Saldo insuficiente para a movimentação.');
            } else {
                await tx.estoqueLote.update({
                    where: {
                        id: loteId
                    },
                    data: {
                        quantidade: {
                            increment: data.quantidade
                        }
                    }
                });
            }
            const atualizado = await tx.estoqueLote.findUniqueOrThrow({
                where: {
                    id: loteId
                }
            });
            const saldoAnterior = entrada ? atualizado.quantidade - data.quantidade : atualizado.quantidade + data.quantidade;
            const movimentacao = await tx.estoqueMovimentacao.create({
                data: {
                    loteId,
                    userId: user.id,
                    tipo: data.tipo,
                    quantidade: data.quantidade,
                    saldoAnterior,
                    saldoPosterior: atualizado.quantidade,
                    observacao: data.observacao
                }
            });
            return {
                lote: atualizado,
                movimentacao
            };
        }, {
            isolationLevel: _client.Prisma.TransactionIsolationLevel.ReadCommitted
        });
    }
    async bloquear(loteId, bloqueado, motivoBloqueio) {
        try {
            return await this.repository.prisma.estoqueLote.update({
                where: {
                    id: loteId
                },
                data: {
                    bloqueado,
                    motivoBloqueio: bloqueado ? motivoBloqueio : null
                }
            });
        } catch (error) {
            if (error instanceof _client.Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new _common.NotFoundException('Lote de estoque não encontrado.');
            }
            throw error;
        }
    }
    async softDelete(loteId, userId) {
        try {
            return await this.repository.prisma.$transaction(async (tx)=>{
                const lote = await tx.estoqueLote.findUnique({
                    where: {
                        id: loteId
                    }
                });
                if (!lote) throw new _common.NotFoundException('Lote de estoque não encontrado.');
                if (lote.quantidade !== 0) throw new _common.ConflictException('Lote com quantidade não pode ser desabilitado.');
                await tx.estoqueMovimentacao.create({
                    data: {
                        loteId,
                        userId,
                        tipo: _client.TipoMovimentacaoEstoque.Desabilitado,
                        quantidade: lote.quantidade,
                        saldoAnterior: lote.quantidade,
                        saldoPosterior: 0,
                        observacao: 'Lote desabilitado.'
                    }
                });
                return await tx.estoqueLote.update({
                    where: {
                        id: loteId
                    },
                    data: {
                        active: false
                    }
                });
            });
        } catch (error) {
            if (error instanceof _client.Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new _common.NotFoundException('Lote de estoque não encontrado.');
            }
            throw error;
        }
    }
    async findAll(user, page = 1, limit = 20, filters) {
        let where = {};
        where = this.buildWhere(user, filters, where);
        const [total, items] = await Promise.all([
            this.repository.prisma.estoque.count({
                where
            }),
            this.repository.prisma.estoque.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
                orderBy: {
                    updated_at: 'desc'
                },
                select: {
                    id: true,
                    baseId: true,
                    quantidadeMinima: true,
                    ativo: true,
                    Produto: {
                        select: {
                            id: true,
                            nome: true,
                            codigo: true
                        }
                    },
                    Medicamento: {
                        select: {
                            id: true,
                            nome: true,
                            codigo: true,
                            especificacao: true
                        }
                    },
                    Base: {
                        select: {
                            nome: true
                        }
                    }
                }
            })
        ]);
        const resumo = new Map();
        const estoqueIds = items.map((item)=>item.id);
        if (estoqueIds.length > 0) {
            const lotes = await this.repository.prisma.estoqueLote.groupBy({
                by: [
                    'estoqueId',
                    'validade'
                ],
                where: {
                    estoqueId: {
                        in: estoqueIds
                    },
                    active: true
                },
                _sum: {
                    quantidade: true
                },
                _count: {
                    _all: true
                }
            });
            for (const lote of lotes){
                const status = (0, _estoquevalidadeservice.classificarValidade)(lote.validade).status;
                const atual = resumo.get(lote.estoqueId) ?? {
                    quantidadeTotal: 0,
                    proximaValidade: null,
                    proximaValidadeStatus: null,
                    validadeResumo: {
                        SemValidade: 0,
                        Regular: 0,
                        Atencao: 0,
                        Alerta: 0,
                        Vencido: 0
                    }
                };
                atual.quantidadeTotal += lote._sum.quantidade ?? 0;
                atual.validadeResumo[status] += lote._count._all;
                if (lote.validade && (!atual.proximaValidade || lote.validade < atual.proximaValidade)) {
                    atual.proximaValidade = lote.validade;
                    atual.proximaValidadeStatus = status;
                }
                resumo.set(lote.estoqueId, atual);
            }
        }
        return {
            items: items.map((item)=>({
                    ...item,
                    ...resumo.get(item.id) ?? {
                        quantidadeTotal: 0,
                        proximaValidade: null,
                        proximaValidadeStatus: null,
                        validadeResumo: {
                            SemValidade: 0,
                            Regular: 0,
                            Atencao: 0,
                            Alerta: 0,
                            Vencido: 0
                        }
                    }
                })),
            page,
            limit,
            total,
            pages: Math.ceil(total / limit)
        };
    }
    async findLotes(estoqueId, user) {
        const lotes = await this.repository.prisma.estoqueLote.findMany({
            where: {
                estoqueId,
                active: true,
                ...user.setor === _rolesdecorator.TypeSetor.Base ? {
                    Estoque: {
                        baseId: user.baseId
                    }
                } : {}
            },
            orderBy: [
                {
                    validade: 'asc'
                },
                {
                    created_at: 'asc'
                }
            ]
        });
        return lotes.map((lote)=>{
            const validade = (0, _estoquevalidadeservice.classificarValidade)(lote.validade);
            return {
                ...lote,
                ...validade,
                disponivelParaSaida: !lote.bloqueado && validade.status !== _estoquevalidadeservice.StatusValidadeEstoque.Vencido && lote.quantidade > 0
            };
        });
    }
    async findMovimentacoesByLote(loteId, user) {
        return this.repository.prisma.estoqueMovimentacao.findMany({
            where: {
                loteId,
                ...user.setor === _rolesdecorator.TypeSetor.Base ? {
                    Lote: {
                        Estoque: {
                            baseId: user.baseId
                        }
                    }
                } : {}
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                User: {
                    select: {
                        nome: true
                    }
                }
            }
        });
    }
    // ------------------------ Helper --------------------------
    buildWhere(user, query, where) {
        // Acesso a todas as bases
        if ([
            _rolesdecorator.TypeSetor.Administrador,
            _rolesdecorator.TypeSetor.Enfermagem,
            _rolesdecorator.TypeSetor.Frota
        ].includes(user.setor)) {
            where.baseId = query.baseId ? query.baseId : undefined;
        }
        // Base
        if (user.setor === _rolesdecorator.TypeSetor.Base) {
            if (!user.baseId) throw new _common.NotFoundException('Não tem base vinculado ao seu usuário.');
            where.baseId = user.baseId;
        }
        // Almoxarifado
        if (user.setor === _rolesdecorator.TypeSetor.Almoxarifado) query.tipo = 'produto';
        // Farmacia
        if (user.setor === _rolesdecorator.TypeSetor.Farmacia) query.tipo = 'medicamento';
        // Produtos
        if (query.tipo === 'produto') where.produtoId = {
            not: null
        };
        // Medicamentos
        if (query.tipo === 'medicamento') where.medicamentoId = {
            not: null
        };
        // Status
        if (query.status) {
            const hoje = new Date();
            const inicioHoje = new Date(Date.UTC(hoje.getUTCFullYear(), hoje.getUTCMonth(), hoje.getUTCDate()));
            const dataLimite = (dias)=>new Date(inicioHoje.getTime() + dias * 86_400_000);
            const validade = query.status === _estoquevalidadeservice.StatusValidadeEstoque.SemValidade ? {
                validade: null
            } : query.status === _estoquevalidadeservice.StatusValidadeEstoque.Vencido ? {
                validade: {
                    lt: inicioHoje
                }
            } : query.status === _estoquevalidadeservice.StatusValidadeEstoque.Alerta ? {
                validade: {
                    gte: inicioHoje,
                    lte: dataLimite(7)
                }
            } : query.status === _estoquevalidadeservice.StatusValidadeEstoque.Atencao ? {
                validade: {
                    gt: dataLimite(7),
                    lte: dataLimite(15)
                }
            } : {
                validade: {
                    gt: dataLimite(15)
                }
            };
            where.lotes = {
                some: {
                    active: true,
                    ...validade
                }
            };
        }
        const search = query.search?.trim();
        if (search) {
            const searchConditions = [
                {
                    Produto: {
                        nome: {
                            contains: search
                        }
                    }
                },
                {
                    Medicamento: {
                        nome: {
                            contains: search
                        }
                    }
                }
            ];
            const codigo = Number(search);
            if (Number.isInteger(codigo)) {
                searchConditions.push({
                    Produto: {
                        codigo
                    }
                }, {
                    Medicamento: {
                        codigo
                    }
                });
            }
            where.OR = searchConditions;
        }
        return where;
    }
};
EstoqueService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _estoquerepository.EstoqueRepository === "undefined" ? Object : _estoquerepository.EstoqueRepository
    ])
], EstoqueService);

//# sourceMappingURL=estoque.service.js.map