import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CategoriaProdutoModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoriaProdutoPayload>;
export type AggregateCategoriaProduto = {
    _count: CategoriaProdutoCountAggregateOutputType | null;
    _min: CategoriaProdutoMinAggregateOutputType | null;
    _max: CategoriaProdutoMaxAggregateOutputType | null;
};
export type CategoriaProdutoMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    userId: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CategoriaProdutoMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    userId: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CategoriaProdutoCountAggregateOutputType = {
    id: number;
    nome: number;
    userId: number;
    active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CategoriaProdutoMinAggregateInputType = {
    id?: true;
    nome?: true;
    userId?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type CategoriaProdutoMaxAggregateInputType = {
    id?: true;
    nome?: true;
    userId?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type CategoriaProdutoCountAggregateInputType = {
    id?: true;
    nome?: true;
    userId?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CategoriaProdutoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaProdutoWhereInput;
    orderBy?: Prisma.CategoriaProdutoOrderByWithRelationInput | Prisma.CategoriaProdutoOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriaProdutoCountAggregateInputType;
    _min?: CategoriaProdutoMinAggregateInputType;
    _max?: CategoriaProdutoMaxAggregateInputType;
};
export type GetCategoriaProdutoAggregateType<T extends CategoriaProdutoAggregateArgs> = {
    [P in keyof T & keyof AggregateCategoriaProduto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategoriaProduto[P]> : Prisma.GetScalarType<T[P], AggregateCategoriaProduto[P]>;
};
export type CategoriaProdutoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaProdutoWhereInput;
    orderBy?: Prisma.CategoriaProdutoOrderByWithAggregationInput | Prisma.CategoriaProdutoOrderByWithAggregationInput[];
    by: Prisma.CategoriaProdutoScalarFieldEnum[] | Prisma.CategoriaProdutoScalarFieldEnum;
    having?: Prisma.CategoriaProdutoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriaProdutoCountAggregateInputType | true;
    _min?: CategoriaProdutoMinAggregateInputType;
    _max?: CategoriaProdutoMaxAggregateInputType;
};
export type CategoriaProdutoGroupByOutputType = {
    id: string;
    nome: string;
    userId: string;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: CategoriaProdutoCountAggregateOutputType | null;
    _min: CategoriaProdutoMinAggregateOutputType | null;
    _max: CategoriaProdutoMaxAggregateOutputType | null;
};
export type GetCategoriaProdutoGroupByPayload<T extends CategoriaProdutoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriaProdutoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriaProdutoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriaProdutoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriaProdutoGroupByOutputType[P]>;
}>>;
export type CategoriaProdutoWhereInput = {
    AND?: Prisma.CategoriaProdutoWhereInput | Prisma.CategoriaProdutoWhereInput[];
    OR?: Prisma.CategoriaProdutoWhereInput[];
    NOT?: Prisma.CategoriaProdutoWhereInput | Prisma.CategoriaProdutoWhereInput[];
    id?: Prisma.StringFilter<"CategoriaProduto"> | string;
    nome?: Prisma.StringFilter<"CategoriaProduto"> | string;
    userId?: Prisma.StringFilter<"CategoriaProduto"> | string;
    active?: Prisma.BoolFilter<"CategoriaProduto"> | boolean;
    created_at?: Prisma.DateTimeFilter<"CategoriaProduto"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CategoriaProduto"> | Date | string;
    produtos?: Prisma.ProdutoListRelationFilter;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CategoriaProdutoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    produtos?: Prisma.ProdutoOrderByRelationAggregateInput;
    User?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.CategoriaProdutoOrderByRelevanceInput;
};
export type CategoriaProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nome?: string;
    AND?: Prisma.CategoriaProdutoWhereInput | Prisma.CategoriaProdutoWhereInput[];
    OR?: Prisma.CategoriaProdutoWhereInput[];
    NOT?: Prisma.CategoriaProdutoWhereInput | Prisma.CategoriaProdutoWhereInput[];
    userId?: Prisma.StringFilter<"CategoriaProduto"> | string;
    active?: Prisma.BoolFilter<"CategoriaProduto"> | boolean;
    created_at?: Prisma.DateTimeFilter<"CategoriaProduto"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CategoriaProduto"> | Date | string;
    produtos?: Prisma.ProdutoListRelationFilter;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "nome">;
export type CategoriaProdutoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.CategoriaProdutoCountOrderByAggregateInput;
    _max?: Prisma.CategoriaProdutoMaxOrderByAggregateInput;
    _min?: Prisma.CategoriaProdutoMinOrderByAggregateInput;
};
export type CategoriaProdutoScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategoriaProdutoScalarWhereWithAggregatesInput | Prisma.CategoriaProdutoScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategoriaProdutoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategoriaProdutoScalarWhereWithAggregatesInput | Prisma.CategoriaProdutoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CategoriaProduto"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"CategoriaProduto"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"CategoriaProduto"> | string;
    active?: Prisma.BoolWithAggregatesFilter<"CategoriaProduto"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"CategoriaProduto"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"CategoriaProduto"> | Date | string;
};
export type CategoriaProdutoCreateInput = {
    id?: string;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    produtos?: Prisma.ProdutoCreateNestedManyWithoutCategoriaProdutoInput;
    User: Prisma.UserCreateNestedOneWithoutCategoriaProdutosInput;
};
export type CategoriaProdutoUncheckedCreateInput = {
    id?: string;
    nome: string;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    produtos?: Prisma.ProdutoUncheckedCreateNestedManyWithoutCategoriaProdutoInput;
};
export type CategoriaProdutoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produtos?: Prisma.ProdutoUpdateManyWithoutCategoriaProdutoNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutCategoriaProdutosNestedInput;
};
export type CategoriaProdutoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produtos?: Prisma.ProdutoUncheckedUpdateManyWithoutCategoriaProdutoNestedInput;
};
export type CategoriaProdutoCreateManyInput = {
    id?: string;
    nome: string;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CategoriaProdutoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaProdutoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaProdutoListRelationFilter = {
    every?: Prisma.CategoriaProdutoWhereInput;
    some?: Prisma.CategoriaProdutoWhereInput;
    none?: Prisma.CategoriaProdutoWhereInput;
};
export type CategoriaProdutoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CategoriaProdutoOrderByRelevanceInput = {
    fields: Prisma.CategoriaProdutoOrderByRelevanceFieldEnum | Prisma.CategoriaProdutoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CategoriaProdutoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CategoriaProdutoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CategoriaProdutoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CategoriaProdutoScalarRelationFilter = {
    is?: Prisma.CategoriaProdutoWhereInput;
    isNot?: Prisma.CategoriaProdutoWhereInput;
};
export type CategoriaProdutoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutUserInput, Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput> | Prisma.CategoriaProdutoCreateWithoutUserInput[] | Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CategoriaProdutoCreateOrConnectWithoutUserInput | Prisma.CategoriaProdutoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CategoriaProdutoCreateManyUserInputEnvelope;
    connect?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
};
export type CategoriaProdutoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutUserInput, Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput> | Prisma.CategoriaProdutoCreateWithoutUserInput[] | Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CategoriaProdutoCreateOrConnectWithoutUserInput | Prisma.CategoriaProdutoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CategoriaProdutoCreateManyUserInputEnvelope;
    connect?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
};
export type CategoriaProdutoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutUserInput, Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput> | Prisma.CategoriaProdutoCreateWithoutUserInput[] | Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CategoriaProdutoCreateOrConnectWithoutUserInput | Prisma.CategoriaProdutoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CategoriaProdutoUpsertWithWhereUniqueWithoutUserInput | Prisma.CategoriaProdutoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CategoriaProdutoCreateManyUserInputEnvelope;
    set?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
    disconnect?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
    delete?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
    connect?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
    update?: Prisma.CategoriaProdutoUpdateWithWhereUniqueWithoutUserInput | Prisma.CategoriaProdutoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CategoriaProdutoUpdateManyWithWhereWithoutUserInput | Prisma.CategoriaProdutoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CategoriaProdutoScalarWhereInput | Prisma.CategoriaProdutoScalarWhereInput[];
};
export type CategoriaProdutoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutUserInput, Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput> | Prisma.CategoriaProdutoCreateWithoutUserInput[] | Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CategoriaProdutoCreateOrConnectWithoutUserInput | Prisma.CategoriaProdutoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CategoriaProdutoUpsertWithWhereUniqueWithoutUserInput | Prisma.CategoriaProdutoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CategoriaProdutoCreateManyUserInputEnvelope;
    set?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
    disconnect?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
    delete?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
    connect?: Prisma.CategoriaProdutoWhereUniqueInput | Prisma.CategoriaProdutoWhereUniqueInput[];
    update?: Prisma.CategoriaProdutoUpdateWithWhereUniqueWithoutUserInput | Prisma.CategoriaProdutoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CategoriaProdutoUpdateManyWithWhereWithoutUserInput | Prisma.CategoriaProdutoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CategoriaProdutoScalarWhereInput | Prisma.CategoriaProdutoScalarWhereInput[];
};
export type CategoriaProdutoCreateNestedOneWithoutProdutosInput = {
    create?: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutProdutosInput, Prisma.CategoriaProdutoUncheckedCreateWithoutProdutosInput>;
    connectOrCreate?: Prisma.CategoriaProdutoCreateOrConnectWithoutProdutosInput;
    connect?: Prisma.CategoriaProdutoWhereUniqueInput;
};
export type CategoriaProdutoUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutProdutosInput, Prisma.CategoriaProdutoUncheckedCreateWithoutProdutosInput>;
    connectOrCreate?: Prisma.CategoriaProdutoCreateOrConnectWithoutProdutosInput;
    upsert?: Prisma.CategoriaProdutoUpsertWithoutProdutosInput;
    connect?: Prisma.CategoriaProdutoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoriaProdutoUpdateToOneWithWhereWithoutProdutosInput, Prisma.CategoriaProdutoUpdateWithoutProdutosInput>, Prisma.CategoriaProdutoUncheckedUpdateWithoutProdutosInput>;
};
export type CategoriaProdutoCreateWithoutUserInput = {
    id?: string;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    produtos?: Prisma.ProdutoCreateNestedManyWithoutCategoriaProdutoInput;
};
export type CategoriaProdutoUncheckedCreateWithoutUserInput = {
    id?: string;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    produtos?: Prisma.ProdutoUncheckedCreateNestedManyWithoutCategoriaProdutoInput;
};
export type CategoriaProdutoCreateOrConnectWithoutUserInput = {
    where: Prisma.CategoriaProdutoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutUserInput, Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput>;
};
export type CategoriaProdutoCreateManyUserInputEnvelope = {
    data: Prisma.CategoriaProdutoCreateManyUserInput | Prisma.CategoriaProdutoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CategoriaProdutoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CategoriaProdutoWhereUniqueInput;
    update: Prisma.XOR<Prisma.CategoriaProdutoUpdateWithoutUserInput, Prisma.CategoriaProdutoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutUserInput, Prisma.CategoriaProdutoUncheckedCreateWithoutUserInput>;
};
export type CategoriaProdutoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CategoriaProdutoWhereUniqueInput;
    data: Prisma.XOR<Prisma.CategoriaProdutoUpdateWithoutUserInput, Prisma.CategoriaProdutoUncheckedUpdateWithoutUserInput>;
};
export type CategoriaProdutoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CategoriaProdutoScalarWhereInput;
    data: Prisma.XOR<Prisma.CategoriaProdutoUpdateManyMutationInput, Prisma.CategoriaProdutoUncheckedUpdateManyWithoutUserInput>;
};
export type CategoriaProdutoScalarWhereInput = {
    AND?: Prisma.CategoriaProdutoScalarWhereInput | Prisma.CategoriaProdutoScalarWhereInput[];
    OR?: Prisma.CategoriaProdutoScalarWhereInput[];
    NOT?: Prisma.CategoriaProdutoScalarWhereInput | Prisma.CategoriaProdutoScalarWhereInput[];
    id?: Prisma.StringFilter<"CategoriaProduto"> | string;
    nome?: Prisma.StringFilter<"CategoriaProduto"> | string;
    userId?: Prisma.StringFilter<"CategoriaProduto"> | string;
    active?: Prisma.BoolFilter<"CategoriaProduto"> | boolean;
    created_at?: Prisma.DateTimeFilter<"CategoriaProduto"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"CategoriaProduto"> | Date | string;
};
export type CategoriaProdutoCreateWithoutProdutosInput = {
    id?: string;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutCategoriaProdutosInput;
};
export type CategoriaProdutoUncheckedCreateWithoutProdutosInput = {
    id?: string;
    nome: string;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CategoriaProdutoCreateOrConnectWithoutProdutosInput = {
    where: Prisma.CategoriaProdutoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutProdutosInput, Prisma.CategoriaProdutoUncheckedCreateWithoutProdutosInput>;
};
export type CategoriaProdutoUpsertWithoutProdutosInput = {
    update: Prisma.XOR<Prisma.CategoriaProdutoUpdateWithoutProdutosInput, Prisma.CategoriaProdutoUncheckedUpdateWithoutProdutosInput>;
    create: Prisma.XOR<Prisma.CategoriaProdutoCreateWithoutProdutosInput, Prisma.CategoriaProdutoUncheckedCreateWithoutProdutosInput>;
    where?: Prisma.CategoriaProdutoWhereInput;
};
export type CategoriaProdutoUpdateToOneWithWhereWithoutProdutosInput = {
    where?: Prisma.CategoriaProdutoWhereInput;
    data: Prisma.XOR<Prisma.CategoriaProdutoUpdateWithoutProdutosInput, Prisma.CategoriaProdutoUncheckedUpdateWithoutProdutosInput>;
};
export type CategoriaProdutoUpdateWithoutProdutosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutCategoriaProdutosNestedInput;
};
export type CategoriaProdutoUncheckedUpdateWithoutProdutosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaProdutoCreateManyUserInput = {
    id?: string;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CategoriaProdutoUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produtos?: Prisma.ProdutoUpdateManyWithoutCategoriaProdutoNestedInput;
};
export type CategoriaProdutoUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produtos?: Prisma.ProdutoUncheckedUpdateManyWithoutCategoriaProdutoNestedInput;
};
export type CategoriaProdutoUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaProdutoCountOutputType = {
    produtos: number;
};
export type CategoriaProdutoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produtos?: boolean | CategoriaProdutoCountOutputTypeCountProdutosArgs;
};
export type CategoriaProdutoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriaProdutoCountOutputTypeCountProdutosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdutoWhereInput;
};
export type CategoriaProdutoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    userId?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    produtos?: boolean | Prisma.CategoriaProduto$produtosArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriaProdutoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categoriaProduto"]>;
export type CategoriaProdutoSelectScalar = {
    id?: boolean;
    nome?: boolean;
    userId?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type CategoriaProdutoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "userId" | "active" | "created_at" | "updated_at", ExtArgs["result"]["categoriaProduto"]>;
export type CategoriaProdutoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produtos?: boolean | Prisma.CategoriaProduto$produtosArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriaProdutoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CategoriaProdutoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CategoriaProduto";
    objects: {
        produtos: Prisma.$ProdutoPayload<ExtArgs>[];
        User: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        userId: string;
        active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["categoriaProduto"]>;
    composites: {};
};
export type CategoriaProdutoGetPayload<S extends boolean | null | undefined | CategoriaProdutoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload, S>;
export type CategoriaProdutoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategoriaProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: CategoriaProdutoCountAggregateInputType | true;
};
export interface CategoriaProdutoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CategoriaProduto'];
        meta: {
            name: 'CategoriaProduto';
        };
    };
    findUnique<T extends CategoriaProdutoFindUniqueArgs>(args: Prisma.SelectSubset<T, CategoriaProdutoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategoriaProdutoClient<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CategoriaProdutoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategoriaProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriaProdutoClient<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CategoriaProdutoFindFirstArgs>(args?: Prisma.SelectSubset<T, CategoriaProdutoFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategoriaProdutoClient<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CategoriaProdutoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategoriaProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriaProdutoClient<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CategoriaProdutoFindManyArgs>(args?: Prisma.SelectSubset<T, CategoriaProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CategoriaProdutoCreateArgs>(args: Prisma.SelectSubset<T, CategoriaProdutoCreateArgs<ExtArgs>>): Prisma.Prisma__CategoriaProdutoClient<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CategoriaProdutoCreateManyArgs>(args?: Prisma.SelectSubset<T, CategoriaProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends CategoriaProdutoDeleteArgs>(args: Prisma.SelectSubset<T, CategoriaProdutoDeleteArgs<ExtArgs>>): Prisma.Prisma__CategoriaProdutoClient<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CategoriaProdutoUpdateArgs>(args: Prisma.SelectSubset<T, CategoriaProdutoUpdateArgs<ExtArgs>>): Prisma.Prisma__CategoriaProdutoClient<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CategoriaProdutoDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategoriaProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CategoriaProdutoUpdateManyArgs>(args: Prisma.SelectSubset<T, CategoriaProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends CategoriaProdutoUpsertArgs>(args: Prisma.SelectSubset<T, CategoriaProdutoUpsertArgs<ExtArgs>>): Prisma.Prisma__CategoriaProdutoClient<runtime.Types.Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CategoriaProdutoCountArgs>(args?: Prisma.Subset<T, CategoriaProdutoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriaProdutoCountAggregateOutputType> : number>;
    aggregate<T extends CategoriaProdutoAggregateArgs>(args: Prisma.Subset<T, CategoriaProdutoAggregateArgs>): Prisma.PrismaPromise<GetCategoriaProdutoAggregateType<T>>;
    groupBy<T extends CategoriaProdutoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategoriaProdutoGroupByArgs['orderBy'];
    } : {
        orderBy?: CategoriaProdutoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategoriaProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CategoriaProdutoFieldRefs;
}
export interface Prisma__CategoriaProdutoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    produtos<T extends Prisma.CategoriaProduto$produtosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaProduto$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CategoriaProdutoFieldRefs {
    readonly id: Prisma.FieldRef<"CategoriaProduto", 'String'>;
    readonly nome: Prisma.FieldRef<"CategoriaProduto", 'String'>;
    readonly userId: Prisma.FieldRef<"CategoriaProduto", 'String'>;
    readonly active: Prisma.FieldRef<"CategoriaProduto", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"CategoriaProduto", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"CategoriaProduto", 'DateTime'>;
}
export type CategoriaProdutoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
    where: Prisma.CategoriaProdutoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CategoriaProdutoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
    where: Prisma.CategoriaProdutoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CategoriaProdutoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
    where?: Prisma.CategoriaProdutoWhereInput;
    orderBy?: Prisma.CategoriaProdutoOrderByWithRelationInput | Prisma.CategoriaProdutoOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaProdutoScalarFieldEnum | Prisma.CategoriaProdutoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CategoriaProdutoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
    where?: Prisma.CategoriaProdutoWhereInput;
    orderBy?: Prisma.CategoriaProdutoOrderByWithRelationInput | Prisma.CategoriaProdutoOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaProdutoScalarFieldEnum | Prisma.CategoriaProdutoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CategoriaProdutoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
    where?: Prisma.CategoriaProdutoWhereInput;
    orderBy?: Prisma.CategoriaProdutoOrderByWithRelationInput | Prisma.CategoriaProdutoOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaProdutoScalarFieldEnum | Prisma.CategoriaProdutoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CategoriaProdutoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaProdutoCreateInput, Prisma.CategoriaProdutoUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CategoriaProdutoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CategoriaProdutoCreateManyInput | Prisma.CategoriaProdutoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoriaProdutoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaProdutoUpdateInput, Prisma.CategoriaProdutoUncheckedUpdateInput>;
    where: Prisma.CategoriaProdutoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CategoriaProdutoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CategoriaProdutoUpdateManyMutationInput, Prisma.CategoriaProdutoUncheckedUpdateManyInput>;
    where?: Prisma.CategoriaProdutoWhereInput;
    limit?: number;
};
export type CategoriaProdutoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
    where: Prisma.CategoriaProdutoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaProdutoCreateInput, Prisma.CategoriaProdutoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CategoriaProdutoUpdateInput, Prisma.CategoriaProdutoUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CategoriaProdutoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
    where: Prisma.CategoriaProdutoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CategoriaProdutoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaProdutoWhereInput;
    limit?: number;
};
export type CategoriaProduto$produtosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProdutoSelect<ExtArgs> | null;
    omit?: Prisma.ProdutoOmit<ExtArgs> | null;
    include?: Prisma.ProdutoInclude<ExtArgs> | null;
    where?: Prisma.ProdutoWhereInput;
    orderBy?: Prisma.ProdutoOrderByWithRelationInput | Prisma.ProdutoOrderByWithRelationInput[];
    cursor?: Prisma.ProdutoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProdutoScalarFieldEnum | Prisma.ProdutoScalarFieldEnum[];
};
export type CategoriaProdutoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaProdutoSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaProdutoOmit<ExtArgs> | null;
    include?: Prisma.CategoriaProdutoInclude<ExtArgs> | null;
};
