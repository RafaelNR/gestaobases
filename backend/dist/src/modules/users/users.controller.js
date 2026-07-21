"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserController", {
    enumerable: true,
    get: function() {
        return UserController;
    }
});
const _common = require("@nestjs/common");
const _usersdto = require("./dto/users.dto");
const _userdecorator = require("../../common/decorator/user.decorator");
const _usersrepository = require("./repository/users.repository");
const _Createdusecase = require("./service/Created.use-case");
const _BaseController = require("../../common/bases/BaseController");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _Updatedusecase = require("./service/Updated.use-case");
const _Perfilusecase = require("./service/Perfil.use-case");
const _logrepository = require("../../infra/logger/repository/log.repository");
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
let UserController = class UserController extends _BaseController.BaseController {
    constructor(userService, logService, createUseBase, updateUseCase, perfilUseCase){
        super(), this.userService = userService, this.logService = logService, this.createUseBase = createUseBase, this.updateUseCase = updateUseCase, this.perfilUseCase = perfilUseCase;
    }
    // ----- GET (/usuarios) - Administrador ----
    async findAll() {
        const users = await this.userService.users({
            take: 200,
            orderBy: {
                nome: 'asc'
            },
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
                        nome: true
                    }
                },
                Setor: {
                    select: {
                        nomeVisivel: true
                    }
                },
                Cargo: {
                    select: {
                        nomeVisivel: true
                    }
                }
            }
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: users
        });
    }
    // ----- GET (/usuarios/cargo/:cargo) - Administrador ----
    async findAllByCargo({ cargo }) {
        const users = await this.userService.users({
            take: 200,
            orderBy: {
                nome: 'asc'
            },
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
                        nome: true
                    }
                },
                Setor: {
                    select: {
                        nomeVisivel: true
                    }
                },
                Cargo: {
                    select: {
                        nomeVisivel: true
                    }
                }
            },
            where: {
                Cargo: {
                    nomeVisivel: cargo
                }
            }
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: users
        });
    }
    // ----- GET (/usuarios/cargo/:cargo/base/:baseId) - Administrador ----
    async findAllByCargoAndBase({ cargo }, { baseId }) {
        const users = await this.userService.users({
            take: 200,
            orderBy: {
                nome: 'asc'
            },
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
                        nome: true
                    }
                },
                Setor: {
                    select: {
                        nomeVisivel: true
                    }
                },
                Cargo: {
                    select: {
                        nomeVisivel: true
                    }
                }
            },
            where: {
                baseId: baseId,
                AND: {
                    Cargo: {
                        nomeVisivel: cargo
                    }
                }
            }
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: users
        });
    }
    // ----- GET (/usuarios/:uuid) - Administrador ----
    async findOne({ uuid }) {
        if (!uuid) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const user = await this.userService.user({
            id: uuid
        });
        if (!user) throw new _common.HttpException('Usuário não existe', _common.HttpStatus.FORBIDDEN);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: user
        });
    }
    // ----- POST (/usuarios) - Administrador ----
    async create(user, createUserRequestDto) {
        const newUser = await this.createUseBase.exec(createUserRequestDto, user);
        this.logService.created({
            mensagem: `Usuário criado pelo usuario ${user.nome}`,
            artefato: newUser.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: newUser
        });
    }
    // ----- PUT (/usuarios/:id) - Administrador ----
    async update(user, id, updateUserRequestDto) {
        if (!id || id !== updateUserRequestDto.id) throw new _common.HttpException('Dados não são validos.', _common.HttpStatus.FORBIDDEN);
        // TODO update use case
        const newUser = await this.updateUseCase.exec(updateUserRequestDto, user);
        this.logService.updated({
            mensagem: `Usuário atualizado pelo usuario ${user.nome}`,
            artefato: newUser.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: newUser
        });
    }
    // ----- PUT (/usuarios/perfil/:id) - Autenticado ----
    async updatePerfil(user, id, updatePerfilRequestDto) {
        if (!id) throw new _common.HttpException('Dados não são validos.', _common.HttpStatus.FORBIDDEN);
        if (id !== user.id) {
            throw new _common.HttpException('Usuário não tem permissão.', _common.HttpStatus.FORBIDDEN);
        }
        // TODO update use case
        const perfil = await this.perfilUseCase.exec(updatePerfilRequestDto);
        if (!perfil) {
            throw new _common.HttpException('Perfil não existe.', _common.HttpStatus.FORBIDDEN);
        }
        this.logService.updated({
            mensagem: `Usuário ${user.nome}, atualizou seu perfil`,
            artefato: perfil.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: perfil
        });
    }
    // ----- DELETE (/usuarios/:id) - Administrador ----
    async remove(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const dbUser = await this.userService.user({
            id
        });
        if (!dbUser) throw new _common.HttpException('Usuário não existe.', _common.HttpStatus.NOT_FOUND);
        await this.userService.updateUser({
            data: {
                active: false
            },
            where: {
                id
            }
        });
        this.logService.disabled({
            mensagem: `Usuário ${user.nome} desativou o usuário ${dbUser.nome}`,
            artefato: dbUser.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED
        });
    }
    // ----- PUT (/usuarios/bloquear/:id) - Administrador ----
    async bloquearUsuario(user, id) {
        const dbUser = await this.userService.user({
            id
        });
        if (!dbUser) {
            throw new _common.HttpException('Usuário não existe.', _common.HttpStatus.NOT_FOUND);
        }
        await this.userService.updateUser({
            data: {
                active: false
            },
            where: {
                id
            }
        });
        this.logService.disabled({
            mensagem: `Usuário ${user.nome}, fez o bloqueio do usuario ${dbUser.nome}`,
            artefato: dbUser.id,
            modulo: 'User',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED
        });
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)('cargo/:cargo'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia,
        _rolesdecorator.TypeSetor.CME,
        _rolesdecorator.TypeSetor.Almoxarifado
    ]),
    _ts_param(0, (0, _common.Param)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "findAllByCargo", null);
_ts_decorate([
    (0, _common.Get)('cargo/:cargo/base/:baseId'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia,
        _rolesdecorator.TypeSetor.CME,
        _rolesdecorator.TypeSetor.Almoxarifado
    ]),
    _ts_param(0, (0, _common.Param)()),
    _ts_param(1, (0, _common.Param)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "findAllByCargoAndBase", null);
_ts_decorate([
    (0, _common.Get)(':uuid'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _common.Param)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _usersdto.CreateUserRequestDto === "undefined" ? Object : _usersdto.CreateUserRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
_ts_decorate([
    (0, _common.Put)(':id'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String,
        typeof _usersdto.UpdateUserRequestDto === "undefined" ? Object : _usersdto.UpdateUserRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
_ts_decorate([
    (0, _common.Put)('perfil/:id'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String,
        typeof _usersdto.UpdatePerfilRequestDto === "undefined" ? Object : _usersdto.UpdatePerfilRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "updatePerfil", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
_ts_decorate([
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    (0, _common.Put)('bloquear/:id'),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "bloquearUsuario", null);
UserController = _ts_decorate([
    (0, _common.Controller)('usuarios'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _usersrepository.UserService === "undefined" ? Object : _usersrepository.UserService,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService,
        typeof _Createdusecase.CreateUsuario === "undefined" ? Object : _Createdusecase.CreateUsuario,
        typeof _Updatedusecase.UpdateUsuario === "undefined" ? Object : _Updatedusecase.UpdateUsuario,
        typeof _Perfilusecase.UpdatePerfil === "undefined" ? Object : _Perfilusecase.UpdatePerfil
    ])
], UserController);

//# sourceMappingURL=users.controller.js.map