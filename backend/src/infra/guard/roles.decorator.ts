import { Reflector } from '@nestjs/core';

export enum TypeSetor {
  Administrador = 'Administrador',
  Administrativo = 'Administrativo',
  Almoxarifado = 'Almoxarifado',
  Farmacia = 'Farmacia',
  CME = 'CME',
  Frota = 'Frota',
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
  RH = 'RH',
}

export const SetorCargos: Record<TypeSetor, TypeCargo[]> = {
  [TypeSetor.Administrador]: [TypeCargo.Administrador],
  [TypeSetor.Almoxarifado]: [
    TypeCargo.Almoxarifado,
    TypeCargo.AuxAlmoxarifado,
    TypeCargo.Separador,
  ],
  [TypeSetor.Farmacia]: [
    TypeCargo.Farmaceutica,
    TypeCargo.TecFarmacia,
    TypeCargo.ApoioBases,
  ],
  [TypeSetor.CME]: [TypeCargo.CME, TypeCargo.ApoioBases],
  [TypeSetor.Frota]: [TypeCargo.Frota, TypeCargo.Facilitador],
  [TypeSetor.Base]: [TypeCargo.ApoioBases, TypeCargo.Facilitador],
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
