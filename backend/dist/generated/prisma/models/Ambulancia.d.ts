import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AmbulanciaModel = runtime.Types.Result.DefaultSelection<Prisma.$AmbulanciaPayload>;
export type AggregateAmbulancia = {
    _count: AmbulanciaCountAggregateOutputType | null;
    _min: AmbulanciaMinAggregateOutputType | null;
    _max: AmbulanciaMaxAggregateOutputType | null;
};
export type AmbulanciaMinAggregateOutputType = {
    id: string | null;
    tipo: $Enums.TipoUnidade | null;
    nome: string | null;
    baseId: string | null;
    userId: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type AmbulanciaMaxAggregateOutputType = {
    id: string | null;
    tipo: $Enums.TipoUnidade | null;
    nome: string | null;
    baseId: string | null;
    userId: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type AmbulanciaCountAggregateOutputType = {
    id: number;
    tipo: number;
    nome: number;
    baseId: number;
    userId: number;
    active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type AmbulanciaMinAggregateInputType = {
    id?: true;
    tipo?: true;
    nome?: true;
    baseId?: true;
    userId?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type AmbulanciaMaxAggregateInputType = {
    id?: true;
    tipo?: true;
    nome?: true;
    baseId?: true;
    userId?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type AmbulanciaCountAggregateInputType = {
    id?: true;
    tipo?: true;
    nome?: true;
    baseId?: true;
    userId?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type AmbulanciaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AmbulanciaWhereInput;
    orderBy?: Prisma.AmbulanciaOrderByWithRelationInput | Prisma.AmbulanciaOrderByWithRelationInput[];
    cursor?: Prisma.AmbulanciaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AmbulanciaCountAggregateInputType;
    _min?: AmbulanciaMinAggregateInputType;
    _max?: AmbulanciaMaxAggregateInputType;
};
export type GetAmbulanciaAggregateType<T extends AmbulanciaAggregateArgs> = {
    [P in keyof T & keyof AggregateAmbulancia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAmbulancia[P]> : Prisma.GetScalarType<T[P], AggregateAmbulancia[P]>;
};
export type AmbulanciaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AmbulanciaWhereInput;
    orderBy?: Prisma.AmbulanciaOrderByWithAggregationInput | Prisma.AmbulanciaOrderByWithAggregationInput[];
    by: Prisma.AmbulanciaScalarFieldEnum[] | Prisma.AmbulanciaScalarFieldEnum;
    having?: Prisma.AmbulanciaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AmbulanciaCountAggregateInputType | true;
    _min?: AmbulanciaMinAggregateInputType;
    _max?: AmbulanciaMaxAggregateInputType;
};
export type AmbulanciaGroupByOutputType = {
    id: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    baseId: string;
    userId: string;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: AmbulanciaCountAggregateOutputType | null;
    _min: AmbulanciaMinAggregateOutputType | null;
    _max: AmbulanciaMaxAggregateOutputType | null;
};
export type GetAmbulanciaGroupByPayload<T extends AmbulanciaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AmbulanciaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AmbulanciaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AmbulanciaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AmbulanciaGroupByOutputType[P]>;
}>>;
export type AmbulanciaWhereInput = {
    AND?: Prisma.AmbulanciaWhereInput | Prisma.AmbulanciaWhereInput[];
    OR?: Prisma.AmbulanciaWhereInput[];
    NOT?: Prisma.AmbulanciaWhereInput | Prisma.AmbulanciaWhereInput[];
    id?: Prisma.StringFilter<"Ambulancia"> | string;
    tipo?: Prisma.EnumTipoUnidadeFilter<"Ambulancia"> | $Enums.TipoUnidade;
    nome?: Prisma.StringFilter<"Ambulancia"> | string;
    baseId?: Prisma.StringFilter<"Ambulancia"> | string;
    userId?: Prisma.StringFilter<"Ambulancia"> | string;
    active?: Prisma.BoolFilter<"Ambulancia"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Ambulancia"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Ambulancia"> | Date | string;
    Base?: Prisma.XOR<Prisma.BaseScalarRelationFilter, Prisma.BaseWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Requerimentos?: Prisma.RequerimentoListRelationFilter;
    receituarios?: Prisma.ReceituarioListRelationFilter;
};
export type AmbulanciaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    Base?: Prisma.BaseOrderByWithRelationInput;
    User?: Prisma.UserOrderByWithRelationInput;
    Requerimentos?: Prisma.RequerimentoOrderByRelationAggregateInput;
    receituarios?: Prisma.ReceituarioOrderByRelationAggregateInput;
    _relevance?: Prisma.AmbulanciaOrderByRelevanceInput;
};
export type AmbulanciaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tipo_nome_baseId?: Prisma.AmbulanciaTipoNomeBaseIdCompoundUniqueInput;
    AND?: Prisma.AmbulanciaWhereInput | Prisma.AmbulanciaWhereInput[];
    OR?: Prisma.AmbulanciaWhereInput[];
    NOT?: Prisma.AmbulanciaWhereInput | Prisma.AmbulanciaWhereInput[];
    tipo?: Prisma.EnumTipoUnidadeFilter<"Ambulancia"> | $Enums.TipoUnidade;
    nome?: Prisma.StringFilter<"Ambulancia"> | string;
    baseId?: Prisma.StringFilter<"Ambulancia"> | string;
    userId?: Prisma.StringFilter<"Ambulancia"> | string;
    active?: Prisma.BoolFilter<"Ambulancia"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Ambulancia"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Ambulancia"> | Date | string;
    Base?: Prisma.XOR<Prisma.BaseScalarRelationFilter, Prisma.BaseWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Requerimentos?: Prisma.RequerimentoListRelationFilter;
    receituarios?: Prisma.ReceituarioListRelationFilter;
}, "id" | "tipo_nome_baseId">;
export type AmbulanciaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.AmbulanciaCountOrderByAggregateInput;
    _max?: Prisma.AmbulanciaMaxOrderByAggregateInput;
    _min?: Prisma.AmbulanciaMinOrderByAggregateInput;
};
export type AmbulanciaScalarWhereWithAggregatesInput = {
    AND?: Prisma.AmbulanciaScalarWhereWithAggregatesInput | Prisma.AmbulanciaScalarWhereWithAggregatesInput[];
    OR?: Prisma.AmbulanciaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AmbulanciaScalarWhereWithAggregatesInput | Prisma.AmbulanciaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Ambulancia"> | string;
    tipo?: Prisma.EnumTipoUnidadeWithAggregatesFilter<"Ambulancia"> | $Enums.TipoUnidade;
    nome?: Prisma.StringWithAggregatesFilter<"Ambulancia"> | string;
    baseId?: Prisma.StringWithAggregatesFilter<"Ambulancia"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Ambulancia"> | string;
    active?: Prisma.BoolWithAggregatesFilter<"Ambulancia"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Ambulancia"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Ambulancia"> | Date | string;
};
export type AmbulanciaCreateInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Base: Prisma.BaseCreateNestedOneWithoutAmbulanciasInput;
    User: Prisma.UserCreateNestedOneWithoutAmbulanciasInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutAmbulanciaInput;
    receituarios?: Prisma.ReceituarioCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaUncheckedCreateInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    baseId: string;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutAmbulanciaInput;
    receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Base?: Prisma.BaseUpdateOneRequiredWithoutAmbulanciasNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutAmbulanciasNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutAmbulanciaNestedInput;
    receituarios?: Prisma.ReceituarioUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutAmbulanciaNestedInput;
    receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaCreateManyInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    baseId: string;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AmbulanciaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmbulanciaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmbulanciaListRelationFilter = {
    every?: Prisma.AmbulanciaWhereInput;
    some?: Prisma.AmbulanciaWhereInput;
    none?: Prisma.AmbulanciaWhereInput;
};
export type AmbulanciaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AmbulanciaOrderByRelevanceInput = {
    fields: Prisma.AmbulanciaOrderByRelevanceFieldEnum | Prisma.AmbulanciaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AmbulanciaTipoNomeBaseIdCompoundUniqueInput = {
    tipo: $Enums.TipoUnidade;
    nome: string;
    baseId: string;
};
export type AmbulanciaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type AmbulanciaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type AmbulanciaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type AmbulanciaNullableScalarRelationFilter = {
    is?: Prisma.AmbulanciaWhereInput | null;
    isNot?: Prisma.AmbulanciaWhereInput | null;
};
export type AmbulanciaCreateNestedManyWithoutBaseInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutBaseInput, Prisma.AmbulanciaUncheckedCreateWithoutBaseInput> | Prisma.AmbulanciaCreateWithoutBaseInput[] | Prisma.AmbulanciaUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutBaseInput | Prisma.AmbulanciaCreateOrConnectWithoutBaseInput[];
    createMany?: Prisma.AmbulanciaCreateManyBaseInputEnvelope;
    connect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
};
export type AmbulanciaUncheckedCreateNestedManyWithoutBaseInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutBaseInput, Prisma.AmbulanciaUncheckedCreateWithoutBaseInput> | Prisma.AmbulanciaCreateWithoutBaseInput[] | Prisma.AmbulanciaUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutBaseInput | Prisma.AmbulanciaCreateOrConnectWithoutBaseInput[];
    createMany?: Prisma.AmbulanciaCreateManyBaseInputEnvelope;
    connect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
};
export type AmbulanciaUpdateManyWithoutBaseNestedInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutBaseInput, Prisma.AmbulanciaUncheckedCreateWithoutBaseInput> | Prisma.AmbulanciaCreateWithoutBaseInput[] | Prisma.AmbulanciaUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutBaseInput | Prisma.AmbulanciaCreateOrConnectWithoutBaseInput[];
    upsert?: Prisma.AmbulanciaUpsertWithWhereUniqueWithoutBaseInput | Prisma.AmbulanciaUpsertWithWhereUniqueWithoutBaseInput[];
    createMany?: Prisma.AmbulanciaCreateManyBaseInputEnvelope;
    set?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    disconnect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    delete?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    connect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    update?: Prisma.AmbulanciaUpdateWithWhereUniqueWithoutBaseInput | Prisma.AmbulanciaUpdateWithWhereUniqueWithoutBaseInput[];
    updateMany?: Prisma.AmbulanciaUpdateManyWithWhereWithoutBaseInput | Prisma.AmbulanciaUpdateManyWithWhereWithoutBaseInput[];
    deleteMany?: Prisma.AmbulanciaScalarWhereInput | Prisma.AmbulanciaScalarWhereInput[];
};
export type AmbulanciaUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutBaseInput, Prisma.AmbulanciaUncheckedCreateWithoutBaseInput> | Prisma.AmbulanciaCreateWithoutBaseInput[] | Prisma.AmbulanciaUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutBaseInput | Prisma.AmbulanciaCreateOrConnectWithoutBaseInput[];
    upsert?: Prisma.AmbulanciaUpsertWithWhereUniqueWithoutBaseInput | Prisma.AmbulanciaUpsertWithWhereUniqueWithoutBaseInput[];
    createMany?: Prisma.AmbulanciaCreateManyBaseInputEnvelope;
    set?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    disconnect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    delete?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    connect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    update?: Prisma.AmbulanciaUpdateWithWhereUniqueWithoutBaseInput | Prisma.AmbulanciaUpdateWithWhereUniqueWithoutBaseInput[];
    updateMany?: Prisma.AmbulanciaUpdateManyWithWhereWithoutBaseInput | Prisma.AmbulanciaUpdateManyWithWhereWithoutBaseInput[];
    deleteMany?: Prisma.AmbulanciaScalarWhereInput | Prisma.AmbulanciaScalarWhereInput[];
};
export type AmbulanciaCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutUserInput, Prisma.AmbulanciaUncheckedCreateWithoutUserInput> | Prisma.AmbulanciaCreateWithoutUserInput[] | Prisma.AmbulanciaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutUserInput | Prisma.AmbulanciaCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AmbulanciaCreateManyUserInputEnvelope;
    connect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
};
export type AmbulanciaUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutUserInput, Prisma.AmbulanciaUncheckedCreateWithoutUserInput> | Prisma.AmbulanciaCreateWithoutUserInput[] | Prisma.AmbulanciaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutUserInput | Prisma.AmbulanciaCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AmbulanciaCreateManyUserInputEnvelope;
    connect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
};
export type AmbulanciaUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutUserInput, Prisma.AmbulanciaUncheckedCreateWithoutUserInput> | Prisma.AmbulanciaCreateWithoutUserInput[] | Prisma.AmbulanciaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutUserInput | Prisma.AmbulanciaCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AmbulanciaUpsertWithWhereUniqueWithoutUserInput | Prisma.AmbulanciaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AmbulanciaCreateManyUserInputEnvelope;
    set?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    disconnect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    delete?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    connect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    update?: Prisma.AmbulanciaUpdateWithWhereUniqueWithoutUserInput | Prisma.AmbulanciaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AmbulanciaUpdateManyWithWhereWithoutUserInput | Prisma.AmbulanciaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AmbulanciaScalarWhereInput | Prisma.AmbulanciaScalarWhereInput[];
};
export type AmbulanciaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutUserInput, Prisma.AmbulanciaUncheckedCreateWithoutUserInput> | Prisma.AmbulanciaCreateWithoutUserInput[] | Prisma.AmbulanciaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutUserInput | Prisma.AmbulanciaCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AmbulanciaUpsertWithWhereUniqueWithoutUserInput | Prisma.AmbulanciaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AmbulanciaCreateManyUserInputEnvelope;
    set?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    disconnect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    delete?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    connect?: Prisma.AmbulanciaWhereUniqueInput | Prisma.AmbulanciaWhereUniqueInput[];
    update?: Prisma.AmbulanciaUpdateWithWhereUniqueWithoutUserInput | Prisma.AmbulanciaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AmbulanciaUpdateManyWithWhereWithoutUserInput | Prisma.AmbulanciaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AmbulanciaScalarWhereInput | Prisma.AmbulanciaScalarWhereInput[];
};
export type EnumTipoUnidadeFieldUpdateOperationsInput = {
    set?: $Enums.TipoUnidade;
};
export type AmbulanciaCreateNestedOneWithoutRequerimentosInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutRequerimentosInput, Prisma.AmbulanciaUncheckedCreateWithoutRequerimentosInput>;
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutRequerimentosInput;
    connect?: Prisma.AmbulanciaWhereUniqueInput;
};
export type AmbulanciaUpdateOneWithoutRequerimentosNestedInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutRequerimentosInput, Prisma.AmbulanciaUncheckedCreateWithoutRequerimentosInput>;
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutRequerimentosInput;
    upsert?: Prisma.AmbulanciaUpsertWithoutRequerimentosInput;
    disconnect?: Prisma.AmbulanciaWhereInput | boolean;
    delete?: Prisma.AmbulanciaWhereInput | boolean;
    connect?: Prisma.AmbulanciaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AmbulanciaUpdateToOneWithWhereWithoutRequerimentosInput, Prisma.AmbulanciaUpdateWithoutRequerimentosInput>, Prisma.AmbulanciaUncheckedUpdateWithoutRequerimentosInput>;
};
export type AmbulanciaCreateNestedOneWithoutReceituariosInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutReceituariosInput, Prisma.AmbulanciaUncheckedCreateWithoutReceituariosInput>;
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutReceituariosInput;
    connect?: Prisma.AmbulanciaWhereUniqueInput;
};
export type AmbulanciaUpdateOneWithoutReceituariosNestedInput = {
    create?: Prisma.XOR<Prisma.AmbulanciaCreateWithoutReceituariosInput, Prisma.AmbulanciaUncheckedCreateWithoutReceituariosInput>;
    connectOrCreate?: Prisma.AmbulanciaCreateOrConnectWithoutReceituariosInput;
    upsert?: Prisma.AmbulanciaUpsertWithoutReceituariosInput;
    disconnect?: Prisma.AmbulanciaWhereInput | boolean;
    delete?: Prisma.AmbulanciaWhereInput | boolean;
    connect?: Prisma.AmbulanciaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AmbulanciaUpdateToOneWithWhereWithoutReceituariosInput, Prisma.AmbulanciaUpdateWithoutReceituariosInput>, Prisma.AmbulanciaUncheckedUpdateWithoutReceituariosInput>;
};
export type AmbulanciaCreateWithoutBaseInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutAmbulanciasInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutAmbulanciaInput;
    receituarios?: Prisma.ReceituarioCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaUncheckedCreateWithoutBaseInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutAmbulanciaInput;
    receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaCreateOrConnectWithoutBaseInput = {
    where: Prisma.AmbulanciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AmbulanciaCreateWithoutBaseInput, Prisma.AmbulanciaUncheckedCreateWithoutBaseInput>;
};
export type AmbulanciaCreateManyBaseInputEnvelope = {
    data: Prisma.AmbulanciaCreateManyBaseInput | Prisma.AmbulanciaCreateManyBaseInput[];
    skipDuplicates?: boolean;
};
export type AmbulanciaUpsertWithWhereUniqueWithoutBaseInput = {
    where: Prisma.AmbulanciaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AmbulanciaUpdateWithoutBaseInput, Prisma.AmbulanciaUncheckedUpdateWithoutBaseInput>;
    create: Prisma.XOR<Prisma.AmbulanciaCreateWithoutBaseInput, Prisma.AmbulanciaUncheckedCreateWithoutBaseInput>;
};
export type AmbulanciaUpdateWithWhereUniqueWithoutBaseInput = {
    where: Prisma.AmbulanciaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AmbulanciaUpdateWithoutBaseInput, Prisma.AmbulanciaUncheckedUpdateWithoutBaseInput>;
};
export type AmbulanciaUpdateManyWithWhereWithoutBaseInput = {
    where: Prisma.AmbulanciaScalarWhereInput;
    data: Prisma.XOR<Prisma.AmbulanciaUpdateManyMutationInput, Prisma.AmbulanciaUncheckedUpdateManyWithoutBaseInput>;
};
export type AmbulanciaScalarWhereInput = {
    AND?: Prisma.AmbulanciaScalarWhereInput | Prisma.AmbulanciaScalarWhereInput[];
    OR?: Prisma.AmbulanciaScalarWhereInput[];
    NOT?: Prisma.AmbulanciaScalarWhereInput | Prisma.AmbulanciaScalarWhereInput[];
    id?: Prisma.StringFilter<"Ambulancia"> | string;
    tipo?: Prisma.EnumTipoUnidadeFilter<"Ambulancia"> | $Enums.TipoUnidade;
    nome?: Prisma.StringFilter<"Ambulancia"> | string;
    baseId?: Prisma.StringFilter<"Ambulancia"> | string;
    userId?: Prisma.StringFilter<"Ambulancia"> | string;
    active?: Prisma.BoolFilter<"Ambulancia"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Ambulancia"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Ambulancia"> | Date | string;
};
export type AmbulanciaCreateWithoutUserInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Base: Prisma.BaseCreateNestedOneWithoutAmbulanciasInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutAmbulanciaInput;
    receituarios?: Prisma.ReceituarioCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaUncheckedCreateWithoutUserInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    baseId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutAmbulanciaInput;
    receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaCreateOrConnectWithoutUserInput = {
    where: Prisma.AmbulanciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AmbulanciaCreateWithoutUserInput, Prisma.AmbulanciaUncheckedCreateWithoutUserInput>;
};
export type AmbulanciaCreateManyUserInputEnvelope = {
    data: Prisma.AmbulanciaCreateManyUserInput | Prisma.AmbulanciaCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AmbulanciaUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AmbulanciaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AmbulanciaUpdateWithoutUserInput, Prisma.AmbulanciaUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AmbulanciaCreateWithoutUserInput, Prisma.AmbulanciaUncheckedCreateWithoutUserInput>;
};
export type AmbulanciaUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AmbulanciaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AmbulanciaUpdateWithoutUserInput, Prisma.AmbulanciaUncheckedUpdateWithoutUserInput>;
};
export type AmbulanciaUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AmbulanciaScalarWhereInput;
    data: Prisma.XOR<Prisma.AmbulanciaUpdateManyMutationInput, Prisma.AmbulanciaUncheckedUpdateManyWithoutUserInput>;
};
export type AmbulanciaCreateWithoutRequerimentosInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Base: Prisma.BaseCreateNestedOneWithoutAmbulanciasInput;
    User: Prisma.UserCreateNestedOneWithoutAmbulanciasInput;
    receituarios?: Prisma.ReceituarioCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaUncheckedCreateWithoutRequerimentosInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    baseId: string;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaCreateOrConnectWithoutRequerimentosInput = {
    where: Prisma.AmbulanciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AmbulanciaCreateWithoutRequerimentosInput, Prisma.AmbulanciaUncheckedCreateWithoutRequerimentosInput>;
};
export type AmbulanciaUpsertWithoutRequerimentosInput = {
    update: Prisma.XOR<Prisma.AmbulanciaUpdateWithoutRequerimentosInput, Prisma.AmbulanciaUncheckedUpdateWithoutRequerimentosInput>;
    create: Prisma.XOR<Prisma.AmbulanciaCreateWithoutRequerimentosInput, Prisma.AmbulanciaUncheckedCreateWithoutRequerimentosInput>;
    where?: Prisma.AmbulanciaWhereInput;
};
export type AmbulanciaUpdateToOneWithWhereWithoutRequerimentosInput = {
    where?: Prisma.AmbulanciaWhereInput;
    data: Prisma.XOR<Prisma.AmbulanciaUpdateWithoutRequerimentosInput, Prisma.AmbulanciaUncheckedUpdateWithoutRequerimentosInput>;
};
export type AmbulanciaUpdateWithoutRequerimentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Base?: Prisma.BaseUpdateOneRequiredWithoutAmbulanciasNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutAmbulanciasNestedInput;
    receituarios?: Prisma.ReceituarioUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaUncheckedUpdateWithoutRequerimentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaCreateWithoutReceituariosInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Base: Prisma.BaseCreateNestedOneWithoutAmbulanciasInput;
    User: Prisma.UserCreateNestedOneWithoutAmbulanciasInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaUncheckedCreateWithoutReceituariosInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    baseId: string;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutAmbulanciaInput;
};
export type AmbulanciaCreateOrConnectWithoutReceituariosInput = {
    where: Prisma.AmbulanciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AmbulanciaCreateWithoutReceituariosInput, Prisma.AmbulanciaUncheckedCreateWithoutReceituariosInput>;
};
export type AmbulanciaUpsertWithoutReceituariosInput = {
    update: Prisma.XOR<Prisma.AmbulanciaUpdateWithoutReceituariosInput, Prisma.AmbulanciaUncheckedUpdateWithoutReceituariosInput>;
    create: Prisma.XOR<Prisma.AmbulanciaCreateWithoutReceituariosInput, Prisma.AmbulanciaUncheckedCreateWithoutReceituariosInput>;
    where?: Prisma.AmbulanciaWhereInput;
};
export type AmbulanciaUpdateToOneWithWhereWithoutReceituariosInput = {
    where?: Prisma.AmbulanciaWhereInput;
    data: Prisma.XOR<Prisma.AmbulanciaUpdateWithoutReceituariosInput, Prisma.AmbulanciaUncheckedUpdateWithoutReceituariosInput>;
};
export type AmbulanciaUpdateWithoutReceituariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Base?: Prisma.BaseUpdateOneRequiredWithoutAmbulanciasNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutAmbulanciasNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaUncheckedUpdateWithoutReceituariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaCreateManyBaseInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AmbulanciaUpdateWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutAmbulanciasNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutAmbulanciaNestedInput;
    receituarios?: Prisma.ReceituarioUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaUncheckedUpdateWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutAmbulanciaNestedInput;
    receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaUncheckedUpdateManyWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmbulanciaCreateManyUserInput = {
    id?: string;
    tipo: $Enums.TipoUnidade;
    nome: string;
    baseId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AmbulanciaUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Base?: Prisma.BaseUpdateOneRequiredWithoutAmbulanciasNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutAmbulanciaNestedInput;
    receituarios?: Prisma.ReceituarioUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutAmbulanciaNestedInput;
    receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutAmbulanciaNestedInput;
};
export type AmbulanciaUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoUnidadeFieldUpdateOperationsInput | $Enums.TipoUnidade;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmbulanciaCountOutputType = {
    Requerimentos: number;
    receituarios: number;
};
export type AmbulanciaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Requerimentos?: boolean | AmbulanciaCountOutputTypeCountRequerimentosArgs;
    receituarios?: boolean | AmbulanciaCountOutputTypeCountReceituariosArgs;
};
export type AmbulanciaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaCountOutputTypeSelect<ExtArgs> | null;
};
export type AmbulanciaCountOutputTypeCountRequerimentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoWhereInput;
};
export type AmbulanciaCountOutputTypeCountReceituariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioWhereInput;
};
export type AmbulanciaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    nome?: boolean;
    baseId?: boolean;
    userId?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    Base?: boolean | Prisma.BaseDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Requerimentos?: boolean | Prisma.Ambulancia$RequerimentosArgs<ExtArgs>;
    receituarios?: boolean | Prisma.Ambulancia$receituariosArgs<ExtArgs>;
    _count?: boolean | Prisma.AmbulanciaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ambulancia"]>;
