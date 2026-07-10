import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { EnvironmentVariables } from '@src/common/types/env';
declare const JwtRefreshStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private config;
    constructor(config: ConfigService<EnvironmentVariables>);
    validate(req: Request, payload: {
        id?: string;
        sub?: string;
    }): Promise<{
        id: string;
        refreshToken: string;
    }>;
}
export {};
