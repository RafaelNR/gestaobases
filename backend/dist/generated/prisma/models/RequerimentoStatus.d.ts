import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RequerimentoStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$RequerimentoStatusPayload>;
export type AggregateRequerimentoStatus = {
    _count: RequerimentoStatusCountAggregateOutputType | null;
    _min: RequerimentoStatusMinAggregateOutputType | null;
    _max: RequerimentoStatusMaxAggregateOutputType | null;
};
export type RequerimentoStatusMinAggregateOutputType = {
    id: string | null;
    requerimentoId: string | null;
    status: $Enums.Status | null;
    userId: string | null;
    created_at: Date | null;
};
export type RequerimentoStatusMaxAggregateOutputType = {
    id: string | null;
    requerimentoId: string | null;
    status: $Enums.Status | null;
    userId: string | null;
    created_at: Date | null;
};
export type RequerimentoStatusCountAggregateOutputType = {
    id: number;
    requerimentoId: number;
    status: number;
    userId: number;
    created_at: number;
    _all: number;
};
export type RequerimentoStatusMinAggregateInputType = {
    id?: true;
    requerimentoId?: true;
    status?: true;
    userId?: true;
    created_at?: true;
};
export type RequerimentoStatusMaxAggregateInputType = {
    id?: true;
    requerimentoId?: true;
    status?: true;
    userId?: true;
    created_at?: true;
};
export type RequerimentoStatusCountAggregateInputType = {
    id?: true;
    requerimentoId?: true;
    status?: true;
    userId?: true;
    created_at?: true;
    _all?: true;
};
export type RequerimentoStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoStatusWhereInput;
    orderBy?: Prisma.RequerimentoStatusOrderByWithRelationInput | Prisma.RequerimentoStatusOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RequerimentoStatusCountAggregateInputType;
    _min?: RequerimentoStatusMinAggregateInputType;
    _max?: RequerimentoStatusMaxAggregateInputType;
};
export type GetRequerimentoStatusAggregateType<T extends RequerimentoStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateRequerimentoStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRequerimentoStatus[P]> : Prisma.GetScalarType<T[P], AggregateRequerimentoStatus[P]>;
};
export type RequerimentoStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoStatusWhereInput;
    orderBy?: Prisma.RequerimentoStatusOrderByWithAggregationInput | Prisma.RequerimentoStatusOrderByWithAggregationInput[];
    by: Prisma.RequerimentoStatusScalarFieldEnum[] | Prisma.RequerimentoStatusScalarFieldEnum;
    having?: Prisma.RequerimentoStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RequerimentoStatusCountAggregateInputType | true;
    _min?: RequerimentoStatusMinAggregateInputType;
    _max?: RequerimentoStatusMaxAggregateInputType;
};
export type RequerimentoStatusGroupByOutputType = {
    id: string;
    requerimentoId: string;
    status: $Enums.Status;
    userId: string;
    created_at: Date;
    _count: RequerimentoStatusCountAggregateOutputType | null;
    _min: RequerimentoStatusMinAggregateOutputType | null;
    _max: RequerimentoStatusMaxAggregateOutputType | null;
};
export type GetRequerimentoStatusGroupByPayload<T extends RequerimentoStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RequerimentoStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RequerimentoStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RequerimentoStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RequerimentoStatusGroupByOutputType[P]>;
}>>;
export type RequerimentoStatusWhereInput = {
    AND?: Prisma.RequerimentoStatusWhereInput | Prisma.RequerimentoStatusWhereInput[];
    OR?: Prisma.RequerimentoStatusWhereInput[];
    NOT?: Prisma.RequerimentoStatusWhereInput | Prisma.RequerimentoStatusWhereInput[];
    id?: Prisma.StringFilter<"RequerimentoStatus"> | string;
    requerimentoId?: Prisma.StringFilter<"RequerimentoStatus"> | string;
    status?: Prisma.EnumStatusFilter<"RequerimentoStatus"> | $Enums.Status;
    userId?: Prisma.StringFilter<"RequerimentoStatus"> | string;
    created_at?: Prisma.DateTimeFilter<"RequerimentoStatus"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Requerimento?: Prisma.XOR<Prisma.RequerimentoScalarRelationFilter, Prisma.RequerimentoWhereInput>;
};
export type RequerimentoStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    Requerimento?: Prisma.RequerimentoOrderByWithRelationInput;
    _relevance?: Prisma.RequerimentoStatusOrderByRelevanceInput;
};
export type RequerimentoStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RequerimentoStatusWhereInput | Prisma.RequerimentoStatusWhereInput[];
    OR?: Prisma.RequerimentoStatusWhereInput[];
    NOT?: Prisma.RequerimentoStatusWhereInput | Prisma.RequerimentoStatusWhereInput[];
    requerimentoId?: Prisma.StringFilter<"RequerimentoStatus"> | string;
    status?: Prisma.EnumStatusFilter<"RequerimentoStatus"> | $Enums.Status;
    userId?: Prisma.StringFilter<"RequerimentoStatus"> | string;
    created_at?: Prisma.DateTimeFilter<"RequerimentoStatus"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Requerimento?: Prisma.XOR<Prisma.RequerimentoScalarRelationFilter, Prisma.RequerimentoWhereInput>;
}, "id">;
export type RequerimentoStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.RequerimentoStatusCountOrderByAggregateInput;
    _max?: Prisma.RequerimentoStatusMaxOrderByAggregateInput;
    _min?: Prisma.RequerimentoStatusMinOrderByAggregateInput;
};
export type RequerimentoStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.RequerimentoStatusScalarWhereWithAggregatesInput | Prisma.RequerimentoStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.RequerimentoStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RequerimentoStatusScalarWhereWithAggregatesInput | Prisma.RequerimentoStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RequerimentoStatus"> | string;
    requerimentoId?: Prisma.StringWithAggregatesFilter<"RequerimentoStatus"> | string;
    status?: Prisma.EnumStatusWithAggregatesFilter<"RequerimentoStatus"> | $Enums.Status;
    userId?: Prisma.StringWithAggregatesFilter<"RequerimentoStatus"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"RequerimentoStatus"> | Date | string;
};
export type RequerimentoStatusCreateInput = {
    id?: string;
    status: $Enums.Status;
    created_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentoStatusInput;
    Requerimento: Prisma.RequerimentoCreateNestedOneWithoutRequerimentoStatusInput;
};
export type RequerimentoStatusUncheckedCreateInput = {
    id?: string;
    requerimentoId: string;
    status: $Enums.Status;
    userId: string;
    created_at?: Date | string;
};
export type RequerimentoStatusUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentoStatusNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneRequiredWithoutRequerimentoStatusNestedInput;
};
export type RequerimentoStatusUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoStatusCreateManyInput = {
    id?: string;
    requerimentoId: string;
    status: $Enums.Status;
    userId: string;
    created_at?: Date | string;
};
export type RequerimentoStatusUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoStatusUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoStatusListRelationFilter = {
    every?: Prisma.RequerimentoStatusWhereInput;
    some?: Prisma.RequerimentoStatusWhereInput;
    none?: Prisma.RequerimentoStatusWhereInput;
};
export type RequerimentoStatusOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RequerimentoStatusOrderByRelevanceInput = {
    fields: Prisma.RequerimentoStatusOrderByRelevanceFieldEnum | Prisma.RequerimentoStatusOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type RequerimentoStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type RequerimentoStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type RequerimentoStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type RequerimentoStatusCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutUserInput, Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput> | Prisma.RequerimentoStatusCreateWithoutUserInput[] | Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoStatusCreateOrConnectWithoutUserInput | Prisma.RequerimentoStatusCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RequerimentoStatusCreateManyUserInputEnvelope;
    connect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
};
export type RequerimentoStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutUserInput, Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput> | Prisma.RequerimentoStatusCreateWithoutUserInput[] | Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoStatusCreateOrConnectWithoutUserInput | Prisma.RequerimentoStatusCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RequerimentoStatusCreateManyUserInputEnvelope;
    connect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
};
export type RequerimentoStatusUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutUserInput, Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput> | Prisma.RequerimentoStatusCreateWithoutUserInput[] | Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoStatusCreateOrConnectWithoutUserInput | Prisma.RequerimentoStatusCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RequerimentoStatusUpsertWithWhereUniqueWithoutUserInput | Prisma.RequerimentoStatusUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RequerimentoStatusCreateManyUserInputEnvelope;
    set?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    delete?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    connect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    update?: Prisma.RequerimentoStatusUpdateWithWhereUniqueWithoutUserInput | Prisma.RequerimentoStatusUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RequerimentoStatusUpdateManyWithWhereWithoutUserInput | Prisma.RequerimentoStatusUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RequerimentoStatusScalarWhereInput | Prisma.RequerimentoStatusScalarWhereInput[];
};
export type RequerimentoStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutUserInput, Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput> | Prisma.RequerimentoStatusCreateWithoutUserInput[] | Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoStatusCreateOrConnectWithoutUserInput | Prisma.RequerimentoStatusCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RequerimentoStatusUpsertWithWhereUniqueWithoutUserInput | Prisma.RequerimentoStatusUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RequerimentoStatusCreateManyUserInputEnvelope;
    set?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    delete?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    connect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    update?: Prisma.RequerimentoStatusUpdateWithWhereUniqueWithoutUserInput | Prisma.RequerimentoStatusUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RequerimentoStatusUpdateManyWithWhereWithoutUserInput | Prisma.RequerimentoStatusUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RequerimentoStatusScalarWhereInput | Prisma.RequerimentoStatusScalarWhereInput[];
};
export type RequerimentoStatusCreateNestedManyWithoutRequerimentoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutRequerimentoInput, Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput> | Prisma.RequerimentoStatusCreateWithoutRequerimentoInput[] | Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.RequerimentoStatusCreateOrConnectWithoutRequerimentoInput | Prisma.RequerimentoStatusCreateOrConnectWithoutRequerimentoInput[];
    createMany?: Prisma.RequerimentoStatusCreateManyRequerimentoInputEnvelope;
    connect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
};
export type RequerimentoStatusUncheckedCreateNestedManyWithoutRequerimentoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutRequerimentoInput, Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput> | Prisma.RequerimentoStatusCreateWithoutRequerimentoInput[] | Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.RequerimentoStatusCreateOrConnectWithoutRequerimentoInput | Prisma.RequerimentoStatusCreateOrConnectWithoutRequerimentoInput[];
    createMany?: Prisma.RequerimentoStatusCreateManyRequerimentoInputEnvelope;
    connect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
};
export type RequerimentoStatusUpdateManyWithoutRequerimentoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutRequerimentoInput, Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput> | Prisma.RequerimentoStatusCreateWithoutRequerimentoInput[] | Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.RequerimentoStatusCreateOrConnectWithoutRequerimentoInput | Prisma.RequerimentoStatusCreateOrConnectWithoutRequerimentoInput[];
    upsert?: Prisma.RequerimentoStatusUpsertWithWhereUniqueWithoutRequerimentoInput | Prisma.RequerimentoStatusUpsertWithWhereUniqueWithoutRequerimentoInput[];
    createMany?: Prisma.RequerimentoStatusCreateManyRequerimentoInputEnvelope;
    set?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    delete?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    connect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    update?: Prisma.RequerimentoStatusUpdateWithWhereUniqueWithoutRequerimentoInput | Prisma.RequerimentoStatusUpdateWithWhereUniqueWithoutRequerimentoInput[];
    updateMany?: Prisma.RequerimentoStatusUpdateManyWithWhereWithoutRequerimentoInput | Prisma.RequerimentoStatusUpdateManyWithWhereWithoutRequerimentoInput[];
    deleteMany?: Prisma.RequerimentoStatusScalarWhereInput | Prisma.RequerimentoStatusScalarWhereInput[];
};
export type RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutRequerimentoInput, Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput> | Prisma.RequerimentoStatusCreateWithoutRequerimentoInput[] | Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.RequerimentoStatusCreateOrConnectWithoutRequerimentoInput | Prisma.RequerimentoStatusCreateOrConnectWithoutRequerimentoInput[];
    upsert?: Prisma.RequerimentoStatusUpsertWithWhereUniqueWithoutRequerimentoInput | Prisma.RequerimentoStatusUpsertWithWhereUniqueWithoutRequerimentoInput[];
    createMany?: Prisma.RequerimentoStatusCreateManyRequerimentoInputEnvelope;
    set?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    delete?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    connect?: Prisma.RequerimentoStatusWhereUniqueInput | Prisma.RequerimentoStatusWhereUniqueInput[];
    update?: Prisma.RequerimentoStatusUpdateWithWhereUniqueWithoutRequerimentoInput | Prisma.RequerimentoStatusUpdateWithWhereUniqueWithoutRequerimentoInput[];
    updateMany?: Prisma.RequerimentoStatusUpdateManyWithWhereWithoutRequerimentoInput | Prisma.RequerimentoStatusUpdateManyWithWhereWithoutRequerimentoInput[];
    deleteMany?: Prisma.RequerimentoStatusScalarWhereInput | Prisma.RequerimentoStatusScalarWhereInput[];
};
export type RequerimentoStatusCreateWithoutUserInput = {
    id?: string;
    status: $Enums.Status;
    created_at?: Date | string;
    Requerimento: Prisma.RequerimentoCreateNestedOneWithoutRequerimentoStatusInput;
};
export type RequerimentoStatusUncheckedCreateWithoutUserInput = {
    id?: string;
    requerimentoId: string;
    status: $Enums.Status;
    created_at?: Date | string;
};
export type RequerimentoStatusCreateOrConnectWithoutUserInput = {
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutUserInput, Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput>;
};
export type RequerimentoStatusCreateManyUserInputEnvelope = {
    data: Prisma.RequerimentoStatusCreateManyUserInput | Prisma.RequerimentoStatusCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoStatusUpdateWithoutUserInput, Prisma.RequerimentoStatusUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutUserInput, Prisma.RequerimentoStatusUncheckedCreateWithoutUserInput>;
};
export type RequerimentoStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoStatusUpdateWithoutUserInput, Prisma.RequerimentoStatusUncheckedUpdateWithoutUserInput>;
};
export type RequerimentoStatusUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RequerimentoStatusScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoStatusUpdateManyMutationInput, Prisma.RequerimentoStatusUncheckedUpdateManyWithoutUserInput>;
};
export type RequerimentoStatusScalarWhereInput = {
    AND?: Prisma.RequerimentoStatusScalarWhereInput | Prisma.RequerimentoStatusScalarWhereInput[];
    OR?: Prisma.RequerimentoStatusScalarWhereInput[];
    NOT?: Prisma.RequerimentoStatusScalarWhereInput | Prisma.RequerimentoStatusScalarWhereInput[];
    id?: Prisma.StringFilter<"RequerimentoStatus"> | string;
    requerimentoId?: Prisma.StringFilter<"RequerimentoStatus"> | string;
    status?: Prisma.EnumStatusFilter<"RequerimentoStatus"> | $Enums.Status;
    userId?: Prisma.StringFilter<"RequerimentoStatus"> | string;
    created_at?: Prisma.DateTimeFilter<"RequerimentoStatus"> | Date | string;
};
export type RequerimentoStatusCreateWithoutRequerimentoInput = {
    id?: string;
    status: $Enums.Status;
    created_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentoStatusInput;
};
export type RequerimentoStatusUncheckedCreateWithoutRequerimentoInput = {
    id?: string;
    status: $Enums.Status;
    userId: string;
    created_at?: Date | string;
};
export type RequerimentoStatusCreateOrConnectWithoutRequerimentoInput = {
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutRequerimentoInput, Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput>;
};
export type RequerimentoStatusCreateManyRequerimentoInputEnvelope = {
    data: Prisma.RequerimentoStatusCreateManyRequerimentoInput | Prisma.RequerimentoStatusCreateManyRequerimentoInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoStatusUpsertWithWhereUniqueWithoutRequerimentoInput = {
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoStatusUpdateWithoutRequerimentoInput, Prisma.RequerimentoStatusUncheckedUpdateWithoutRequerimentoInput>;
    create: Prisma.XOR<Prisma.RequerimentoStatusCreateWithoutRequerimentoInput, Prisma.RequerimentoStatusUncheckedCreateWithoutRequerimentoInput>;
};
export type RequerimentoStatusUpdateWithWhereUniqueWithoutRequerimentoInput = {
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoStatusUpdateWithoutRequerimentoInput, Prisma.RequerimentoStatusUncheckedUpdateWithoutRequerimentoInput>;
};
export type RequerimentoStatusUpdateManyWithWhereWithoutRequerimentoInput = {
    where: Prisma.RequerimentoStatusScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoStatusUpdateManyMutationInput, Prisma.RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoInput>;
};
export type RequerimentoStatusCreateManyUserInput = {
    id?: string;
    requerimentoId: string;
    status: $Enums.Status;
    created_at?: Date | string;
};
export type RequerimentoStatusUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Requerimento?: Prisma.RequerimentoUpdateOneRequiredWithoutRequerimentoStatusNestedInput;
};
export type RequerimentoStatusUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoStatusUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoStatusCreateManyRequerimentoInput = {
    id?: string;
    status: $Enums.Status;
    userId: string;
    created_at?: Date | string;
};
export type RequerimentoStatusUpdateWithoutRequerimentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentoStatusNestedInput;
};
export type RequerimentoStatusUncheckedUpdateWithoutRequerimentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requerimentoId?: boolean;
    status?: boolean;
    userId?: boolean;
    created_at?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Requerimento?: boolean | Prisma.RequerimentoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["requerimentoStatus"]>;
