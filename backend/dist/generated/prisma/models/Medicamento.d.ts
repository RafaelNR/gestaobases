import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MedicamentoModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicamentoPayload>;
export type AggregateMedicamento = {
    _count: MedicamentoCountAggregateOutputType | null;
    _avg: MedicamentoAvgAggregateOutputType | null;
    _sum: MedicamentoSumAggregateOutputType | null;
    _min: MedicamentoMinAggregateOutputType | null;
    _max: MedicamentoMaxAggregateOutputType | null;
};
export type MedicamentoAvgAggregateOutputType = {
    codigo: number | null;
};
export type MedicamentoSumAggregateOutputType = {
    codigo: number | null;
};
export type MedicamentoMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    codigo: number | null;
    especificacao: string | null;
    categoria: string | null;
    userId: string | null;
    descricao: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MedicamentoMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    codigo: number | null;
    especificacao: string | null;
    categoria: string | null;
    userId: string | null;
    descricao: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MedicamentoCountAggregateOutputType = {
    id: number;
    nome: number;
    codigo: number;
    especificacao: number;
    categoria: number;
    userId: number;
    descricao: number;
    active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type MedicamentoAvgAggregateInputType = {
    codigo?: true;
};
export type MedicamentoSumAggregateInputType = {
    codigo?: true;
};
export type MedicamentoMinAggregateInputType = {
    id?: true;
    nome?: true;
    codigo?: true;
    especificacao?: true;
    categoria?: true;
    userId?: true;
    descricao?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type MedicamentoMaxAggregateInputType = {
    id?: true;
    nome?: true;
    codigo?: true;
    especificacao?: true;
    categoria?: true;
    userId?: true;
    descricao?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type MedicamentoCountAggregateInputType = {
    id?: true;
    nome?: true;
    codigo?: true;
    especificacao?: true;
    categoria?: true;
    userId?: true;
    descricao?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type MedicamentoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicamentoWhereInput;
    orderBy?: Prisma.MedicamentoOrderByWithRelationInput | Prisma.MedicamentoOrderByWithRelationInput[];
    cursor?: Prisma.MedicamentoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MedicamentoCountAggregateInputType;
    _avg?: MedicamentoAvgAggregateInputType;
    _sum?: MedicamentoSumAggregateInputType;
    _min?: MedicamentoMinAggregateInputType;
    _max?: MedicamentoMaxAggregateInputType;
};
export type GetMedicamentoAggregateType<T extends MedicamentoAggregateArgs> = {
    [P in keyof T & keyof AggregateMedicamento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedicamento[P]> : Prisma.GetScalarType<T[P], AggregateMedicamento[P]>;
};
export type MedicamentoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicamentoWhereInput;
    orderBy?: Prisma.MedicamentoOrderByWithAggregationInput | Prisma.MedicamentoOrderByWithAggregationInput[];
    by: Prisma.MedicamentoScalarFieldEnum[] | Prisma.MedicamentoScalarFieldEnum;
    having?: Prisma.MedicamentoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicamentoCountAggregateInputType | true;
    _avg?: MedicamentoAvgAggregateInputType;
    _sum?: MedicamentoSumAggregateInputType;
    _min?: MedicamentoMinAggregateInputType;
    _max?: MedicamentoMaxAggregateInputType;
};
export type MedicamentoGroupByOutputType = {
    id: string;
    nome: string;
    codigo: number;
    especificacao: string;
    categoria: string;
    userId: string;
    descricao: string | null;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: MedicamentoCountAggregateOutputType | null;
    _avg: MedicamentoAvgAggregateOutputType | null;
    _sum: MedicamentoSumAggregateOutputType | null;
    _min: MedicamentoMinAggregateOutputType | null;
    _max: MedicamentoMaxAggregateOutputType | null;
};
export type GetMedicamentoGroupByPayload<T extends MedicamentoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicamentoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicamentoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicamentoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicamentoGroupByOutputType[P]>;
}>>;
export type MedicamentoWhereInput = {
    AND?: Prisma.MedicamentoWhereInput | Prisma.MedicamentoWhereInput[];
    OR?: Prisma.MedicamentoWhereInput[];
    NOT?: Prisma.MedicamentoWhereInput | Prisma.MedicamentoWhereInput[];
    id?: Prisma.StringFilter<"Medicamento"> | string;
    nome?: Prisma.StringFilter<"Medicamento"> | string;
    codigo?: Prisma.IntFilter<"Medicamento"> | number;
    especificacao?: Prisma.StringFilter<"Medicamento"> | string;
    categoria?: Prisma.StringFilter<"Medicamento"> | string;
    userId?: Prisma.StringFilter<"Medicamento"> | string;
    descricao?: Prisma.StringNullableFilter<"Medicamento"> | string | null;
    active?: Prisma.BoolFilter<"Medicamento"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Medicamento"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Medicamento"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    CategoriasMedicamento?: Prisma.XOR<Prisma.CategoriasMedicamentoScalarRelationFilter, Prisma.CategoriasMedicamentoWhereInput>;
    RequerimentoItem?: Prisma.RequerimentoItemListRelationFilter;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosListRelationFilter;
};
export type MedicamentoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    especificacao?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    CategoriasMedicamento?: Prisma.CategoriasMedicamentoOrderByWithRelationInput;
    RequerimentoItem?: Prisma.RequerimentoItemOrderByRelationAggregateInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosOrderByRelationAggregateInput;
    _relevance?: Prisma.MedicamentoOrderByRelevanceInput;
};
export type MedicamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nome_codigo?: Prisma.MedicamentoNomeCodigoCompoundUniqueInput;
    AND?: Prisma.MedicamentoWhereInput | Prisma.MedicamentoWhereInput[];
    OR?: Prisma.MedicamentoWhereInput[];
    NOT?: Prisma.MedicamentoWhereInput | Prisma.MedicamentoWhereInput[];
    nome?: Prisma.StringFilter<"Medicamento"> | string;
    codigo?: Prisma.IntFilter<"Medicamento"> | number;
    especificacao?: Prisma.StringFilter<"Medicamento"> | string;
    categoria?: Prisma.StringFilter<"Medicamento"> | string;
    userId?: Prisma.StringFilter<"Medicamento"> | string;
    descricao?: Prisma.StringNullableFilter<"Medicamento"> | string | null;
    active?: Prisma.BoolFilter<"Medicamento"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Medicamento"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Medicamento"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    CategoriasMedicamento?: Prisma.XOR<Prisma.CategoriasMedicamentoScalarRelationFilter, Prisma.CategoriasMedicamentoWhereInput>;
    RequerimentoItem?: Prisma.RequerimentoItemListRelationFilter;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosListRelationFilter;
}, "id" | "nome_codigo">;
export type MedicamentoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    especificacao?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.MedicamentoCountOrderByAggregateInput;
    _avg?: Prisma.MedicamentoAvgOrderByAggregateInput;
    _max?: Prisma.MedicamentoMaxOrderByAggregateInput;
    _min?: Prisma.MedicamentoMinOrderByAggregateInput;
    _sum?: Prisma.MedicamentoSumOrderByAggregateInput;
};
export type MedicamentoScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicamentoScalarWhereWithAggregatesInput | Prisma.MedicamentoScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicamentoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicamentoScalarWhereWithAggregatesInput | Prisma.MedicamentoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Medicamento"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Medicamento"> | string;
    codigo?: Prisma.IntWithAggregatesFilter<"Medicamento"> | number;
    especificacao?: Prisma.StringWithAggregatesFilter<"Medicamento"> | string;
    categoria?: Prisma.StringWithAggregatesFilter<"Medicamento"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Medicamento"> | string;
    descricao?: Prisma.StringNullableWithAggregatesFilter<"Medicamento"> | string | null;
    active?: Prisma.BoolWithAggregatesFilter<"Medicamento"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Medicamento"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Medicamento"> | Date | string;
};
export type MedicamentoCreateInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutMedicamentosInput;
    CategoriasMedicamento: Prisma.CategoriasMedicamentoCreateNestedOneWithoutMedicamentoInput;
    RequerimentoItem?: Prisma.RequerimentoItemCreateNestedManyWithoutMedicamentoInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoUncheckedCreateInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    categoria: string;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutMedicamentoInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutMedicamentosNestedInput;
    CategoriasMedicamento?: Prisma.CategoriasMedicamentoUpdateOneRequiredWithoutMedicamentoNestedInput;
    RequerimentoItem?: Prisma.RequerimentoItemUpdateManyWithoutMedicamentoNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutMedicamentoNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoCreateManyInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    categoria: string;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MedicamentoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicamentoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicamentoListRelationFilter = {
    every?: Prisma.MedicamentoWhereInput;
    some?: Prisma.MedicamentoWhereInput;
    none?: Prisma.MedicamentoWhereInput;
};
export type MedicamentoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MedicamentoOrderByRelevanceInput = {
    fields: Prisma.MedicamentoOrderByRelevanceFieldEnum | Prisma.MedicamentoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type MedicamentoNomeCodigoCompoundUniqueInput = {
    nome: string;
    codigo: number;
};
export type MedicamentoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    especificacao?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MedicamentoAvgOrderByAggregateInput = {
    codigo?: Prisma.SortOrder;
};
export type MedicamentoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    especificacao?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MedicamentoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    especificacao?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MedicamentoSumOrderByAggregateInput = {
    codigo?: Prisma.SortOrder;
};
export type MedicamentoNullableScalarRelationFilter = {
    is?: Prisma.MedicamentoWhereInput | null;
    isNot?: Prisma.MedicamentoWhereInput | null;
};
export type MedicamentoScalarRelationFilter = {
    is?: Prisma.MedicamentoWhereInput;
    isNot?: Prisma.MedicamentoWhereInput;
};
export type MedicamentoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutUserInput, Prisma.MedicamentoUncheckedCreateWithoutUserInput> | Prisma.MedicamentoCreateWithoutUserInput[] | Prisma.MedicamentoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutUserInput | Prisma.MedicamentoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MedicamentoCreateManyUserInputEnvelope;
    connect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
};
export type MedicamentoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutUserInput, Prisma.MedicamentoUncheckedCreateWithoutUserInput> | Prisma.MedicamentoCreateWithoutUserInput[] | Prisma.MedicamentoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutUserInput | Prisma.MedicamentoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MedicamentoCreateManyUserInputEnvelope;
    connect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
};
export type MedicamentoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutUserInput, Prisma.MedicamentoUncheckedCreateWithoutUserInput> | Prisma.MedicamentoCreateWithoutUserInput[] | Prisma.MedicamentoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutUserInput | Prisma.MedicamentoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MedicamentoUpsertWithWhereUniqueWithoutUserInput | Prisma.MedicamentoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MedicamentoCreateManyUserInputEnvelope;
    set?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    disconnect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    delete?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    connect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    update?: Prisma.MedicamentoUpdateWithWhereUniqueWithoutUserInput | Prisma.MedicamentoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MedicamentoUpdateManyWithWhereWithoutUserInput | Prisma.MedicamentoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MedicamentoScalarWhereInput | Prisma.MedicamentoScalarWhereInput[];
};
export type MedicamentoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutUserInput, Prisma.MedicamentoUncheckedCreateWithoutUserInput> | Prisma.MedicamentoCreateWithoutUserInput[] | Prisma.MedicamentoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutUserInput | Prisma.MedicamentoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MedicamentoUpsertWithWhereUniqueWithoutUserInput | Prisma.MedicamentoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MedicamentoCreateManyUserInputEnvelope;
    set?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    disconnect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    delete?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    connect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    update?: Prisma.MedicamentoUpdateWithWhereUniqueWithoutUserInput | Prisma.MedicamentoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MedicamentoUpdateManyWithWhereWithoutUserInput | Prisma.MedicamentoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MedicamentoScalarWhereInput | Prisma.MedicamentoScalarWhereInput[];
};
export type MedicamentoCreateNestedManyWithoutCategoriasMedicamentoInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput, Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput> | Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput[] | Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput[];
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutCategoriasMedicamentoInput | Prisma.MedicamentoCreateOrConnectWithoutCategoriasMedicamentoInput[];
    createMany?: Prisma.MedicamentoCreateManyCategoriasMedicamentoInputEnvelope;
    connect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
};
export type MedicamentoUncheckedCreateNestedManyWithoutCategoriasMedicamentoInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput, Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput> | Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput[] | Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput[];
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutCategoriasMedicamentoInput | Prisma.MedicamentoCreateOrConnectWithoutCategoriasMedicamentoInput[];
    createMany?: Prisma.MedicamentoCreateManyCategoriasMedicamentoInputEnvelope;
    connect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
};
export type MedicamentoUpdateManyWithoutCategoriasMedicamentoNestedInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput, Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput> | Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput[] | Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput[];
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutCategoriasMedicamentoInput | Prisma.MedicamentoCreateOrConnectWithoutCategoriasMedicamentoInput[];
    upsert?: Prisma.MedicamentoUpsertWithWhereUniqueWithoutCategoriasMedicamentoInput | Prisma.MedicamentoUpsertWithWhereUniqueWithoutCategoriasMedicamentoInput[];
    createMany?: Prisma.MedicamentoCreateManyCategoriasMedicamentoInputEnvelope;
    set?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    disconnect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    delete?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    connect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    update?: Prisma.MedicamentoUpdateWithWhereUniqueWithoutCategoriasMedicamentoInput | Prisma.MedicamentoUpdateWithWhereUniqueWithoutCategoriasMedicamentoInput[];
    updateMany?: Prisma.MedicamentoUpdateManyWithWhereWithoutCategoriasMedicamentoInput | Prisma.MedicamentoUpdateManyWithWhereWithoutCategoriasMedicamentoInput[];
    deleteMany?: Prisma.MedicamentoScalarWhereInput | Prisma.MedicamentoScalarWhereInput[];
};
export type MedicamentoUncheckedUpdateManyWithoutCategoriasMedicamentoNestedInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput, Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput> | Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput[] | Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput[];
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutCategoriasMedicamentoInput | Prisma.MedicamentoCreateOrConnectWithoutCategoriasMedicamentoInput[];
    upsert?: Prisma.MedicamentoUpsertWithWhereUniqueWithoutCategoriasMedicamentoInput | Prisma.MedicamentoUpsertWithWhereUniqueWithoutCategoriasMedicamentoInput[];
    createMany?: Prisma.MedicamentoCreateManyCategoriasMedicamentoInputEnvelope;
    set?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    disconnect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    delete?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    connect?: Prisma.MedicamentoWhereUniqueInput | Prisma.MedicamentoWhereUniqueInput[];
    update?: Prisma.MedicamentoUpdateWithWhereUniqueWithoutCategoriasMedicamentoInput | Prisma.MedicamentoUpdateWithWhereUniqueWithoutCategoriasMedicamentoInput[];
    updateMany?: Prisma.MedicamentoUpdateManyWithWhereWithoutCategoriasMedicamentoInput | Prisma.MedicamentoUpdateManyWithWhereWithoutCategoriasMedicamentoInput[];
    deleteMany?: Prisma.MedicamentoScalarWhereInput | Prisma.MedicamentoScalarWhereInput[];
};
export type MedicamentoCreateNestedOneWithoutRequerimentoItemInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutRequerimentoItemInput, Prisma.MedicamentoUncheckedCreateWithoutRequerimentoItemInput>;
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutRequerimentoItemInput;
    connect?: Prisma.MedicamentoWhereUniqueInput;
};
export type MedicamentoUpdateOneWithoutRequerimentoItemNestedInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutRequerimentoItemInput, Prisma.MedicamentoUncheckedCreateWithoutRequerimentoItemInput>;
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutRequerimentoItemInput;
    upsert?: Prisma.MedicamentoUpsertWithoutRequerimentoItemInput;
    disconnect?: Prisma.MedicamentoWhereInput | boolean;
    delete?: Prisma.MedicamentoWhereInput | boolean;
    connect?: Prisma.MedicamentoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicamentoUpdateToOneWithWhereWithoutRequerimentoItemInput, Prisma.MedicamentoUpdateWithoutRequerimentoItemInput>, Prisma.MedicamentoUncheckedUpdateWithoutRequerimentoItemInput>;
};
export type MedicamentoCreateNestedOneWithoutReceituarioMedicamentosInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutReceituarioMedicamentosInput, Prisma.MedicamentoUncheckedCreateWithoutReceituarioMedicamentosInput>;
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutReceituarioMedicamentosInput;
    connect?: Prisma.MedicamentoWhereUniqueInput;
};
export type MedicamentoUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput = {
    create?: Prisma.XOR<Prisma.MedicamentoCreateWithoutReceituarioMedicamentosInput, Prisma.MedicamentoUncheckedCreateWithoutReceituarioMedicamentosInput>;
    connectOrCreate?: Prisma.MedicamentoCreateOrConnectWithoutReceituarioMedicamentosInput;
    upsert?: Prisma.MedicamentoUpsertWithoutReceituarioMedicamentosInput;
    connect?: Prisma.MedicamentoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicamentoUpdateToOneWithWhereWithoutReceituarioMedicamentosInput, Prisma.MedicamentoUpdateWithoutReceituarioMedicamentosInput>, Prisma.MedicamentoUncheckedUpdateWithoutReceituarioMedicamentosInput>;
};
export type MedicamentoCreateWithoutUserInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    CategoriasMedicamento: Prisma.CategoriasMedicamentoCreateNestedOneWithoutMedicamentoInput;
    RequerimentoItem?: Prisma.RequerimentoItemCreateNestedManyWithoutMedicamentoInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoUncheckedCreateWithoutUserInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    categoria: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutMedicamentoInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoCreateOrConnectWithoutUserInput = {
    where: Prisma.MedicamentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicamentoCreateWithoutUserInput, Prisma.MedicamentoUncheckedCreateWithoutUserInput>;
};
export type MedicamentoCreateManyUserInputEnvelope = {
    data: Prisma.MedicamentoCreateManyUserInput | Prisma.MedicamentoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MedicamentoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MedicamentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicamentoUpdateWithoutUserInput, Prisma.MedicamentoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MedicamentoCreateWithoutUserInput, Prisma.MedicamentoUncheckedCreateWithoutUserInput>;
};
export type MedicamentoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MedicamentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicamentoUpdateWithoutUserInput, Prisma.MedicamentoUncheckedUpdateWithoutUserInput>;
};
export type MedicamentoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MedicamentoScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicamentoUpdateManyMutationInput, Prisma.MedicamentoUncheckedUpdateManyWithoutUserInput>;
};
export type MedicamentoScalarWhereInput = {
    AND?: Prisma.MedicamentoScalarWhereInput | Prisma.MedicamentoScalarWhereInput[];
    OR?: Prisma.MedicamentoScalarWhereInput[];
    NOT?: Prisma.MedicamentoScalarWhereInput | Prisma.MedicamentoScalarWhereInput[];
    id?: Prisma.StringFilter<"Medicamento"> | string;
    nome?: Prisma.StringFilter<"Medicamento"> | string;
    codigo?: Prisma.IntFilter<"Medicamento"> | number;
    especificacao?: Prisma.StringFilter<"Medicamento"> | string;
    categoria?: Prisma.StringFilter<"Medicamento"> | string;
    userId?: Prisma.StringFilter<"Medicamento"> | string;
    descricao?: Prisma.StringNullableFilter<"Medicamento"> | string | null;
    active?: Prisma.BoolFilter<"Medicamento"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Medicamento"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Medicamento"> | Date | string;
};
export type MedicamentoCreateWithoutCategoriasMedicamentoInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutMedicamentosInput;
    RequerimentoItem?: Prisma.RequerimentoItemCreateNestedManyWithoutMedicamentoInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutMedicamentoInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoCreateOrConnectWithoutCategoriasMedicamentoInput = {
    where: Prisma.MedicamentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput, Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput>;
};
export type MedicamentoCreateManyCategoriasMedicamentoInputEnvelope = {
    data: Prisma.MedicamentoCreateManyCategoriasMedicamentoInput | Prisma.MedicamentoCreateManyCategoriasMedicamentoInput[];
    skipDuplicates?: boolean;
};
export type MedicamentoUpsertWithWhereUniqueWithoutCategoriasMedicamentoInput = {
    where: Prisma.MedicamentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicamentoUpdateWithoutCategoriasMedicamentoInput, Prisma.MedicamentoUncheckedUpdateWithoutCategoriasMedicamentoInput>;
    create: Prisma.XOR<Prisma.MedicamentoCreateWithoutCategoriasMedicamentoInput, Prisma.MedicamentoUncheckedCreateWithoutCategoriasMedicamentoInput>;
};
export type MedicamentoUpdateWithWhereUniqueWithoutCategoriasMedicamentoInput = {
    where: Prisma.MedicamentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicamentoUpdateWithoutCategoriasMedicamentoInput, Prisma.MedicamentoUncheckedUpdateWithoutCategoriasMedicamentoInput>;
};
export type MedicamentoUpdateManyWithWhereWithoutCategoriasMedicamentoInput = {
    where: Prisma.MedicamentoScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicamentoUpdateManyMutationInput, Prisma.MedicamentoUncheckedUpdateManyWithoutCategoriasMedicamentoInput>;
};
export type MedicamentoCreateWithoutRequerimentoItemInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutMedicamentosInput;
    CategoriasMedicamento: Prisma.CategoriasMedicamentoCreateNestedOneWithoutMedicamentoInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoUncheckedCreateWithoutRequerimentoItemInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    categoria: string;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoCreateOrConnectWithoutRequerimentoItemInput = {
    where: Prisma.MedicamentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicamentoCreateWithoutRequerimentoItemInput, Prisma.MedicamentoUncheckedCreateWithoutRequerimentoItemInput>;
};
export type MedicamentoUpsertWithoutRequerimentoItemInput = {
    update: Prisma.XOR<Prisma.MedicamentoUpdateWithoutRequerimentoItemInput, Prisma.MedicamentoUncheckedUpdateWithoutRequerimentoItemInput>;
    create: Prisma.XOR<Prisma.MedicamentoCreateWithoutRequerimentoItemInput, Prisma.MedicamentoUncheckedCreateWithoutRequerimentoItemInput>;
    where?: Prisma.MedicamentoWhereInput;
};
export type MedicamentoUpdateToOneWithWhereWithoutRequerimentoItemInput = {
    where?: Prisma.MedicamentoWhereInput;
    data: Prisma.XOR<Prisma.MedicamentoUpdateWithoutRequerimentoItemInput, Prisma.MedicamentoUncheckedUpdateWithoutRequerimentoItemInput>;
};
export type MedicamentoUpdateWithoutRequerimentoItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutMedicamentosNestedInput;
    CategoriasMedicamento?: Prisma.CategoriasMedicamentoUpdateOneRequiredWithoutMedicamentoNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoUncheckedUpdateWithoutRequerimentoItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoCreateWithoutReceituarioMedicamentosInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutMedicamentosInput;
    CategoriasMedicamento: Prisma.CategoriasMedicamentoCreateNestedOneWithoutMedicamentoInput;
    RequerimentoItem?: Prisma.RequerimentoItemCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoUncheckedCreateWithoutReceituarioMedicamentosInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    categoria: string;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutMedicamentoInput;
};
export type MedicamentoCreateOrConnectWithoutReceituarioMedicamentosInput = {
    where: Prisma.MedicamentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicamentoCreateWithoutReceituarioMedicamentosInput, Prisma.MedicamentoUncheckedCreateWithoutReceituarioMedicamentosInput>;
};
export type MedicamentoUpsertWithoutReceituarioMedicamentosInput = {
    update: Prisma.XOR<Prisma.MedicamentoUpdateWithoutReceituarioMedicamentosInput, Prisma.MedicamentoUncheckedUpdateWithoutReceituarioMedicamentosInput>;
    create: Prisma.XOR<Prisma.MedicamentoCreateWithoutReceituarioMedicamentosInput, Prisma.MedicamentoUncheckedCreateWithoutReceituarioMedicamentosInput>;
    where?: Prisma.MedicamentoWhereInput;
};
export type MedicamentoUpdateToOneWithWhereWithoutReceituarioMedicamentosInput = {
    where?: Prisma.MedicamentoWhereInput;
    data: Prisma.XOR<Prisma.MedicamentoUpdateWithoutReceituarioMedicamentosInput, Prisma.MedicamentoUncheckedUpdateWithoutReceituarioMedicamentosInput>;
};
export type MedicamentoUpdateWithoutReceituarioMedicamentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutMedicamentosNestedInput;
    CategoriasMedicamento?: Prisma.CategoriasMedicamentoUpdateOneRequiredWithoutMedicamentoNestedInput;
    RequerimentoItem?: Prisma.RequerimentoItemUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoUncheckedUpdateWithoutReceituarioMedicamentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoCreateManyUserInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    categoria: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MedicamentoUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CategoriasMedicamento?: Prisma.CategoriasMedicamentoUpdateOneRequiredWithoutMedicamentoNestedInput;
    RequerimentoItem?: Prisma.RequerimentoItemUpdateManyWithoutMedicamentoNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutMedicamentoNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicamentoCreateManyCategoriasMedicamentoInput = {
    id?: string;
    nome: string;
    codigo: number;
    especificacao: string;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MedicamentoUpdateWithoutCategoriasMedicamentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutMedicamentosNestedInput;
    RequerimentoItem?: Prisma.RequerimentoItemUpdateManyWithoutMedicamentoNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoUncheckedUpdateWithoutCategoriasMedicamentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutMedicamentoNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutMedicamentoNestedInput;
};
export type MedicamentoUncheckedUpdateManyWithoutCategoriasMedicamentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    especificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicamentoCountOutputType = {
    RequerimentoItem: number;
    ReceituarioMedicamentos: number;
};
export type MedicamentoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    RequerimentoItem?: boolean | MedicamentoCountOutputTypeCountRequerimentoItemArgs;
    ReceituarioMedicamentos?: boolean | MedicamentoCountOutputTypeCountReceituarioMedicamentosArgs;
};
export type MedicamentoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoCountOutputTypeSelect<ExtArgs> | null;
};
export type MedicamentoCountOutputTypeCountRequerimentoItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoItemWhereInput;
};
export type MedicamentoCountOutputTypeCountReceituarioMedicamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioMedicamentosWhereInput;
};
export type MedicamentoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    codigo?: boolean;
    especificacao?: boolean;
    categoria?: boolean;
    userId?: boolean;
    descricao?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    CategoriasMedicamento?: boolean | Prisma.CategoriasMedicamentoDefaultArgs<ExtArgs>;
    RequerimentoItem?: boolean | Prisma.Medicamento$RequerimentoItemArgs<ExtArgs>;
    ReceituarioMedicamentos?: boolean | Prisma.Medicamento$ReceituarioMedicamentosArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicamentoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medicamento"]>;
