"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateUsuario", {
    enumerable: true,
    get: function() {
        return UpdateUsuario;
    }
});
const _ValidateError = /*#__PURE__*/ _interop_require_default(require("../../../common/errors/ValidateError"));
const _usersrepository = require("../repository/users.repository");
const _common = require("@nestjs/common");
const _argon = require("../../../common/helpers/argon");
const _rolesdecorator = require("../../../infra/guard/roles.decorator");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdateUsuario = class UpdateUsuario {
    constructor(userService){
        this.userService = userService;
    }
    async exec(dados, user) {
        const userOriginal = await this.userService.user({
            username: dados.username
        });
        if (!userOriginal) throw new _ValidateError.default('Usuário não existe');
        const setor = await this.userService.prisma.setor.findUnique({
            where: {
                id: dados.setorId
            }
        });
        if (user.setor !== _rolesdecorator.TypeSetor.Administrador && setor?.nome === 'Administrador') {
            throw new _common.ForbiddenException('Usuário não tem permissão para esse setor.');
        }
        const password = dados.password === '********' || dados.password === '******' ? userOriginal.password : await (0, _argon.hashPassword)(dados.password);
        return await this.userService.updateUser({
            where: {
                id: userOriginal.id
            },
            data: {
                ...dados,
                password
            }
        });
    }
};
UpdateUsuario = _ts_decorate([
    (0, _common.Injectable)({
        scope: _common.Scope.REQUEST
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _usersrepository.UserService === "undefined" ? Object : _usersrepository.UserService
    ])
], UpdateUsuario);

//# sourceMappingURL=Updated.use-case.js.map