export type RequerimentoStatusSelectScalar = {
    id?: boolean;
    requerimentoId?: boolean;
    status?: boolean;
    userId?: boolean;
    created_at?: boolean;
};
export type RequerimentoStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requerimentoId" | "status" | "userId" | "created_at", ExtArgs["result"]["requerimentoStatus"]>;
export type RequerimentoStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Requerimento?: boolean | Prisma.RequerimentoDefaultArgs<ExtArgs>;
};
export type $RequerimentoStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RequerimentoStatus";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
        Requerimento: Prisma.$RequerimentoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requerimentoId: string;
        status: $Enums.Status;
        userId: string;
        created_at: Date;
    }, ExtArgs["result"]["requerimentoStatus"]>;
    composites: {};
};
export type RequerimentoStatusGetPayload<S extends boolean | null | undefined | RequerimentoStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload, S>;
export type RequerimentoStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RequerimentoStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: RequerimentoStatusCountAggregateInputType | true;
};
export interface RequerimentoStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RequerimentoStatus'];
        meta: {
            name: 'RequerimentoStatus';
        };
    };
    findUnique<T extends RequerimentoStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, RequerimentoStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RequerimentoStatusClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RequerimentoStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RequerimentoStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequerimentoStatusClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RequerimentoStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, RequerimentoStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__RequerimentoStatusClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RequerimentoStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RequerimentoStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequerimentoStatusClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RequerimentoStatusFindManyArgs>(args?: Prisma.SelectSubset<T, RequerimentoStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RequerimentoStatusCreateArgs>(args: Prisma.SelectSubset<T, RequerimentoStatusCreateArgs<ExtArgs>>): Prisma.Prisma__RequerimentoStatusClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RequerimentoStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, RequerimentoStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends RequerimentoStatusDeleteArgs>(args: Prisma.SelectSubset<T, RequerimentoStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__RequerimentoStatusClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RequerimentoStatusUpdateArgs>(args: Prisma.SelectSubset<T, RequerimentoStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__RequerimentoStatusClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RequerimentoStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, RequerimentoStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RequerimentoStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, RequerimentoStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends RequerimentoStatusUpsertArgs>(args: Prisma.SelectSubset<T, RequerimentoStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__RequerimentoStatusClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RequerimentoStatusCountArgs>(args?: Prisma.Subset<T, RequerimentoStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RequerimentoStatusCountAggregateOutputType> : number>;
    aggregate<T extends RequerimentoStatusAggregateArgs>(args: Prisma.Subset<T, RequerimentoStatusAggregateArgs>): Prisma.PrismaPromise<GetRequerimentoStatusAggregateType<T>>;
    groupBy<T extends RequerimentoStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RequerimentoStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: RequerimentoStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RequerimentoStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequerimentoStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RequerimentoStatusFieldRefs;
}
export interface Prisma__RequerimentoStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Requerimento<T extends Prisma.RequerimentoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RequerimentoDefaultArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RequerimentoStatusFieldRefs {
    readonly id: Prisma.FieldRef<"RequerimentoStatus", 'String'>;
    readonly requerimentoId: Prisma.FieldRef<"RequerimentoStatus", 'String'>;
    readonly status: Prisma.FieldRef<"RequerimentoStatus", 'Status'>;
    readonly userId: Prisma.FieldRef<"RequerimentoStatus", 'String'>;
    readonly created_at: Prisma.FieldRef<"RequerimentoStatus", 'DateTime'>;
}
export type RequerimentoStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoStatusWhereInput;
    orderBy?: Prisma.RequerimentoStatusOrderByWithRelationInput | Prisma.RequerimentoStatusOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoStatusScalarFieldEnum | Prisma.RequerimentoStatusScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoStatusWhereInput;
    orderBy?: Prisma.RequerimentoStatusOrderByWithRelationInput | Prisma.RequerimentoStatusOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoStatusScalarFieldEnum | Prisma.RequerimentoStatusScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoStatusWhereInput;
    orderBy?: Prisma.RequerimentoStatusOrderByWithRelationInput | Prisma.RequerimentoStatusOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoStatusScalarFieldEnum | Prisma.RequerimentoStatusScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequerimentoStatusCreateInput, Prisma.RequerimentoStatusUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RequerimentoStatusCreateManyInput | Prisma.RequerimentoStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequerimentoStatusUpdateInput, Prisma.RequerimentoStatusUncheckedUpdateInput>;
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RequerimentoStatusUpdateManyMutationInput, Prisma.RequerimentoStatusUncheckedUpdateManyInput>;
    where?: Prisma.RequerimentoStatusWhereInput;
    limit?: number;
};
export type RequerimentoStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoStatusCreateInput, Prisma.RequerimentoStatusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RequerimentoStatusUpdateInput, Prisma.RequerimentoStatusUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    where: Prisma.RequerimentoStatusWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoStatusWhereInput;
    limit?: number;
};
export type RequerimentoStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
};
