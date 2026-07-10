const getIcon = (icon: string) => {
	return (
		{
			New: "fluent:tab-new-24-filled",
			Edit: "fa:edit",
			View: "carbon:view-filled",
			Lista: "ri:table-fill",
			Dashboard: "ic:round-dashboard",
			Cargos: "oui:app-users-roles",
			Usuarios: "mdi:users-group",
			Relatórios: "carbon:report-data",
			Relatorios: "carbon:report-data",
			Manifestacoes: "fluent:mail-list-16-filled",
			Assuntos: "material-symbols:mail",
			Acoes: "icon-park-solid:transaction",
			Setores: "mingcute:department-fill",
			Disparos: "hugeicons:chat-bot",
			Tags: "bi:tags-fill",
			RelatorioManifestacoes: "iconoir:stats-report",
			RelatorioNotasUnidades: "carbon:task-star",
			RelatorioTempoResposta: "tabler:file-time",
			RelatorioTempoRespostaDetalhado: "tdesign:task-time-filled",
			Requerimentos: "glyphs:note-medical-bold",
			Ambulancias: "mdi:ambulance",
			Almoxarifado: "material-symbols:inventory-2",
			Farmacia: "mdi:pharmacy",
			Medicos: "mdi:doctor",
			CategoriasProduto: "mdi:tag-multiple",
			Produtos: "mdi:package-variant-closed",
			CategoriasMedicamento: "mdi:medication",
			Medicamentos: "mdi:pill",
			Bases: "mdi:map-marker-multiple",
			Receituarios: "mdi:prescription",
			"": "",
		}[icon] || "iconoir:file-not-found"
	);
};

export default getIcon;
