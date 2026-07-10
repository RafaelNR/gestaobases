import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VisitasBasesModel = runtime.Types.Result.DefaultSelection<Prisma.$VisitasBasesPayload>;
export type AggregateVisitasBases = {
    _count: VisitasBasesCountAggregateOutputType | null;
    _min: VisitasBasesMinAggregateOutputType | null;
    _max: VisitasBasesMaxAggregateOutputType | null;
};
export type VisitasBasesMinAggregateOutputType = {
    id: string | null;
    data: Date | null;
    base: string | null;
    outro_motivo: string | null;
    descricao: string | null;
    userId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type VisitasBasesMaxAggregateOutputType = {
    id: string | null;
    data: Date | null;
    base: string | null;
    outro_motivo: string | null;
    descricao: string | null;
    userId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type VisitasBasesCountAggregateOutputType = {
    id: number;
    data: number;
    base: number;
    outro_motivo: number;
    descricao: number;
    userId: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type VisitasBasesMinAggregateInputType = {
    id?: true;
    data?: true;
    base?: true;
    outro_motivo?: true;
    descricao?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
};
export type VisitasBasesMaxAggregateInputType = {
    id?: true;
    data?: true;
    base?: true;
    outro_motivo?: true;
    descricao?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
};
export type VisitasBasesCountAggregateInputType = {
    id?: true;
    data?: true;
    base?: true;
    outro_motivo?: true;
    descricao?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type VisitasBasesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitasBasesWhereInput;
    orderBy?: Prisma.VisitasBasesOrderByWithRelationInput | Prisma.VisitasBasesOrderByWithRelationInput[];
    cursor?: Prisma.VisitasBasesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VisitasBasesCountAggregateInputType;
    _min?: VisitasBasesMinAggregateInputType;
    _max?: VisitasBasesMaxAggregateInputType;
};
export type GetVisitasBasesAggregateType<T extends VisitasBasesAggregateArgs> = {
    [P in keyof T & keyof AggregateVisitasBases]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVisitasBases[P]> : Prisma.GetScalarType<T[P], AggregateVisitasBases[P]>;
};
export type VisitasBasesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitasBasesWhereInput;
    orderBy?: Prisma.VisitasBasesOrderByWithAggregationInput | Prisma.VisitasBasesOrderByWithAggregationInput[];
    by: Prisma.VisitasBasesScalarFieldEnum[] | Prisma.VisitasBasesScalarFieldEnum;
    having?: Prisma.VisitasBasesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VisitasBasesCountAggregateInputType | true;
    _min?: VisitasBasesMinAggregateInputType;
    _max?: VisitasBasesMaxAggregateInputType;
};
export type VisitasBasesGroupByOutputType = {
    id: string;
    data: Date;
    base: string | null;
    outro_motivo: string | null;
    descricao: string | null;
    userId: string;
    created_at: Date;
    updated_at: Date;
    _count: VisitasBasesCountAggregateOutputType | null;
    _min: VisitasBasesMinAggregateOutputType | null;
    _max: VisitasBasesMaxAggregateOutputType | null;
};
export type GetVisitasBasesGroupByPayload<T extends VisitasBasesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VisitasBasesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VisitasBasesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VisitasBasesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VisitasBasesGroupByOutputType[P]>;
}>>;
export type VisitasBasesWhereInput = {
    AND?: Prisma.VisitasBasesWhereInput | Prisma.VisitasBasesWhereInput[];
    OR?: Prisma.VisitasBasesWhereInput[];
    NOT?: Prisma.VisitasBasesWhereInput | Prisma.VisitasBasesWhereInput[];
    id?: Prisma.StringFilter<"VisitasBases"> | string;
    data?: Prisma.DateTimeFilter<"VisitasBases"> | Date | string;
    base?: Prisma.StringNullableFilter<"VisitasBases"> | string | null;
    outro_motivo?: Prisma.StringNullableFilter<"VisitasBases"> | string | null;
    descricao?: Prisma.StringNullableFilter<"VisitasBases"> | string | null;
    userId?: Prisma.StringFilter<"VisitasBases"> | string;
    created_at?: Prisma.DateTimeFilter<"VisitasBases"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"VisitasBases"> | Date | string;
    Base?: Prisma.XOR<Prisma.BaseNullableScalarRelationFilter, Prisma.BaseWhereInput> | null;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type VisitasBasesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    base?: Prisma.SortOrderInput | Prisma.SortOrder;
    outro_motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    Base?: Prisma.BaseOrderByWithRelationInput;
    User?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.VisitasBasesOrderByRelevanceInput;
};
export type VisitasBasesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VisitasBasesWhereInput | Prisma.VisitasBasesWhereInput[];
    OR?: Prisma.VisitasBasesWhereInput[];
    NOT?: Prisma.VisitasBasesWhereInput | Prisma.VisitasBasesWhereInput[];
    data?: Prisma.DateTimeFilter<"VisitasBases"> | Date | string;
    base?: Prisma.StringNullableFilter<"VisitasBases"> | string | null;
    outro_motivo?: Prisma.StringNullableFilter<"VisitasBases"> | string | null;
    descricao?: Prisma.StringNullableFilter<"VisitasBases"> | string | null;
    userId?: Prisma.StringFilter<"VisitasBases"> | string;
    created_at?: Prisma.DateTimeFilter<"VisitasBases"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"VisitasBases"> | Date | string;
    Base?: Prisma.XOR<Prisma.BaseNullableScalarRelationFilter, Prisma.BaseWhereInput> | null;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type VisitasBasesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    base?: Prisma.SortOrderInput | Prisma.SortOrder;
    outro_motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.VisitasBasesCountOrderByAggregateInput;
    _max?: Prisma.VisitasBasesMaxOrderByAggregateInput;
    _min?: Prisma.VisitasBasesMinOrderByAggregateInput;
};
export type VisitasBasesScalarWhereWithAggregatesInput = {
    AND?: Prisma.VisitasBasesScalarWhereWithAggregatesInput | Prisma.VisitasBasesScalarWhereWithAggregatesInput[];
    OR?: Prisma.VisitasBasesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VisitasBasesScalarWhereWithAggregatesInput | Prisma.VisitasBasesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VisitasBases"> | string;
    data?: Prisma.DateTimeWithAggregatesFilter<"VisitasBases"> | Date | string;
    base?: Prisma.StringNullableWithAggregatesFilter<"VisitasBases"> | string | null;
    outro_motivo?: Prisma.StringNullableWithAggregatesFilter<"VisitasBases"> | string | null;
    descricao?: Prisma.StringNullableWithAggregatesFilter<"VisitasBases"> | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"VisitasBases"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"VisitasBases"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"VisitasBases"> | Date | string;
};
export type VisitasBasesCreateInput = {
    id?: string;
    data: Date | string;
    outro_motivo?: string | null;
    descricao?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    Base?: Prisma.BaseCreateNestedOneWithoutVisitasBasesInput;
    User: Prisma.UserCreateNestedOneWithoutVisitasBasesInput;
};
export type VisitasBasesUncheckedCreateInput = {
    id?: string;
    data: Date | string;
    base?: string | null;
    outro_motivo?: string | null;
    descricao?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type VisitasBasesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Base?: Prisma.BaseUpdateOneWithoutVisitasBasesNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutVisitasBasesNestedInput;
};
export type VisitasBasesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    base?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitasBasesCreateManyInput = {
    id?: string;
    data: Date | string;
    base?: string | null;
    outro_motivo?: string | null;
    descricao?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type VisitasBasesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitasBasesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    base?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitasBasesListRelationFilter = {
    every?: Prisma.VisitasBasesWhereInput;
    some?: Prisma.VisitasBasesWhereInput;
    none?: Prisma.VisitasBasesWhereInput;
};
export type VisitasBasesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VisitasBasesOrderByRelevanceInput = {
    fields: Prisma.VisitasBasesOrderByRelevanceFieldEnum | Prisma.VisitasBasesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type VisitasBasesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    outro_motivo?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type VisitasBasesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    outro_motivo?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type VisitasBasesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    outro_motivo?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type VisitasBasesCreateNestedManyWithoutBaseInput = {
    create?: Prisma.XOR<Prisma.VisitasBasesCreateWithoutBaseInput, Prisma.VisitasBasesUncheckedCreateWithoutBaseInput> | Prisma.VisitasBasesCreateWithoutBaseInput[] | Prisma.VisitasBasesUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.VisitasBasesCreateOrConnectWithoutBaseInput | Prisma.VisitasBasesCreateOrConnectWithoutBaseInput[];
    createMany?: Prisma.VisitasBasesCreateManyBaseInputEnvelope;
    connect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
};
export type VisitasBasesUncheckedCreateNestedManyWithoutBaseInput = {
    create?: Prisma.XOR<Prisma.VisitasBasesCreateWithoutBaseInput, Prisma.VisitasBasesUncheckedCreateWithoutBaseInput> | Prisma.VisitasBasesCreateWithoutBaseInput[] | Prisma.VisitasBasesUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.VisitasBasesCreateOrConnectWithoutBaseInput | Prisma.VisitasBasesCreateOrConnectWithoutBaseInput[];
    createMany?: Prisma.VisitasBasesCreateManyBaseInputEnvelope;
    connect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
};
export type VisitasBasesUpdateManyWithoutBaseNestedInput = {
    create?: Prisma.XOR<Prisma.VisitasBasesCreateWithoutBaseInput, Prisma.VisitasBasesUncheckedCreateWithoutBaseInput> | Prisma.VisitasBasesCreateWithoutBaseInput[] | Prisma.VisitasBasesUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.VisitasBasesCreateOrConnectWithoutBaseInput | Prisma.VisitasBasesCreateOrConnectWithoutBaseInput[];
    upsert?: Prisma.VisitasBasesUpsertWithWhereUniqueWithoutBaseInput | Prisma.VisitasBasesUpsertWithWhereUniqueWithoutBaseInput[];
    createMany?: Prisma.VisitasBasesCreateManyBaseInputEnvelope;
    set?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    disconnect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    delete?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    connect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    update?: Prisma.VisitasBasesUpdateWithWhereUniqueWithoutBaseInput | Prisma.VisitasBasesUpdateWithWhereUniqueWithoutBaseInput[];
    updateMany?: Prisma.VisitasBasesUpdateManyWithWhereWithoutBaseInput | Prisma.VisitasBasesUpdateManyWithWhereWithoutBaseInput[];
    deleteMany?: Prisma.VisitasBasesScalarWhereInput | Prisma.VisitasBasesScalarWhereInput[];
};
export type VisitasBasesUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: Prisma.XOR<Prisma.VisitasBasesCreateWithoutBaseInput, Prisma.VisitasBasesUncheckedCreateWithoutBaseInput> | Prisma.VisitasBasesCreateWithoutBaseInput[] | Prisma.VisitasBasesUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.VisitasBasesCreateOrConnectWithoutBaseInput | Prisma.VisitasBasesCreateOrConnectWithoutBaseInput[];
    upsert?: Prisma.VisitasBasesUpsertWithWhereUniqueWithoutBaseInput | Prisma.VisitasBasesUpsertWithWhereUniqueWithoutBaseInput[];
    createMany?: Prisma.VisitasBasesCreateManyBaseInputEnvelope;
    set?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    disconnect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    delete?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    connect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    update?: Prisma.VisitasBasesUpdateWithWhereUniqueWithoutBaseInput | Prisma.VisitasBasesUpdateWithWhereUniqueWithoutBaseInput[];
    updateMany?: Prisma.VisitasBasesUpdateManyWithWhereWithoutBaseInput | Prisma.VisitasBasesUpdateManyWithWhereWithoutBaseInput[];
    deleteMany?: Prisma.VisitasBasesScalarWhereInput | Prisma.VisitasBasesScalarWhereInput[];
};
export type VisitasBasesCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VisitasBasesCreateWithoutUserInput, Prisma.VisitasBasesUncheckedCreateWithoutUserInput> | Prisma.VisitasBasesCreateWithoutUserInput[] | Prisma.VisitasBasesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VisitasBasesCreateOrConnectWithoutUserInput | Prisma.VisitasBasesCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.VisitasBasesCreateManyUserInputEnvelope;
    connect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
};
export type VisitasBasesUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VisitasBasesCreateWithoutUserInput, Prisma.VisitasBasesUncheckedCreateWithoutUserInput> | Prisma.VisitasBasesCreateWithoutUserInput[] | Prisma.VisitasBasesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VisitasBasesCreateOrConnectWithoutUserInput | Prisma.VisitasBasesCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.VisitasBasesCreateManyUserInputEnvelope;
    connect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
};
export type VisitasBasesUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VisitasBasesCreateWithoutUserInput, Prisma.VisitasBasesUncheckedCreateWithoutUserInput> | Prisma.VisitasBasesCreateWithoutUserInput[] | Prisma.VisitasBasesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VisitasBasesCreateOrConnectWithoutUserInput | Prisma.VisitasBasesCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.VisitasBasesUpsertWithWhereUniqueWithoutUserInput | Prisma.VisitasBasesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.VisitasBasesCreateManyUserInputEnvelope;
    set?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    disconnect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    delete?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    connect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    update?: Prisma.VisitasBasesUpdateWithWhereUniqueWithoutUserInput | Prisma.VisitasBasesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.VisitasBasesUpdateManyWithWhereWithoutUserInput | Prisma.VisitasBasesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.VisitasBasesScalarWhereInput | Prisma.VisitasBasesScalarWhereInput[];
};
export type VisitasBasesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VisitasBasesCreateWithoutUserInput, Prisma.VisitasBasesUncheckedCreateWithoutUserInput> | Prisma.VisitasBasesCreateWithoutUserInput[] | Prisma.VisitasBasesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VisitasBasesCreateOrConnectWithoutUserInput | Prisma.VisitasBasesCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.VisitasBasesUpsertWithWhereUniqueWithoutUserInput | Prisma.VisitasBasesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.VisitasBasesCreateManyUserInputEnvelope;
    set?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    disconnect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    delete?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    connect?: Prisma.VisitasBasesWhereUniqueInput | Prisma.VisitasBasesWhereUniqueInput[];
    update?: Prisma.VisitasBasesUpdateWithWhereUniqueWithoutUserInput | Prisma.VisitasBasesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.VisitasBasesUpdateManyWithWhereWithoutUserInput | Prisma.VisitasBasesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.VisitasBasesScalarWhereInput | Prisma.VisitasBasesScalarWhereInput[];
};
export type VisitasBasesCreateWithoutBaseInput = {
    id?: string;
    data: Date | string;
    outro_motivo?: string | null;
    descricao?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutVisitasBasesInput;
};
export type VisitasBasesUncheckedCreateWithoutBaseInput = {
    id?: string;
    data: Date | string;
    outro_motivo?: string | null;
    descricao?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type VisitasBasesCreateOrConnectWithoutBaseInput = {
    where: Prisma.VisitasBasesWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitasBasesCreateWithoutBaseInput, Prisma.VisitasBasesUncheckedCreateWithoutBaseInput>;
};
export type VisitasBasesCreateManyBaseInputEnvelope = {
    data: Prisma.VisitasBasesCreateManyBaseInput | Prisma.VisitasBasesCreateManyBaseInput[];
    skipDuplicates?: boolean;
};
export type VisitasBasesUpsertWithWhereUniqueWithoutBaseInput = {
    where: Prisma.VisitasBasesWhereUniqueInput;
    update: Prisma.XOR<Prisma.VisitasBasesUpdateWithoutBaseInput, Prisma.VisitasBasesUncheckedUpdateWithoutBaseInput>;
    create: Prisma.XOR<Prisma.VisitasBasesCreateWithoutBaseInput, Prisma.VisitasBasesUncheckedCreateWithoutBaseInput>;
};
export type VisitasBasesUpdateWithWhereUniqueWithoutBaseInput = {
    where: Prisma.VisitasBasesWhereUniqueInput;
    data: Prisma.XOR<Prisma.VisitasBasesUpdateWithoutBaseInput, Prisma.VisitasBasesUncheckedUpdateWithoutBaseInput>;
};
export type VisitasBasesUpdateManyWithWhereWithoutBaseInput = {
    where: Prisma.VisitasBasesScalarWhereInput;
    data: Prisma.XOR<Prisma.VisitasBasesUpdateManyMutationInput, Prisma.VisitasBasesUncheckedUpdateManyWithoutBaseInput>;
};
export type VisitasBasesScalarWhereInput = {
    AND?: Prisma.VisitasBasesScalarWhereInput | Prisma.VisitasBasesScalarWhereInput[];
    OR?: Prisma.VisitasBasesScalarWhereInput[];
    NOT?: Prisma.VisitasBasesScalarWhereInput | Prisma.VisitasBasesScalarWhereInput[];
    id?: Prisma.StringFilter<"VisitasBases"> | string;
    data?: Prisma.DateTimeFilter<"VisitasBases"> | Date | string;
    base?: Prisma.StringNullableFilter<"VisitasBases"> | string | null;
    outro_motivo?: Prisma.StringNullableFilter<"VisitasBases"> | string | null;
    descricao?: Prisma.StringNullableFilter<"VisitasBases"> | string | null;
    userId?: Prisma.StringFilter<"VisitasBases"> | string;
    created_at?: Prisma.DateTimeFilter<"VisitasBases"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"VisitasBases"> | Date | string;
};
export type VisitasBasesCreateWithoutUserInput = {
    id?: string;
    data: Date | string;
    outro_motivo?: string | null;
    descricao?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    Base?: Prisma.BaseCreateNestedOneWithoutVisitasBasesInput;
};
export type VisitasBasesUncheckedCreateWithoutUserInput = {
    id?: string;
    data: Date | string;
    base?: string | null;
    outro_motivo?: string | null;
    descricao?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type VisitasBasesCreateOrConnectWithoutUserInput = {
    where: Prisma.VisitasBasesWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitasBasesCreateWithoutUserInput, Prisma.VisitasBasesUncheckedCreateWithoutUserInput>;
};
export type VisitasBasesCreateManyUserInputEnvelope = {
    data: Prisma.VisitasBasesCreateManyUserInput | Prisma.VisitasBasesCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type VisitasBasesUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.VisitasBasesWhereUniqueInput;
    update: Prisma.XOR<Prisma.VisitasBasesUpdateWithoutUserInput, Prisma.VisitasBasesUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.VisitasBasesCreateWithoutUserInput, Prisma.VisitasBasesUncheckedCreateWithoutUserInput>;
};
export type VisitasBasesUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.VisitasBasesWhereUniqueInput;
    data: Prisma.XOR<Prisma.VisitasBasesUpdateWithoutUserInput, Prisma.VisitasBasesUncheckedUpdateWithoutUserInput>;
};
export type VisitasBasesUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.VisitasBasesScalarWhereInput;
    data: Prisma.XOR<Prisma.VisitasBasesUpdateManyMutationInput, Prisma.VisitasBasesUncheckedUpdateManyWithoutUserInput>;
};
export type VisitasBasesCreateManyBaseInput = {
    id?: string;
    data: Date | string;
    outro_motivo?: string | null;
    descricao?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type VisitasBasesUpdateWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutVisitasBasesNestedInput;
};
export type VisitasBasesUncheckedUpdateWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitasBasesUncheckedUpdateManyWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitasBasesCreateManyUserInput = {
    id?: string;
    data: Date | string;
    base?: string | null;
    outro_motivo?: string | null;
    descricao?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type VisitasBasesUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Base?: Prisma.BaseUpdateOneWithoutVisitasBasesNestedInput;
};
export type VisitasBasesUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    base?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitasBasesUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    base?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outro_motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitasBasesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    base?: boolean;
    outro_motivo?: boolean;
    descricao?: boolean;
    userId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    Base?: boolean | Prisma.VisitasBases$BaseArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitasBases"]>;