export type MedicamentoSelectScalar = {
    id?: boolean;
    nome?: boolean;
    codigo?: boolean;
    especificacao?: boolean;
    categoria?: boolean;
    userId?: boolean;
    descricao?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type MedicamentoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "codigo" | "especificacao" | "categoria" | "userId" | "descricao" | "active" | "created_at" | "updated_at", ExtArgs["result"]["medicamento"]>;
export type MedicamentoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    CategoriasMedicamento?: boolean | Prisma.CategoriasMedicamentoDefaultArgs<ExtArgs>;
    RequerimentoItem?: boolean | Prisma.Medicamento$RequerimentoItemArgs<ExtArgs>;
    ReceituarioMedicamentos?: boolean | Prisma.Medicamento$ReceituarioMedicamentosArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicamentoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MedicamentoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Medicamento";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
        CategoriasMedicamento: Prisma.$CategoriasMedicamentoPayload<ExtArgs>;
        RequerimentoItem: Prisma.$RequerimentoItemPayload<ExtArgs>[];
        ReceituarioMedicamentos: Prisma.$ReceituarioMedicamentosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        codigo: number;
        especificacao: string;
        categoria: string;
        userId: string;
        descricao: string | null;
        active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["medicamento"]>;
    composites: {};
};
export type MedicamentoGetPayload<S extends boolean | null | undefined | MedicamentoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload, S>;
export type MedicamentoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: MedicamentoCountAggregateInputType | true;
};
export interface MedicamentoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Medicamento'];
        meta: {
            name: 'Medicamento';
        };
    };
    findUnique<T extends MedicamentoFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicamentoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MedicamentoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MedicamentoFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicamentoFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MedicamentoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MedicamentoFindManyArgs>(args?: Prisma.SelectSubset<T, MedicamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MedicamentoCreateArgs>(args: Prisma.SelectSubset<T, MedicamentoCreateArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MedicamentoCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MedicamentoDeleteArgs>(args: Prisma.SelectSubset<T, MedicamentoDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MedicamentoUpdateArgs>(args: Prisma.SelectSubset<T, MedicamentoUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MedicamentoDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MedicamentoUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MedicamentoUpsertArgs>(args: Prisma.SelectSubset<T, MedicamentoUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MedicamentoCountArgs>(args?: Prisma.Subset<T, MedicamentoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicamentoCountAggregateOutputType> : number>;
    aggregate<T extends MedicamentoAggregateArgs>(args: Prisma.Subset<T, MedicamentoAggregateArgs>): Prisma.PrismaPromise<GetMedicamentoAggregateType<T>>;
    groupBy<T extends MedicamentoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicamentoGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicamentoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MedicamentoFieldRefs;
}
export interface Prisma__MedicamentoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    CategoriasMedicamento<T extends Prisma.CategoriasMedicamentoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriasMedicamentoDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriasMedicamentoClient<runtime.Types.Result.GetResult<Prisma.$CategoriasMedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    RequerimentoItem<T extends Prisma.Medicamento$RequerimentoItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medicamento$RequerimentoItemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ReceituarioMedicamentos<T extends Prisma.Medicamento$ReceituarioMedicamentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medicamento$ReceituarioMedicamentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MedicamentoFieldRefs {
    readonly id: Prisma.FieldRef<"Medicamento", 'String'>;
    readonly nome: Prisma.FieldRef<"Medicamento", 'String'>;
    readonly codigo: Prisma.FieldRef<"Medicamento", 'Int'>;
    readonly especificacao: Prisma.FieldRef<"Medicamento", 'String'>;
    readonly categoria: Prisma.FieldRef<"Medicamento", 'String'>;
    readonly userId: Prisma.FieldRef<"Medicamento", 'String'>;
    readonly descricao: Prisma.FieldRef<"Medicamento", 'String'>;
    readonly active: Prisma.FieldRef<"Medicamento", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"Medicamento", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Medicamento", 'DateTime'>;
}
export type MedicamentoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    where: Prisma.MedicamentoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicamentoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    where: Prisma.MedicamentoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicamentoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    where?: Prisma.MedicamentoWhereInput;
    orderBy?: Prisma.MedicamentoOrderByWithRelationInput | Prisma.MedicamentoOrderByWithRelationInput[];
    cursor?: Prisma.MedicamentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicamentoScalarFieldEnum | Prisma.MedicamentoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicamentoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    where?: Prisma.MedicamentoWhereInput;
    orderBy?: Prisma.MedicamentoOrderByWithRelationInput | Prisma.MedicamentoOrderByWithRelationInput[];
    cursor?: Prisma.MedicamentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicamentoScalarFieldEnum | Prisma.MedicamentoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicamentoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    where?: Prisma.MedicamentoWhereInput;
    orderBy?: Prisma.MedicamentoOrderByWithRelationInput | Prisma.MedicamentoOrderByWithRelationInput[];
    cursor?: Prisma.MedicamentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicamentoScalarFieldEnum | Prisma.MedicamentoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicamentoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicamentoCreateInput, Prisma.MedicamentoUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicamentoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MedicamentoCreateManyInput | Prisma.MedicamentoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MedicamentoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicamentoUpdateInput, Prisma.MedicamentoUncheckedUpdateInput>;
    where: Prisma.MedicamentoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicamentoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MedicamentoUpdateManyMutationInput, Prisma.MedicamentoUncheckedUpdateManyInput>;
    where?: Prisma.MedicamentoWhereInput;
    limit?: number;
};
export type MedicamentoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    where: Prisma.MedicamentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicamentoCreateInput, Prisma.MedicamentoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MedicamentoUpdateInput, Prisma.MedicamentoUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicamentoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
    where: Prisma.MedicamentoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicamentoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicamentoWhereInput;
    limit?: number;
};
export type Medicamento$RequerimentoItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoItemSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoItemOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoItemInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoItemWhereInput;
    orderBy?: Prisma.RequerimentoItemOrderByWithRelationInput | Prisma.RequerimentoItemOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoItemScalarFieldEnum | Prisma.RequerimentoItemScalarFieldEnum[];
};
export type Medicamento$ReceituarioMedicamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    where?: Prisma.ReceituarioMedicamentosWhereInput;
    orderBy?: Prisma.ReceituarioMedicamentosOrderByWithRelationInput | Prisma.ReceituarioMedicamentosOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceituarioMedicamentosScalarFieldEnum | Prisma.ReceituarioMedicamentosScalarFieldEnum[];
};
export type MedicamentoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicamentoSelect<ExtArgs> | null;
    omit?: Prisma.MedicamentoOmit<ExtArgs> | null;
    include?: Prisma.MedicamentoInclude<ExtArgs> | null;
};
