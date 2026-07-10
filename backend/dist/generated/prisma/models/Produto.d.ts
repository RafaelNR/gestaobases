import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProdutoModel = runtime.Types.Result.DefaultSelection<Prisma.$ProdutoPayload>;
export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null;
    _avg: ProdutoAvgAggregateOutputType | null;
    _sum: ProdutoSumAggregateOutputType | null;
    _min: ProdutoMinAggregateOutputType | null;
    _max: ProdutoMaxAggregateOutputType | null;
};
export type ProdutoAvgAggregateOutputType = {
    codigo: number | null;
    ordem: number | null;
};
export type ProdutoSumAggregateOutputType = {
    codigo: number | null;
    ordem: number | null;
};
export type ProdutoMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    codigo: number | null;
    unidade: $Enums.Unidade | null;
    categoria: string | null;
    usa: boolean | null;
    cme: boolean | null;
    fora_alx: boolean | null;
    ordem: number | null;
    userId: string | null;
    descricao: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProdutoMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    codigo: number | null;
    unidade: $Enums.Unidade | null;
    categoria: string | null;
    usa: boolean | null;
    cme: boolean | null;
    fora_alx: boolean | null;
    ordem: number | null;
    userId: string | null;
    descricao: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProdutoCountAggregateOutputType = {
    id: number;
    nome: number;
    codigo: number;
    unidade: number;
    categoria: number;
    usa: number;
    cme: number;
    fora_alx: number;
    ordem: number;
    userId: number;
    descricao: number;
    active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type ProdutoAvgAggregateInputType = {
    codigo?: true;
    ordem?: true;
};
export type ProdutoSumAggregateInputType = {
    codigo?: true;
    ordem?: true;
};
export type ProdutoMinAggregateInputType = {
    id?: true;
    nome?: true;
    codigo?: true;
    unidade?: true;
    categoria?: true;
    usa?: true;
    cme?: true;
    fora_alx?: true;
    ordem?: true;
    userId?: true;
    descricao?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProdutoMaxAggregateInputType = {
    id?: true;
    nome?: true;
    codigo?: true;
    unidade?: true;
    categoria?: true;
    usa?: true;
    cme?: true;
    fora_alx?: true;
    ordem?: true;
    userId?: true;
    descricao?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProdutoCountAggregateInputType = {
    id?: true;
    nome?: true;
    codigo?: true;
    unidade?: true;
    categoria?: true;
    usa?: true;
    cme?: true;
    fora_alx?: true;
    ordem?: true;
    userId?: true;
    descricao?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type ProdutoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdutoWhereInput;
    orderBy?: Prisma.ProdutoOrderByWithRelationInput | Prisma.ProdutoOrderByWithRelationInput[];
    cursor?: Prisma.ProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProdutoCountAggregateInputType;
    _avg?: ProdutoAvgAggregateInputType;
    _sum?: ProdutoSumAggregateInputType;
    _min?: ProdutoMinAggregateInputType;
    _max?: ProdutoMaxAggregateInputType;
};
export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
    [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduto[P]> : Prisma.GetScalarType<T[P], AggregateProduto[P]>;
};
export type ProdutoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdutoWhereInput;
    orderBy?: Prisma.ProdutoOrderByWithAggregationInput | Prisma.ProdutoOrderByWithAggregationInput[];
    by: Prisma.ProdutoScalarFieldEnum[] | Prisma.ProdutoScalarFieldEnum;
    having?: Prisma.ProdutoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProdutoCountAggregateInputType | true;
    _avg?: ProdutoAvgAggregateInputType;
    _sum?: ProdutoSumAggregateInputType;
    _min?: ProdutoMinAggregateInputType;
    _max?: ProdutoMaxAggregateInputType;
};
export type ProdutoGroupByOutputType = {
    id: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    categoria: string;
    usa: boolean;
    cme: boolean;
    fora_alx: boolean;
    ordem: number | null;
    userId: string;
    descricao: string | null;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: ProdutoCountAggregateOutputType | null;
    _avg: ProdutoAvgAggregateOutputType | null;
    _sum: ProdutoSumAggregateOutputType | null;
    _min: ProdutoMinAggregateOutputType | null;
    _max: ProdutoMaxAggregateOutputType | null;
};
export type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProdutoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProdutoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProdutoGroupByOutputType[P]>;
}>>;
export type ProdutoWhereInput = {
    AND?: Prisma.ProdutoWhereInput | Prisma.ProdutoWhereInput[];
    OR?: Prisma.ProdutoWhereInput[];
    NOT?: Prisma.ProdutoWhereInput | Prisma.ProdutoWhereInput[];
    id?: Prisma.StringFilter<"Produto"> | string;
    nome?: Prisma.StringFilter<"Produto"> | string;
    codigo?: Prisma.IntFilter<"Produto"> | number;
    unidade?: Prisma.EnumUnidadeFilter<"Produto"> | $Enums.Unidade;
    categoria?: Prisma.StringFilter<"Produto"> | string;
    usa?: Prisma.BoolFilter<"Produto"> | boolean;
    cme?: Prisma.BoolFilter<"Produto"> | boolean;
    fora_alx?: Prisma.BoolFilter<"Produto"> | boolean;
    ordem?: Prisma.IntNullableFilter<"Produto"> | number | null;
    userId?: Prisma.StringFilter<"Produto"> | string;
    descricao?: Prisma.StringNullableFilter<"Produto"> | string | null;
    active?: Prisma.BoolFilter<"Produto"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Produto"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Produto"> | Date | string;
    CategoriaProduto?: Prisma.XOR<Prisma.CategoriaProdutoScalarRelationFilter, Prisma.CategoriaProdutoWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    RequerimentoItem?: Prisma.RequerimentoItemListRelationFilter;
};
export type ProdutoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    usa?: Prisma.SortOrder;
    cme?: Prisma.SortOrder;
    fora_alx?: Prisma.SortOrder;
    ordem?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    CategoriaProduto?: Prisma.CategoriaProdutoOrderByWithRelationInput;
    User?: Prisma.UserOrderByWithRelationInput;
    RequerimentoItem?: Prisma.RequerimentoItemOrderByRelationAggregateInput;
    _relevance?: Prisma.ProdutoOrderByRelevanceInput;
};
export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nome_codigo?: Prisma.ProdutoNomeCodigoCompoundUniqueInput;
    AND?: Prisma.ProdutoWhereInput | Prisma.ProdutoWhereInput[];
    OR?: Prisma.ProdutoWhereInput[];
    NOT?: Prisma.ProdutoWhereInput | Prisma.ProdutoWhereInput[];
    nome?: Prisma.StringFilter<"Produto"> | string;
    codigo?: Prisma.IntFilter<"Produto"> | number;
    unidade?: Prisma.EnumUnidadeFilter<"Produto"> | $Enums.Unidade;
    categoria?: Prisma.StringFilter<"Produto"> | string;
    usa?: Prisma.BoolFilter<"Produto"> | boolean;
    cme?: Prisma.BoolFilter<"Produto"> | boolean;
    fora_alx?: Prisma.BoolFilter<"Produto"> | boolean;
    ordem?: Prisma.IntNullableFilter<"Produto"> | number | null;
    userId?: Prisma.StringFilter<"Produto"> | string;
    descricao?: Prisma.StringNullableFilter<"Produto"> | string | null;
    active?: Prisma.BoolFilter<"Produto"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Produto"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Produto"> | Date | string;
    CategoriaProduto?: Prisma.XOR<Prisma.CategoriaProdutoScalarRelationFilter, Prisma.CategoriaProdutoWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    RequerimentoItem?: Prisma.RequerimentoItemListRelationFilter;
}, "id" | "nome_codigo">;
export type ProdutoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    usa?: Prisma.SortOrder;
    cme?: Prisma.SortOrder;
    fora_alx?: Prisma.SortOrder;
    ordem?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.ProdutoCountOrderByAggregateInput;
    _avg?: Prisma.ProdutoAvgOrderByAggregateInput;
    _max?: Prisma.ProdutoMaxOrderByAggregateInput;
    _min?: Prisma.ProdutoMinOrderByAggregateInput;
    _sum?: Prisma.ProdutoSumOrderByAggregateInput;
};
export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProdutoScalarWhereWithAggregatesInput | Prisma.ProdutoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProdutoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProdutoScalarWhereWithAggregatesInput | Prisma.ProdutoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Produto"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Produto"> | string;
    codigo?: Prisma.IntWithAggregatesFilter<"Produto"> | number;
    unidade?: Prisma.EnumUnidadeWithAggregatesFilter<"Produto"> | $Enums.Unidade;
    categoria?: Prisma.StringWithAggregatesFilter<"Produto"> | string;
    usa?: Prisma.BoolWithAggregatesFilter<"Produto"> | boolean;
    cme?: Prisma.BoolWithAggregatesFilter<"Produto"> | boolean;
    fora_alx?: Prisma.BoolWithAggregatesFilter<"Produto"> | boolean;
    ordem?: Prisma.IntNullableWithAggregatesFilter<"Produto"> | number | null;
    userId?: Prisma.StringWithAggregatesFilter<"Produto"> | string;
    descricao?: Prisma.StringNullableWithAggregatesFilter<"Produto"> | string | null;
    active?: Prisma.BoolWithAggregatesFilter<"Produto"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Produto"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Produto"> | Date | string;
};
export type ProdutoCreateInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    CategoriaProduto: Prisma.CategoriaProdutoCreateNestedOneWithoutProdutosInput;
    User: Prisma.UserCreateNestedOneWithoutProdutosInput;
    RequerimentoItem?: Prisma.RequerimentoItemCreateNestedManyWithoutProdutoInput;
};
export type ProdutoUncheckedCreateInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    categoria: string;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutProdutoInput;
};
export type ProdutoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CategoriaProduto?: Prisma.CategoriaProdutoUpdateOneRequiredWithoutProdutosNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutProdutosNestedInput;
    RequerimentoItem?: Prisma.RequerimentoItemUpdateManyWithoutProdutoNestedInput;
};
export type ProdutoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutProdutoNestedInput;
};
export type ProdutoCreateManyInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    categoria: string;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdutoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdutoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdutoListRelationFilter = {
    every?: Prisma.ProdutoWhereInput;
    some?: Prisma.ProdutoWhereInput;
    none?: Prisma.ProdutoWhereInput;
};
export type ProdutoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProdutoOrderByRelevanceInput = {
    fields: Prisma.ProdutoOrderByRelevanceFieldEnum | Prisma.ProdutoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ProdutoNomeCodigoCompoundUniqueInput = {
    nome: string;
    codigo: number;
};
export type ProdutoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    usa?: Prisma.SortOrder;
    cme?: Prisma.SortOrder;
    fora_alx?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProdutoAvgOrderByAggregateInput = {
    codigo?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
};
export type ProdutoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    usa?: Prisma.SortOrder;
    cme?: Prisma.SortOrder;
    fora_alx?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProdutoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    usa?: Prisma.SortOrder;
    cme?: Prisma.SortOrder;
    fora_alx?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProdutoSumOrderByAggregateInput = {
    codigo?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
};
export type ProdutoNullableScalarRelationFilter = {
    is?: Prisma.ProdutoWhereInput | null;
    isNot?: Prisma.ProdutoWhereInput | null;
};
export type ProdutoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutUserInput, Prisma.ProdutoUncheckedCreateWithoutUserInput> | Prisma.ProdutoCreateWithoutUserInput[] | Prisma.ProdutoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutUserInput | Prisma.ProdutoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ProdutoCreateManyUserInputEnvelope;
    connect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
};
export type ProdutoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutUserInput, Prisma.ProdutoUncheckedCreateWithoutUserInput> | Prisma.ProdutoCreateWithoutUserInput[] | Prisma.ProdutoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutUserInput | Prisma.ProdutoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ProdutoCreateManyUserInputEnvelope;
    connect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
};
export type ProdutoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutUserInput, Prisma.ProdutoUncheckedCreateWithoutUserInput> | Prisma.ProdutoCreateWithoutUserInput[] | Prisma.ProdutoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutUserInput | Prisma.ProdutoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ProdutoUpsertWithWhereUniqueWithoutUserInput | Prisma.ProdutoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ProdutoCreateManyUserInputEnvelope;
    set?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    disconnect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    delete?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    connect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    update?: Prisma.ProdutoUpdateWithWhereUniqueWithoutUserInput | Prisma.ProdutoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ProdutoUpdateManyWithWhereWithoutUserInput | Prisma.ProdutoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ProdutoScalarWhereInput | Prisma.ProdutoScalarWhereInput[];
};
export type ProdutoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutUserInput, Prisma.ProdutoUncheckedCreateWithoutUserInput> | Prisma.ProdutoCreateWithoutUserInput[] | Prisma.ProdutoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutUserInput | Prisma.ProdutoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ProdutoUpsertWithWhereUniqueWithoutUserInput | Prisma.ProdutoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ProdutoCreateManyUserInputEnvelope;
    set?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    disconnect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    delete?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    connect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    update?: Prisma.ProdutoUpdateWithWhereUniqueWithoutUserInput | Prisma.ProdutoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ProdutoUpdateManyWithWhereWithoutUserInput | Prisma.ProdutoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ProdutoScalarWhereInput | Prisma.ProdutoScalarWhereInput[];
};
export type ProdutoCreateNestedManyWithoutCategoriaProdutoInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutCategoriaProdutoInput, Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput> | Prisma.ProdutoCreateWithoutCategoriaProdutoInput[] | Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput[];
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutCategoriaProdutoInput | Prisma.ProdutoCreateOrConnectWithoutCategoriaProdutoInput[];
    createMany?: Prisma.ProdutoCreateManyCategoriaProdutoInputEnvelope;
    connect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
};
export type ProdutoUncheckedCreateNestedManyWithoutCategoriaProdutoInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutCategoriaProdutoInput, Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput> | Prisma.ProdutoCreateWithoutCategoriaProdutoInput[] | Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput[];
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutCategoriaProdutoInput | Prisma.ProdutoCreateOrConnectWithoutCategoriaProdutoInput[];
    createMany?: Prisma.ProdutoCreateManyCategoriaProdutoInputEnvelope;
    connect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
};
export type ProdutoUpdateManyWithoutCategoriaProdutoNestedInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutCategoriaProdutoInput, Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput> | Prisma.ProdutoCreateWithoutCategoriaProdutoInput[] | Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput[];
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutCategoriaProdutoInput | Prisma.ProdutoCreateOrConnectWithoutCategoriaProdutoInput[];
    upsert?: Prisma.ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput | Prisma.ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput[];
    createMany?: Prisma.ProdutoCreateManyCategoriaProdutoInputEnvelope;
    set?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    disconnect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    delete?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    connect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    update?: Prisma.ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput | Prisma.ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput[];
    updateMany?: Prisma.ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput | Prisma.ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput[];
    deleteMany?: Prisma.ProdutoScalarWhereInput | Prisma.ProdutoScalarWhereInput[];
};
export type ProdutoUncheckedUpdateManyWithoutCategoriaProdutoNestedInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutCategoriaProdutoInput, Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput> | Prisma.ProdutoCreateWithoutCategoriaProdutoInput[] | Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput[];
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutCategoriaProdutoInput | Prisma.ProdutoCreateOrConnectWithoutCategoriaProdutoInput[];
    upsert?: Prisma.ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput | Prisma.ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput[];
    createMany?: Prisma.ProdutoCreateManyCategoriaProdutoInputEnvelope;
    set?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    disconnect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    delete?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    connect?: Prisma.ProdutoWhereUniqueInput | Prisma.ProdutoWhereUniqueInput[];
    update?: Prisma.ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput | Prisma.ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput[];
    updateMany?: Prisma.ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput | Prisma.ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput[];
    deleteMany?: Prisma.ProdutoScalarWhereInput | Prisma.ProdutoScalarWhereInput[];
};
export type EnumUnidadeFieldUpdateOperationsInput = {
    set?: $Enums.Unidade;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProdutoCreateNestedOneWithoutRequerimentoItemInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutRequerimentoItemInput, Prisma.ProdutoUncheckedCreateWithoutRequerimentoItemInput>;
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutRequerimentoItemInput;
    connect?: Prisma.ProdutoWhereUniqueInput;
};
export type ProdutoUpdateOneWithoutRequerimentoItemNestedInput = {
    create?: Prisma.XOR<Prisma.ProdutoCreateWithoutRequerimentoItemInput, Prisma.ProdutoUncheckedCreateWithoutRequerimentoItemInput>;
    connectOrCreate?: Prisma.ProdutoCreateOrConnectWithoutRequerimentoItemInput;
    upsert?: Prisma.ProdutoUpsertWithoutRequerimentoItemInput;
    disconnect?: Prisma.ProdutoWhereInput | boolean;
    delete?: Prisma.ProdutoWhereInput | boolean;
    connect?: Prisma.ProdutoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProdutoUpdateToOneWithWhereWithoutRequerimentoItemInput, Prisma.ProdutoUpdateWithoutRequerimentoItemInput>, Prisma.ProdutoUncheckedUpdateWithoutRequerimentoItemInput>;
};
export type ProdutoCreateWithoutUserInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    CategoriaProduto: Prisma.CategoriaProdutoCreateNestedOneWithoutProdutosInput;
    RequerimentoItem?: Prisma.RequerimentoItemCreateNestedManyWithoutProdutoInput;
};
export type ProdutoUncheckedCreateWithoutUserInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    categoria: string;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutProdutoInput;
};
export type ProdutoCreateOrConnectWithoutUserInput = {
    where: Prisma.ProdutoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdutoCreateWithoutUserInput, Prisma.ProdutoUncheckedCreateWithoutUserInput>;
};
export type ProdutoCreateManyUserInputEnvelope = {
    data: Prisma.ProdutoCreateManyUserInput | Prisma.ProdutoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ProdutoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ProdutoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProdutoUpdateWithoutUserInput, Prisma.ProdutoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ProdutoCreateWithoutUserInput, Prisma.ProdutoUncheckedCreateWithoutUserInput>;
};
export type ProdutoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ProdutoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProdutoUpdateWithoutUserInput, Prisma.ProdutoUncheckedUpdateWithoutUserInput>;
};
export type ProdutoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ProdutoScalarWhereInput;
    data: Prisma.XOR<Prisma.ProdutoUpdateManyMutationInput, Prisma.ProdutoUncheckedUpdateManyWithoutUserInput>;
};
export type ProdutoScalarWhereInput = {
    AND?: Prisma.ProdutoScalarWhereInput | Prisma.ProdutoScalarWhereInput[];
    OR?: Prisma.ProdutoScalarWhereInput[];
    NOT?: Prisma.ProdutoScalarWhereInput | Prisma.ProdutoScalarWhereInput[];
    id?: Prisma.StringFilter<"Produto"> | string;
    nome?: Prisma.StringFilter<"Produto"> | string;
    codigo?: Prisma.IntFilter<"Produto"> | number;
    unidade?: Prisma.EnumUnidadeFilter<"Produto"> | $Enums.Unidade;
    categoria?: Prisma.StringFilter<"Produto"> | string;
    usa?: Prisma.BoolFilter<"Produto"> | boolean;
    cme?: Prisma.BoolFilter<"Produto"> | boolean;
    fora_alx?: Prisma.BoolFilter<"Produto"> | boolean;
    ordem?: Prisma.IntNullableFilter<"Produto"> | number | null;
    userId?: Prisma.StringFilter<"Produto"> | string;
    descricao?: Prisma.StringNullableFilter<"Produto"> | string | null;
    active?: Prisma.BoolFilter<"Produto"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Produto"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Produto"> | Date | string;
};
export type ProdutoCreateWithoutCategoriaProdutoInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutProdutosInput;
    RequerimentoItem?: Prisma.RequerimentoItemCreateNestedManyWithoutProdutoInput;
};
export type ProdutoUncheckedCreateWithoutCategoriaProdutoInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutProdutoInput;
};
export type ProdutoCreateOrConnectWithoutCategoriaProdutoInput = {
    where: Prisma.ProdutoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdutoCreateWithoutCategoriaProdutoInput, Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput>;
};
export type ProdutoCreateManyCategoriaProdutoInputEnvelope = {
    data: Prisma.ProdutoCreateManyCategoriaProdutoInput | Prisma.ProdutoCreateManyCategoriaProdutoInput[];
    skipDuplicates?: boolean;
};
export type ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput = {
    where: Prisma.ProdutoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProdutoUpdateWithoutCategoriaProdutoInput, Prisma.ProdutoUncheckedUpdateWithoutCategoriaProdutoInput>;
    create: Prisma.XOR<Prisma.ProdutoCreateWithoutCategoriaProdutoInput, Prisma.ProdutoUncheckedCreateWithoutCategoriaProdutoInput>;
};
export type ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput = {
    where: Prisma.ProdutoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProdutoUpdateWithoutCategoriaProdutoInput, Prisma.ProdutoUncheckedUpdateWithoutCategoriaProdutoInput>;
};
export type ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput = {
    where: Prisma.ProdutoScalarWhereInput;
    data: Prisma.XOR<Prisma.ProdutoUpdateManyMutationInput, Prisma.ProdutoUncheckedUpdateManyWithoutCategoriaProdutoInput>;
};
export type ProdutoCreateWithoutRequerimentoItemInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    CategoriaProduto: Prisma.CategoriaProdutoCreateNestedOneWithoutProdutosInput;
    User: Prisma.UserCreateNestedOneWithoutProdutosInput;
};
export type ProdutoUncheckedCreateWithoutRequerimentoItemInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    categoria: string;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdutoCreateOrConnectWithoutRequerimentoItemInput = {
    where: Prisma.ProdutoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdutoCreateWithoutRequerimentoItemInput, Prisma.ProdutoUncheckedCreateWithoutRequerimentoItemInput>;
};
export type ProdutoUpsertWithoutRequerimentoItemInput = {
    update: Prisma.XOR<Prisma.ProdutoUpdateWithoutRequerimentoItemInput, Prisma.ProdutoUncheckedUpdateWithoutRequerimentoItemInput>;
    create: Prisma.XOR<Prisma.ProdutoCreateWithoutRequerimentoItemInput, Prisma.ProdutoUncheckedCreateWithoutRequerimentoItemInput>;
    where?: Prisma.ProdutoWhereInput;
};
export type ProdutoUpdateToOneWithWhereWithoutRequerimentoItemInput = {
    where?: Prisma.ProdutoWhereInput;
    data: Prisma.XOR<Prisma.ProdutoUpdateWithoutRequerimentoItemInput, Prisma.ProdutoUncheckedUpdateWithoutRequerimentoItemInput>;
};
export type ProdutoUpdateWithoutRequerimentoItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CategoriaProduto?: Prisma.CategoriaProdutoUpdateOneRequiredWithoutProdutosNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutProdutosNestedInput;
};
export type ProdutoUncheckedUpdateWithoutRequerimentoItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdutoCreateManyUserInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    categoria: string;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdutoUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CategoriaProduto?: Prisma.CategoriaProdutoUpdateOneRequiredWithoutProdutosNestedInput;
    RequerimentoItem?: Prisma.RequerimentoItemUpdateManyWithoutProdutoNestedInput;
};
export type ProdutoUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutProdutoNestedInput;
};
export type ProdutoUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdutoCreateManyCategoriaProdutoInput = {
    id?: string;
    nome: string;
    codigo: number;
    unidade: $Enums.Unidade;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: number | null;
    userId: string;
    descricao?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProdutoUpdateWithoutCategoriaProdutoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutProdutosNestedInput;
    RequerimentoItem?: Prisma.RequerimentoItemUpdateManyWithoutProdutoNestedInput;
};
export type ProdutoUncheckedUpdateWithoutCategoriaProdutoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoItem?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutProdutoNestedInput;
};
export type ProdutoUncheckedUpdateManyWithoutCategoriaProdutoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeFieldUpdateOperationsInput | $Enums.Unidade;
    usa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cme?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fora_alx?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordem?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdutoCountOutputType = {
    RequerimentoItem: number;
};
export type ProdutoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    RequerimentoItem?: boolean | ProdutoCountOutputTypeCountRequerimentoItemArgs;
};
export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoCountOutputTypeSelect<ExtArgs> | null;
};
export type ProdutoCountOutputTypeCountRequerimentoItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoItemWhereInput;
};
export type ProdutoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    codigo?: boolean;
    unidade?: boolean;
    categoria?: boolean;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: boolean;
    userId?: boolean;
    descricao?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    CategoriaProduto?: boolean | Prisma.CategoriaProdutoDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    RequerimentoItem?: boolean | Prisma.Produto$RequerimentoItemArgs<ExtArgs>;
    _count?: boolean | Prisma.ProdutoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["produto"]>;
