import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { describe, expect, it, jest } from '@jest/globals';

import { IUser } from '@src/common/decorator/user.decorator';
import { RolesGuard } from './roles.guard';
import {
  Autenticado,
  Cargo,
  Setor,
  TypeCargo,
  TypeSetor,
} from './roles.decorator';

function createContext(user: Partial<IUser>): ExecutionContext {
  return {
    switchToHttp: () => ({
      getRequest: () => ({ user }),
    }),
    getHandler: () => undefined,
    getClass: () => undefined,
  } as unknown as ExecutionContext;
}

describe('RolesGuard', () => {
  it('libera setor comparando setor pela key interna', () => {
    const reflector = {
      getAllAndOverride: jest.fn((metadataKey: unknown) => {
        if (metadataKey === Autenticado) return undefined;
        if (metadataKey === Cargo) return undefined;
        if (metadataKey === Setor) return TypeSetor.Almoxarifado;
        return undefined;
      }),
    } as unknown as Reflector;
    const guard = new RolesGuard(reflector);

    const result = guard.canActivate(
      createContext({
        setor: TypeSetor.Almoxarifado,
        cargo: TypeCargo.RH,
      })
    );

    expect(result).toBe(true);
  });

  it('libera cargo comparando cargo pela key interna', () => {
    const reflector = {
      getAllAndOverride: jest.fn((metadataKey: unknown) => {
        if (metadataKey === Autenticado) return undefined;
        if (metadataKey === Cargo) return TypeCargo.Almoxarifado;
        if (metadataKey === Setor) return undefined;
        return undefined;
      }),
    } as unknown as Reflector;
    const guard = new RolesGuard(reflector);

    const result = guard.canActivate(
      createContext({
        setor: TypeSetor.Base,
        cargo: 'Almoxarifado' as IUser['cargo'],
      })
    );

    expect(result).toBe(true);
  });

  it('libera quando cargo ou setor baterem com decorators no mesmo metodo', () => {
    const reflector = {
      getAllAndOverride: jest.fn((metadataKey: unknown) => {
        if (metadataKey === Autenticado) return undefined;
        if (metadataKey === Cargo) return TypeCargo.Almoxarifado;
        if (metadataKey === Setor) return TypeSetor.Farmacia;
        return undefined;
      }),
    } as unknown as Reflector;
    const guard = new RolesGuard(reflector);

    const setorPermitido = guard.canActivate(
      createContext({
        setor: TypeSetor.Farmacia,
        cargo: TypeCargo.RH,
      })
    );
    const cargoPermitido = guard.canActivate(
      createContext({
        setor: TypeSetor.Base,
        cargo: 'Almoxarifado' as IUser['cargo'],
      })
    );

    expect(setorPermitido).toBe(true);
    expect(cargoPermitido).toBe(true);
  });
});
