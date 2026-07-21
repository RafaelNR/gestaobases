export enum TypeSetor {
	Administrador = "Administrador",
	Administrativo = "Administrativo",
	Almoxarifado = "Almoxarifado",
	Farmacia = "Farmacia",
	CME = "CME",
	Frota = "Frota",
	Enfermagem = "Enfermagem",
	Base = "Base",
}

export enum TypeCargo {
	Administrador = "Administrador",
	Almoxarifado = "Coordenação de Almoxarifado",
	AuxAlmoxarifado = "Auxiliar de Almoxarifado",
	Separador = "Separador",
	Farmaceutica = "Farmacêutica",
	TecFarmacia = "Técnico de Farmácia",
	CME = "CME",
	Frota = "Coordenação Frota",
	ApoioBases = "Apoio Bases",
	Facilitador = "Facilitador",
	Colaborador = "Colaborador",
	Enfermagem = "Coordenação de Enfermagem",
	RH = "RH",
}

export type TypeSetorKey = keyof typeof TypeSetor;
export type TypeCargoKey = keyof typeof TypeCargo;

export const SetorCargos: Record<TypeSetorKey, readonly TypeCargoKey[]> = {
	Administrador: ["Administrador"],
	Almoxarifado: ["Almoxarifado", "AuxAlmoxarifado", "Separador"],
	Farmacia: ["Farmaceutica", "TecFarmacia"],
	CME: ["CME"],
	Frota: ["Frota", "ApoioBases"],
	Enfermagem: ["Enfermagem"],
	Base: ["Facilitador", "Colaborador"],
	Administrativo: ["RH"],
};
