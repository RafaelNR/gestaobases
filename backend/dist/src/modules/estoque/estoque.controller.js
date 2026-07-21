"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EstoqueController", {
    enumerable: true,
    get: function() {
        return EstoqueController;
    }
});
const _common = require("@nestjs/common");
const _BaseController = require("../../common/bases/BaseController");
const _userdecorator = require("../../common/decorator/user.decorator");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _estoquedto = require("./dto/estoque.dto");
const _estoqueservice = require("./services/estoque.service");
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
let EstoqueController = class EstoqueController extends _BaseController.BaseController {
    constructor(estoqueService){
        super(), this.estoqueService = estoqueService;
    }
    async findAll(user, query) {
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: await this.estoqueService.findAll(user, query.page, query.limit, query)
        });
    }
    async findLotes(user, estoqueId) {
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: await this.estoqueService.findLotes(estoqueId, user)
        });
    }
    async findMovimentacoesByLote(user, loteId) {
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: await this.estoqueService.findMovimentacoesByLote(loteId, user)
        });
    }
    async createEstoque(user, dto) {
        const baseId = user.setor === _rolesdecorator.TypeSetor.Administrador ? dto.baseId : user.baseId;
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: await this.estoqueService.createEstoque({
                ...dto,
                baseId
            })
        });
    }
    async createLote(user, dto) {
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: await this.estoqueService.createLote(dto, user.id)
        });
    }
    // Faz a movimentação de um lote (entrada ou saída)
    async movimentar(user, loteId, dto) {
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: await this.estoqueService.movimentar(loteId, user, dto)
        });
    }
    async bloquear(loteId, dto) {
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: await this.estoqueService.bloquear(loteId, dto.bloqueado, dto.motivoBloqueio)
        });
    }
    async deleteLote(loteId, user) {
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: await this.estoqueService.softDelete(loteId, user.id)
        });
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Base,
        _rolesdecorator.TypeSetor.Farmacia,
        _rolesdecorator.TypeSetor.Almoxarifado,
        _rolesdecorator.TypeSetor.Enfermagem,
        _rolesdecorator.TypeSetor.Frota
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _estoquedto.EstoqueQueryDto === "undefined" ? Object : _estoquedto.EstoqueQueryDto
    ]),
    _ts_metadata("design:returntype", Promise)
], EstoqueController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':estoqueId/lotes'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('estoqueId')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], EstoqueController.prototype, "findLotes", null);
_ts_decorate([
    (0, _common.Get)('lotes/:loteId/movimentacoes'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('loteId')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], EstoqueController.prototype, "findMovimentacoesByLote", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Base
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _estoquedto.CreateEstoqueDto === "undefined" ? Object : _estoquedto.CreateEstoqueDto
    ]),
    _ts_metadata("design:returntype", Promise)
], EstoqueController.prototype, "createEstoque", null);
_ts_decorate([
    (0, _common.Post)('lotes'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Base
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _estoquedto.CreateLoteDto === "undefined" ? Object : _estoquedto.CreateLoteDto
    ]),
    _ts_metadata("design:returntype", Promise)
], EstoqueController.prototype, "createLote", null);
_ts_decorate([
    (0, _common.Post)('lotes/:loteId/movimentacoes'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Base
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('loteId')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String,
        typeof _estoquedto.MovimentarEstoqueDto === "undefined" ? Object : _estoquedto.MovimentarEstoqueDto
    ]),
    _ts_metadata("design:returntype", Promise)
], EstoqueController.prototype, "movimentar", null);
_ts_decorate([
    (0, _common.Patch)('lotes/:loteId/bloqueio'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Almoxarifado,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('loteId')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _estoquedto.BloquearLoteDto === "undefined" ? Object : _estoquedto.BloquearLoteDto
    ]),
    _ts_metadata("design:returntype", Promise)
], EstoqueController.prototype, "bloquear", null);
_ts_decorate([
    (0, _common.Delete)('lotes/:loteId'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Base,
        _rolesdecorator.TypeSetor.Almoxarifado,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('loteId')),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], EstoqueController.prototype, "deleteLote", null);
EstoqueController = _ts_decorate([
    (0, _common.Controller)('estoques'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _estoqueservice.EstoqueService === "undefined" ? Object : _estoqueservice.EstoqueService
    ])
], EstoqueController);

//# sourceMappingURL=estoque.controller.js.map