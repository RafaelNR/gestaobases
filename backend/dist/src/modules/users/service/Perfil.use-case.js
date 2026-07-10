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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePerfil = void 0;
const users_repository_1 = require("../repository/users.repository");
const common_1 = require("@nestjs/common");
const argon_1 = require("../../../common/helpers/argon");
let UpdatePerfil = class UpdatePerfil {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async exec(dado) {
        const dbUser = await this.userService.user({
            id: dado.id,
        });
        if (!dbUser) {
            throw new common_1.HttpException('Perfil não existe.', common_1.HttpStatus.FORBIDDEN);
        }
        const password = dado.password === '******'
            ? dado.password
            : await (0, argon_1.hashPassword)(dado.password);
        await this.userService.updateUser({
            where: {
                id: dbUser.id,
            },
            data: {
                ...dado,
                password,
            },
        });
        return await this.userService.user({ id: dbUser.id });
    }
};
exports.UpdatePerfil = UpdatePerfil;
exports.UpdatePerfil = UpdatePerfil = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __metadata("design:paramtypes", [users_repository_1.UserService])
], UpdatePerfil);
//# sourceMappingURL=Perfil.use-case.js.map