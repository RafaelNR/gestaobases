"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DashboardService", {
    enumerable: true,
    get: function() {
        return DashboardService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../../infra/database/prisma/prisma.service");
const _enums = require("../../../generated/prisma/enums");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _estoquevalidadeservice = require("../estoque/services/estoque-validade.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const PERIODOS_VISITAS = [
    3,
    7,
    15,
    30
];
let DashboardService = class DashboardService {
    constructor(prisma){
        this.prisma = prisma;
    }
    async countByStatus(query) {
        const { tipo, setor, base, cargo } = query;
        return this.prisma.requerimento.groupBy({
            by: [
                'status'
            ],
            where: {
                ...tipo ? {
                    tipo
                } : {},
                ...setor ? {
                    setor
                } : {},
                ...base ? {
                    base
                } : {},
                ...cargo ? {
                    cargo
                } : {},
                status: {
                    notIn: [
                        'Rascunho',
                        'Cancelado',
                        'Analise'
                    ]
                }
            },
            _count: {
                status: true
            }
        });
    }
    async countRequerimentos(user, tipo) {
        if (user.setor === _rolesdecorator.TypeSetor.Administrador) {
            return await this.countByStatus({
                tipo
            });
        }
        let setor = undefined;
        let base = undefined;
        let cargo = undefined;
        if (user?.setor === 'Almoxarifado') {
            tipo = _enums.TipoRequerimento.Almoxarifado;
        }
        if (user?.setor === 'CME') {
            tipo = _enums.TipoRequerimento.CME;
        }
        if (user?.setor === 'Farmacia') {
            tipo = _enums.TipoRequerimento.Farmacia;
        }
        // Se facilitador so pegar da sua base
        if (user?.setor === 'Base') {
            setor = user?.setor;
            base = user?.base;
        }
        if (user?.setor === 'Administrativo') {
            setor = user?.setor;
            base = user?.base;
            cargo = user?.cargo;
        }
        return await this.countByStatus({
            tipo,
            setor,
            base,
            cargo
        });
    }
    async findProximasVisitas(user, dias) {
        const periodoDias = PERIODOS_VISITAS.includes(dias) ? dias : 3;
        const agora = new Date();
        const inicioHoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
        const fimPeriodo = new Date(inicioHoje);
        fimPeriodo.setDate(fimPeriodo.getDate() + periodoDias);
        const visitas = await this.prisma.visitasBases.findMany({
            where: {
                base: {
                    not: null
                },
                data: {
                    gte: inicioHoje,
                    lt: fimPeriodo
                },
                ...user.setor === _rolesdecorator.TypeSetor.Base ? {
                    base: user.base
                } : {}
            },
            select: {
                id: true,
                data: true,
                base: true,
                descricao: true
            },
            orderBy: [
                {
                    data: 'asc'
                },
                {
                    base: 'asc'
                }
            ]
        });
        const bases = [
            ...new Set(visitas.map((visita)=>visita.base).filter(Boolean))
        ];
        if (bases.length === 0) return [];
        const inicioSemana = new Date(inicioHoje);
        const diaDaSemana = inicioSemana.getDay();
        inicioSemana.setDate(inicioSemana.getDate() - (diaDaSemana === 0 ? 6 : diaDaSemana - 1));
        const recebidos = await this.prisma.requerimento.findMany({
            where: {
                base: {
                    in: bases
                },
                created_at: {
                    gte: inicioSemana,
                    lte: agora
                },
                status: 'Recebido'
            },
            select: {
                base: true,
                created_at: true
            },
            orderBy: {
                created_at: 'asc'
            }
        });
        const visitasPorBase = new Map();
        for (const visita of visitas){
            if (!visita.base) continue;
            const visitasDaBase = visitasPorBase.get(visita.base) ?? [];
            visitasDaBase.push(visita);
            visitasPorBase.set(visita.base, visitasDaBase);
        }
        const visitasComRecebido = new Set();
        for (const requerimento of recebidos){
            if (!requerimento.base) continue;
            const visita = visitasPorBase.get(requerimento.base)?.find((item)=>item.data >= requerimento.created_at && !visitasComRecebido.has(item.id));
            if (visita) visitasComRecebido.add(visita.id);
        }
        return visitas.map((visita)=>{
            const diasRestantes = Math.round((visita.data.getTime() - inicioHoje.getTime()) / 86_400_000);
            const requerimentoRecebidoNaSemana = visitasComRecebido.has(visita.id);
            return {
                id: visita.id,
                data: visita.data,
                base: visita.base,
                descricao: visita.descricao,
                requerimentoRecebidoNaSemana,
                prioridade: requerimentoRecebidoNaSemana ? 'verde' : diasRestantes <= 1 ? 'vermelho' : 'amarelo'
            };
        });
    }
    async findLotesProximosVencimento(user, dias = 15) {
        const periodoDias = [
            15,
            30,
            45,
            60
        ].includes(dias) ? dias : 15;
        const agora = new Date();
        const inicioHoje = new Date(Date.UTC(agora.getUTCFullYear(), agora.getUTCMonth(), agora.getUTCDate()));
        const fimPeriodo = new Date(inicioHoje);
        fimPeriodo.setUTCDate(fimPeriodo.getUTCDate() + periodoDias);
        if (user.setor === _rolesdecorator.TypeSetor.Base && !user.baseId) {
            return [];
        }
        const lotes = await this.prisma.estoqueLote.findMany({
            where: {
                active: true,
                quantidade: {
                    gt: 0
                },
                validade: {
                    gte: inicioHoje,
                    lte: fimPeriodo
                },
                ...user.setor === _rolesdecorator.TypeSetor.Base ? {
                    Estoque: {
                        baseId: user.baseId
                    }
                } : {},
                ...user.setor === _rolesdecorator.TypeSetor.Almoxarifado ? {
                    Estoque: {
                        produtoId: {
                            not: null
                        }
                    }
                } : {},
                ...user.setor === _rolesdecorator.TypeSetor.Farmacia ? {
                    Estoque: {
                        medicamentoId: {
                            not: null
                        }
                    }
                } : {},
                ...user.setor === _rolesdecorator.TypeSetor.CME ? {
                    Estoque: {
                        produtoId: {
                            not: null
                        }
                    }
                } : {}
            },
            orderBy: [
                {
                    validade: 'asc'
                },
                {
                    quantidade: 'desc'
                }
            ],
            take: 10,
            select: {
                id: true,
                lote: true,
                validade: true,
                quantidade: true,
                Estoque: {
                    select: {
                        Produto: {
                            select: {
                                nome: true
                            }
                        },
                        Medicamento: {
                            select: {
                                nome: true
                            }
                        },
                        Base: {
                            select: {
                                nome: true
                            }
                        }
                    }
                }
            }
        });
        return lotes.map((lote)=>({
                id: lote.id,
                lote: lote.lote,
                status: (0, _estoquevalidadeservice.classificarValidade)(lote.validade).status,
                validade: lote.validade,
                quantidade: lote.quantidade,
                base: lote.Estoque.Base?.nome ?? 'Base não identificada',
                item: lote.Estoque.Produto?.nome ?? lote.Estoque.Medicamento?.nome ?? 'Item não identificado'
            }));
    }
    async findUltimasMovimentacoes(user) {
        if (user.setor === _rolesdecorator.TypeSetor.Base && !user.baseId) {
            return [];
        }
        const movimentacoes = await this.prisma.estoqueMovimentacao.findMany({
            where: {
                ...user.setor === _rolesdecorator.TypeSetor.Base ? {
                    Lote: {
                        Estoque: {
                            baseId: user.baseId
                        }
                    }
                } : {},
                ...user.setor === _rolesdecorator.TypeSetor.Almoxarifado ? {
                    Lote: {
                        Estoque: {
                            produtoId: {
                                not: null
                            }
                        }
                    }
                } : {},
                ...user.setor === _rolesdecorator.TypeSetor.Farmacia ? {
                    Lote: {
                        Estoque: {
                            medicamentoId: {
                                not: null
                            }
                        }
                    }
                } : {},
                ...user.setor === _rolesdecorator.TypeSetor.CME ? {
                    Lote: {
                        Estoque: {
                            produtoId: {
                                not: null
                            }
                        }
                    }
                } : {}
            },
            orderBy: {
                created_at: 'desc'
            },
            take: 10,
            select: {
                id: true,
                tipo: true,
                quantidade: true,
                saldoAnterior: true,
                saldoPosterior: true,
                observacao: true,
                created_at: true,
                Lote: {
                    select: {
                        lote: true,
                        Estoque: {
                            select: {
                                Produto: {
                                    select: {
                                        nome: true
                                    }
                                },
                                Medicamento: {
                                    select: {
                                        nome: true
                                    }
                                },
                                Base: {
                                    select: {
                                        nome: true
                                    }
                                }
                            }
                        }
                    }
                },
                User: {
                    select: {
                        nome: true
                    }
                }
            }
        });
        return movimentacoes.map((movimentacao)=>({
                id: movimentacao.id,
                tipo: movimentacao.tipo,
                quantidade: movimentacao.quantidade,
                saldoAnterior: movimentacao.saldoAnterior,
                saldoPosterior: movimentacao.saldoPosterior,
                observacao: movimentacao.observacao,
                created_at: movimentacao.created_at,
                lote: movimentacao.Lote.lote,
                item: movimentacao.Lote.Estoque.Produto?.nome ?? movimentacao.Lote.Estoque.Medicamento?.nome ?? 'Item não identificado',
                usuario: movimentacao.User.nome,
                base: movimentacao.Lote.Estoque.Base?.nome ?? 'Sem base'
            }));
    }
};
DashboardService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], DashboardService);

//# sourceMappingURL=dashboard.service.js.map