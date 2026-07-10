import { UserMe } from "@/Types/Auth";
import {
	Administrador,
	AdministradorPermissionsByCargo,
} from "./Administrador.permissions";
import {
	Administrativo,
	AdministrativoPermissionsByCargo,
} from "./Administrativo.permissions";
import {
	Almoxarifado,
	AlmoxarifadoPermissionsByCargo,
} from "./Almoxarifado.permissions";
import { Base, BasePermissionsByCargo } from "./Base.permissions";
import { CME, CMEPermissionsByCargo } from "./CME.permissions";
import { Farmacia, FarmaciaPermissionsByCargo } from "./Farmacia.permissions";
import { Frota, FrotaPermissionsByCargo } from "./Frota.permissions";
import type { PermissionValue } from "./PermissionGroups";
import {
	SetorCargos,
	TypeCargo,
	type TypeCargoKey,
	TypeSetor,
	type TypeSetorKey,
} from "./Types";

export const PERMISSIONS = {
	Administrador,
	Administrativo,
	Almoxarifado,
	Base,
	CME,
	Farmacia,
	Frota,
} as const;

export type Permissions = keyof typeof PERMISSIONS;
export type Permission = PermissionValue;
type PermissionList = readonly Permission[];
type PermissionsByCargo = Partial<Record<TypeCargo, PermissionList>>;

export const PERMISSIONS_BY_SETOR_AND_CARGO: Record<
	TypeSetor,
	PermissionsByCargo
> = {
	[TypeSetor.Administrador]: AdministradorPermissionsByCargo,
	[TypeSetor.Administrativo]: AdministrativoPermissionsByCargo,
	[TypeSetor.Almoxarifado]: AlmoxarifadoPermissionsByCargo,
	[TypeSetor.Farmacia]: FarmaciaPermissionsByCargo,
	[TypeSetor.CME]: CMEPermissionsByCargo,
	[TypeSetor.Frota]: FrotaPermissionsByCargo,
	[TypeSetor.Base]: BasePermissionsByCargo,
};

/**
 * Guia de uso das permissions no front:
 *
 * - `recurso:menu`: exibe item no menu lateral.
 * - `recurso:table`: libera acesso a paginas/listagens protegidas por rota.
 * - `recurso:view`: libera visualizacao/detalhe de um registro ou pagina simples.
 * - `recurso:new`: exibe acoes de criacao/cadastro.
 * - `recurso:edit`: exibe acoes de edicao.
 * - `recurso:deletar`: exibe acoes de remocao/exclusao.
 * - `recurso:status`: exibe acoes de mudanca de status.
 * - `recurso:itens`: exibe acoes internas de itens de um recurso.
 * - `recurso:enviar`: exibe acoes de envio/submissao.
 *
 */

function resolveEnumKey<TEnum extends Record<string, string>>(
	enumObject: TEnum,
	value: string | undefined,
): keyof TEnum | null {
	if (!value) return null;
	if (Object.prototype.hasOwnProperty.call(enumObject, value)) {
		return value as keyof TEnum;
	}

	const entry = Object.entries(enumObject).find(
		([, enumValue]) => enumValue === value,
	);

	return entry ? (entry[0] as keyof TEnum) : null;
}

function getPermissionsBySetorAndCargo(
	setor: TypeSetorKey,
	cargo: TypeCargoKey,
): PermissionList {
	return PERMISSIONS_BY_SETOR_AND_CARGO[TypeSetor[setor]][TypeCargo[cargo]] ?? [];
}

// Resolve o setor do usuário
function resolveUserSetor(user: UserMe): TypeSetorKey | null {
	return resolveEnumKey(TypeSetor, user.Setor.nome);
}

// Resolve o cargo do usuário
function resolveUserCargo(user: UserMe): TypeCargoKey | null {
	return resolveEnumKey(TypeCargo, user.Cargo.nome);
}

// Setor Administrativo ou Cargo Administrador
function isAdmin(setor: TypeSetorKey | null, cargo: TypeCargoKey | null): boolean {
	return setor === "Administrador" || cargo === "Administrador";
}

// Verifica se o cargo do usuário é permitido no setor
function isCargoAllowedInSetor(
	setor: TypeSetorKey,
	cargo: TypeCargoKey,
): boolean {
	return SetorCargos[setor].includes(cargo);
}

// Obtém as permissões do usuário
export function getUserPermissions(
	user: UserMe | null | undefined,
): PermissionList {
	if (!user) return [];

	const setor = resolveUserSetor(user);
	const cargo = resolveUserCargo(user);

	// Caso o usuário seja administrador
	if (isAdmin(setor, cargo)) return Administrador;
	// Caso o usuário não tenha setor ou cargo
	if (!setor || !cargo) return [];
	// Caso o cargo do usuário não seja permitido no setor
	if (!isCargoAllowedInSetor(setor, cargo)) return [];

	return getPermissionsBySetorAndCargo(setor, cargo);
}

// Verifica se o usuário tem a permissão
export function hasPermission(
	user: UserMe | null | undefined,
	permission: Permission,
): boolean {
	return getUserPermissions(user).includes(permission);
}

// Verifica se o usuário tem alguma das permissões
export function hasAnyPermission(
	user: UserMe | null | undefined,
	permissions: Permission[],
): boolean {
	const userPermissions = getUserPermissions(user);
	return permissions.some((permission) => userPermissions.includes(permission));
}

// Verifica se o usuário tem todas as permissões
export function hasAllPermissions(
	user: UserMe | null | undefined,
	permissions: Permission[],
): boolean {
	const userPermissions = getUserPermissions(user);
	return permissions.every((permission) =>
		userPermissions.includes(permission),
	);
}
