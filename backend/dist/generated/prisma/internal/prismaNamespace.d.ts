import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Config: "Config";
    readonly Setor: "Setor";
    readonly Cargo: "Cargo";
    readonly Base: "Base";
    readonly User: "User";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly RefreshToken: "RefreshToken";
    readonly Ambulancia: "Ambulancia";
    readonly CategoriaProduto: "CategoriaProduto";
    readonly Produto: "Produto";
    readonly CategoriasMedicamento: "CategoriasMedicamento";
    readonly Medicamento: "Medicamento";
    readonly Requerimento: "Requerimento";
    readonly RequerimentoStatus: "RequerimentoStatus";
    readonly RequerimentoItem: "RequerimentoItem";
    readonly VisitasBases: "VisitasBases";
    readonly SendEmail: "SendEmail";
    readonly Log: "Log";
    readonly Medico: "Medico";
    readonly Receituario: "Receituario";
    readonly ReceituarioMedicamentos: "ReceituarioMedicamentos";
    readonly Notificacao: "Notificacao";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "config" | "setor" | "cargo" | "base" | "user" | "passwordResetToken" | "refreshToken" | "ambulancia" | "categoriaProduto" | "produto" | "categoriasMedicamento" | "medicamento" | "requerimento" | "requerimentoStatus" | "requerimentoItem" | "visitasBases" | "sendEmail" | "log" | "medico" | "receituario" | "receituarioMedicamentos" | "notificacao";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Config: {
            payload: Prisma.$ConfigPayload<ExtArgs>;
            fields: Prisma.ConfigFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConfigFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConfigFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigPayload>;
                };
                findFirst: {
                    args: Prisma.ConfigFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConfigFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigPayload>;
                };
                findMany: {
                    args: Prisma.ConfigFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigPayload>[];
                };
                create: {
                    args: Prisma.ConfigCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigPayload>;
                };
                createMany: {
                    args: Prisma.ConfigCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ConfigDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigPayload>;
                };
                update: {
                    args: Prisma.ConfigUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigPayload>;
                };
                deleteMany: {
                    args: Prisma.ConfigDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConfigUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ConfigUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigPayload>;
                };
                aggregate: {
                    args: Prisma.ConfigAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConfig>;
                };
                groupBy: {
                    args: Prisma.ConfigGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfigGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConfigCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfigCountAggregateOutputType> | number;
                };
            };
        };
        Setor: {
            payload: Prisma.$SetorPayload<ExtArgs>;
            fields: Prisma.SetorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SetorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SetorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorPayload>;
                };
                findFirst: {
                    args: Prisma.SetorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SetorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorPayload>;
                };
                findMany: {
                    args: Prisma.SetorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorPayload>[];
                };
                create: {
                    args: Prisma.SetorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorPayload>;
                };
                createMany: {
                    args: Prisma.SetorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SetorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorPayload>;
                };
                update: {
                    args: Prisma.SetorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorPayload>;
                };
                deleteMany: {
                    args: Prisma.SetorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SetorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SetorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorPayload>;
                };
                aggregate: {
                    args: Prisma.SetorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSetor>;
                };
                groupBy: {
                    args: Prisma.SetorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SetorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SetorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SetorCountAggregateOutputType> | number;
                };
            };
        };
        Cargo: {
            payload: Prisma.$CargoPayload<ExtArgs>;
            fields: Prisma.CargoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CargoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CargoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CargoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CargoPayload>;
                };
                findFirst: {
                    args: Prisma.CargoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CargoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CargoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CargoPayload>;
                };
                findMany: {
                    args: Prisma.CargoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CargoPayload>[];
                };
                create: {
                    args: Prisma.CargoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CargoPayload>;
                };
                createMany: {
                    args: Prisma.CargoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CargoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CargoPayload>;
                };
                update: {
                    args: Prisma.CargoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CargoPayload>;
                };
                deleteMany: {
                    args: Prisma.CargoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CargoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CargoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CargoPayload>;
                };
                aggregate: {
                    args: Prisma.CargoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCargo>;
                };
                groupBy: {
                    args: Prisma.CargoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CargoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CargoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CargoCountAggregateOutputType> | number;
                };
            };
        };
        Base: {
            payload: Prisma.$BasePayload<ExtArgs>;
            fields: Prisma.BaseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BaseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BasePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BaseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BasePayload>;
                };
                findFirst: {
                    args: Prisma.BaseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BasePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BaseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BasePayload>;
                };
                findMany: {
                    args: Prisma.BaseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BasePayload>[];
                };
                create: {
                    args: Prisma.BaseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BasePayload>;
                };
                createMany: {
                    args: Prisma.BaseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BaseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BasePayload>;
                };
                update: {
                    args: Prisma.BaseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BasePayload>;
                };
                deleteMany: {
                    args: Prisma.BaseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BaseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BaseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BasePayload>;
                };
                aggregate: {
                    args: Prisma.BaseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBase>;
                };
                groupBy: {
                    args: Prisma.BaseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BaseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BaseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BaseCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        PasswordResetToken: {
            payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
            fields: Prisma.PasswordResetTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findMany: {
                    args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                create: {
                    args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                createMany: {
                    args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                update: {
                    args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasswordResetToken>;
                };
                groupBy: {
                    args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        Ambulancia: {
            payload: Prisma.$AmbulanciaPayload<ExtArgs>;
            fields: Prisma.AmbulanciaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AmbulanciaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbulanciaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AmbulanciaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbulanciaPayload>;
                };
                findFirst: {
                    args: Prisma.AmbulanciaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbulanciaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AmbulanciaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbulanciaPayload>;
                };
                findMany: {
                    args: Prisma.AmbulanciaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbulanciaPayload>[];
                };
                create: {
                    args: Prisma.AmbulanciaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbulanciaPayload>;
                };
                createMany: {
                    args: Prisma.AmbulanciaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AmbulanciaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbulanciaPayload>;
                };
                update: {
                    args: Prisma.AmbulanciaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbulanciaPayload>;
                };
                deleteMany: {
                    args: Prisma.AmbulanciaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AmbulanciaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AmbulanciaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbulanciaPayload>;
                };
                aggregate: {
                    args: Prisma.AmbulanciaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAmbulancia>;
                };
                groupBy: {
                    args: Prisma.AmbulanciaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AmbulanciaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AmbulanciaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AmbulanciaCountAggregateOutputType> | number;
                };
            };
        };
        CategoriaProduto: {
            payload: Prisma.$CategoriaProdutoPayload<ExtArgs>;
            fields: Prisma.CategoriaProdutoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoriaProdutoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoriaProdutoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>;
                };
                findFirst: {
                    args: Prisma.CategoriaProdutoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoriaProdutoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>;
                };
                findMany: {
                    args: Prisma.CategoriaProdutoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>[];
                };
                create: {
                    args: Prisma.CategoriaProdutoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>;
                };
                createMany: {
                    args: Prisma.CategoriaProdutoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CategoriaProdutoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>;
                };
                update: {
                    args: Prisma.CategoriaProdutoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoriaProdutoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoriaProdutoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CategoriaProdutoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriaProdutoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategoriaProduto>;
                };
                groupBy: {
                    args: Prisma.CategoriaProdutoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriaProdutoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoriaProdutoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriaProdutoCountAggregateOutputType> | number;
                };
            };
        };
        Produto: {
            payload: Prisma.$ProdutoPayload<ExtArgs>;
            fields: Prisma.ProdutoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProdutoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdutoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdutoPayload>;
                };
                findFirst: {
                    args: Prisma.ProdutoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdutoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdutoPayload>;
                };
                findMany: {
                    args: Prisma.ProdutoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdutoPayload>[];
                };
                create: {
                    args: Prisma.ProdutoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdutoPayload>;
                };
                createMany: {
                    args: Prisma.ProdutoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ProdutoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdutoPayload>;
                };
                update: {
                    args: Prisma.ProdutoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdutoPayload>;
                };
                deleteMany: {
                    args: Prisma.ProdutoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProdutoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ProdutoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdutoPayload>;
                };
                aggregate: {
                    args: Prisma.ProdutoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduto>;
                };
                groupBy: {
                    args: Prisma.ProdutoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProdutoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProdutoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProdutoCountAggregateOutputType> | number;
                };
            };
        };
        CategoriasMedicamento: {
            payload: Prisma.$CategoriasMedicamentoPayload<ExtArgs>;
            fields: Prisma.CategoriasMedicamentoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoriasMedicamentoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasMedicamentoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoriasMedicamentoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasMedicamentoPayload>;
                };
                findFirst: {
                    args: Prisma.CategoriasMedicamentoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasMedicamentoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoriasMedicamentoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasMedicamentoPayload>;
                };
                findMany: {
                    args: Prisma.CategoriasMedicamentoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasMedicamentoPayload>[];
                };
                create: {
                    args: Prisma.CategoriasMedicamentoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasMedicamentoPayload>;
                };
                createMany: {
                    args: Prisma.CategoriasMedicamentoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CategoriasMedicamentoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasMedicamentoPayload>;
                };
                update: {
                    args: Prisma.CategoriasMedicamentoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasMedicamentoPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoriasMedicamentoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoriasMedicamentoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CategoriasMedicamentoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasMedicamentoPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriasMedicamentoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategoriasMedicamento>;
                };
                groupBy: {
                    args: Prisma.CategoriasMedicamentoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriasMedicamentoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoriasMedicamentoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriasMedicamentoCountAggregateOutputType> | number;
                };
            };
        };
        Medicamento: {
            payload: Prisma.$MedicamentoPayload<ExtArgs>;
            fields: Prisma.MedicamentoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MedicamentoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MedicamentoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicamentoPayload>;
                };
                findFirst: {
                    args: Prisma.MedicamentoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MedicamentoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicamentoPayload>;
                };
                findMany: {
                    args: Prisma.MedicamentoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicamentoPayload>[];
                };
                create: {
                    args: Prisma.MedicamentoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicamentoPayload>;
                };
                createMany: {
                    args: Prisma.MedicamentoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MedicamentoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicamentoPayload>;
                };
                update: {
                    args: Prisma.MedicamentoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicamentoPayload>;
                };
                deleteMany: {
                    args: Prisma.MedicamentoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MedicamentoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MedicamentoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicamentoPayload>;
                };
                aggregate: {
                    args: Prisma.MedicamentoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMedicamento>;
                };
                groupBy: {
                    args: Prisma.MedicamentoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicamentoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MedicamentoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicamentoCountAggregateOutputType> | number;
                };
            };
        };
        Requerimento: {
            payload: Prisma.$RequerimentoPayload<ExtArgs>;
            fields: Prisma.RequerimentoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RequerimentoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RequerimentoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoPayload>;
                };
                findFirst: {
                    args: Prisma.RequerimentoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RequerimentoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoPayload>;
                };
                findMany: {
                    args: Prisma.RequerimentoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoPayload>[];
                };
                create: {
                    args: Prisma.RequerimentoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoPayload>;
                };
                createMany: {
                    args: Prisma.RequerimentoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RequerimentoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoPayload>;
                };
                update: {
                    args: Prisma.RequerimentoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoPayload>;
                };
                deleteMany: {
                    args: Prisma.RequerimentoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RequerimentoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RequerimentoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoPayload>;
                };
                aggregate: {
                    args: Prisma.RequerimentoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRequerimento>;
                };
                groupBy: {
                    args: Prisma.RequerimentoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RequerimentoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RequerimentoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RequerimentoCountAggregateOutputType> | number;
                };
            };
        };
        RequerimentoStatus: {
            payload: Prisma.$RequerimentoStatusPayload<ExtArgs>;
            fields: Prisma.RequerimentoStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RequerimentoStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RequerimentoStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoStatusPayload>;
                };
                findFirst: {
                    args: Prisma.RequerimentoStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RequerimentoStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoStatusPayload>;
                };
                findMany: {
                    args: Prisma.RequerimentoStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoStatusPayload>[];
                };
                create: {
                    args: Prisma.RequerimentoStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoStatusPayload>;
                };
                createMany: {
                    args: Prisma.RequerimentoStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RequerimentoStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoStatusPayload>;
                };
                update: {
                    args: Prisma.RequerimentoStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.RequerimentoStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RequerimentoStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RequerimentoStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoStatusPayload>;
                };
                aggregate: {
                    args: Prisma.RequerimentoStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRequerimentoStatus>;
                };
                groupBy: {
                    args: Prisma.RequerimentoStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RequerimentoStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RequerimentoStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RequerimentoStatusCountAggregateOutputType> | number;
                };
            };
        };
        RequerimentoItem: {
            payload: Prisma.$RequerimentoItemPayload<ExtArgs>;
            fields: Prisma.RequerimentoItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RequerimentoItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RequerimentoItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoItemPayload>;
                };
                findFirst: {
                    args: Prisma.RequerimentoItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RequerimentoItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoItemPayload>;
                };
                findMany: {
                    args: Prisma.RequerimentoItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoItemPayload>[];
                };
                create: {
                    args: Prisma.RequerimentoItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoItemPayload>;
                };
                createMany: {
                    args: Prisma.RequerimentoItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RequerimentoItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoItemPayload>;
                };
                update: {
                    args: Prisma.RequerimentoItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoItemPayload>;
                };
                deleteMany: {
                    args: Prisma.RequerimentoItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RequerimentoItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RequerimentoItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RequerimentoItemPayload>;
                };
                aggregate: {
                    args: Prisma.RequerimentoItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRequerimentoItem>;
                };
                groupBy: {
                    args: Prisma.RequerimentoItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RequerimentoItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RequerimentoItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RequerimentoItemCountAggregateOutputType> | number;
                };
            };
        };
        VisitasBases: {
            payload: Prisma.$VisitasBasesPayload<ExtArgs>;
            fields: Prisma.VisitasBasesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VisitasBasesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitasBasesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VisitasBasesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitasBasesPayload>;
                };
                findFirst: {
                    args: Prisma.VisitasBasesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitasBasesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VisitasBasesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitasBasesPayload>;
                };
                findMany: {
                    args: Prisma.VisitasBasesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitasBasesPayload>[];
                };
                create: {
                    args: Prisma.VisitasBasesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitasBasesPayload>;
                };
                createMany: {
                    args: Prisma.VisitasBasesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.VisitasBasesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitasBasesPayload>;
                };
                update: {
                    args: Prisma.VisitasBasesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitasBasesPayload>;
                };
                deleteMany: {
                    args: Prisma.VisitasBasesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VisitasBasesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.VisitasBasesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitasBasesPayload>;
                };
                aggregate: {
                    args: Prisma.VisitasBasesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVisitasBases>;
                };
                groupBy: {
                    args: Prisma.VisitasBasesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VisitasBasesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VisitasBasesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VisitasBasesCountAggregateOutputType> | number;
                };
            };
        };
        SendEmail: {
            payload: Prisma.$SendEmailPayload<ExtArgs>;
            fields: Prisma.SendEmailFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SendEmailFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SendEmailPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SendEmailFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SendEmailPayload>;
                };
                findFirst: {
                    args: Prisma.SendEmailFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SendEmailPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SendEmailFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SendEmailPayload>;
                };
                findMany: {
                    args: Prisma.SendEmailFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SendEmailPayload>[];
                };
                create: {
                    args: Prisma.SendEmailCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SendEmailPayload>;
                };
                createMany: {
                    args: Prisma.SendEmailCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SendEmailDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SendEmailPayload>;
                };
                update: {
                    args: Prisma.SendEmailUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SendEmailPayload>;
                };
                deleteMany: {
                    args: Prisma.SendEmailDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SendEmailUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SendEmailUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SendEmailPayload>;
                };
                aggregate: {
                    args: Prisma.SendEmailAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSendEmail>;
                };
                groupBy: {
                    args: Prisma.SendEmailGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SendEmailGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SendEmailCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SendEmailCountAggregateOutputType> | number;
                };
            };
        };
        Log: {
            payload: Prisma.$LogPayload<ExtArgs>;
            fields: Prisma.LogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogPayload>;
                };
                findFirst: {
                    args: Prisma.LogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogPayload>;
                };
                findMany: {
                    args: Prisma.LogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogPayload>[];
                };
                create: {
                    args: Prisma.LogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogPayload>;
                };
                createMany: {
                    args: Prisma.LogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.LogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogPayload>;
                };
                update: {
                    args: Prisma.LogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogPayload>;
                };
                deleteMany: {
                    args: Prisma.LogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.LogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogPayload>;
                };
                aggregate: {
                    args: Prisma.LogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLog>;
                };
                groupBy: {
                    args: Prisma.LogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LogCountAggregateOutputType> | number;
                };
            };
        };
        Medico: {
            payload: Prisma.$MedicoPayload<ExtArgs>;
            fields: Prisma.MedicoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MedicoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MedicoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicoPayload>;
                };
                findFirst: {
                    args: Prisma.MedicoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MedicoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicoPayload>;
                };
                findMany: {
                    args: Prisma.MedicoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicoPayload>[];
                };
                create: {
                    args: Prisma.MedicoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicoPayload>;
                };
                createMany: {
                    args: Prisma.MedicoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MedicoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicoPayload>;
                };
                update: {
                    args: Prisma.MedicoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicoPayload>;
                };
                deleteMany: {
                    args: Prisma.MedicoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MedicoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MedicoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicoPayload>;
                };
                aggregate: {
                    args: Prisma.MedicoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMedico>;
                };
                groupBy: {
                    args: Prisma.MedicoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MedicoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicoCountAggregateOutputType> | number;
                };
            };
        };
        Receituario: {
            payload: Prisma.$ReceituarioPayload<ExtArgs>;
            fields: Prisma.ReceituarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReceituarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReceituarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioPayload>;
                };
                findFirst: {
                    args: Prisma.ReceituarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReceituarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioPayload>;
                };
                findMany: {
                    args: Prisma.ReceituarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioPayload>[];
                };
                create: {
                    args: Prisma.ReceituarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioPayload>;
                };
                createMany: {
                    args: Prisma.ReceituarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ReceituarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioPayload>;
                };
                update: {
                    args: Prisma.ReceituarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioPayload>;
                };
                deleteMany: {
                    args: Prisma.ReceituarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReceituarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ReceituarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioPayload>;
                };
                aggregate: {
                    args: Prisma.ReceituarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReceituario>;
                };
                groupBy: {
                    args: Prisma.ReceituarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReceituarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReceituarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReceituarioCountAggregateOutputType> | number;
                };
            };
        };
        ReceituarioMedicamentos: {
            payload: Prisma.$ReceituarioMedicamentosPayload<ExtArgs>;
            fields: Prisma.ReceituarioMedicamentosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReceituarioMedicamentosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioMedicamentosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReceituarioMedicamentosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioMedicamentosPayload>;
                };
                findFirst: {
                    args: Prisma.ReceituarioMedicamentosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioMedicamentosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReceituarioMedicamentosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioMedicamentosPayload>;
                };
                findMany: {
                    args: Prisma.ReceituarioMedicamentosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioMedicamentosPayload>[];
                };
                create: {
                    args: Prisma.ReceituarioMedicamentosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioMedicamentosPayload>;
                };
                createMany: {
                    args: Prisma.ReceituarioMedicamentosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ReceituarioMedicamentosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioMedicamentosPayload>;
                };
                update: {
                    args: Prisma.ReceituarioMedicamentosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioMedicamentosPayload>;
                };
                deleteMany: {
                    args: Prisma.ReceituarioMedicamentosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReceituarioMedicamentosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ReceituarioMedicamentosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReceituarioMedicamentosPayload>;
                };
                aggregate: {
                    args: Prisma.ReceituarioMedicamentosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReceituarioMedicamentos>;
                };
                groupBy: {
                    args: Prisma.ReceituarioMedicamentosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReceituarioMedicamentosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReceituarioMedicamentosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReceituarioMedicamentosCountAggregateOutputType> | number;
                };
            };
        };
        Notificacao: {
            payload: Prisma.$NotificacaoPayload<ExtArgs>;
            fields: Prisma.NotificacaoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificacaoPayload>;
                };
                findFirst: {
                    args: Prisma.NotificacaoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificacaoPayload>;
                };
                findMany: {
                    args: Prisma.NotificacaoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificacaoPayload>[];
                };
                create: {
                    args: Prisma.NotificacaoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificacaoPayload>;
                };
                createMany: {
                    args: Prisma.NotificacaoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.NotificacaoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificacaoPayload>;
                };
                update: {
                    args: Prisma.NotificacaoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificacaoPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.NotificacaoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificacaoPayload>;
                };
                aggregate: {
                    args: Prisma.NotificacaoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotificacao>;
                };
                groupBy: {
                    args: Prisma.NotificacaoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificacaoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificacaoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificacaoCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ConfigScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly value: "value";
};
export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum];
export declare const RelationLoadStrategy: {
    readonly query: "query";
    readonly join: "join";
};
export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy];
export declare const SetorScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly nomeVisivel: "nomeVisivel";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SetorScalarFieldEnum = (typeof SetorScalarFieldEnum)[keyof typeof SetorScalarFieldEnum];
export declare const CargoScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly nomeVisivel: "nomeVisivel";
    readonly setor: "setor";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum];
