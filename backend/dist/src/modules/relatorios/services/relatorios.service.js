"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RelatoriosService", {
    enumerable: true,
    get: function() {
        return RelatoriosService;
    }
});
const _common = require("@nestjs/common");
const _client = require("../../../../generated/prisma/client");
const _relatoriosrepository = require("../repository/relatorios.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const STATUS_RELATORIO = [
    _client.Status.Recebido,
    _client.Status.Analise,
    _client.Status.Separacao,
    _client.Status.Finalizado
];
function parseDate(value, endOfDay = false) {
    if (!value) return undefined;
    const date = new Date(`${value}T${endOfDay ? '23:59:59.999' : '00:00:00.000'}Z`);
    if (Number.isNaN(date.getTime())) throw new _common.BadRequestException('Data inválida.');
    return date;
}
let RelatoriosService = class RelatoriosService {
    constructor(repository){
        this.repository = repository;
    }
    async getRelatorioGeralRequerimentos(filtro) {
        const dataInicial = parseDate(filtro.dataInicial);
        const dataFinal = parseDate(filtro.dataFinal, true);
        if (dataInicial && dataFinal && dataInicial > dataFinal) {
            throw new _common.BadRequestException('A data inicial deve ser menor ou igual à data final.');
        }
        const normalized = {
            dataInicial,
            dataFinal,
            base: filtro.base?.trim() || undefined,
            ambulanciaId: filtro.ambulanciaId?.trim() || undefined,
            tipo: filtro.tipo ? _client.TipoRequerimento[filtro.tipo] : undefined,
            status: STATUS_RELATORIO
        };
        return this.repository.findRelatorioGeralRequerimentos(normalized);
    }
    async getRelatorioEstoque(filtro) {
        const dataInicial = parseDate(filtro.dataInicial);
        const dataFinal = parseDate(filtro.dataFinal, true);
        if (dataInicial && dataFinal && dataInicial > dataFinal) {
            throw new _common.BadRequestException('A data inicial deve ser menor ou igual à data final.');
        }
        return this.repository.findRelatorioEstoque({
            baseId: filtro.baseId,
            page: filtro.page ?? 1,
            limit: filtro.limit ?? 20,
            dataInicial,
            dataFinal,
            tipo: filtro.tipo ? _client.TipoMovimentacaoEstoque[filtro.tipo] : undefined,
            itemTipo: filtro.itemTipo,
            search: filtro.search?.trim() || undefined,
            validade: filtro.validade
        });
    }
};
RelatoriosService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _relatoriosrepository.RelatoriosRepository === "undefined" ? Object : _relatoriosrepository.RelatoriosRepository
    ])
], RelatoriosService);

//# sourceMappingURL=relatorios.service.js.map