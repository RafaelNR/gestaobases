"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RolesGuard", {
    enumerable: true,
    get: function() {
        return RolesGuard;
    }
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _rolesdecorator = require("./roles.decorator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
// Helper function to resolve enum key
function resolveEnumKey(enumObject, value) {
    if (!value) return null;
    if (Object.prototype.hasOwnProperty.call(enumObject, value)) {
        return value;
    }
    const entry = Object.entries(enumObject).find(([, enumValue])=>enumValue === value);
    return entry ? entry[0] : null;
}
// Helper function to convert value to array
function toArray(value) {
    if (!value) return [];
    return Array.isArray(value) ? value : [
        value
    ];
}
// Helper function to check if user has required key
function hasRequiredKey(enumObject, requiredValues, userValue) {
    const userKey = resolveEnumKey(enumObject, userValue);
    if (!userKey) return false;
    return toArray(requiredValues).some((requiredValue)=>resolveEnumKey(enumObject, requiredValue) === userKey);
}
function isCargoAllowed(requiredCargos, user) {
    return hasRequiredKey(_rolesdecorator.TypeCargo, requiredCargos, user.cargo);
}
function isSetorAllowed(requiredSetores, user) {
    return hasRequiredKey(_rolesdecorator.TypeSetor, requiredSetores, user.setor);
}
let RolesGuard = class RolesGuard {
    constructor(reflector){
        this.reflector = reflector;
    }
    canActivate(context) {
        const targets = [
            context.getHandler(),
            context.getClass()
        ];
        const autenticado = this.reflector.getAllAndOverride(_rolesdecorator.Autenticado, targets);
        const requiredCargos = this.reflector.getAllAndOverride(_rolesdecorator.Cargo, targets);
        const requiredSetores = this.reflector.getAllAndOverride(_rolesdecorator.Setor, targets);
        // Acesso publico
        if (!autenticado && !requiredCargos && !requiredSetores) return true;
        const { user } = context.switchToHttp().getRequest();
        if (!user) // Se não tiver usuário, lança erro, a menos que seja público
        throw new _common.ForbiddenException('Usuário não autenticado.');
        // Se for autenticado e não tiver cargo nem setor, retorna true
        if (autenticado && !requiredCargos && !requiredSetores) return true;
        const userCargoKey = resolveEnumKey(_rolesdecorator.TypeCargo, user.cargo);
        const userSetorKey = resolveEnumKey(_rolesdecorator.TypeSetor, user.setor);
        if (userCargoKey === 'Administrador') // Admin tem acesso a tudo
        return true;
        if (userSetorKey === 'Administrador') // Admin tem acesso a tudo
        return true;
        const hasCargoAccess = isCargoAllowed(requiredCargos, user);
        const hasSetorAccess = isSetorAllowed(requiredSetores, user);
        // Cargo e setor podem ser usados juntos no mesmo metodo.
        if (hasCargoAccess || hasSetorAccess) return true;
        throw new _common.ForbiddenException('Usuário não tem permissão.');
    }
};
RolesGuard = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _core.Reflector === "undefined" ? Object : _core.Reflector
    ])
], RolesGuard);

//# sourceMappingURL=roles.guard.js.map