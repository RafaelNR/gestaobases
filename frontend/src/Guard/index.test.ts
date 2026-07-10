import assert from "node:assert/strict";

import type { UserMe } from "@/Types/Auth";
import { getUserPermissions } from "./index";
import { PRODUTOS_PERMISSIONS } from "./PermissionGroups";

function makeUser(setorNome: string, cargoNome: string): UserMe {
	return {
		id: "user-id",
		nome: "Usuario Teste",
		username: "usuario.teste",
		setorId: "setor-id",
		cargoId: "cargo-id",
		baseId: "base-id",
		Base: { nome: "Base" },
		Setor: { nome: setorNome, nomeVisivel: setorNome },
		Cargo: { nome: cargoNome, nomeVisivel: cargoNome },
	};
}

function assertHasAlmoxarifadoPermissions(cargoNome: string): void {
	const permissions = getUserPermissions(
		makeUser("Almoxarifado", cargoNome),
	);

	assert.ok(permissions.includes(PRODUTOS_PERMISSIONS.TABLE));
}

assertHasAlmoxarifadoPermissions("Almoxarifado");
assertHasAlmoxarifadoPermissions("Coordenação de Almoxarifado");