export type ProdutoSelectScalar = {
    id?: boolean;
    nome?: boolean;
    codigo?: boolean;
    unidade?: boolean;
    categoria?: boolean;
    usa?: boolean;
    cme?: boolean;
    fora_alx?: boolean;
    ordem?: boolean;
    userId?: boolean;
    descricao?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type ProdutoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "codigo" | "unidade" | "categoria" | "usa" | "cme" | "fora_alx" | "ordem" | "userId" | "descricao" | "active" | "created_at" | "updated_at", ExtArgs["result"]["produto"]>;
export type ProdutoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CategoriaProduto?: boolean | Prisma.CategoriaProdutoDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    RequerimentoItem?: boolean | Prisma.Produto$RequerimentoItemArgs<ExtArgs>;
    _count?: boolean | Prisma.ProdutoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ProdutoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Produto";
    objects: {
        CategoriaProduto: Prisma.$CategoriaProdutoPayload<ExtArgs>;
        User: Prisma.$UserPayload<ExtArgs>;
        RequerimentoItem: Prisma.$RequerimentoItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        codigo: number;
        unidade: $Enums.Unidade;
        categoria: string;
        usa: boolean;
        cme: boolean;
        fora_alx: boolean;
        ordem: number | null;
        userId: string;
        descricao: string | null;
        active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["produto"]>;
    composites: {};
};
export type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProdutoPayload, S>;
export type ProdutoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: ProdutoCountAggregateInputType | true;
};
export interface ProdutoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Produto'];
        meta: {
            name: 'Produto';
        };
    };
    findUnique<T extends ProdutoFindUniqueArgs>(args: Prisma.SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProdutoFindFirstArgs>(args?: Prisma.SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProdutoFindManyArgs>(args?: Prisma.SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProdutoCreateArgs>(args: Prisma.SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProdutoCreateManyArgs>(args?: Prisma.SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ProdutoDeleteArgs>(args: Prisma.SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProdutoUpdateArgs>(args: Prisma.SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProdutoUpdateManyArgs>(args: Prisma.SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ProdutoUpsertArgs>(args: Prisma.SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProdutoCountArgs>(args?: Prisma.Subset<T, ProdutoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProdutoCountAggregateOutputType> : number>;
    aggregate<T extends ProdutoAggregateArgs>(args: Prisma.Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>;
    groupBy<T extends ProdutoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProdutoGroupByArgs['orderBy'];
    } : {
        orderBy?: ProdutoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProdutoFieldRefs;
}
export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    CategoriaProduto<T extends Prisma.CategoriaProdutoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaProdutoDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriaProdutoClient<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    RequerimentoItem<T extends Prisma.Produto$RequerimentoItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Produto$RequerimentoItemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProdutoFieldRefs {
    readonly id: Prisma.FieldRef<"Produto", 'String'>;
    readonly nome: Prisma.FieldRef<"Produto", 'String'>;
    readonly codigo: Prisma.FieldRef<"Produto", 'Int'>;
    readonly unidade: Prisma.FieldRef<"Produto", 'Unidade'>;
    readonly categoria: Prisma.FieldRef<"Produto", 'String'>;
    readonly usa: Prisma.FieldRef<"Produto", 'Boolean'>;
    readonly cme: Prisma.FieldRef<"Produto", 'Boolean'>;
    readonly fora_alx: Prisma.FieldRef<"Produto", 'Boolean'>;
    readonly ordem: Prisma.FieldRef<"Produto", 'Int'>;
    readonly userId: Prisma.FieldRef<"Produto", 'String'>;
    readonly descricao: Prisma.FieldRef<"Produto", 'String'>;
    readonly active: Prisma.FieldRef<"Produto", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"Produto", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Produto", 'DateTime'>;
}
export type ProdutoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    where: Prisma.ProdutoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    where: Prisma.ProdutoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ProdutoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    where?: Prisma.ProdutoWhereInput;
    orderBy?: Prisma.ProdutoOrderByWithRelationInput | Prisma.ProdutoOrderByWithRelationInput[];
    cursor?: Prisma.ProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProdutoScalarFieldEnum | Prisma.ProdutoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ProdutoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    where?: Prisma.ProdutoWhereInput;
    orderBy?: Prisma.ProdutoOrderByWithRelationInput | Prisma.ProdutoOrderByWithRelationInput[];
    cursor?: Prisma.ProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProdutoScalarFieldEnum | Prisma.ProdutoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ProdutoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    where?: Prisma.ProdutoWhereInput;
    orderBy?: Prisma.ProdutoOrderByWithRelationInput | Prisma.ProdutoOrderByWithRelationInput[];
    cursor?: Prisma.ProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProdutoScalarFieldEnum | Prisma.ProdutoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ProdutoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProdutoCreateInput, Prisma.ProdutoUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ProdutoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProdutoCreateManyInput | Prisma.ProdutoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProdutoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProdutoUpdateInput, Prisma.ProdutoUncheckedUpdateInput>;
    where: Prisma.ProdutoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ProdutoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProdutoUpdateManyMutationInput, Prisma.ProdutoUncheckedUpdateManyInput>;
    where?: Prisma.ProdutoWhereInput;
    limit?: number;
};
export type ProdutoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    where: Prisma.ProdutoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdutoCreateInput, Prisma.ProdutoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProdutoUpdateInput, Prisma.ProdutoUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ProdutoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    where: Prisma.ProdutoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ProdutoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdutoWhereInput;
    limit?: number;
};
export type Produto$RequerimentoItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProdutoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
};
