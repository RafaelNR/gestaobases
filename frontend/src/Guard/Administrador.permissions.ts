import { ALL_PERMISSIONS } from "./PermissionGroups";
import { TypeCargo } from "./Types";

export const Administrador = ALL_PERMISSIONS;

export const AdministradorPermissionsByCargo = {
	[TypeCargo.Administrador]: Administrador,
} as const;
