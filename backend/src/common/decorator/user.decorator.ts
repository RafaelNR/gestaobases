import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TypeCargo, TypeSetor } from '@src/infra/guard/roles.decorator';

export type IUser = {
  id: string;
  nome: string;
  baseId: string;
  setorId: string;
  cargoId: string;
  setor: TypeSetor;
  cargo: TypeCargo;
  base: string;
  iat: number;
  exp: number;
  ip: string;
};

export const User = createParamDecorator<IUser>(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (request.user) {
      request.user.ip = request.ip || request.headers['x-forwarded-for'];
      return request.user;
    }

    return undefined;
  }
);
