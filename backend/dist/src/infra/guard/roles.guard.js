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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorator_1 = require("./roles.decorator");
function resolveEnumKey(enumObject, value) {
    if (!value)
        return null;
    if (Object.prototype.hasOwnProperty.call(enumObject, value)) {
        return value;
    }
    const entry = Object.entries(enumObject).find(([, enumValue]) => enumValue === value);
    return entry ? entry[0] : null;
}
function toArray(value) {
    if (!value)
        return [];
    return Array.isArray(value) ? value : [value];
}
function hasRequiredKey(enumObject, requiredValues, userValue) {
    const userKey = resolveEnumKey(enumObject, userValue);
    if (!userKey)
        return false;
    return toArray(requiredValues).some((requiredValue) => resolveEnumKey(enumObject, requiredValue) === userKey);
}
function isCargoAllowed(requiredCargos, user) {
    return hasRequiredKey(roles_decorator_1.TypeCargo, requiredCargos, user.cargo);
}
function isSetorAllowed(requiredSetores, user) {
    return hasRequiredKey(roles_decorator_1.TypeSetor, requiredSetores, user.setor);
}
let RolesGuard = class RolesGuard {
    reflector;
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const targets = [context.getHandler(), context.getClass()];
        const autenticado = this.reflector.getAllAndOverride(roles_decorator_1.Autenticado, targets);
        const requiredCargos = this.reflector.getAllAndOverride(roles_decorator_1.Cargo, targets);
        const requiredSetores = this.reflector.getAllAndOverride(roles_decorator_1.Setor, targets);
        if (!autenticado && !requiredCargos && !requiredSetores)
            return true;
        const { user } = context.switchToHttp().getRequest();
        if (!user)
            throw new common_1.ForbiddenException('Usuário não autenticado.');
        if (autenticado && !requiredCargos && !requiredSetores)
            return true;
        const userCargoKey = resolveEnumKey(roles_decorator_1.TypeCargo, user.cargo);
        const userSetorKey = resolveEnumKey(roles_decorator_1.TypeSetor, user.setor);
        if (userCargoKey === 'Administrador')
            return true;
        if (userSetorKey === 'Administrador')
            return true;
        const hasCargoAccess = isCargoAllowed(requiredCargos, user);
        const hasSetorAccess = isSetorAllowed(requiredSetores, user);
        if (hasCargoAccess || hasSetorAccess)
            return true;
        throw new common_1.ForbiddenException('Usuário não tem permissão.');
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
//# sourceMappingURL=roles.guard.js.map