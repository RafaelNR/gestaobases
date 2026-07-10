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
exports.CreateUsuario = void 0;
const users_repository_1 = require("../repository/users.repository");
const common_1 = require("@nestjs/common");
const argon_1 = require("../../../common/helpers/argon");
let CreateUsuario = class CreateUsuario {
    userService;
    user;
    constructor(userService) {
        this.userService = userService;
    }
    async exec(Dados) {
        this.user = Dados;
        if (await this.userService.countUserIsExiste(Dados)) {
            throw new common_1.ConflictException('Dados unicos de usuário já existe, email, rg ou cpf');
        }
        const user = await this.userService.createUser({
            ...this.user,
            password: await (0, argon_1.hashPassword)(this.user.password),
        });
        return user;
    }
};
exports.CreateUsuario = CreateUsuario;
exports.CreateUsuario = CreateUsuario = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __metadata("design:paramtypes", [users_repository_1.UserService])
], CreateUsuario);
//# sourceMappingURL=Created.use-case.js.map