import React from "react";
import { Permission } from "../Guard";

const Home = React.lazy(() => import("./dashboard"));
const Perfil = React.lazy(() => import("./perfil"));

const Usuarios = React.lazy(() => import("./usuarios"));
const UsuarioNew = React.lazy(() => import("./usuarios/new"));
const UsuarioEdit = React.lazy(() => import("./usuarios/edit"));

const Bases = React.lazy(() => import("./bases"));
const Setores = React.lazy(() => import("./setores"));
const Cargos = React.lazy(() => import("./cargos"));
const Ambulancias = React.lazy(() => import("./ambulancias"));
const CategoriasProduto = React.lazy(() => import("./categorias-produto"));
const Produtos = React.lazy(() => import("./produtos"));
const CategoriasMedicamento = React.lazy(
	() => import("./categorias-medicamento"),
);
const Medicamentos = React.lazy(() => import("./medicamentos"));
const Medicos = React.lazy(() => import("./medicos"));
const Estoques = React.lazy(() => import("./estoques"));

const VisitasBases = React.lazy(() => import("./visitas-bases"));
const Receituarios = React.lazy(() => import("./receituarios"));
const RelatorioGeralRequerimentos = React.lazy(
	() => import("./relatorios/requerimentos"),
);
const RelatorioEstoque = React.lazy(() => import("./relatorios/estoque"));

// Requerimento
const RequerimentoAlmoxarifado = React.lazy(
	() => import("./requerimento/almoxarifado"),
);
const RequerimentoFarmacia = React.lazy(
	() => import("./requerimento/farmacia"),
);
const RequerimentoCme = React.lazy(() => import("./requerimento/cme"));
const RequerimentoEdit = React.lazy(() => import("./requerimento/edit"));
const RequerimentoView = React.lazy(() => import("./requerimento/view"));

// GESTAO requerimentos
const RequerimentosAlmoxarifadoGestao = React.lazy(
	() => import("./requerimentos/almoxarifado-gestao"),
);
const RequerimentosFarmaciaGestao = React.lazy(
	() => import("./requerimentos/farmacia-gestao"),
);
const RequerimentosCmeGestao = React.lazy(
	() => import("./requerimentos/cme-gestao"),
);

export type IPages = {
	index?: boolean;
	path: string;
	Element: any;
	title: string;
	subTitle?: string | null;
	permission: Permission;
};

