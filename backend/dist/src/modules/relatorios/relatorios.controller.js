"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RelatoriosController", {
    enumerable: true,
    get: function() {
        return RelatoriosController;
    }
});
const _common = require("@nestjs/common");
const _BaseController = require("../../common/bases/BaseController");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _relatoriorequerimentosdto = require("./dto/relatorio-requerimentos.dto");
const _relatoriosservice = require("./services/relatorios.service");
const _relatorioestoquedto = require("./dto/relatorio-estoque.dto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let RelatoriosController = class RelatoriosController extends _BaseController.BaseController {
    constructor(service){
        super(), this.service = service;
    }
    async getRequerimentos(filtro) {
        const data = await this.service.getRelatorioGeralRequerimentos(filtro);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async getEstoque(filtro) {
        const data = await this.service.getRelatorioEstoque(filtro);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
};
_ts_decorate([
    (0, _common.Get)('requerimentos'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _relatoriorequerimentosdto.RelatorioGeralRequerimentosQueryDto === "undefined" ? Object : _relatoriorequerimentosdto.RelatorioGeralRequerimentosQueryDto
    ]),
    _ts_metadata("design:returntype", Promise)
], RelatoriosController.prototype, "getRequerimentos", null);
_ts_decorate([
    (0, _common.Get)('estoque/movimentacoes'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _relatorioestoquedto.RelatorioEstoqueMovimentacoesQueryDto === "undefined" ? Object : _relatorioestoquedto.RelatorioEstoqueMovimentacoesQueryDto
    ]),
    _ts_metadata("design:returntype", Promise)
], RelatoriosController.prototype, "getEstoque", null);
RelatoriosController = _ts_decorate([
    (0, _common.Controller)('relatorios'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _relatoriosservice.RelatoriosService === "undefined" ? Object : _relatoriosservice.RelatoriosService
    ])
], RelatoriosController);

//# sourceMappingURL=relatorios.controller.js.map