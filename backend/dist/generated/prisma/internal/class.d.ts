import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get config(): Prisma.ConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get setor(): Prisma.SetorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cargo(): Prisma.CargoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get base(): Prisma.BaseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ambulancia(): Prisma.AmbulanciaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get categoriaProduto(): Prisma.CategoriaProdutoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get produto(): Prisma.ProdutoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get categoriasMedicamento(): Prisma.CategoriasMedicamentoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get medicamento(): Prisma.MedicamentoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get requerimento(): Prisma.RequerimentoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get requerimentoStatus(): Prisma.RequerimentoStatusDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get requerimentoItem(): Prisma.RequerimentoItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get visitasBases(): Prisma.VisitasBasesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get sendEmail(): Prisma.SendEmailDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get log(): Prisma.LogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get medico(): Prisma.MedicoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get receituario(): Prisma.ReceituarioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get receituarioMedicamentos(): Prisma.ReceituarioMedicamentosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
