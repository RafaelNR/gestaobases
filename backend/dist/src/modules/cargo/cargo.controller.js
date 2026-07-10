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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../generated/prisma/client");
const BaseController_1 = require("../../common/bases/BaseController");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const cargo_dto_1 = require("./dto/cargo.dto");
const cargo_repository_1 = require("./repository/cargo.repository");
let CargoController = class CargoController extends BaseController_1.BaseController {
    cargoRepository;
    logService;
    constructor(cargoRepository, logService) {
        super();
        this.cargoRepository = cargoRepository;
        this.logService = logService;
    }
    async findAll() {
        const cargos = await this.cargoRepository.findAll();
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: cargos,
        });
    }
    async findBySetor(setor) {
        if (!setor)
            throw new common_1.HttpException('Setor não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const cargos = await this.cargoRepository.findBySetor(setor);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: cargos,
        });
    }
    async findBySetorId(setorId) {
        if (!setorId)
            throw new common_1.HttpException('Setor não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const cargos = await this.cargoRepository.findBySetorId(setorId);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: cargos,
        });
    }
    async findOne(id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const cargo = await this.cargoRepository.findOne(id);
        if (!cargo)
            throw new common_1.HttpException('Cargo não existe.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: cargo,
        });
    }
    async create(user, createCargoRequestDto) {
        const exists = await this.cargoRepository.count({
            OR: [
                { nome: createCargoRequestDto.nome },
                { nomeVisivel: createCargoRequestDto.nomeVisivel },
            ],
        });
        if (exists > 0)
            throw new common_1.HttpException('Já existe um cargo com este nome.', common_1.HttpStatus.CONFLICT);
        const newCargo = await this.cargoRepository.create({
            nome: createCargoRequestDto.nome,
            nomeVisivel: createCargoRequestDto.nomeVisivel,
            setor: createCargoRequestDto.setor,
        });
        this.logService.created({
            mensagem: `Cargo "${newCargo.nome}" criado pelo usuário ${user.nome}`,
            artefato: newCargo.id,
            modulo: 'Cargo',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: newCargo,
        });
    }
    async update(user, id, updateCargoRequestDto) {
        if (!id || id !== updateCargoRequestDto.id)
            throw new common_1.HttpException('Dados não são válidos.', common_1.HttpStatus.FORBIDDEN);
        const cargo = await this.cargoRepository.findOne(id);
        if (!cargo)
            throw new common_1.HttpException('Cargo não existe.', common_1.HttpStatus.NOT_FOUND);
        const exists = await this.cargoRepository.count({
            id: { not: id },
            OR: [
                { nome: updateCargoRequestDto.nome },
                { nomeVisivel: updateCargoRequestDto.nomeVisivel },
            ],
        });
        if (exists > 0)
            throw new common_1.HttpException('Já existe um cargo com este nome.', common_1.HttpStatus.CONFLICT);
        const updatedCargo = await this.cargoRepository.update(id, {
            nome: updateCargoRequestDto.nome,
            nomeVisivel: updateCargoRequestDto.nomeVisivel,
            setor: updateCargoRequestDto.setor,
        });
        this.logService.updated({
            mensagem: `Cargo "${updatedCargo.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updatedCargo.id,
            modulo: 'Cargo',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updatedCargo,
        });
    }
    async remove(user, id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const cargo = await this.cargoRepository.findOne(id);
        if (!cargo)
            throw new common_1.HttpException('Cargo não existe.', common_1.HttpStatus.NOT_FOUND);
        try {
            await this.cargoRepository.remove(id);
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                err.code === 'P2003') {
                throw new common_1.HttpException('Não é possível excluir: existem registros vinculados.', common_1.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Cargo "${cargo.nome}" excluído pelo usuário ${user.nome}`,
            artefato: cargo.id,
            modulo: 'Cargo',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
        });
    }
};
exports.CargoController = CargoController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Autenticado)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('setor/:setor'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Param)('setor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "findBySetor", null);
__decorate([
    (0, common_1.Get)('setorId/:setorId'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Param)('setorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "findBySetorId", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cargo_dto_1.CreateCargoRequestDto]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, cargo_dto_1.UpdateCargoRequestDto]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CargoController.prototype, "remove", null);
exports.CargoController = CargoController = __decorate([
    (0, common_1.Controller)('cargos'),
    __metadata("design:paramtypes", [cargo_repository_1.CargoRepository,
        log_repository_1.LogService])
], CargoController);
//# sourceMappingURL=cargo.controller.js.map