export type AmbulanciaSelectScalar = {
    id?: boolean;
    tipo?: boolean;
    nome?: boolean;
    baseId?: boolean;
    userId?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type AmbulanciaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tipo" | "nome" | "baseId" | "userId" | "active" | "created_at" | "updated_at", ExtArgs["result"]["ambulancia"]>;
export type AmbulanciaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Base?: boolean | Prisma.BaseDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Requerimentos?: boolean | Prisma.Ambulancia$RequerimentosArgs<ExtArgs>;
    receituarios?: boolean | Prisma.Ambulancia$receituariosArgs<ExtArgs>;
    _count?: boolean | Prisma.AmbulanciaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $AmbulanciaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ambulancia";
    objects: {
        Base: Prisma.$BasePayload<ExtArgs>;
        User: Prisma.$UserPayload<ExtArgs>;
        Requerimentos: Prisma.$RequerimentoPayload<ExtArgs>[];
        receituarios: Prisma.$ReceituarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tipo: $Enums.TipoUnidade;
        nome: string;
        baseId: string;
        userId: string;
        active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["ambulancia"]>;
    composites: {};
};
export type AmbulanciaGetPayload<S extends boolean | null | undefined | AmbulanciaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload, S>;
export type AmbulanciaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AmbulanciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: AmbulanciaCountAggregateInputType | true;
};
export interface AmbulanciaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ambulancia'];
        meta: {
            name: 'Ambulancia';
        };
    };
    findUnique<T extends AmbulanciaFindUniqueArgs>(args: Prisma.SelectSubset<T, AmbulanciaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AmbulanciaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AmbulanciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AmbulanciaFindFirstArgs>(args?: Prisma.SelectSubset<T, AmbulanciaFindFirstArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AmbulanciaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AmbulanciaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AmbulanciaFindManyArgs>(args?: Prisma.SelectSubset<T, AmbulanciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AmbulanciaCreateArgs>(args: Prisma.SelectSubset<T, AmbulanciaCreateArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AmbulanciaCreateManyArgs>(args?: Prisma.SelectSubset<T, AmbulanciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends AmbulanciaDeleteArgs>(args: Prisma.SelectSubset<T, AmbulanciaDeleteArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AmbulanciaUpdateArgs>(args: Prisma.SelectSubset<T, AmbulanciaUpdateArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AmbulanciaDeleteManyArgs>(args?: Prisma.SelectSubset<T, AmbulanciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AmbulanciaUpdateManyArgs>(args: Prisma.SelectSubset<T, AmbulanciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends AmbulanciaUpsertArgs>(args: Prisma.SelectSubset<T, AmbulanciaUpsertArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AmbulanciaCountArgs>(args?: Prisma.Subset<T, AmbulanciaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AmbulanciaCountAggregateOutputType> : number>;
    aggregate<T extends AmbulanciaAggregateArgs>(args: Prisma.Subset<T, AmbulanciaAggregateArgs>): Prisma.PrismaPromise<GetAmbulanciaAggregateType<T>>;
    groupBy<T extends AmbulanciaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AmbulanciaGroupByArgs['orderBy'];
    } : {
        orderBy?: AmbulanciaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AmbulanciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmbulanciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AmbulanciaFieldRefs;
}
export interface Prisma__AmbulanciaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Base<T extends Prisma.BaseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BaseDefaultArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Requerimentos<T extends Prisma.Ambulancia$RequerimentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ambulancia$RequerimentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    receituarios<T extends Prisma.Ambulancia$receituariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ambulancia$receituariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AmbulanciaFieldRefs {
    readonly id: Prisma.FieldRef<"Ambulancia", 'String'>;
    readonly tipo: Prisma.FieldRef<"Ambulancia", 'TipoUnidade'>;
    readonly nome: Prisma.FieldRef<"Ambulancia", 'String'>;
    readonly baseId: Prisma.FieldRef<"Ambulancia", 'String'>;
    readonly userId: Prisma.FieldRef<"Ambulancia", 'String'>;
    readonly active: Prisma.FieldRef<"Ambulancia", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"Ambulancia", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Ambulancia", 'DateTime'>;
}
export type AmbulanciaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where: Prisma.AmbulanciaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type AmbulanciaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where: Prisma.AmbulanciaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type AmbulanciaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where?: Prisma.AmbulanciaWhereInput;
    orderBy?: Prisma.AmbulanciaOrderByWithRelationInput | Prisma.AmbulanciaOrderByWithRelationInput[];
    cursor?: Prisma.AmbulanciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AmbulanciaScalarFieldEnum | Prisma.AmbulanciaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type AmbulanciaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where?: Prisma.AmbulanciaWhereInput;
    orderBy?: Prisma.AmbulanciaOrderByWithRelationInput | Prisma.AmbulanciaOrderByWithRelationInput[];
    cursor?: Prisma.AmbulanciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AmbulanciaScalarFieldEnum | Prisma.AmbulanciaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type AmbulanciaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where?: Prisma.AmbulanciaWhereInput;
    orderBy?: Prisma.AmbulanciaOrderByWithRelationInput | Prisma.AmbulanciaOrderByWithRelationInput[];
    cursor?: Prisma.AmbulanciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AmbulanciaScalarFieldEnum | Prisma.AmbulanciaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type AmbulanciaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AmbulanciaCreateInput, Prisma.AmbulanciaUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type AmbulanciaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AmbulanciaCreateManyInput | Prisma.AmbulanciaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AmbulanciaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AmbulanciaUpdateInput, Prisma.AmbulanciaUncheckedUpdateInput>;
    where: Prisma.AmbulanciaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type AmbulanciaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AmbulanciaUpdateManyMutationInput, Prisma.AmbulanciaUncheckedUpdateManyInput>;
    where?: Prisma.AmbulanciaWhereInput;
    limit?: number;
};
export type AmbulanciaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where: Prisma.AmbulanciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AmbulanciaCreateInput, Prisma.AmbulanciaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AmbulanciaUpdateInput, Prisma.AmbulanciaUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type AmbulanciaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where: Prisma.AmbulanciaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type AmbulanciaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AmbulanciaWhereInput;
    limit?: number;
};
export type Ambulancia$RequerimentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoWhereInput;
    orderBy?: Prisma.RequerimentoOrderByWithRelationInput | Prisma.RequerimentoOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoScalarFieldEnum | Prisma.RequerimentoScalarFieldEnum[];
};
export type Ambulancia$receituariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    where?: Prisma.ReceituarioWhereInput;
    orderBy?: Prisma.ReceituarioOrderByWithRelationInput | Prisma.ReceituarioOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceituarioScalarFieldEnum | Prisma.ReceituarioScalarFieldEnum[];
};
export type AmbulanciaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
};
