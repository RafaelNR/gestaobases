import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  Autenticado,
  Cargo,
  Setor,
  TypeSetor,
  TypeCargo,
} from './roles.decorator';
import { IUser } from '@src/common/decorator/user.decorator';

// Helper function to resolve enum key
function resolveEnumKey<TEnum extends Record<string, string>>(
  enumObject: TEnum,
  value: string | undefined
): keyof TEnum | null {
  if (!value) return null;

  if (Object.prototype.hasOwnProperty.call(enumObject, value)) {
    return value as keyof TEnum;
  }

  const entry = Object.entries(enumObject).find(
    ([, enumValue]) => enumValue === value
  );

  return entry ? (entry[0] as keyof TEnum) : null;
}

// Helper function to convert value to array
function toArray<TValue>(value: TValue | TValue[] | undefined): TValue[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

// Helper function to check if user has required key
function hasRequiredKey<TEnum extends Record<string, string>>(
  enumObject: TEnum,
  requiredValues: string | string[] | undefined,
  userValue: string | undefined
): boolean {
  const userKey = resolveEnumKey(enumObject, userValue);
  if (!userKey) return false;

  return toArray(requiredValues).some(
    (requiredValue) => resolveEnumKey(enumObject, requiredValue) === userKey
  );
}

function isCargoAllowed(
  requiredCargos: TypeCargo | TypeCargo[] | undefined,
  user: IUser
): boolean {
  return hasRequiredKey(TypeCargo, requiredCargos, user.cargo);
}

function isSetorAllowed(
  requiredSetores: TypeSetor | TypeSetor[] | undefined,
  user: IUser
): boolean {
  return hasRequiredKey(TypeSetor, requiredSetores, user.setor);
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const targets = [context.getHandler(), context.getClass()];

    const autenticado = this.reflector.getAllAndOverride(Autenticado, targets);
    const requiredCargos = this.reflector.getAllAndOverride(Cargo, targets);
    const requiredSetores = this.reflector.getAllAndOverride(Setor, targets);

    // Acesso publico
    if (!autenticado && !requiredCargos && !requiredSetores) return true;

    const { user } = context.switchToHttp().getRequest() as { user: IUser };
    if (!user)
      // Se não tiver usuário, lança erro, a menos que seja público
      throw new ForbiddenException('Usuário não autenticado.');

    // Se for autenticado e não tiver cargo nem setor, retorna true
    if (autenticado && !requiredCargos && !requiredSetores) return true;

    const userCargoKey = resolveEnumKey(TypeCargo, user.cargo);
    const userSetorKey = resolveEnumKey(TypeSetor, user.setor);

    if (userCargoKey === 'Administrador')
      // Admin tem acesso a tudo
      return true;
    if (userSetorKey === 'Administrador')
      // Admin tem acesso a tudo
      return true;

    const hasCargoAccess = isCargoAllowed(requiredCargos, user);
    const hasSetorAccess = isSetorAllowed(requiredSetores, user);

    // Cargo e setor podem ser usados juntos no mesmo metodo.
    if (hasCargoAccess || hasSetorAccess) return true;

    throw new ForbiddenException('Usuário não tem permissão.');
  }
}