export const Pages: IPages[] = [
	{
		index: true,
		path: "/",
		Element: Home,
		title: "Dashboard",
		subTitle: "Resumo operacional e indicadores principais do sistema.",
		permission: "dashboard:view",
	},
	{
		path: "/dashboard",
		Element: Home,
		title: "Dashboard",
		subTitle: "Resumo operacional e indicadores principais do sistema.",
		permission: "dashboard:view",
	},
	{
		path: "/perfil",
		Element: Perfil,
		title: "Meu Perfil",
		subTitle: "Consulte e atualize seus dados de acesso.",
		permission: "perfil:view",
	},
	{
		path: "/usuarios",
		Element: Usuarios,
		title: "Usuários",
		subTitle: "Gerencie usuários, setores, cargos e status de acesso.",
		permission: "usuarios:table",
	},
	{
		path: "/usuarios/new",
		Element: UsuarioNew,
		title: "Cadastro Usuário",
		subTitle: "Crie um novo usuário com setor, cargo e base vinculados.",
		permission: "usuarios:new",
	},
	{
		path: "/usuarios/edit/:uuid",
		Element: UsuarioEdit,
		title: "Editar Usuário",
		subTitle: "Atualize os dados cadastrais e vínculos do usuário.",
		permission: "usuarios:edit",
	},
	{
		path: "/bases",
		Element: Bases,
		title: "Bases",
		subTitle: "Mantenha o cadastro das bases descentralizadas.",
		permission: "bases:table",
	},
	{
		path: "/setores",
		Element: Setores,
		title: "Setores",
		subTitle: "Organize setores utilizados em usuários e requerimentos.",
		permission: "setores:table",
	},
	{
		path: "/cargos",
		Element: Cargos,
		title: "Cargos",
		subTitle: "Gerencie cargos vinculados aos setores do sistema.",
		permission: "cargos:table",
	},
	{
		path: "/ambulancias",
		Element: Ambulancias,
		title: "Ambulâncias",
		subTitle: "Controle ambulâncias e vínculos com bases.",
		permission: "ambulancias:table",
	},
	{
		path: "/categorias-produto",
		Element: CategoriasProduto,
		title: "Categorias de Produto",
		subTitle: "Classifique produtos por categorias operacionais.",
		permission: "categorias-produto:table",
	},
	{
		path: "/produtos",
		Element: Produtos,
		title: "Produtos",
		subTitle: "Gerencie produtos, códigos, unidades e status.",
		permission: "produtos:table",
	},
	{
		path: "/categorias-medicamento",
		Element: CategoriasMedicamento,
		title: "Categorias de Medicamento",
		subTitle: "Classifique medicamentos por categorias.",
		permission: "categorias-medicamento:table",
	},
	{
		path: "/medicamentos",
		Element: Medicamentos,
		title: "Medicamentos",
		subTitle: "Gerencie medicamentos, especificações e status.",
		permission: "medicamentos:table",
	},
	{
		path: "/estoques",
		Element: Estoques,
		title: "Controle de Estoque",
		subTitle: "Acompanhe saldos, lotes e riscos de vencimento.",
		permission: "estoques:table",
	},
	{
		path: "/medicos",
		Element: Medicos,
		title: "Médicos",
		subTitle: "Mantenha o cadastro de médicos para receituários.",
		permission: "medicos:table",
	},
	{
		path: "/receituarios",
		Element: Receituarios,
		title: "Receituários",
		subTitle: "Acompanhe e emita receituários vinculados aos medicamentos.",
		permission: "receituarios:view",
	},
	{
		path: "/visitas-bases",
		Element: VisitasBases,
		title: "Calendário de Visitas",
		subTitle: "Planeje e acompanhe visitas às bases.",
		permission: "visitas-bases:view",
	},
	{
		path: "/relatorios/requerimentos",
		Element: RelatorioGeralRequerimentos,
		title: "Relatório geral de requerimentos",
		subTitle: "Consulte requerimentos e quantidades por base e ambulância.",
		permission: "relatorios:requerimentos",
	},
	{
		path: "/relatorios/estoque",
		Element: RelatorioEstoque,
		title: "Controle de movimentações de estoque",
		subTitle: "Consulte movimentações e validade por base.",
		permission: "relatorios:estoque",
	},
	{
		path: "/requerimentos/almoxarifado",
		Element: RequerimentoAlmoxarifado,
		title: "Abrir Requerimento Almoxarifado",
		subTitle: "Monte o carrinho e envie uma nova requisição de almoxarifado.",
		permission: "requerimentos:new",
	},
	{
		path: "/requerimentos/:tipo/edit/:requerimentoId",
		Element: RequerimentoEdit,
		title: "Editar Requerimento",
		subTitle: "Revise os dados e itens do requerimento.",
		permission: "requerimentos:table",
	},
	{
		path: "/requerimentos/:tipo/view/:requerimentoId",
		Element: RequerimentoView,
		title: "Visualizar Requerimento",
		subTitle: "Consulte os dados, itens e histórico do requerimento.",
		permission: "requerimentos:table",
	},
	{
		path: "/requerimentos/gestao/almoxarifado",
		Element: RequerimentosAlmoxarifadoGestao,
		title: "Gestão de Requerimentos Almoxarifado",
		subTitle:
			"Acompanhe, edite itens e altere status dos requerimentos de almoxarifado.",
		permission: "requerimentos:table",
	},
	{
		path: "/requerimentos/farmacia",
		Element: RequerimentoFarmacia,
		title: "Abrir Requerimento Farmácia",
		subTitle: "Monte o carrinho e envie uma nova requisição de farmácia.",
		permission: "requerimentos:new",
	},
	{
		path: "/requerimentos/gestao/farmacia",
		Element: RequerimentosFarmaciaGestao,
		title: "Gestão de Requerimentos Farmácia",
		subTitle:
			"Acompanhe, edite itens e altere status dos requerimentos de farmácia.",
		permission: "requerimentos:table",
	},
	{
		path: "/requerimentos/cme",
		Element: RequerimentoCme,
		title: "Abrir Requerimento CME",
		subTitle: "Monte o carrinho e envie uma nova requisição de CME.",
		permission: "requerimentos:new",
	},
	{
		path: "/requerimentos/gestao/cme",
		Element: RequerimentosCmeGestao,
		title: "Gestão de Requerimentos CME",
		subTitle:
			"Acompanhe, edite itens e altere status dos requerimentos de CME.",
		permission: "requerimentos:table",
	},
];
