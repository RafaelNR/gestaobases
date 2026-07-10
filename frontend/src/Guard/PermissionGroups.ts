type Values<T> = T extends Record<PropertyKey, infer Value> ? Value : never;

/**
 * Catálogo central de permissions do front.
 *
 * Use este arquivo para declarar toda permissão possível uma única vez.
 * Os arquivos `*.permissions.ts` devem apenas compor os grupos de acesso
 * por setor/cargo usando estas constantes.
 *
 * Guia de sufixos:
 * - `recurso:menu`: exibe item no menu lateral.
 * - `recurso:table`: libera acesso a páginas/listagens protegidas por rota.
 * - `recurso:view`: libera visualização/detalhe de um registro ou página simples.
 * - `recurso:new`: exibe ações de criação/cadastro.
 * - `recurso:edit`: exibe ações de edição.
 * - `recurso:deletar`: exibe ações de remoção/exclusão.
 * - `recurso:status`: exibe ações de mudança de status.
 * - `recurso:itens`: exibe ações internas de itens de um recurso.
 */

export const DEFAULT_PERMISSIONS_CATALOG = {
	DASHBOARD_MENU: "dashboard:menu",
	DASHBOARD_VIEW: "dashboard:view",
	PERFIL_VIEW: "perfil:view",
} as const;

export const DASHBOARD_REQUERIMENTOS_PERMISSIONS = {
	COUNT_ALL: "dashboard:requerimentos:count",
	COUNT_ALMOXARIFADO: "dashboard:requerimentos:count:almoxarifado",
	COUNT_FARMACIA: "dashboard:requerimentos:count:farmacia",
	COUNT_CME: "dashboard:requerimentos:count:cme",
	TABLE_ALL: "dashboard:requerimentos:table",
	TABLE_ALMOXARIFADO: "dashboard:requerimentos:table:almoxarifado",
	TABLE_FARMACIA: "dashboard:requerimentos:table:farmacia",
	TABLE_CME: "dashboard:requerimentos:table:cme",
} as const;

export const USUARIOS_PERMISSIONS = {
	VIEW: "usuarios:view",
	NEW: "usuarios:new",
	EDIT: "usuarios:edit",
	DELETE: "usuarios:deletar",
	MENU: "usuarios:menu",
	TABLE: "usuarios:table",
} as const;

export const BASES_PERMISSIONS = {
	VIEW: "bases:view",
	NEW: "bases:new",
	EDIT: "bases:edit",
	DELETE: "bases:deletar",
	MENU: "bases:menu",
	TABLE: "bases:table",
} as const;

export const SETORES_PERMISSIONS = {
	VIEW: "setores:view",
	NEW: "setores:new",
	EDIT: "setores:edit",
	DELETE: "setores:deletar",
	MENU: "setores:menu",
	TABLE: "setores:table",
} as const;

export const CARGOS_PERMISSIONS = {
	VIEW: "cargos:view",
	NEW: "cargos:new",
	EDIT: "cargos:edit",
	DELETE: "cargos:deletar",
	MENU: "cargos:menu",
	TABLE: "cargos:table",
} as const;

export const AMBULANCIAS_PERMISSIONS = {
	VIEW: "ambulancias:view",
	NEW: "ambulancias:new",
	EDIT: "ambulancias:edit",
	DELETE: "ambulancias:deletar",
	MENU: "ambulancias:menu",
	TABLE: "ambulancias:table",
} as const;

export const CATEGORIAS_PRODUTO_PERMISSIONS = {
	VIEW: "categorias-produto:view",
	NEW: "categorias-produto:new",
	EDIT: "categorias-produto:edit",
	DELETE: "categorias-produto:deletar",
	MENU: "categorias-produto:menu",
	TABLE: "categorias-produto:table",
} as const;

export const PRODUTOS_PERMISSIONS = {
	MENU: "produtos:menu",
	TABLE: "produtos:table",
	VIEW: "produtos:view",
	NEW: "produtos:new",
	EDIT: "produtos:edit",
	DELETE: "produtos:deletar",
	TOGGLE_ACTIVE: "produtos:toggleActive",
} as const;

