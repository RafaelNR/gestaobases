import { RolesGuard } from './roles.guard';
export declare class RolesModule {
    static forRoot(): {
        module: typeof RolesModule;
        providers: {
            provide: string;
            useClass: typeof RolesGuard;
        }[];
    };
}
