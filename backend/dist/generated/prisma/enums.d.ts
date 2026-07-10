export declare const TipoAmbulancias: {
    readonly USA: "USA";
    readonly USB: "USB";
    readonly USA_USB: "USA_USB";
};
export type TipoAmbulancias = (typeof TipoAmbulancias)[keyof typeof TipoAmbulancias];
export declare const TipoNotificacao: {
    readonly CME: "CME";
    readonly Farmacia: "Farmacia";
    readonly Almoxarifado: "Almoxarifado";
    readonly Administrativo: "Administrativo";
};
export type TipoNotificacao = (typeof TipoNotificacao)[keyof typeof TipoNotificacao];
export declare const TipoRequerimento: {
    readonly CME: "CME";
    readonly Farmacia: "Farmacia";
    readonly Almoxarifado: "Almoxarifado";
    readonly Administrativo: "Administrativo";
};
export type TipoRequerimento = (typeof TipoRequerimento)[keyof typeof TipoRequerimento];
export declare const Unidade: {
    readonly Unidade: "Unidade";
    readonly Pacote: "Pacote";
    readonly Kit: "Kit";
    readonly Caixa: "Caixa";
};
export type Unidade = (typeof Unidade)[keyof typeof Unidade];
export declare const UnidadeMedicamento: {
    readonly ampolas: "ampolas";
    readonly ml: "ml";
};
export type UnidadeMedicamento = (typeof UnidadeMedicamento)[keyof typeof UnidadeMedicamento];
export declare const Status: {
    readonly Rascunho: "Rascunho";
    readonly Recebido: "Recebido";
    readonly Analise: "Analise";
    readonly Separacao: "Separacao";
    readonly Finalizado: "Finalizado";
    readonly Cancelado: "Cancelado";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const TipoLog: {
    readonly created: "created";
    readonly updated: "updated";
    readonly deleted: "deleted";
    readonly status: "status";
    readonly active: "active";
    readonly disable: "disable";
    readonly view: "view";
};
export type TipoLog = (typeof TipoLog)[keyof typeof TipoLog];
export declare const StatusEmail: {
    readonly success: "success";
    readonly error: "error";
    readonly pendent: "pendent";
};
export type StatusEmail = (typeof StatusEmail)[keyof typeof StatusEmail];
export declare const TipoEmail: {
    readonly Almoxarifado: "Almoxarifado";
    readonly CME: "CME";
    readonly Farmacia: "Farmacia";
    readonly Status: "Status";
    readonly Calendario: "Calendario";
};
export type TipoEmail = (typeof TipoEmail)[keyof typeof TipoEmail];
export declare const TipoUnidade: {
    readonly USA: "USA";
    readonly USB: "USB";
};
export type TipoUnidade = (typeof TipoUnidade)[keyof typeof TipoUnidade];
export declare const StatusReceituario: {
    readonly Aberto: "Aberto";
    readonly Finalizado: "Finalizado";
    readonly Cancelado: "Cancelado";
};
export type StatusReceituario = (typeof StatusReceituario)[keyof typeof StatusReceituario];
export declare const TipoDiluente: {
    readonly agua_destilada: "agua_destilada";
    readonly nacl09: "nacl09";
};
export type TipoDiluente = (typeof TipoDiluente)[keyof typeof TipoDiluente];
export declare const TipoAdministracao: {
    readonly EV: "EV";
    readonly IM: "IM";
    readonly SC: "SC";
    readonly IN: "IN";
    readonly IR: "IR";
    readonly IO: "IO";
};
export type TipoAdministracao = (typeof TipoAdministracao)[keyof typeof TipoAdministracao];
