import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LogModel = runtime.Types.Result.DefaultSelection<Prisma.$LogPayload>;
export type AggregateLog = {
    _count: LogCountAggregateOutputType | null;
    _min: LogMinAggregateOutputType | null;
    _max: LogMaxAggregateOutputType | null;
};
export type LogMinAggregateOutputType = {
    id: string | null;
    tipo: $Enums.TipoLog | null;
    modulo: string | null;
    artefato: string | null;
    ip: string | null;
    mensagem: string | null;
    userId: string | null;
    createdAt: Date | null;
};
export type LogMaxAggregateOutputType = {
    id: string | null;
    tipo: $Enums.TipoLog | null;
    modulo: string | null;
    artefato: string | null;
    ip: string | null;
    mensagem: string | null;
    userId: string | null;
    createdAt: Date | null;
};
export type LogCountAggregateOutputType = {
    id: number;
    tipo: number;
    modulo: number;
    artefato: number;
    ip: number;
    mensagem: number;
    userId: number;
    createdAt: number;
    _all: number;
};
export type LogMinAggregateInputType = {
    id?: true;
    tipo?: true;
    modulo?: true;
    artefato?: true;
    ip?: true;
    mensagem?: true;
    userId?: true;
    createdAt?: true;
};
export type LogMaxAggregateInputType = {
    id?: true;
    tipo?: true;
    modulo?: true;
    artefato?: true;
    ip?: true;
    mensagem?: true;
    userId?: true;
    createdAt?: true;
};
export type LogCountAggregateInputType = {
    id?: true;
    tipo?: true;
    modulo?: true;
    artefato?: true;
    ip?: true;
    mensagem?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
};
export type LogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogWhereInput;
    orderBy?: Prisma.LogOrderByWithRelationInput | Prisma.LogOrderByWithRelationInput[];
    cursor?: Prisma.LogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LogCountAggregateInputType;
    _min?: LogMinAggregateInputType;
    _max?: LogMaxAggregateInputType;
};
export type GetLogAggregateType<T extends LogAggregateArgs> = {
    [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLog[P]> : Prisma.GetScalarType<T[P], AggregateLog[P]>;
};
export type LogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogWhereInput;
    orderBy?: Prisma.LogOrderByWithAggregationInput | Prisma.LogOrderByWithAggregationInput[];
    by: Prisma.LogScalarFieldEnum[] | Prisma.LogScalarFieldEnum;
    having?: Prisma.LogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LogCountAggregateInputType | true;
    _min?: LogMinAggregateInputType;
    _max?: LogMaxAggregateInputType;
};
export type LogGroupByOutputType = {
    id: string;
    tipo: $Enums.TipoLog;
    modulo: string;
    artefato: string | null;
    ip: string;
    mensagem: string;
    userId: string;
    createdAt: Date;
    _count: LogCountAggregateOutputType | null;
    _min: LogMinAggregateOutputType | null;
    _max: LogMaxAggregateOutputType | null;
};
export type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LogGroupByOutputType[P]>;
}>>;
export type LogWhereInput = {
    AND?: Prisma.LogWhereInput | Prisma.LogWhereInput[];
    OR?: Prisma.LogWhereInput[];
    NOT?: Prisma.LogWhereInput | Prisma.LogWhereInput[];
    id?: Prisma.StringFilter<"Log"> | string;
    tipo?: Prisma.EnumTipoLogFilter<"Log"> | $Enums.TipoLog;
    modulo?: Prisma.StringFilter<"Log"> | string;
    artefato?: Prisma.StringNullableFilter<"Log"> | string | null;
    ip?: Prisma.StringFilter<"Log"> | string;
    mensagem?: Prisma.StringFilter<"Log"> | string;
    userId?: Prisma.StringFilter<"Log"> | string;
    createdAt?: Prisma.DateTimeFilter<"Log"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type LogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    modulo?: Prisma.SortOrder;
    artefato?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.LogOrderByRelevanceInput;
};
export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LogWhereInput | Prisma.LogWhereInput[];
    OR?: Prisma.LogWhereInput[];
    NOT?: Prisma.LogWhereInput | Prisma.LogWhereInput[];
    tipo?: Prisma.EnumTipoLogFilter<"Log"> | $Enums.TipoLog;
    modulo?: Prisma.StringFilter<"Log"> | string;
    artefato?: Prisma.StringNullableFilter<"Log"> | string | null;
    ip?: Prisma.StringFilter<"Log"> | string;
    mensagem?: Prisma.StringFilter<"Log"> | string;
    userId?: Prisma.StringFilter<"Log"> | string;
    createdAt?: Prisma.DateTimeFilter<"Log"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type LogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    modulo?: Prisma.SortOrder;
    artefato?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LogCountOrderByAggregateInput;
    _max?: Prisma.LogMaxOrderByAggregateInput;
    _min?: Prisma.LogMinOrderByAggregateInput;
};
export type LogScalarWhereWithAggregatesInput = {
    AND?: Prisma.LogScalarWhereWithAggregatesInput | Prisma.LogScalarWhereWithAggregatesInput[];
    OR?: Prisma.LogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LogScalarWhereWithAggregatesInput | Prisma.LogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Log"> | string;
    tipo?: Prisma.EnumTipoLogWithAggregatesFilter<"Log"> | $Enums.TipoLog;
    modulo?: Prisma.StringWithAggregatesFilter<"Log"> | string;
    artefato?: Prisma.StringNullableWithAggregatesFilter<"Log"> | string | null;
    ip?: Prisma.StringWithAggregatesFilter<"Log"> | string;
    mensagem?: Prisma.StringWithAggregatesFilter<"Log"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Log"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Log"> | Date | string;
};
export type LogCreateInput = {
    id?: string;
    tipo: $Enums.TipoLog;
    modulo: string;
    artefato?: string | null;
    ip: string;
    mensagem: string;
    createdAt?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutLogsInput;
};
export type LogUncheckedCreateInput = {
    id?: string;
    tipo: $Enums.TipoLog;
    modulo: string;
    artefato?: string | null;
    ip: string;
    mensagem: string;
    userId: string;
    createdAt?: Date | string;
};
export type LogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog;
    modulo?: Prisma.StringFieldUpdateOperationsInput | string;
    artefato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutLogsNestedInput;
};
export type LogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog;
    modulo?: Prisma.StringFieldUpdateOperationsInput | string;
    artefato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogCreateManyInput = {
    id?: string;
    tipo: $Enums.TipoLog;
    modulo: string;
    artefato?: string | null;
    ip: string;
    mensagem: string;
    userId: string;
    createdAt?: Date | string;
};
export type LogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog;
    modulo?: Prisma.StringFieldUpdateOperationsInput | string;
    artefato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog;
    modulo?: Prisma.StringFieldUpdateOperationsInput | string;
    artefato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogListRelationFilter = {
    every?: Prisma.LogWhereInput;
    some?: Prisma.LogWhereInput;
    none?: Prisma.LogWhereInput;
};
export type LogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LogOrderByRelevanceInput = {
    fields: Prisma.LogOrderByRelevanceFieldEnum | Prisma.LogOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type LogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    modulo?: Prisma.SortOrder;
    artefato?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    modulo?: Prisma.SortOrder;
    artefato?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    modulo?: Prisma.SortOrder;
    artefato?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LogCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LogCreateWithoutUserInput, Prisma.LogUncheckedCreateWithoutUserInput> | Prisma.LogCreateWithoutUserInput[] | Prisma.LogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LogCreateOrConnectWithoutUserInput | Prisma.LogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LogCreateManyUserInputEnvelope;
    connect?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
};
export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LogCreateWithoutUserInput, Prisma.LogUncheckedCreateWithoutUserInput> | Prisma.LogCreateWithoutUserInput[] | Prisma.LogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LogCreateOrConnectWithoutUserInput | Prisma.LogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LogCreateManyUserInputEnvelope;
    connect?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
};
export type LogUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LogCreateWithoutUserInput, Prisma.LogUncheckedCreateWithoutUserInput> | Prisma.LogCreateWithoutUserInput[] | Prisma.LogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LogCreateOrConnectWithoutUserInput | Prisma.LogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LogUpsertWithWhereUniqueWithoutUserInput | Prisma.LogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LogCreateManyUserInputEnvelope;
    set?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
    disconnect?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
    delete?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
    connect?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
    update?: Prisma.LogUpdateWithWhereUniqueWithoutUserInput | Prisma.LogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LogUpdateManyWithWhereWithoutUserInput | Prisma.LogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LogScalarWhereInput | Prisma.LogScalarWhereInput[];
};
export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LogCreateWithoutUserInput, Prisma.LogUncheckedCreateWithoutUserInput> | Prisma.LogCreateWithoutUserInput[] | Prisma.LogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LogCreateOrConnectWithoutUserInput | Prisma.LogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LogUpsertWithWhereUniqueWithoutUserInput | Prisma.LogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LogCreateManyUserInputEnvelope;
    set?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
    disconnect?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
    delete?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
    connect?: Prisma.LogWhereUniqueInput | Prisma.LogWhereUniqueInput[];
    update?: Prisma.LogUpdateWithWhereUniqueWithoutUserInput | Prisma.LogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LogUpdateManyWithWhereWithoutUserInput | Prisma.LogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LogScalarWhereInput | Prisma.LogScalarWhereInput[];
};
export type EnumTipoLogFieldUpdateOperationsInput = {
    set?: $Enums.TipoLog;
};
export type LogCreateWithoutUserInput = {
    id?: string;
    tipo: $Enums.TipoLog;
    modulo: string;
    artefato?: string | null;
    ip: string;
    mensagem: string;
    createdAt?: Date | string;
};
export type LogUncheckedCreateWithoutUserInput = {
    id?: string;
    tipo: $Enums.TipoLog;
    modulo: string;
    artefato?: string | null;
    ip: string;
    mensagem: string;
    createdAt?: Date | string;
};
export type LogCreateOrConnectWithoutUserInput = {
    where: Prisma.LogWhereUniqueInput;
    create: Prisma.XOR<Prisma.LogCreateWithoutUserInput, Prisma.LogUncheckedCreateWithoutUserInput>;
};
export type LogCreateManyUserInputEnvelope = {
    data: Prisma.LogCreateManyUserInput | Prisma.LogCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LogWhereUniqueInput;
    update: Prisma.XOR<Prisma.LogUpdateWithoutUserInput, Prisma.LogUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LogCreateWithoutUserInput, Prisma.LogUncheckedCreateWithoutUserInput>;
};
export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LogWhereUniqueInput;
    data: Prisma.XOR<Prisma.LogUpdateWithoutUserInput, Prisma.LogUncheckedUpdateWithoutUserInput>;
};
export type LogUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LogScalarWhereInput;
    data: Prisma.XOR<Prisma.LogUpdateManyMutationInput, Prisma.LogUncheckedUpdateManyWithoutUserInput>;
};
export type LogScalarWhereInput = {
    AND?: Prisma.LogScalarWhereInput | Prisma.LogScalarWhereInput[];
    OR?: Prisma.LogScalarWhereInput[];
    NOT?: Prisma.LogScalarWhereInput | Prisma.LogScalarWhereInput[];
    id?: Prisma.StringFilter<"Log"> | string;
    tipo?: Prisma.EnumTipoLogFilter<"Log"> | $Enums.TipoLog;
    modulo?: Prisma.StringFilter<"Log"> | string;
    artefato?: Prisma.StringNullableFilter<"Log"> | string | null;
    ip?: Prisma.StringFilter<"Log"> | string;
    mensagem?: Prisma.StringFilter<"Log"> | string;
    userId?: Prisma.StringFilter<"Log"> | string;
    createdAt?: Prisma.DateTimeFilter<"Log"> | Date | string;
};
export type LogCreateManyUserInput = {
    id?: string;
    tipo: $Enums.TipoLog;
    modulo: string;
    artefato?: string | null;
    ip: string;
    mensagem: string;
    createdAt?: Date | string;
};
export type LogUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog;
    modulo?: Prisma.StringFieldUpdateOperationsInput | string;
    artefato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog;
    modulo?: Prisma.StringFieldUpdateOperationsInput | string;
    artefato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoLogFieldUpdateOperationsInput | $Enums.TipoLog;
    modulo?: Prisma.StringFieldUpdateOperationsInput | string;
    artefato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    modulo?: boolean;
    artefato?: boolean;
    ip?: boolean;
    mensagem?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["log"]>;
