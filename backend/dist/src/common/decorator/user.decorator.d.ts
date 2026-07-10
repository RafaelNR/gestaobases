import { TypeCargo, TypeSetor } from "../../infra/guard/roles.decorator";
export type IUser = {
    id: string;
    nome: string;
    baseId: string;
    setorId: string;
    setor: TypeSetor;
    cargo: TypeCargo;
    base: string;
    iat: number;
    exp: number;
    ip: string;
};
export declare const User: (...dataOrPipes: (IUser | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