export const CATEGORIAS_MEDICAMENTO_PERMISSIONS = {
	NEW: "categorias-medicamento:new",
	EDIT: "categorias-medicamento:edit",
	DELETE: "categorias-medicamento:deletar",
	MENU: "categorias-medicamento:menu",
	TABLE: "categorias-medicamento:table",
} as const;

export const MEDICAMENTOS_PERMISSIONS = {
	MENU: "medicamentos:menu",
	TABLE: "medicamentos:table",
	VIEW: "medicamentos:view",
	NEW: "medicamentos:new",
	EDIT: "medicamentos:edit",
	DELETE: "medicamentos:deletar",
	TOGGLE_ACTIVE: "medicamentos:toggleActive",
} as const;

export const MEDICOS_PERMISSIONS = {
	VIEW: "medicos:view",
	NEW: "medicos:new",
	EDIT: "medicos:edit",
	MENU: "medicos:menu",
	TABLE: "medicos:table",
	TOGGLE_ACTIVE: "medicos:toggleActive",
} as const;

export const RECEITUARIOS_PERMISSIONS = {
	VIEW: "receituarios:view",
	NEW: "receituarios:new",
	EDIT: "receituarios:edit",
	DELETE: "receituarios:deletar",
	MENU: "receituarios:menu",
} as const;

export const VISITAS_BASES_PERMISSIONS = {
	VIEW: "visitas-bases:view",
	NEW: "visitas-bases:new",
	EDIT: "visitas-bases:edit",
	DELETE: "visitas-bases:deletar",
	MENU: "visitas-bases:menu",
	IMAGEM: "visitas-bases:imagem",
	PDF: "visitas-bases:pdf",
} as const;

export const REQUERIMENTOS_PERMISSIONS = {
	NEW: "requerimentos:new", // Pode criar um novo requerimento.
	VIEW: "requerimentos:view", // Pode ver os requerimentos da sua base.
	EDIT: "requerimentos:edit", // Pode editar os requerimentos da sua base.
	VIEW_ANY: "requerimentos:viewAny", // Pode ver todos os requerimentos.
	EDIT_ANY: "requerimentos:editAny", // Pode editar qualquer requerimento.
	DELETE_ANY: "requerimentos:deleteAny", // Pode apagar qualquer requerimento.
	DELETE: "requerimentos:delete", // Pode apagar requerimentos da sua base.
	SEND_ALMOXARIFADO: "requerimentos:send:almoxarifado", // Envia requerimentos para o almoxarifado.
	SEND_FARMACIA: "requerimentos:send:farmacia", // Envia requerimentos para a farmácia.
	SEND_CME: "requerimentos:send:cme", // Envia requerimentos para o CME.
	STATUS: "requerimentos:status", // Pode alterar o status do requerimento.
	ITENS: "requerimentos:itens",
	TABLE: "requerimentos:table",
	PDF: "requerimentos:pdf", // Pode gerar o PDF.
	OPEN_SETORES: "requerimentos:open:setores", // Abre o select de setores dentro do requerimento.
	OPEN_BASES: "requerimentos:open:bases", // Abre o select de bases dentro do requerimento.
	ALMOXARIFADO_MENU: "requerimentos:almoxarifado:menu", // Menu com os requerimentos do almoxarifado.
	FARMACIA_MENU: "requerimentos:farmacia:menu", // Menu com os requerimentos da farmácia.
	CME_MENU: "requerimentos:cme:menu", // Menu com os requerimentos do CME.
	STATUS_ANALISE: "requerimentos:status:analise", // Pode alterar o status do requerimento para análise.
	STATUS_SEPARACAO: "requerimentos:status:separacao", // Pode alterar o status do requerimento para separação.
	STATUS_FINALIZADO: "requerimentos:status:finalizado", // Pode alterar o status do requerimento para finalizado.
	STATUS_CANCELADO: "requerimentos:status:cancelado", // Pode alterar o status do requerimento para cancelado.
} as const;