export declare const BaseScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly tipo_ambulancias: "tipo_ambulancias";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type BaseScalarFieldEnum = (typeof BaseScalarFieldEnum)[keyof typeof BaseScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly nome: "nome";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly password: "password";
    readonly baseId: "baseId";
    readonly setorId: "setorId";
    readonly cargoId: "cargoId";
    readonly active: "active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly family: "family";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly userAgent: "userAgent";
    readonly ip: "ip";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const AmbulanciaScalarFieldEnum: {
    readonly id: "id";
    readonly tipo: "tipo";
    readonly nome: "nome";
    readonly baseId: "baseId";
    readonly userId: "userId";
    readonly active: "active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type AmbulanciaScalarFieldEnum = (typeof AmbulanciaScalarFieldEnum)[keyof typeof AmbulanciaScalarFieldEnum];
export declare const CategoriaProdutoScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly userId: "userId";
    readonly active: "active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CategoriaProdutoScalarFieldEnum = (typeof CategoriaProdutoScalarFieldEnum)[keyof typeof CategoriaProdutoScalarFieldEnum];
export declare const ProdutoScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly codigo: "codigo";
    readonly unidade: "unidade";
    readonly categoria: "categoria";
    readonly usa: "usa";
    readonly cme: "cme";
    readonly fora_alx: "fora_alx";
    readonly ordem: "ordem";
    readonly userId: "userId";
    readonly descricao: "descricao";
    readonly active: "active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum];
export declare const CategoriasMedicamentoScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly active: "active";
    readonly userId: "userId";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CategoriasMedicamentoScalarFieldEnum = (typeof CategoriasMedicamentoScalarFieldEnum)[keyof typeof CategoriasMedicamentoScalarFieldEnum];
export declare const MedicamentoScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly codigo: "codigo";
    readonly especificacao: "especificacao";
    readonly categoria: "categoria";
    readonly userId: "userId";
    readonly descricao: "descricao";
    readonly active: "active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type MedicamentoScalarFieldEnum = (typeof MedicamentoScalarFieldEnum)[keyof typeof MedicamentoScalarFieldEnum];
export declare const RequerimentoScalarFieldEnum: {
    readonly id: "id";
    readonly numero: "numero";
    readonly tipo: "tipo";
    readonly status: "status";
    readonly data_inicio: "data_inicio";
    readonly data_fim: "data_fim";
    readonly base: "base";
    readonly setor: "setor";
    readonly cargo: "cargo";
    readonly userId: "userId";
    readonly ambulanciaId: "ambulanciaId";
    readonly obs: "obs";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type RequerimentoScalarFieldEnum = (typeof RequerimentoScalarFieldEnum)[keyof typeof RequerimentoScalarFieldEnum];
export declare const RequerimentoStatusScalarFieldEnum: {
    readonly id: "id";
    readonly requerimentoId: "requerimentoId";
    readonly status: "status";
    readonly userId: "userId";
    readonly created_at: "created_at";
};
export type RequerimentoStatusScalarFieldEnum = (typeof RequerimentoStatusScalarFieldEnum)[keyof typeof RequerimentoStatusScalarFieldEnum];
export declare const RequerimentoItemScalarFieldEnum: {
    readonly id: "id";
    readonly requerimentoId: "requerimentoId";
    readonly produtoId: "produtoId";
    readonly medicamentoId: "medicamentoId";
    readonly quantidade: "quantidade";
    readonly ocorrencia: "ocorrencia";
    readonly userId: "userId";
    readonly ativo: "ativo";
    readonly deleted_at: "deleted_at";
    readonly deleted_by: "deleted_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type RequerimentoItemScalarFieldEnum = (typeof RequerimentoItemScalarFieldEnum)[keyof typeof RequerimentoItemScalarFieldEnum];
export declare const VisitasBasesScalarFieldEnum: {
    readonly id: "id";
    readonly data: "data";
    readonly base: "base";
    readonly outro_motivo: "outro_motivo";
    readonly descricao: "descricao";
    readonly userId: "userId";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type VisitasBasesScalarFieldEnum = (typeof VisitasBasesScalarFieldEnum)[keyof typeof VisitasBasesScalarFieldEnum];
export declare const SendEmailScalarFieldEnum: {
    readonly id: "id";
    readonly status: "status";
    readonly tipo: "tipo";
    readonly email: "email";
    readonly artefatoUUID: "artefatoUUID";
    readonly message: "message";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SendEmailScalarFieldEnum = (typeof SendEmailScalarFieldEnum)[keyof typeof SendEmailScalarFieldEnum];
export declare const LogScalarFieldEnum: {
    readonly id: "id";
    readonly tipo: "tipo";
    readonly modulo: "modulo";
    readonly artefato: "artefato";
    readonly ip: "ip";
    readonly mensagem: "mensagem";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
};
export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum];
export declare const MedicoScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly crm: "crm";
    readonly telefone: "telefone";
    readonly userId: "userId";
    readonly active: "active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type MedicoScalarFieldEnum = (typeof MedicoScalarFieldEnum)[keyof typeof MedicoScalarFieldEnum];
export declare const ReceituarioScalarFieldEnum: {
    readonly id: "id";
    readonly requerimentoId: "requerimentoId";
    readonly status: "status";
    readonly numero: "numero";
    readonly data: "data";
    readonly ocorrencia: "ocorrencia";
    readonly data_ocorrencia: "data_ocorrencia";
    readonly medicoId: "medicoId";
    readonly baseId: "baseId";
    readonly ambulanciaId: "ambulanciaId";
    readonly obs: "obs";
    readonly userId: "userId";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ReceituarioScalarFieldEnum = (typeof ReceituarioScalarFieldEnum)[keyof typeof ReceituarioScalarFieldEnum];
export declare const ReceituarioMedicamentosScalarFieldEnum: {
    readonly id: "id";
    readonly receituarioId: "receituarioId";
    readonly medicamentoId: "medicamentoId";
    readonly qnt: "qnt";
    readonly unidade: "unidade";
    readonly administracao: "administracao";
    readonly diluente: "diluente";
    readonly qnt_diluente: "qnt_diluente";
    readonly qnt_tempo: "qnt_tempo";
    readonly userId: "userId";
    readonly obs: "obs";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ReceituarioMedicamentosScalarFieldEnum = (typeof ReceituarioMedicamentosScalarFieldEnum)[keyof typeof ReceituarioMedicamentosScalarFieldEnum];
export declare const NotificacaoScalarFieldEnum: {
    readonly id: "id";
    readonly mensagem: "mensagem";
    readonly artefatoUUID: "artefatoUUID";
    readonly tipo: "tipo";
    readonly evento: "evento";
    readonly link: "link";
    readonly lida: "lida";
    readonly removida: "removida";
    readonly userId: "userId";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const ConfigOrderByRelevanceFieldEnum: {
    readonly key: "key";
    readonly value: "value";
};
export type ConfigOrderByRelevanceFieldEnum = (typeof ConfigOrderByRelevanceFieldEnum)[keyof typeof ConfigOrderByRelevanceFieldEnum];
export declare const SetorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly nomeVisivel: "nomeVisivel";
};
export type SetorOrderByRelevanceFieldEnum = (typeof SetorOrderByRelevanceFieldEnum)[keyof typeof SetorOrderByRelevanceFieldEnum];
export declare const CargoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly nomeVisivel: "nomeVisivel";
    readonly setor: "setor";
};
export type CargoOrderByRelevanceFieldEnum = (typeof CargoOrderByRelevanceFieldEnum)[keyof typeof CargoOrderByRelevanceFieldEnum];
export declare const BaseOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
};
export type BaseOrderByRelevanceFieldEnum = (typeof BaseOrderByRelevanceFieldEnum)[keyof typeof BaseOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly nome: "nome";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly password: "password";
    readonly baseId: "baseId";
    readonly setorId: "setorId";
    readonly cargoId: "cargoId";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const PasswordResetTokenOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
};
export type PasswordResetTokenOrderByRelevanceFieldEnum = (typeof PasswordResetTokenOrderByRelevanceFieldEnum)[keyof typeof PasswordResetTokenOrderByRelevanceFieldEnum];
export declare const RefreshTokenOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly family: "family";
    readonly userAgent: "userAgent";
    readonly ip: "ip";
};
export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum];
export declare const AmbulanciaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly baseId: "baseId";
    readonly userId: "userId";
};
export type AmbulanciaOrderByRelevanceFieldEnum = (typeof AmbulanciaOrderByRelevanceFieldEnum)[keyof typeof AmbulanciaOrderByRelevanceFieldEnum];
export declare const CategoriaProdutoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly userId: "userId";
};
export type CategoriaProdutoOrderByRelevanceFieldEnum = (typeof CategoriaProdutoOrderByRelevanceFieldEnum)[keyof typeof CategoriaProdutoOrderByRelevanceFieldEnum];
export declare const ProdutoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly categoria: "categoria";
    readonly userId: "userId";
    readonly descricao: "descricao";
};
export type ProdutoOrderByRelevanceFieldEnum = (typeof ProdutoOrderByRelevanceFieldEnum)[keyof typeof ProdutoOrderByRelevanceFieldEnum];
export declare const CategoriasMedicamentoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly userId: "userId";
};
export type CategoriasMedicamentoOrderByRelevanceFieldEnum = (typeof CategoriasMedicamentoOrderByRelevanceFieldEnum)[keyof typeof CategoriasMedicamentoOrderByRelevanceFieldEnum];
export declare const MedicamentoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly especificacao: "especificacao";
    readonly categoria: "categoria";
    readonly userId: "userId";
    readonly descricao: "descricao";
};
export type MedicamentoOrderByRelevanceFieldEnum = (typeof MedicamentoOrderByRelevanceFieldEnum)[keyof typeof MedicamentoOrderByRelevanceFieldEnum];
export declare const RequerimentoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly base: "base";
    readonly setor: "setor";
    readonly cargo: "cargo";
    readonly userId: "userId";
    readonly ambulanciaId: "ambulanciaId";
    readonly obs: "obs";
};
export type RequerimentoOrderByRelevanceFieldEnum = (typeof RequerimentoOrderByRelevanceFieldEnum)[keyof typeof RequerimentoOrderByRelevanceFieldEnum];
export declare const RequerimentoStatusOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly requerimentoId: "requerimentoId";
    readonly userId: "userId";
};
export type RequerimentoStatusOrderByRelevanceFieldEnum = (typeof RequerimentoStatusOrderByRelevanceFieldEnum)[keyof typeof RequerimentoStatusOrderByRelevanceFieldEnum];
export declare const RequerimentoItemOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly requerimentoId: "requerimentoId";
    readonly produtoId: "produtoId";
    readonly medicamentoId: "medicamentoId";
    readonly ocorrencia: "ocorrencia";
    readonly userId: "userId";
    readonly deleted_by: "deleted_by";
};
export type RequerimentoItemOrderByRelevanceFieldEnum = (typeof RequerimentoItemOrderByRelevanceFieldEnum)[keyof typeof RequerimentoItemOrderByRelevanceFieldEnum];
export declare const VisitasBasesOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly base: "base";
    readonly outro_motivo: "outro_motivo";
    readonly descricao: "descricao";
    readonly userId: "userId";
};
export type VisitasBasesOrderByRelevanceFieldEnum = (typeof VisitasBasesOrderByRelevanceFieldEnum)[keyof typeof VisitasBasesOrderByRelevanceFieldEnum];
export declare const SendEmailOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly artefatoUUID: "artefatoUUID";
    readonly message: "message";
};
export type SendEmailOrderByRelevanceFieldEnum = (typeof SendEmailOrderByRelevanceFieldEnum)[keyof typeof SendEmailOrderByRelevanceFieldEnum];
export declare const LogOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly modulo: "modulo";
    readonly artefato: "artefato";
    readonly ip: "ip";
    readonly mensagem: "mensagem";
    readonly userId: "userId";
};
export type LogOrderByRelevanceFieldEnum = (typeof LogOrderByRelevanceFieldEnum)[keyof typeof LogOrderByRelevanceFieldEnum];
export declare const MedicoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly crm: "crm";
    readonly telefone: "telefone";
    readonly userId: "userId";
};
export type MedicoOrderByRelevanceFieldEnum = (typeof MedicoOrderByRelevanceFieldEnum)[keyof typeof MedicoOrderByRelevanceFieldEnum];
export declare const ReceituarioOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly requerimentoId: "requerimentoId";
    readonly numero: "numero";
    readonly medicoId: "medicoId";
    readonly baseId: "baseId";
    readonly ambulanciaId: "ambulanciaId";
    readonly obs: "obs";
    readonly userId: "userId";
};
export type ReceituarioOrderByRelevanceFieldEnum = (typeof ReceituarioOrderByRelevanceFieldEnum)[keyof typeof ReceituarioOrderByRelevanceFieldEnum];
export declare const ReceituarioMedicamentosOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly receituarioId: "receituarioId";
    readonly medicamentoId: "medicamentoId";
    readonly userId: "userId";
    readonly obs: "obs";
};
export type ReceituarioMedicamentosOrderByRelevanceFieldEnum = (typeof ReceituarioMedicamentosOrderByRelevanceFieldEnum)[keyof typeof ReceituarioMedicamentosOrderByRelevanceFieldEnum];
export declare const NotificacaoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly mensagem: "mensagem";
    readonly artefatoUUID: "artefatoUUID";
    readonly evento: "evento";
    readonly link: "link";
    readonly userId: "userId";
};
export type NotificacaoOrderByRelevanceFieldEnum = (typeof NotificacaoOrderByRelevanceFieldEnum)[keyof typeof NotificacaoOrderByRelevanceFieldEnum];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type EnumTipoAmbulanciasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAmbulancias'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumTipoUnidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUnidade'>;
export type EnumUnidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unidade'>;
export type EnumTipoRequerimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoRequerimento'>;
export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>;
export type EnumStatusEmailFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEmail'>;
export type EnumTipoEmailFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEmail'>;
export type EnumTipoLogFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoLog'>;
export type EnumStatusReceituarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusReceituario'>;
export type EnumUnidadeMedicamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnidadeMedicamento'>;
export type EnumTipoAdministracaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAdministracao'>;
export type EnumTipoDiluenteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDiluente'>;
export type EnumTipoNotificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoNotificacao'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    config?: Prisma.ConfigOmit;
    setor?: Prisma.SetorOmit;
    cargo?: Prisma.CargoOmit;
    base?: Prisma.BaseOmit;
    user?: Prisma.UserOmit;
    passwordResetToken?: Prisma.PasswordResetTokenOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    ambulancia?: Prisma.AmbulanciaOmit;
    categoriaProduto?: Prisma.CategoriaProdutoOmit;
    produto?: Prisma.ProdutoOmit;
    categoriasMedicamento?: Prisma.CategoriasMedicamentoOmit;
    medicamento?: Prisma.MedicamentoOmit;
    requerimento?: Prisma.RequerimentoOmit;
    requerimentoStatus?: Prisma.RequerimentoStatusOmit;
    requerimentoItem?: Prisma.RequerimentoItemOmit;
    visitasBases?: Prisma.VisitasBasesOmit;
    sendEmail?: Prisma.SendEmailOmit;
    log?: Prisma.LogOmit;
    medico?: Prisma.MedicoOmit;
    receituario?: Prisma.ReceituarioOmit;
    receituarioMedicamentos?: Prisma.ReceituarioMedicamentosOmit;
    notificacao?: Prisma.NotificacaoOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
