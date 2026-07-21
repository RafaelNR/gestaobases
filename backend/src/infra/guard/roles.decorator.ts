import { Reflector } from '@nestjs/core';

export enum TypeSetor {
  Administrador = 'Administrador',
  Administrativo = 'Administrativo',
  Almoxarifado = 'Almoxarifado',
  Farmacia = 'Farmacia',
  CME = 'CME',
  Frota = 'Frota',
  Enfermagem = 'Enfermagem',
  Base = 'Base',
}

export enum TypeCargo {
  Administrador = 'Administrador',
  Almoxarifado = 'Coordenação de Almoxarifado',
  AuxAlmoxarifado = 'Auxiliar de Almoxarifado',
  Separador = 'Separador',
  Farmaceutica = 'Farmacêutica',
  TecFarmacia = 'Técnico de Farmácia',
  CME = 'CME',
  Frota = 'Coordenação Frota',
  ApoioBases = 'Apoio Bases',
  Facilitador = 'Facilitador',
  Colaborador = 'Colaborador',
  Enfermagem = 'Coordenação de Enfermagem',
  RH = 'RH',
}

export const SetorCargos: Record<TypeSetor, TypeCargo[]> = {
  [TypeSetor.Administrador]: [TypeCargo.Administrador],
  [TypeSetor.Almoxarifado]: [
    TypeCargo.Almoxarifado,
    TypeCargo.AuxAlmoxarifado,
    TypeCargo.Separador,
  ],
  [TypeSetor.Farmacia]: [TypeCargo.Farmaceutica, TypeCargo.TecFarmacia],
  [TypeSetor.CME]: [TypeCargo.CME],
  [TypeSetor.Frota]: [TypeCargo.Frota, TypeCargo.ApoioBases],
  [TypeSetor.Enfermagem]: [TypeCargo.Enfermagem],
  [TypeSetor.Base]: [TypeCargo.Facilitador, TypeCargo.Colaborador],
  [TypeSetor.Administrativo]: [TypeCargo.RH],
};

// @Autenticado — qualquer usuário logado, sem restrição de cargo ou setor
export const Autenticado = Reflector.createDecorator<true>({
  key: 'autenticado_key',
});

// @Cargo — libera cargo(s) específico(s)
export const Cargo = Reflector.createDecorator<TypeCargo | TypeCargo[]>({
  key: 'cargo_key',
});

// @Setor — libera todos os cargos pertencentes ao setor
export const Setor = Reflector.createDecorator<TypeSetor | TypeSetor[]>({
  key: 'setor_key',
});