// Menus específicos das bases descentralizadas de requerimentos, menus para abrir requerimentos
export const REQUERIMENTOS_OPEN_PERMISSIONS = {
	ALMOXARIFADO: "requerimentos:open:almoxarifado",
	FARMACIA: "requerimentos:open:farmacia",
	CME: "requerimentos:open:cme",
} as const;

export const PERMISSION_CATALOG = {
	DEFAULT: DEFAULT_PERMISSIONS_CATALOG,
	DASHBOARD: DASHBOARD_REQUERIMENTOS_PERMISSIONS,
	USUARIOS: USUARIOS_PERMISSIONS,
	BASES: BASES_PERMISSIONS,
	SETORES: SETORES_PERMISSIONS,
	CARGOS: CARGOS_PERMISSIONS,
	AMBULANCIAS: AMBULANCIAS_PERMISSIONS,
	CATEGORIAS_PRODUTO: CATEGORIAS_PRODUTO_PERMISSIONS,
	PRODUTOS: PRODUTOS_PERMISSIONS,
	CATEGORIAS_MEDICAMENTO: CATEGORIAS_MEDICAMENTO_PERMISSIONS,
	MEDICAMENTOS: MEDICAMENTOS_PERMISSIONS,
	MEDICOS: MEDICOS_PERMISSIONS,
	RECEITUARIOS: RECEITUARIOS_PERMISSIONS,
	VISITAS_BASES: VISITAS_BASES_PERMISSIONS,
	REQUERIMENTOS: REQUERIMENTOS_PERMISSIONS,
	REQUERIMENTOS_OPEN: REQUERIMENTOS_OPEN_PERMISSIONS,
} as const;

// União tipada de todas as permissions cadastradas no catálogo.
export type PermissionValue = Values<Values<typeof PERMISSION_CATALOG>>;

// Garante que um grupo seja composto apenas por permissions cadastradas.
export function definePermissionGroup<
	const T extends readonly PermissionValue[],
>(permissions: T): T {
	return permissions;
}

// Seleciona permissions por chave preservando autocomplete e tipo literal.
export function pickPermissions<
	const TPermissions extends Record<string, PermissionValue>,
	const TKeys extends readonly (keyof TPermissions)[],
>(
	permissions: TPermissions,
	keys: TKeys,
): { [Index in keyof TKeys]: TPermissions[TKeys[Index] & keyof TPermissions] } {
	return keys.map((key) => permissions[key]) as unknown as {
		[Index in keyof TKeys]: TPermissions[TKeys[Index] & keyof TPermissions];
	};
}

// Usado por perfis que precisam receber todas as permissions cadastradas.
export const ALL_PERMISSIONS = definePermissionGroup([
	...Object.values(DEFAULT_PERMISSIONS_CATALOG),
	...Object.values(DASHBOARD_REQUERIMENTOS_PERMISSIONS),
	...Object.values(USUARIOS_PERMISSIONS),
	...Object.values(BASES_PERMISSIONS),
	...Object.values(SETORES_PERMISSIONS),
	...Object.values(CARGOS_PERMISSIONS),
	...Object.values(AMBULANCIAS_PERMISSIONS),
	...Object.values(CATEGORIAS_PRODUTO_PERMISSIONS),
	...Object.values(PRODUTOS_PERMISSIONS),
	...Object.values(CATEGORIAS_MEDICAMENTO_PERMISSIONS),
	...Object.values(MEDICAMENTOS_PERMISSIONS),
	...Object.values(MEDICOS_PERMISSIONS),
	...Object.values(RECEITUARIOS_PERMISSIONS),
	...Object.values(VISITAS_BASES_PERMISSIONS),
	...Object.values(REQUERIMENTOS_PERMISSIONS),
	...Object.values(REQUERIMENTOS_OPEN_PERMISSIONS),
] as const);