export type VisitasBasesSelectScalar = {
    id?: boolean;
    data?: boolean;
    base?: boolean;
    outro_motivo?: boolean;
    descricao?: boolean;
    userId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type VisitasBasesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "data" | "base" | "outro_motivo" | "descricao" | "userId" | "created_at" | "updated_at", ExtArgs["result"]["visitasBases"]>;
export type VisitasBasesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Base?: boolean | Prisma.VisitasBases$BaseArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $VisitasBasesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VisitasBases";
    objects: {
        Base: Prisma.$BasePayload<ExtArgs> | null;
        User: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        data: Date;
        base: string | null;
        outro_motivo: string | null;
        descricao: string | null;
        userId: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["visitasBases"]>;
    composites: {};
};
export type VisitasBasesGetPayload<S extends boolean | null | undefined | VisitasBasesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload, S>;
export type VisitasBasesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VisitasBasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: VisitasBasesCountAggregateInputType | true;
};
export interface VisitasBasesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VisitasBases'];
        meta: {
            name: 'VisitasBases';
        };
    };
    findUnique<T extends VisitasBasesFindUniqueArgs>(args: Prisma.SelectSubset<T, VisitasBasesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VisitasBasesClient<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VisitasBasesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VisitasBasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitasBasesClient<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VisitasBasesFindFirstArgs>(args?: Prisma.SelectSubset<T, VisitasBasesFindFirstArgs<ExtArgs>>): Prisma.Prisma__VisitasBasesClient<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VisitasBasesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VisitasBasesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitasBasesClient<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VisitasBasesFindManyArgs>(args?: Prisma.SelectSubset<T, VisitasBasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VisitasBasesCreateArgs>(args: Prisma.SelectSubset<T, VisitasBasesCreateArgs<ExtArgs>>): Prisma.Prisma__VisitasBasesClient<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VisitasBasesCreateManyArgs>(args?: Prisma.SelectSubset<T, VisitasBasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends VisitasBasesDeleteArgs>(args: Prisma.SelectSubset<T, VisitasBasesDeleteArgs<ExtArgs>>): Prisma.Prisma__VisitasBasesClient<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VisitasBasesUpdateArgs>(args: Prisma.SelectSubset<T, VisitasBasesUpdateArgs<ExtArgs>>): Prisma.Prisma__VisitasBasesClient<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VisitasBasesDeleteManyArgs>(args?: Prisma.SelectSubset<T, VisitasBasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VisitasBasesUpdateManyArgs>(args: Prisma.SelectSubset<T, VisitasBasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends VisitasBasesUpsertArgs>(args: Prisma.SelectSubset<T, VisitasBasesUpsertArgs<ExtArgs>>): Prisma.Prisma__VisitasBasesClient<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VisitasBasesCountArgs>(args?: Prisma.Subset<T, VisitasBasesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VisitasBasesCountAggregateOutputType> : number>;
    aggregate<T extends VisitasBasesAggregateArgs>(args: Prisma.Subset<T, VisitasBasesAggregateArgs>): Prisma.PrismaPromise<GetVisitasBasesAggregateType<T>>;
    groupBy<T extends VisitasBasesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VisitasBasesGroupByArgs['orderBy'];
    } : {
        orderBy?: VisitasBasesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VisitasBasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitasBasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VisitasBasesFieldRefs;
}
export interface Prisma__VisitasBasesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Base<T extends Prisma.VisitasBases$BaseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VisitasBases$BaseArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VisitasBasesFieldRefs {
    readonly id: Prisma.FieldRef<"VisitasBases", 'String'>;
    readonly data: Prisma.FieldRef<"VisitasBases", 'DateTime'>;
    readonly base: Prisma.FieldRef<"VisitasBases", 'String'>;
    readonly outro_motivo: Prisma.FieldRef<"VisitasBases", 'String'>;
    readonly descricao: Prisma.FieldRef<"VisitasBases", 'String'>;
    readonly userId: Prisma.FieldRef<"VisitasBases", 'String'>;
    readonly created_at: Prisma.FieldRef<"VisitasBases", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"VisitasBases", 'DateTime'>;
}
export type VisitasBasesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    where: Prisma.VisitasBasesWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type VisitasBasesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    where: Prisma.VisitasBasesWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type VisitasBasesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    where?: Prisma.VisitasBasesWhereInput;
    orderBy?: Prisma.VisitasBasesOrderByWithRelationInput | Prisma.VisitasBasesOrderByWithRelationInput[];
    cursor?: Prisma.VisitasBasesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitasBasesScalarFieldEnum | Prisma.VisitasBasesScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type VisitasBasesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    where?: Prisma.VisitasBasesWhereInput;
    orderBy?: Prisma.VisitasBasesOrderByWithRelationInput | Prisma.VisitasBasesOrderByWithRelationInput[];
    cursor?: Prisma.VisitasBasesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitasBasesScalarFieldEnum | Prisma.VisitasBasesScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type VisitasBasesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    where?: Prisma.VisitasBasesWhereInput;
    orderBy?: Prisma.VisitasBasesOrderByWithRelationInput | Prisma.VisitasBasesOrderByWithRelationInput[];
    cursor?: Prisma.VisitasBasesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitasBasesScalarFieldEnum | Prisma.VisitasBasesScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type VisitasBasesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitasBasesCreateInput, Prisma.VisitasBasesUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type VisitasBasesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VisitasBasesCreateManyInput | Prisma.VisitasBasesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VisitasBasesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitasBasesUpdateInput, Prisma.VisitasBasesUncheckedUpdateInput>;
    where: Prisma.VisitasBasesWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type VisitasBasesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VisitasBasesUpdateManyMutationInput, Prisma.VisitasBasesUncheckedUpdateManyInput>;
    where?: Prisma.VisitasBasesWhereInput;
    limit?: number;
};
export type VisitasBasesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    where: Prisma.VisitasBasesWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitasBasesCreateInput, Prisma.VisitasBasesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VisitasBasesUpdateInput, Prisma.VisitasBasesUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type VisitasBasesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    where: Prisma.VisitasBasesWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type VisitasBasesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitasBasesWhereInput;
    limit?: number;
};
export type VisitasBases$BaseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    where?: Prisma.BaseWhereInput;
};
export type VisitasBasesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
};
