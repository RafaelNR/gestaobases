import { AuthGuard } from './auth.guard';
export declare class AuthModule {
    static forRoot(): {
        module: typeof AuthModule;
        providers: {
            provide: string;
            useClass: typeof AuthGuard;
        }[];
    };
}
