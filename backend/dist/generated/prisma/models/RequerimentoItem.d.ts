import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RequerimentoItemModel = runtime.Types.Result.DefaultSelection<Prisma.$RequerimentoItemPayload>;
export type AggregateRequerimentoItem = {
    _count: RequerimentoItemCountAggregateOutputType | null;
    _avg: RequerimentoItemAvgAggregateOutputType | null;
    _sum: RequerimentoItemSumAggregateOutputType | null;
    _min: RequerimentoItemMinAggregateOutputType | null;
    _max: RequerimentoItemMaxAggregateOutputType | null;
};
export type RequerimentoItemAvgAggregateOutputType = {
    quantidade: number | null;
};
export type RequerimentoItemSumAggregateOutputType = {
    quantidade: number | null;
};
export type RequerimentoItemMinAggregateOutputType = {
    id: string | null;
    requerimentoId: string | null;
    produtoId: string | null;
    medicamentoId: string | null;
    quantidade: number | null;
    ocorrencia: string | null;
    userId: string | null;
    ativo: boolean | null;
    deleted_at: Date | null;
    deleted_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RequerimentoItemMaxAggregateOutputType = {
    id: string | null;
    requerimentoId: string | null;
    produtoId: string | null;
    medicamentoId: string | null;
    quantidade: number | null;
    ocorrencia: string | null;
    userId: string | null;
    ativo: boolean | null;
    deleted_at: Date | null;
    deleted_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RequerimentoItemCountAggregateOutputType = {
    id: number;
    requerimentoId: number;
    produtoId: number;
    medicamentoId: number;
    quantidade: number;
    ocorrencia: number;
    userId: number;
    ativo: number;
    deleted_at: number;
    deleted_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type RequerimentoItemAvgAggregateInputType = {
    quantidade?: true;
};
export type RequerimentoItemSumAggregateInputType = {
    quantidade?: true;
};
export type RequerimentoItemMinAggregateInputType = {
    id?: true;
    requerimentoId?: true;
    produtoId?: true;
    medicamentoId?: true;
    quantidade?: true;
    ocorrencia?: true;
    userId?: true;
    ativo?: true;
    deleted_at?: true;
    deleted_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type RequerimentoItemMaxAggregateInputType = {
    id?: true;
    requerimentoId?: true;
    produtoId?: true;
    medicamentoId?: true;
    quantidade?: true;
    ocorrencia?: true;
    userId?: true;
    ativo?: true;
    deleted_at?: true;
    deleted_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type RequerimentoItemCountAggregateInputType = {
    id?: true;
    requerimentoId?: true;
    produtoId?: true;
    medicamentoId?: true;
    quantidade?: true;
    ocorrencia?: true;
    userId?: true;
    ativo?: true;
    deleted_at?: true;
    deleted_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type RequerimentoItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoItemWhereInput;
    orderBy?: Prisma.RequerimentoItemOrderByWithRelationInput | Prisma.RequerimentoItemOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RequerimentoItemCountAggregateInputType;
    _avg?: RequerimentoItemAvgAggregateInputType;
    _sum?: RequerimentoItemSumAggregateInputType;
    _min?: RequerimentoItemMinAggregateInputType;
    _max?: RequerimentoItemMaxAggregateInputType;
};
export type GetRequerimentoItemAggregateType<T extends RequerimentoItemAggregateArgs> = {
    [P in keyof T & keyof AggregateRequerimentoItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRequerimentoItem[P]> : Prisma.GetScalarType<T[P], AggregateRequerimentoItem[P]>;
};
export type RequerimentoItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoItemWhereInput;
    orderBy?: Prisma.RequerimentoItemOrderByWithAggregationInput | Prisma.RequerimentoItemOrderByWithAggregationInput[];
    by: Prisma.RequerimentoItemScalarFieldEnum[] | Prisma.RequerimentoItemScalarFieldEnum;
    having?: Prisma.RequerimentoItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RequerimentoItemCountAggregateInputType | true;
    _avg?: RequerimentoItemAvgAggregateInputType;
    _sum?: RequerimentoItemSumAggregateInputType;
    _min?: RequerimentoItemMinAggregateInputType;
    _max?: RequerimentoItemMaxAggregateInputType;
};
export type RequerimentoItemGroupByOutputType = {
    id: string;
    requerimentoId: string;
    produtoId: string | null;
    medicamentoId: string | null;
    quantidade: number;
    ocorrencia: string | null;
    userId: string;
    ativo: boolean;
    deleted_at: Date | null;
    deleted_by: string | null;
    created_at: Date;
    updated_at: Date;
    _count: RequerimentoItemCountAggregateOutputType | null;
    _avg: RequerimentoItemAvgAggregateOutputType | null;
    _sum: RequerimentoItemSumAggregateOutputType | null;
    _min: RequerimentoItemMinAggregateOutputType | null;
    _max: RequerimentoItemMaxAggregateOutputType | null;
};
export type GetRequerimentoItemGroupByPayload<T extends RequerimentoItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RequerimentoItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RequerimentoItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RequerimentoItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RequerimentoItemGroupByOutputType[P]>;
}>>;
export type RequerimentoItemWhereInput = {
    AND?: Prisma.RequerimentoItemWhereInput | Prisma.RequerimentoItemWhereInput[];
    OR?: Prisma.RequerimentoItemWhereInput[];
    NOT?: Prisma.RequerimentoItemWhereInput | Prisma.RequerimentoItemWhereInput[];
    id?: Prisma.StringFilter<"RequerimentoItem"> | string;
    requerimentoId?: Prisma.StringFilter<"RequerimentoItem"> | string;
    produtoId?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    medicamentoId?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    quantidade?: Prisma.IntFilter<"RequerimentoItem"> | number;
    ocorrencia?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    userId?: Prisma.StringFilter<"RequerimentoItem"> | string;
    ativo?: Prisma.BoolFilter<"RequerimentoItem"> | boolean;
    deleted_at?: Prisma.DateTimeNullableFilter<"RequerimentoItem"> | Date | string | null;
    deleted_by?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    created_at?: Prisma.DateTimeFilter<"RequerimentoItem"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"RequerimentoItem"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Produto?: Prisma.XOR<Prisma.ProdutoNullableScalarRelationFilter, Prisma.ProdutoWhereInput> | null;
    Medicamento?: Prisma.XOR<Prisma.MedicamentoNullableScalarRelationFilter, Prisma.MedicamentoWhereInput> | null;
    DeletedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    Requerimento?: Prisma.XOR<Prisma.RequerimentoScalarRelationFilter, Prisma.RequerimentoWhereInput>;
};
export type RequerimentoItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    produtoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    Produto?: Prisma.ProdutoOrderByWithRelationInput;
    Medicamento?: Prisma.MedicamentoOrderByWithRelationInput;
    DeletedBy?: Prisma.UserOrderByWithRelationInput;
    Requerimento?: Prisma.RequerimentoOrderByWithRelationInput;
    _relevance?: Prisma.RequerimentoItemOrderByRelevanceInput;
};
export type RequerimentoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RequerimentoItemWhereInput | Prisma.RequerimentoItemWhereInput[];
    OR?: Prisma.RequerimentoItemWhereInput[];
    NOT?: Prisma.RequerimentoItemWhereInput | Prisma.RequerimentoItemWhereInput[];
    requerimentoId?: Prisma.StringFilter<"RequerimentoItem"> | string;
    produtoId?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    medicamentoId?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    quantidade?: Prisma.IntFilter<"RequerimentoItem"> | number;
    ocorrencia?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    userId?: Prisma.StringFilter<"RequerimentoItem"> | string;
    ativo?: Prisma.BoolFilter<"RequerimentoItem"> | boolean;
    deleted_at?: Prisma.DateTimeNullableFilter<"RequerimentoItem"> | Date | string | null;
    deleted_by?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    created_at?: Prisma.DateTimeFilter<"RequerimentoItem"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"RequerimentoItem"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Produto?: Prisma.XOR<Prisma.ProdutoNullableScalarRelationFilter, Prisma.ProdutoWhereInput> | null;
    Medicamento?: Prisma.XOR<Prisma.MedicamentoNullableScalarRelationFilter, Prisma.MedicamentoWhereInput> | null;
    DeletedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    Requerimento?: Prisma.XOR<Prisma.RequerimentoScalarRelationFilter, Prisma.RequerimentoWhereInput>;
}, "id">;
export type RequerimentoItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    produtoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.RequerimentoItemCountOrderByAggregateInput;
    _avg?: Prisma.RequerimentoItemAvgOrderByAggregateInput;
    _max?: Prisma.RequerimentoItemMaxOrderByAggregateInput;
    _min?: Prisma.RequerimentoItemMinOrderByAggregateInput;
    _sum?: Prisma.RequerimentoItemSumOrderByAggregateInput;
};
export type RequerimentoItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.RequerimentoItemScalarWhereWithAggregatesInput | Prisma.RequerimentoItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.RequerimentoItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RequerimentoItemScalarWhereWithAggregatesInput | Prisma.RequerimentoItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RequerimentoItem"> | string;
    requerimentoId?: Prisma.StringWithAggregatesFilter<"RequerimentoItem"> | string;
    produtoId?: Prisma.StringNullableWithAggregatesFilter<"RequerimentoItem"> | string | null;
    medicamentoId?: Prisma.StringNullableWithAggregatesFilter<"RequerimentoItem"> | string | null;
    quantidade?: Prisma.IntWithAggregatesFilter<"RequerimentoItem"> | number;
    ocorrencia?: Prisma.StringNullableWithAggregatesFilter<"RequerimentoItem"> | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"RequerimentoItem"> | string;
    ativo?: Prisma.BoolWithAggregatesFilter<"RequerimentoItem"> | boolean;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"RequerimentoItem"> | Date | string | null;
    deleted_by?: Prisma.StringNullableWithAggregatesFilter<"RequerimentoItem"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"RequerimentoItem"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"RequerimentoItem"> | Date | string;
};
export type RequerimentoItemCreateInput = {
    id?: string;
    quantidade: number;
    ocorrencia?: string | null;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentoItemInput;
    Produto?: Prisma.ProdutoCreateNestedOneWithoutRequerimentoItemInput;
    Medicamento?: Prisma.MedicamentoCreateNestedOneWithoutRequerimentoItemInput;
    DeletedBy?: Prisma.UserCreateNestedOneWithoutRequerimentoItemDeletedInput;
    Requerimento: Prisma.RequerimentoCreateNestedOneWithoutRequerimentoItemsInput;
};
export type RequerimentoItemUncheckedCreateInput = {
    id?: string;
    requerimentoId: string;
    produtoId?: string | null;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentoItemNestedInput;
    Produto?: Prisma.ProdutoUpdateOneWithoutRequerimentoItemNestedInput;
    Medicamento?: Prisma.MedicamentoUpdateOneWithoutRequerimentoItemNestedInput;
    DeletedBy?: Prisma.UserUpdateOneWithoutRequerimentoItemDeletedNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneRequiredWithoutRequerimentoItemsNestedInput;
};
export type RequerimentoItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemCreateManyInput = {
    id?: string;
    requerimentoId: string;
    produtoId?: string | null;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemListRelationFilter = {
    every?: Prisma.RequerimentoItemWhereInput;
    some?: Prisma.RequerimentoItemWhereInput;
    none?: Prisma.RequerimentoItemWhereInput;
};
export type RequerimentoItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RequerimentoItemOrderByRelevanceInput = {
    fields: Prisma.RequerimentoItemOrderByRelevanceFieldEnum | Prisma.RequerimentoItemOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type RequerimentoItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    produtoId?: Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    deleted_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RequerimentoItemAvgOrderByAggregateInput = {
    quantidade?: Prisma.SortOrder;
};
export type RequerimentoItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    produtoId?: Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    deleted_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RequerimentoItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    produtoId?: Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrder;
    quantidade?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    deleted_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RequerimentoItemSumOrderByAggregateInput = {
    quantidade?: Prisma.SortOrder;
};
export type RequerimentoItemCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutUserInput, Prisma.RequerimentoItemUncheckedCreateWithoutUserInput> | Prisma.RequerimentoItemCreateWithoutUserInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutUserInput | Prisma.RequerimentoItemCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RequerimentoItemCreateManyUserInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutDeletedByInput, Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput> | Prisma.RequerimentoItemCreateWithoutDeletedByInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutDeletedByInput | Prisma.RequerimentoItemCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.RequerimentoItemCreateManyDeletedByInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutUserInput, Prisma.RequerimentoItemUncheckedCreateWithoutUserInput> | Prisma.RequerimentoItemCreateWithoutUserInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutUserInput | Prisma.RequerimentoItemCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RequerimentoItemCreateManyUserInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutDeletedByInput, Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput> | Prisma.RequerimentoItemCreateWithoutDeletedByInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutDeletedByInput | Prisma.RequerimentoItemCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.RequerimentoItemCreateManyDeletedByInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutUserInput, Prisma.RequerimentoItemUncheckedCreateWithoutUserInput> | Prisma.RequerimentoItemCreateWithoutUserInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutUserInput | Prisma.RequerimentoItemCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutUserInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RequerimentoItemCreateManyUserInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutUserInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutUserInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutDeletedByInput, Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput> | Prisma.RequerimentoItemCreateWithoutDeletedByInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutDeletedByInput | Prisma.RequerimentoItemCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.RequerimentoItemCreateManyDeletedByInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutDeletedByInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutUserInput, Prisma.RequerimentoItemUncheckedCreateWithoutUserInput> | Prisma.RequerimentoItemCreateWithoutUserInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutUserInput | Prisma.RequerimentoItemCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutUserInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RequerimentoItemCreateManyUserInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutUserInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutUserInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutDeletedByInput, Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput> | Prisma.RequerimentoItemCreateWithoutDeletedByInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutDeletedByInput | Prisma.RequerimentoItemCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.RequerimentoItemCreateManyDeletedByInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutDeletedByInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemCreateNestedManyWithoutProdutoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutProdutoInput, Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput> | Prisma.RequerimentoItemCreateWithoutProdutoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutProdutoInput | Prisma.RequerimentoItemCreateOrConnectWithoutProdutoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyProdutoInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutProdutoInput, Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput> | Prisma.RequerimentoItemCreateWithoutProdutoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutProdutoInput | Prisma.RequerimentoItemCreateOrConnectWithoutProdutoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyProdutoInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemUpdateManyWithoutProdutoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutProdutoInput, Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput> | Prisma.RequerimentoItemCreateWithoutProdutoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutProdutoInput | Prisma.RequerimentoItemCreateOrConnectWithoutProdutoInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutProdutoInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutProdutoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyProdutoInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutProdutoInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutProdutoInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutProdutoInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutProdutoInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutProdutoInput, Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput> | Prisma.RequerimentoItemCreateWithoutProdutoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutProdutoInput | Prisma.RequerimentoItemCreateOrConnectWithoutProdutoInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutProdutoInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutProdutoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyProdutoInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutProdutoInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutProdutoInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutProdutoInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutProdutoInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemCreateNestedManyWithoutMedicamentoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutMedicamentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput> | Prisma.RequerimentoItemCreateWithoutMedicamentoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutMedicamentoInput | Prisma.RequerimentoItemCreateOrConnectWithoutMedicamentoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyMedicamentoInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemUncheckedCreateNestedManyWithoutMedicamentoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutMedicamentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput> | Prisma.RequerimentoItemCreateWithoutMedicamentoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutMedicamentoInput | Prisma.RequerimentoItemCreateOrConnectWithoutMedicamentoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyMedicamentoInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemUpdateManyWithoutMedicamentoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutMedicamentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput> | Prisma.RequerimentoItemCreateWithoutMedicamentoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutMedicamentoInput | Prisma.RequerimentoItemCreateOrConnectWithoutMedicamentoInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutMedicamentoInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutMedicamentoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyMedicamentoInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutMedicamentoInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutMedicamentoInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutMedicamentoInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutMedicamentoInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemUncheckedUpdateManyWithoutMedicamentoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutMedicamentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput> | Prisma.RequerimentoItemCreateWithoutMedicamentoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutMedicamentoInput | Prisma.RequerimentoItemCreateOrConnectWithoutMedicamentoInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutMedicamentoInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutMedicamentoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyMedicamentoInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutMedicamentoInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutMedicamentoInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutMedicamentoInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutMedicamentoInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemCreateNestedManyWithoutRequerimentoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutRequerimentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput> | Prisma.RequerimentoItemCreateWithoutRequerimentoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutRequerimentoInput | Prisma.RequerimentoItemCreateOrConnectWithoutRequerimentoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyRequerimentoInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemUncheckedCreateNestedManyWithoutRequerimentoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutRequerimentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput> | Prisma.RequerimentoItemCreateWithoutRequerimentoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutRequerimentoInput | Prisma.RequerimentoItemCreateOrConnectWithoutRequerimentoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyRequerimentoInputEnvelope;
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
};
export type RequerimentoItemUpdateManyWithoutRequerimentoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutRequerimentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput> | Prisma.RequerimentoItemCreateWithoutRequerimentoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutRequerimentoInput | Prisma.RequerimentoItemCreateOrConnectWithoutRequerimentoInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutRequerimentoInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutRequerimentoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyRequerimentoInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutRequerimentoInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutRequerimentoInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutRequerimentoInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutRequerimentoInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemUncheckedUpdateManyWithoutRequerimentoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutRequerimentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput> | Prisma.RequerimentoItemCreateWithoutRequerimentoInput[] | Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.RequerimentoItemCreateOrConnectWithoutRequerimentoInput | Prisma.RequerimentoItemCreateOrConnectWithoutRequerimentoInput[];
    upsert?: Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutRequerimentoInput | Prisma.RequerimentoItemUpsertWithWhereUniqueWithoutRequerimentoInput[];
    createMany?: Prisma.RequerimentoItemCreateManyRequerimentoInputEnvelope;
    set?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    delete?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    connect?: Prisma.RequerimentoItemWhereUniqueInput | Prisma.RequerimentoItemWhereUniqueInput[];
    update?: Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutRequerimentoInput | Prisma.RequerimentoItemUpdateWithWhereUniqueWithoutRequerimentoInput[];
    updateMany?: Prisma.RequerimentoItemUpdateManyWithWhereWithoutRequerimentoInput | Prisma.RequerimentoItemUpdateManyWithWhereWithoutRequerimentoInput[];
    deleteMany?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
};
export type RequerimentoItemCreateWithoutUserInput = {
    id?: string;
    quantidade: number;
    ocorrencia?: string | null;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    Produto?: Prisma.ProdutoCreateNestedOneWithoutRequerimentoItemInput;
    Medicamento?: Prisma.MedicamentoCreateNestedOneWithoutRequerimentoItemInput;
    DeletedBy?: Prisma.UserCreateNestedOneWithoutRequerimentoItemDeletedInput;
    Requerimento: Prisma.RequerimentoCreateNestedOneWithoutRequerimentoItemsInput;
};
export type RequerimentoItemUncheckedCreateWithoutUserInput = {
    id?: string;
    requerimentoId: string;
    produtoId?: string | null;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemCreateOrConnectWithoutUserInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutUserInput, Prisma.RequerimentoItemUncheckedCreateWithoutUserInput>;
};
export type RequerimentoItemCreateManyUserInputEnvelope = {
    data: Prisma.RequerimentoItemCreateManyUserInput | Prisma.RequerimentoItemCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoItemCreateWithoutDeletedByInput = {
    id?: string;
    quantidade: number;
    ocorrencia?: string | null;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentoItemInput;
    Produto?: Prisma.ProdutoCreateNestedOneWithoutRequerimentoItemInput;
    Medicamento?: Prisma.MedicamentoCreateNestedOneWithoutRequerimentoItemInput;
    Requerimento: Prisma.RequerimentoCreateNestedOneWithoutRequerimentoItemsInput;
};
export type RequerimentoItemUncheckedCreateWithoutDeletedByInput = {
    id?: string;
    requerimentoId: string;
    produtoId?: string | null;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemCreateOrConnectWithoutDeletedByInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutDeletedByInput, Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput>;
};
export type RequerimentoItemCreateManyDeletedByInputEnvelope = {
    data: Prisma.RequerimentoItemCreateManyDeletedByInput | Prisma.RequerimentoItemCreateManyDeletedByInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoItemUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutUserInput, Prisma.RequerimentoItemUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutUserInput, Prisma.RequerimentoItemUncheckedCreateWithoutUserInput>;
};
export type RequerimentoItemUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutUserInput, Prisma.RequerimentoItemUncheckedUpdateWithoutUserInput>;
};
export type RequerimentoItemUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RequerimentoItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateManyMutationInput, Prisma.RequerimentoItemUncheckedUpdateManyWithoutUserInput>;
};
export type RequerimentoItemScalarWhereInput = {
    AND?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
    OR?: Prisma.RequerimentoItemScalarWhereInput[];
    NOT?: Prisma.RequerimentoItemScalarWhereInput | Prisma.RequerimentoItemScalarWhereInput[];
    id?: Prisma.StringFilter<"RequerimentoItem"> | string;
    requerimentoId?: Prisma.StringFilter<"RequerimentoItem"> | string;
    produtoId?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    medicamentoId?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    quantidade?: Prisma.IntFilter<"RequerimentoItem"> | number;
    ocorrencia?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    userId?: Prisma.StringFilter<"RequerimentoItem"> | string;
    ativo?: Prisma.BoolFilter<"RequerimentoItem"> | boolean;
    deleted_at?: Prisma.DateTimeNullableFilter<"RequerimentoItem"> | Date | string | null;
    deleted_by?: Prisma.StringNullableFilter<"RequerimentoItem"> | string | null;
    created_at?: Prisma.DateTimeFilter<"RequerimentoItem"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"RequerimentoItem"> | Date | string;
};
export type RequerimentoItemUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutDeletedByInput, Prisma.RequerimentoItemUncheckedUpdateWithoutDeletedByInput>;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutDeletedByInput, Prisma.RequerimentoItemUncheckedCreateWithoutDeletedByInput>;
};
export type RequerimentoItemUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutDeletedByInput, Prisma.RequerimentoItemUncheckedUpdateWithoutDeletedByInput>;
};
export type RequerimentoItemUpdateManyWithWhereWithoutDeletedByInput = {
    where: Prisma.RequerimentoItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateManyMutationInput, Prisma.RequerimentoItemUncheckedUpdateManyWithoutDeletedByInput>;
};
export type RequerimentoItemCreateWithoutProdutoInput = {
    id?: string;
    quantidade: number;
    ocorrencia?: string | null;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentoItemInput;
    Medicamento?: Prisma.MedicamentoCreateNestedOneWithoutRequerimentoItemInput;
    DeletedBy?: Prisma.UserCreateNestedOneWithoutRequerimentoItemDeletedInput;
    Requerimento: Prisma.RequerimentoCreateNestedOneWithoutRequerimentoItemsInput;
};
export type RequerimentoItemUncheckedCreateWithoutProdutoInput = {
    id?: string;
    requerimentoId: string;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemCreateOrConnectWithoutProdutoInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutProdutoInput, Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput>;
};
export type RequerimentoItemCreateManyProdutoInputEnvelope = {
    data: Prisma.RequerimentoItemCreateManyProdutoInput | Prisma.RequerimentoItemCreateManyProdutoInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoItemUpsertWithWhereUniqueWithoutProdutoInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutProdutoInput, Prisma.RequerimentoItemUncheckedUpdateWithoutProdutoInput>;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutProdutoInput, Prisma.RequerimentoItemUncheckedCreateWithoutProdutoInput>;
};
export type RequerimentoItemUpdateWithWhereUniqueWithoutProdutoInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutProdutoInput, Prisma.RequerimentoItemUncheckedUpdateWithoutProdutoInput>;
};
export type RequerimentoItemUpdateManyWithWhereWithoutProdutoInput = {
    where: Prisma.RequerimentoItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateManyMutationInput, Prisma.RequerimentoItemUncheckedUpdateManyWithoutProdutoInput>;
};
export type RequerimentoItemCreateWithoutMedicamentoInput = {
    id?: string;
    quantidade: number;
    ocorrencia?: string | null;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentoItemInput;
    Produto?: Prisma.ProdutoCreateNestedOneWithoutRequerimentoItemInput;
    DeletedBy?: Prisma.UserCreateNestedOneWithoutRequerimentoItemDeletedInput;
    Requerimento: Prisma.RequerimentoCreateNestedOneWithoutRequerimentoItemsInput;
};
export type RequerimentoItemUncheckedCreateWithoutMedicamentoInput = {
    id?: string;
    requerimentoId: string;
    produtoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemCreateOrConnectWithoutMedicamentoInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutMedicamentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput>;
};
export type RequerimentoItemCreateManyMedicamentoInputEnvelope = {
    data: Prisma.RequerimentoItemCreateManyMedicamentoInput | Prisma.RequerimentoItemCreateManyMedicamentoInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoItemUpsertWithWhereUniqueWithoutMedicamentoInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutMedicamentoInput, Prisma.RequerimentoItemUncheckedUpdateWithoutMedicamentoInput>;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutMedicamentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutMedicamentoInput>;
};
export type RequerimentoItemUpdateWithWhereUniqueWithoutMedicamentoInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutMedicamentoInput, Prisma.RequerimentoItemUncheckedUpdateWithoutMedicamentoInput>;
};
export type RequerimentoItemUpdateManyWithWhereWithoutMedicamentoInput = {
    where: Prisma.RequerimentoItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateManyMutationInput, Prisma.RequerimentoItemUncheckedUpdateManyWithoutMedicamentoInput>;
};
export type RequerimentoItemCreateWithoutRequerimentoInput = {
    id?: string;
    quantidade: number;
    ocorrencia?: string | null;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentoItemInput;
    Produto?: Prisma.ProdutoCreateNestedOneWithoutRequerimentoItemInput;
    Medicamento?: Prisma.MedicamentoCreateNestedOneWithoutRequerimentoItemInput;
    DeletedBy?: Prisma.UserCreateNestedOneWithoutRequerimentoItemDeletedInput;
};
export type RequerimentoItemUncheckedCreateWithoutRequerimentoInput = {
    id?: string;
    produtoId?: string | null;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemCreateOrConnectWithoutRequerimentoInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutRequerimentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput>;
};
export type RequerimentoItemCreateManyRequerimentoInputEnvelope = {
    data: Prisma.RequerimentoItemCreateManyRequerimentoInput | Prisma.RequerimentoItemCreateManyRequerimentoInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoItemUpsertWithWhereUniqueWithoutRequerimentoInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutRequerimentoInput, Prisma.RequerimentoItemUncheckedUpdateWithoutRequerimentoInput>;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateWithoutRequerimentoInput, Prisma.RequerimentoItemUncheckedCreateWithoutRequerimentoInput>;
};
export type RequerimentoItemUpdateWithWhereUniqueWithoutRequerimentoInput = {
    where: Prisma.RequerimentoItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateWithoutRequerimentoInput, Prisma.RequerimentoItemUncheckedUpdateWithoutRequerimentoInput>;
};
export type RequerimentoItemUpdateManyWithWhereWithoutRequerimentoInput = {
    where: Prisma.RequerimentoItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateManyMutationInput, Prisma.RequerimentoItemUncheckedUpdateManyWithoutRequerimentoInput>;
};
export type RequerimentoItemCreateManyUserInput = {
    id?: string;
    requerimentoId: string;
    produtoId?: string | null;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemCreateManyDeletedByInput = {
    id?: string;
    requerimentoId: string;
    produtoId?: string | null;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Produto?: Prisma.ProdutoUpdateOneWithoutRequerimentoItemNestedInput;
    Medicamento?: Prisma.MedicamentoUpdateOneWithoutRequerimentoItemNestedInput;
    DeletedBy?: Prisma.UserUpdateOneWithoutRequerimentoItemDeletedNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneRequiredWithoutRequerimentoItemsNestedInput;
};
export type RequerimentoItemUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentoItemNestedInput;
    Produto?: Prisma.ProdutoUpdateOneWithoutRequerimentoItemNestedInput;
    Medicamento?: Prisma.MedicamentoUpdateOneWithoutRequerimentoItemNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneRequiredWithoutRequerimentoItemsNestedInput;
};
export type RequerimentoItemUncheckedUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemUncheckedUpdateManyWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemCreateManyProdutoInput = {
    id?: string;
    requerimentoId: string;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemUpdateWithoutProdutoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentoItemNestedInput;
    Medicamento?: Prisma.MedicamentoUpdateOneWithoutRequerimentoItemNestedInput;
    DeletedBy?: Prisma.UserUpdateOneWithoutRequerimentoItemDeletedNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneRequiredWithoutRequerimentoItemsNestedInput;
};
export type RequerimentoItemUncheckedUpdateWithoutProdutoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemUncheckedUpdateManyWithoutProdutoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemCreateManyMedicamentoInput = {
    id?: string;
    requerimentoId: string;
    produtoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemUpdateWithoutMedicamentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentoItemNestedInput;
    Produto?: Prisma.ProdutoUpdateOneWithoutRequerimentoItemNestedInput;
    DeletedBy?: Prisma.UserUpdateOneWithoutRequerimentoItemDeletedNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneRequiredWithoutRequerimentoItemsNestedInput;
};
export type RequerimentoItemUncheckedUpdateWithoutMedicamentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemUncheckedUpdateManyWithoutMedicamentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemCreateManyRequerimentoInput = {
    id?: string;
    produtoId?: string | null;
    medicamentoId?: string | null;
    quantidade: number;
    ocorrencia?: string | null;
    userId: string;
    ativo?: boolean;
    deleted_at?: Date | string | null;
    deleted_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoItemUpdateWithoutRequerimentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentoItemNestedInput;
    Produto?: Prisma.ProdutoUpdateOneWithoutRequerimentoItemNestedInput;
    Medicamento?: Prisma.MedicamentoUpdateOneWithoutRequerimentoItemNestedInput;
    DeletedBy?: Prisma.UserUpdateOneWithoutRequerimentoItemDeletedNestedInput;
};
export type RequerimentoItemUncheckedUpdateWithoutRequerimentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemUncheckedUpdateManyWithoutRequerimentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    produtoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    medicamentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantidade?: Prisma.IntFieldUpdateOperationsInput | number;
    ocorrencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requerimentoId?: boolean;
    produtoId?: boolean;
    medicamentoId?: boolean;
    quantidade?: boolean;
    ocorrencia?: boolean;
    userId?: boolean;
    ativo?: boolean;
    deleted_at?: boolean;
    deleted_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Produto?: boolean | Prisma.RequerimentoItem$ProdutoArgs<ExtArgs>;
    Medicamento?: boolean | Prisma.RequerimentoItem$MedicamentoArgs<ExtArgs>;
    DeletedBy?: boolean | Prisma.RequerimentoItem$DeletedByArgs<ExtArgs>;
    Requerimento?: boolean | Prisma.RequerimentoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["requerimentoItem"]>;
