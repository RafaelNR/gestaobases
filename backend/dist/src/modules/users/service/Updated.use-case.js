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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsuario = void 0;
const ValidateError_1 = __importDefault(require("../../../common/errors/ValidateError"));
const users_repository_1 = require("../repository/users.repository");
const common_1 = require("@nestjs/common");
const argon_1 = require("../../../common/helpers/argon");
let UpdateUsuario = class UpdateUsuario {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async exec(dados) {
        const user = dados;
        const userOriginal = await this.userService.user({
            username: user.username,
        });
        if (!userOriginal)
            throw new ValidateError_1.default('Usuário não existe');
        const password = user.password === '********' || user.password === '******'
            ? userOriginal.password
            : await (0, argon_1.hashPassword)(user.password);
        return await this.userService.updateUser({
            where: {
                id: userOriginal.id,
            },
            data: {
                ...user,
                password,
            },
        });
    }
};
exports.UpdateUsuario = UpdateUsuario;
exports.UpdateUsuario = UpdateUsuario = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __metadata("design:paramtypes", [users_repository_1.UserService])
], UpdateUsuario);
//# sourceMappingURL=Updated.use-case.js.map