export type LogSelectScalar = {
    id?: boolean;
    tipo?: boolean;
    modulo?: boolean;
    artefato?: boolean;
    ip?: boolean;
    mensagem?: boolean;
    userId?: boolean;
    createdAt?: boolean;
};
export type LogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tipo" | "modulo" | "artefato" | "ip" | "mensagem" | "userId" | "createdAt", ExtArgs["result"]["log"]>;
export type LogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $LogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Log";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tipo: $Enums.TipoLog;
        modulo: string;
        artefato: string | null;
        ip: string;
        mensagem: string;
        userId: string;
        createdAt: Date;
    }, ExtArgs["result"]["log"]>;
    composites: {};
};
export type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LogPayload, S>;
export type LogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: LogCountAggregateInputType | true;
};
export interface LogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Log'];
        meta: {
            name: 'Log';
        };
    };
    findUnique<T extends LogFindUniqueArgs>(args: Prisma.SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LogClient<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LogClient<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LogFindFirstArgs>(args?: Prisma.SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma.Prisma__LogClient<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LogClient<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LogFindManyArgs>(args?: Prisma.SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LogCreateArgs>(args: Prisma.SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma.Prisma__LogClient<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LogCreateManyArgs>(args?: Prisma.SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends LogDeleteArgs>(args: Prisma.SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma.Prisma__LogClient<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LogUpdateArgs>(args: Prisma.SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma.Prisma__LogClient<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LogDeleteManyArgs>(args?: Prisma.SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LogUpdateManyArgs>(args: Prisma.SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends LogUpsertArgs>(args: Prisma.SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma.Prisma__LogClient<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LogCountArgs>(args?: Prisma.Subset<T, LogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LogCountAggregateOutputType> : number>;
    aggregate<T extends LogAggregateArgs>(args: Prisma.Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>;
    groupBy<T extends LogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LogGroupByArgs['orderBy'];
    } : {
        orderBy?: LogGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LogFieldRefs;
}
export interface Prisma__LogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LogFieldRefs {
    readonly id: Prisma.FieldRef<"Log", 'String'>;
    readonly tipo: Prisma.FieldRef<"Log", 'TipoLog'>;
    readonly modulo: Prisma.FieldRef<"Log", 'String'>;
    readonly artefato: Prisma.FieldRef<"Log", 'String'>;
    readonly ip: Prisma.FieldRef<"Log", 'String'>;
    readonly mensagem: Prisma.FieldRef<"Log", 'String'>;
    readonly userId: Prisma.FieldRef<"Log", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Log", 'DateTime'>;
}
export type LogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
    where: Prisma.LogWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type LogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
    where: Prisma.LogWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type LogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
    where?: Prisma.LogWhereInput;
    orderBy?: Prisma.LogOrderByWithRelationInput | Prisma.LogOrderByWithRelationInput[];
    cursor?: Prisma.LogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LogScalarFieldEnum | Prisma.LogScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type LogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
    where?: Prisma.LogWhereInput;
    orderBy?: Prisma.LogOrderByWithRelationInput | Prisma.LogOrderByWithRelationInput[];
    cursor?: Prisma.LogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LogScalarFieldEnum | Prisma.LogScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type LogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
    where?: Prisma.LogWhereInput;
    orderBy?: Prisma.LogOrderByWithRelationInput | Prisma.LogOrderByWithRelationInput[];
    cursor?: Prisma.LogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LogScalarFieldEnum | Prisma.LogScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type LogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LogCreateInput, Prisma.LogUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type LogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LogCreateManyInput | Prisma.LogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LogUpdateInput, Prisma.LogUncheckedUpdateInput>;
    where: Prisma.LogWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type LogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LogUpdateManyMutationInput, Prisma.LogUncheckedUpdateManyInput>;
    where?: Prisma.LogWhereInput;
    limit?: number;
};
export type LogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
    where: Prisma.LogWhereUniqueInput;
    create: Prisma.XOR<Prisma.LogCreateInput, Prisma.LogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LogUpdateInput, Prisma.LogUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type LogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
    where: Prisma.LogWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type LogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogWhereInput;
    limit?: number;
};
export type LogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LogSelect<ExtArgs> | null;
    omit?: Prisma.LogOmit<ExtArgs> | null;
    include?: Prisma.LogInclude<ExtArgs> | null;
};