export type RequerimentoItemSelectScalar = {
    id?: boolean;
    requerimentoId?: boolean;
    produtoId?: boolean;
    medicamentoId?: boolean;
    quantidade?: boolean;
    ocorrencia?: boolean;
    userId?: boolean;
    ativo?: boolean;
    deleted_at?: boolean;
    deleted_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type RequerimentoItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requerimentoId" | "produtoId" | "medicamentoId" | "quantidade" | "ocorrencia" | "userId" | "ativo" | "deleted_at" | "deleted_by" | "created_at" | "updated_at", ExtArgs["result"]["requerimentoItem"]>;
export type RequerimentoItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Produto?: boolean | Prisma.RequerimentoItem$ProdutoArgs<ExtArgs>;
    Medicamento?: boolean | Prisma.RequerimentoItem$MedicamentoArgs<ExtArgs>;
    DeletedBy?: boolean | Prisma.RequerimentoItem$DeletedByArgs<ExtArgs>;
    Requerimento?: boolean | Prisma.RequerimentoDefaultArgs<ExtArgs>;
};
export type $RequerimentoItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RequerimentoItem";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
        Produto: Prisma.$ProdutoPayload<ExtArgs> | null;
        Medicamento: Prisma.$MedicamentoPayload<ExtArgs> | null;
        DeletedBy: Prisma.$UserPayload<ExtArgs> | null;
        Requerimento: Prisma.$RequerimentoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requerimentoId: string;
        produtoId: string | null;
        medicamentoId: string | null;
        quantidade: number;
        ocorrencia: string | null;
        userId: string;
        ativo: boolean;
        deleted_at: Date | null;
        deleted_by: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["requerimentoItem"]>;
    composites: {};
};
export type RequerimentoItemGetPayload<S extends boolean | null | undefined | RequerimentoItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload, S>;
export type RequerimentoItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RequerimentoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: RequerimentoItemCountAggregateInputType | true;
};
export interface RequerimentoItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RequerimentoItem'];
        meta: {
            name: 'RequerimentoItem';
        };
    };
    findUnique<T extends RequerimentoItemFindUniqueArgs>(args: Prisma.SelectSubset<T, RequerimentoItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RequerimentoItemClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RequerimentoItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RequerimentoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequerimentoItemClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RequerimentoItemFindFirstArgs>(args?: Prisma.SelectSubset<T, RequerimentoItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__RequerimentoItemClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RequerimentoItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RequerimentoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequerimentoItemClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RequerimentoItemFindManyArgs>(args?: Prisma.SelectSubset<T, RequerimentoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RequerimentoItemCreateArgs>(args: Prisma.SelectSubset<T, RequerimentoItemCreateArgs<ExtArgs>>): Prisma.Prisma__RequerimentoItemClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RequerimentoItemCreateManyArgs>(args?: Prisma.SelectSubset<T, RequerimentoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends RequerimentoItemDeleteArgs>(args: Prisma.SelectSubset<T, RequerimentoItemDeleteArgs<ExtArgs>>): Prisma.Prisma__RequerimentoItemClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RequerimentoItemUpdateArgs>(args: Prisma.SelectSubset<T, RequerimentoItemUpdateArgs<ExtArgs>>): Prisma.Prisma__RequerimentoItemClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RequerimentoItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, RequerimentoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RequerimentoItemUpdateManyArgs>(args: Prisma.SelectSubset<T, RequerimentoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends RequerimentoItemUpsertArgs>(args: Prisma.SelectSubset<T, RequerimentoItemUpsertArgs<ExtArgs>>): Prisma.Prisma__RequerimentoItemClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RequerimentoItemCountArgs>(args?: Prisma.Subset<T, RequerimentoItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RequerimentoItemCountAggregateOutputType> : number>;
    aggregate<T extends RequerimentoItemAggregateArgs>(args: Prisma.Subset<T, RequerimentoItemAggregateArgs>): Prisma.PrismaPromise<GetRequerimentoItemAggregateType<T>>;
    groupBy<T extends RequerimentoItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RequerimentoItemGroupByArgs['orderBy'];
    } : {
        orderBy?: RequerimentoItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RequerimentoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequerimentoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RequerimentoItemFieldRefs;
}
export interface Prisma__RequerimentoItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Produto<T extends Prisma.RequerimentoItem$ProdutoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RequerimentoItem$ProdutoArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    Medicamento<T extends Prisma.RequerimentoItem$MedicamentoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RequerimentoItem$MedicamentoArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    DeletedBy<T extends Prisma.RequerimentoItem$DeletedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RequerimentoItem$DeletedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    Requerimento<T extends Prisma.RequerimentoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RequerimentoDefaultArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RequerimentoItemFieldRefs {
    readonly id: Prisma.FieldRef<"RequerimentoItem", 'String'>;
    readonly requerimentoId: Prisma.FieldRef<"RequerimentoItem", 'String'>;
    readonly produtoId: Prisma.FieldRef<"RequerimentoItem", 'String'>;
    readonly medicamentoId: Prisma.FieldRef<"RequerimentoItem", 'String'>;
    readonly quantidade: Prisma.FieldRef<"RequerimentoItem", 'Int'>;
    readonly ocorrencia: Prisma.FieldRef<"RequerimentoItem", 'String'>;
    readonly userId: Prisma.FieldRef<"RequerimentoItem", 'String'>;
    readonly ativo: Prisma.FieldRef<"RequerimentoItem", 'Boolean'>;
    readonly deleted_at: Prisma.FieldRef<"RequerimentoItem", 'DateTime'>;
    readonly deleted_by: Prisma.FieldRef<"RequerimentoItem", 'String'>;
    readonly created_at: Prisma.FieldRef<"RequerimentoItem", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"RequerimentoItem", 'DateTime'>;
}
export type RequerimentoItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    where: Prisma.RequerimentoItemWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    where: Prisma.RequerimentoItemWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoItemWhereInput;
    orderBy?: Prisma.RequerimentoItemOrderByWithRelationInput | Prisma.RequerimentoItemOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoItemScalarFieldEnum | Prisma.RequerimentoItemScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoItemWhereInput;
    orderBy?: Prisma.RequerimentoItemOrderByWithRelationInput | Prisma.RequerimentoItemOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoItemScalarFieldEnum | Prisma.RequerimentoItemScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoItemWhereInput;
    orderBy?: Prisma.RequerimentoItemOrderByWithRelationInput | Prisma.RequerimentoItemOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoItemScalarFieldEnum | Prisma.RequerimentoItemScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequerimentoItemCreateInput, Prisma.RequerimentoItemUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RequerimentoItemCreateManyInput | Prisma.RequerimentoItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateInput, Prisma.RequerimentoItemUncheckedUpdateInput>;
    where: Prisma.RequerimentoItemWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RequerimentoItemUpdateManyMutationInput, Prisma.RequerimentoItemUncheckedUpdateManyInput>;
    where?: Prisma.RequerimentoItemWhereInput;
    limit?: number;
};
export type RequerimentoItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    where: Prisma.RequerimentoItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoItemCreateInput, Prisma.RequerimentoItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RequerimentoItemUpdateInput, Prisma.RequerimentoItemUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    where: Prisma.RequerimentoItemWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoItemWhereInput;
    limit?: number;
};
export type RequerimentoItem$ProdutoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    where?: Prisma.ProdutoWhereInput;
};
export type RequerimentoItem$MedicamentoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    where?: Prisma.MedicamentoWhereInput;
};
export type RequerimentoItem$DeletedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type RequerimentoItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
};
