import {
	DEFAULT_PERMISSIONS_CATALOG,
	definePermissionGroup,
} from "./PermissionGroups";
import { TypeCargo } from "./Types";

export const Administrativo = definePermissionGroup([
	DEFAULT_PERMISSIONS_CATALOG.DASHBOARD_MENU,
	DEFAULT_PERMISSIONS_CATALOG.DASHBOARD_VIEW,
	DEFAULT_PERMISSIONS_CATALOG.PERFIL_VIEW,
] as const);

export const AdministrativoPermissionsByCargo = {
	[TypeCargo.RH]: Administrativo,
} as const;
