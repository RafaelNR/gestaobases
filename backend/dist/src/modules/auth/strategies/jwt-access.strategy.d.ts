import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { EnvironmentVariables } from '@src/common/types/env';
export interface JwtPayload {
    id: string;
    nome: string;
    setor: string;
    cargo: string;
    baseId: string;
    setorId: string;
    iat?: number;
    exp?: number;
}
declare const JwtAccessStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtAccessStrategy extends JwtAccessStrategy_base {
    private config;
    constructor(config: ConfigService<EnvironmentVariables>);
    validate(payload: JwtPayload): Promise<{
        id: string;
        nome: string;
        setor: string;
        cargo: string;
        baseId: string;
        setorId: string;
    }>;
}
export {};
