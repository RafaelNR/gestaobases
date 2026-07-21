"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdatePerfil", {
    enumerable: true,
    get: function() {
        return UpdatePerfil;
    }
});
const _usersrepository = require("../repository/users.repository");
const _common = require("@nestjs/common");
const _argon = require("../../../common/helpers/argon");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdatePerfil = class UpdatePerfil {
    constructor(userService){
        this.userService = userService;
    }
    async exec(dado) {
        const dbUser = await this.userService.user({
            id: dado.id
        });
        if (!dbUser) {
            throw new _common.HttpException('Perfil não existe.', _common.HttpStatus.FORBIDDEN);
        }
        const password = dado.password === '******' ? dado.password : await (0, _argon.hashPassword)(dado.password);
        await this.userService.updateUser({
            where: {
                id: dbUser.id
            },
            data: {
                ...dado,
                password
            }
        });
        return await this.userService.user({
            id: dbUser.id
        });
    }
};
UpdatePerfil = _ts_decorate([
    (0, _common.Injectable)({
        scope: _common.Scope.REQUEST
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _usersrepository.UserService === "undefined" ? Object : _usersrepository.UserService
    ])
], UpdatePerfil);

//# sourceMappingURL=Perfil.use-case.js.map