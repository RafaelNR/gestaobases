"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUsuario", {
    enumerable: true,
    get: function() {
        return CreateUsuario;
    }
});
const _usersrepository = require("../repository/users.repository");
const _common = require("@nestjs/common");
const _argon = require("../../../common/helpers/argon");
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
let CreateUsuario = class CreateUsuario {
    constructor(userService){
        this.userService = userService;
    }
    async exec(Dados, user) {
        this.user = Dados;
        const setor = await this.userService.prisma.setor.findUnique({
            where: {
                id: Dados.setorId
            }
        });
        if (user.setor !== _rolesdecorator.TypeSetor.Administrador && setor?.nome === 'Administrador') {
            throw new _common.ForbiddenException('Usuário não tem permissão para esse setor.');
        }
        if (await this.userService.countUserIsExiste(Dados)) {
            throw new _common.ConflictException('Dados unicos de usuário já existe, email, rg ou cpf');
        }
        const newUser = await this.userService.createUser({
            ...this.user,
            password: await (0, _argon.hashPassword)(this.user.password)
        });
        return newUser;
    }
};
CreateUsuario = _ts_decorate([
    (0, _common.Injectable)({
        scope: _common.Scope.REQUEST
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _usersrepository.UserService === "undefined" ? Object : _usersrepository.UserService
    ])
], CreateUsuario);

//# sourceMappingURL=Created.use-case.js.map