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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const users_dto_1 = require("./dto/users.dto");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const users_repository_1 = require("./repository/users.repository");
const Created_use_case_1 = require("./service/Created.use-case");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const Updated_use_case_1 = require("./service/Updated.use-case");
const Perfil_use_case_1 = require("./service/Perfil.use-case");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
let UserController = class UserController extends BaseController_1.BaseController {
    userService;
    logService;
    createUseBase;
    updateUseCase;
    perfilUseCase;
    constructor(userService, logService, createUseBase, updateUseCase, perfilUseCase) {
        super();
        this.userService = userService;
        this.logService = logService;
        this.createUseBase = createUseBase;
        this.updateUseCase = updateUseCase;
        this.perfilUseCase = perfilUseCase;
    }
    async findAll() {
        const users = await this.userService.users({
            take: 200,
            orderBy: { nome: 'asc' },
            select: {
                id: true,
                nome: true,
                username: true,
                email: true,
                telefone: true,
                active: true,
                baseId: true,
                setorId: true,
                cargoId: true,
                created_at: true,
                updated_at: true,
                Base: {
                    select: {
                        nome: true,
                    },
                },
                Setor: {
                    select: {
                        nomeVisivel: true,
                    },
                },
                Cargo: {
                    select: {
                        nomeVisivel: true,
                    },
                },
            },
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: users,
        });
    }
    async findAllByCargo({ cargo }) {
        const users = await this.userService.users({
            take: 200,
            orderBy: { nome: 'asc' },
            select: {
                id: true,
                nome: true,
                username: true,
                email: true,
                telefone: true,
                active: true,
                baseId: true,
                setorId: true,
                cargoId: true,
                created_at: true,
                updated_at: true,
                Base: {
                    select: {
                        nome: true,
                    },
                },
                Setor: {
                    select: {
                        nomeVisivel: true,
                    },
                },
                Cargo: {
                    select: {
                        nomeVisivel: true,
                    },
                },
            },
            where: {
                Cargo: {
                    nomeVisivel: cargo,
                },
            },
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: users,
        });
    }
    async findAllByCargoAndBase({ cargo }, { baseId }) {
        const users = await this.userService.users({
            take: 200,
            orderBy: { nome: 'asc' },
            select: {
                id: true,
                nome: true,
                username: true,
                email: true,
                telefone: true,
                active: true,
                baseId: true,
                setorId: true,
                cargoId: true,
                created_at: true,
                updated_at: true,
                Base: {
                    select: {
                        nome: true,
                    },
                },
                Setor: {
                    select: {
                        nomeVisivel: true,
                    },
                },
                Cargo: {
                    select: {
                        nomeVisivel: true,
                    },
                },
            },
            where: {
                baseId: baseId,
                AND: {
                    Cargo: {
                        nomeVisivel: cargo,
                    },
                },
            },
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: users,
        });
    }
    async findOne({ uuid }) {
        if (!uuid)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const user = await this.userService.user({ id: uuid });
        if (!user)
            throw new common_1.HttpException('Usuário não existe', common_1.HttpStatus.FORBIDDEN);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: user,
        });
    }
    async create(user, createUserRequestDto) {
        const newUser = await this.createUseBase.exec(createUserRequestDto);
        this.logService.created({
            mensagem: `Usuário criado pelo usuario ${user.nome}`,
            artefato: newUser.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: newUser,
        });
    }
    async update(user, id, updateUserRequestDto) {
        if (!id || id !== updateUserRequestDto.id)
            throw new common_1.HttpException('Dados não são validos.', common_1.HttpStatus.FORBIDDEN);
        const newUser = await this.updateUseCase.exec(updateUserRequestDto);
        this.logService.updated({
            mensagem: `Usuário atualizado pelo usuario ${user.nome}`,
            artefato: newUser.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: newUser,
        });
    }
    async updatePerfil(user, id, updatePerfilRequestDto) {
        if (!id)
            throw new common_1.HttpException('Dados não são validos.', common_1.HttpStatus.FORBIDDEN);
        if (id !== user.id) {
            throw new common_1.HttpException('Usuário não tem permissão.', common_1.HttpStatus.FORBIDDEN);
        }
        const perfil = await this.perfilUseCase.exec(updatePerfilRequestDto);
        if (!perfil) {
            throw new common_1.HttpException('Perfil não existe.', common_1.HttpStatus.FORBIDDEN);
        }
        this.logService.updated({
            mensagem: `Usuário ${user.nome}, atualizou seu perfil`,
            artefato: perfil.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: perfil,
        });
    }
    async remove(user, id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const dbUser = await this.userService.user({ id });
        if (!dbUser)
            throw new common_1.HttpException('Usuário não existe.', common_1.HttpStatus.NOT_FOUND);
        await this.userService.updateUser({
            data: { active: false },
            where: { id },
        });
        this.logService.disabled({
            mensagem: `Usuário ${user.nome} desativou o usuário ${dbUser.nome}`,
            artefato: dbUser.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
        });
    }
    async bloquearUsuario(user, id) {
        const dbUser = await this.userService.user({
            id,
        });
        if (!dbUser) {
            throw new common_1.HttpException('Usuário não existe.', common_1.HttpStatus.NOT_FOUND);
        }
        await this.userService.updateUser({
            data: {
                active: false,
            },
            where: {
                id,
            },
        });
        this.logService.disabled({
            mensagem: `Usuário ${user.nome}, fez o bloqueio do usuario ${dbUser.nome}`,
            artefato: dbUser.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('cargo/:cargo'),
    (0, roles_decorator_1.Setor)([
        roles_decorator_1.TypeSetor.Administrador,
        roles_decorator_1.TypeSetor.Farmacia,
        roles_decorator_1.TypeSetor.CME,
        roles_decorator_1.TypeSetor.Almoxarifado,
    ]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAllByCargo", null);
__decorate([
    (0, common_1.Get)('cargo/:cargo/base/:baseId'),
    (0, roles_decorator_1.Setor)([
        roles_decorator_1.TypeSetor.Administrador,
        roles_decorator_1.TypeSetor.Farmacia,
        roles_decorator_1.TypeSetor.CME,
        roles_decorator_1.TypeSetor.Almoxarifado,
    ]),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAllByCargoAndBase", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, users_dto_1.CreateUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, users_dto_1.UpdateUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('perfil/:id'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, users_dto_1.UpdatePerfilRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePerfil", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
__decorate([
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    (0, common_1.Put)('bloquear/:id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "bloquearUsuario", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [users_repository_1.UserService,
        log_repository_1.LogService,
        Created_use_case_1.CreateUsuario,
        Updated_use_case_1.UpdateUsuario,
        Perfil_use_case_1.UpdatePerfil])
], UserController);
//# sourceMappingURL=users.controller.js.map