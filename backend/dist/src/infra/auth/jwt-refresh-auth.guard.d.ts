import { ExecutionContext } from '@nestjs/common';
declare const JwtRefreshAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtRefreshAuthGuard extends JwtRefreshAuthGuard_base {
    private readonly logger;
    handleRequest<TUser = unknown>(err: unknown, user: TUser, info: unknown, context: ExecutionContext): TUser;
    private getErrorMessage;
    private clearAuthCookies;
}
export {};
