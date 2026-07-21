"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MedicamentoController", {
    enumerable: true,
    get: function() {
        return MedicamentoController;
    }
});
const _common = require("@nestjs/common");
const _medicamentodto = require("./dto/medicamento.dto");
const _medicamentorepository = require("./repository/medicamento.repository");
const _BaseController = require("../../common/bases/BaseController");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _userdecorator = require("../../common/decorator/user.decorator");
const _logrepository = require("../../infra/logger/repository/log.repository");
const _client = require("../../../generated/prisma/client");
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
let MedicamentoController = class MedicamentoController extends _BaseController.BaseController {
    constructor(repository, logService){
        super(), this.repository = repository, this.logService = logService;
    }
    // ----- GET (/medicamentos) - Autenticado ---
    async findAll() {
        const medicamentos = await this.repository.findAll();
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: medicamentos
        });
    }
    // ----- GET (/medicamentos/:id) - Administrador ----
    async findOne(id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const medicamento = await this.repository.findOne(id);
        if (!medicamento) throw new _common.HttpException('Medicamento não existe.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: medicamento
        });
    }
    // ----- POST (/medicamentos) - Administrador ----
    async create(user, createMedicamentoRequestDto) {
        const existsNome = await this.repository.count({
            nome: createMedicamentoRequestDto.nome
        });
        if (existsNome > 0) throw new _common.HttpException('Já existe um medicamento com este nome.', _common.HttpStatus.CONFLICT);
        const existsCodigo = await this.repository.count({
            codigo: createMedicamentoRequestDto.codigo
        });
        if (existsCodigo > 0) throw new _common.HttpException('Já existe um medicamento com este código.', _common.HttpStatus.CONFLICT);
        const newMedicamento = await this.repository.create({
            nome: createMedicamentoRequestDto.nome,
            codigo: createMedicamentoRequestDto.codigo,
            especificacao: createMedicamentoRequestDto.especificacao,
            categoria: createMedicamentoRequestDto.categoria,
            descricao: createMedicamentoRequestDto.descricao,
            userId: user.id
        });
        this.logService.created({
            mensagem: `Medicamento "${newMedicamento.nome}" criado pelo usuário ${user.nome}`,
            artefato: newMedicamento.id,
            modulo: 'Medicamento',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: newMedicamento
        });
    }
    // ----- PUT (/medicamentos/:id) - Administrador ----
    async update(user, id, updateMedicamentoRequestDto) {
        if (!id || id !== updateMedicamentoRequestDto.id) throw new _common.HttpException('Dados não são válidos.', _common.HttpStatus.FORBIDDEN);
        const medicamento = await this.repository.findOne(id);
        if (!medicamento) throw new _common.HttpException('Medicamento não existe.', _common.HttpStatus.NOT_FOUND);
        const updatedMedicamento = await this.repository.update(id, {
            nome: updateMedicamentoRequestDto.nome,
            codigo: updateMedicamentoRequestDto.codigo,
            especificacao: updateMedicamentoRequestDto.especificacao,
            categoria: updateMedicamentoRequestDto.categoria,
            descricao: updateMedicamentoRequestDto.descricao,
            active: updateMedicamentoRequestDto.active
        });
        this.logService.updated({
            mensagem: `Medicamento "${updatedMedicamento.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updatedMedicamento.id,
            modulo: 'Medicamento',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedMedicamento
        });
    }
    // ----- DELETE (/medicamentos/:id) - Administrador ----
    async remove(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const medicamento = await this.repository.findOne(id);
        if (!medicamento) throw new _common.HttpException('Medicamento não existe.', _common.HttpStatus.NOT_FOUND);
        try {
            await this.repository.remove(id);
        } catch (err) {
            if (err instanceof _client.Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
                throw new _common.HttpException('Não é possível excluir: existem registros vinculados.', _common.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Medicamento "${medicamento.nome}" excluído pelo usuário ${user.nome}`,
            artefato: medicamento.id,
            modulo: 'Medicamento',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED
        });
    }
    // ----- PUT (/medicamentos/:id/toggle-active) - Administrador ----
    async toggleActive(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const medicamento = await this.repository.findOne(id);
        if (!medicamento) throw new _common.HttpException('Medicamento não existe.', _common.HttpStatus.NOT_FOUND);
        const updatedMedicamento = await this.repository.update(id, {
            nome: medicamento.nome,
            codigo: medicamento.codigo,
            especificacao: medicamento.especificacao,
            categoria: medicamento.categoria,
            descricao: medicamento.descricao ?? undefined,
            active: !medicamento.active
        });
        this.logService.actived({
            mensagem: `Medicamento "${updatedMedicamento.nome}" ${updatedMedicamento.active ? 'ativado' : 'desativado'} pelo usuário ${user.nome}`,
            artefato: updatedMedicamento.id,
            modulo: 'Medicamento',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedMedicamento
        });
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _rolesdecorator.Autenticado)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], MedicamentoController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], MedicamentoController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _medicamentodto.CreateMedicamentoRequestDto === "undefined" ? Object : _medicamentodto.CreateMedicamentoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], MedicamentoController.prototype, "create", null);
_ts_decorate([
    (0, _common.Put)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String,
        typeof _medicamentodto.UpdateMedicamentoRequestDto === "undefined" ? Object : _medicamentodto.UpdateMedicamentoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], MedicamentoController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], MedicamentoController.prototype, "remove", null);
_ts_decorate([
    (0, _common.Put)(':id/toggle-active'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], MedicamentoController.prototype, "toggleActive", null);
MedicamentoController = _ts_decorate([
    (0, _common.Controller)('medicamentos'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _medicamentorepository.MedicamentoRepository === "undefined" ? Object : _medicamentorepository.MedicamentoRepository,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], MedicamentoController);

//# sourceMappingURL=medicamento.controller.js.map