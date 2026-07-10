import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CargoModel = runtime.Types.Result.DefaultSelection<Prisma.$CargoPayload>;
export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null;
    _min: CargoMinAggregateOutputType | null;
    _max: CargoMaxAggregateOutputType | null;
};
export type CargoMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    nomeVisivel: string | null;
    setor: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CargoMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    nomeVisivel: string | null;
    setor: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CargoCountAggregateOutputType = {
    id: number;
    nome: number;
    nomeVisivel: number;
    setor: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CargoMinAggregateInputType = {
    id?: true;
    nome?: true;
    nomeVisivel?: true;
    setor?: true;
    created_at?: true;
    updated_at?: true;
};
export type CargoMaxAggregateInputType = {
    id?: true;
    nome?: true;
    nomeVisivel?: true;
    setor?: true;
    created_at?: true;
    updated_at?: true;
};
export type CargoCountAggregateInputType = {
    id?: true;
    nome?: true;
    nomeVisivel?: true;
    setor?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CargoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CargoWhereInput;
    orderBy?: Prisma.CargoOrderByWithRelationInput | Prisma.CargoOrderByWithRelationInput[];
    cursor?: Prisma.CargoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CargoCountAggregateInputType;
    _min?: CargoMinAggregateInputType;
    _max?: CargoMaxAggregateInputType;
};
export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
    [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCargo[P]> : Prisma.GetScalarType<T[P], AggregateCargo[P]>;
};
export type CargoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CargoWhereInput;
    orderBy?: Prisma.CargoOrderByWithAggregationInput | Prisma.CargoOrderByWithAggregationInput[];
    by: Prisma.CargoScalarFieldEnum[] | Prisma.CargoScalarFieldEnum;
    having?: Prisma.CargoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CargoCountAggregateInputType | true;
    _min?: CargoMinAggregateInputType;
    _max?: CargoMaxAggregateInputType;
};
export type CargoGroupByOutputType = {
    id: string;
    nome: string;
    nomeVisivel: string;
    setor: string;
    created_at: Date;
    updated_at: Date;
    _count: CargoCountAggregateOutputType | null;
    _min: CargoMinAggregateOutputType | null;
    _max: CargoMaxAggregateOutputType | null;
};
export type GetCargoGroupByPayload<T extends CargoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CargoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CargoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CargoGroupByOutputType[P]>;
}>>;
export type CargoWhereInput = {
    AND?: Prisma.CargoWhereInput | Prisma.CargoWhereInput[];
    OR?: Prisma.CargoWhereInput[];
    NOT?: Prisma.CargoWhereInput | Prisma.CargoWhereInput[];
    id?: Prisma.StringFilter<"Cargo"> | string;
    nome?: Prisma.StringFilter<"Cargo"> | string;
    nomeVisivel?: Prisma.StringFilter<"Cargo"> | string;
    setor?: Prisma.StringFilter<"Cargo"> | string;
    created_at?: Prisma.DateTimeFilter<"Cargo"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Cargo"> | Date | string;
    Users?: Prisma.UserListRelationFilter;
    Setor?: Prisma.XOR<Prisma.SetorScalarRelationFilter, Prisma.SetorWhereInput>;
    requerimentos?: Prisma.RequerimentoListRelationFilter;
};
export type CargoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    Users?: Prisma.UserOrderByRelationAggregateInput;
    Setor?: Prisma.SetorOrderByWithRelationInput;
    requerimentos?: Prisma.RequerimentoOrderByRelationAggregateInput;
    _relevance?: Prisma.CargoOrderByRelevanceInput;
};
export type CargoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nome?: string;
    nomeVisivel?: string;
    AND?: Prisma.CargoWhereInput | Prisma.CargoWhereInput[];
    OR?: Prisma.CargoWhereInput[];
    NOT?: Prisma.CargoWhereInput | Prisma.CargoWhereInput[];
    setor?: Prisma.StringFilter<"Cargo"> | string;
    created_at?: Prisma.DateTimeFilter<"Cargo"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Cargo"> | Date | string;
    Users?: Prisma.UserListRelationFilter;
    Setor?: Prisma.XOR<Prisma.SetorScalarRelationFilter, Prisma.SetorWhereInput>;
    requerimentos?: Prisma.RequerimentoListRelationFilter;
}, "id" | "nome" | "nomeVisivel">;
export type CargoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.CargoCountOrderByAggregateInput;
    _max?: Prisma.CargoMaxOrderByAggregateInput;
    _min?: Prisma.CargoMinOrderByAggregateInput;
};
export type CargoScalarWhereWithAggregatesInput = {
    AND?: Prisma.CargoScalarWhereWithAggregatesInput | Prisma.CargoScalarWhereWithAggregatesInput[];
    OR?: Prisma.CargoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CargoScalarWhereWithAggregatesInput | Prisma.CargoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Cargo"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Cargo"> | string;
    nomeVisivel?: Prisma.StringWithAggregatesFilter<"Cargo"> | string;
    setor?: Prisma.StringWithAggregatesFilter<"Cargo"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Cargo"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Cargo"> | Date | string;
};
export type CargoCreateInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserCreateNestedManyWithoutCargoInput;
    Setor: Prisma.SetorCreateNestedOneWithoutCargosInput;
    requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutCargoInput;
};
export type CargoUncheckedCreateInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    setor: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserUncheckedCreateNestedManyWithoutCargoInput;
    requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutCargoInput;
};
export type CargoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUpdateManyWithoutCargoNestedInput;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutCargosNestedInput;
    requerimentos?: Prisma.RequerimentoUpdateManyWithoutCargoNestedInput;
};
export type CargoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUncheckedUpdateManyWithoutCargoNestedInput;
    requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutCargoNestedInput;
};
export type CargoCreateManyInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    setor: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CargoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CargoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CargoListRelationFilter = {
    every?: Prisma.CargoWhereInput;
    some?: Prisma.CargoWhereInput;
    none?: Prisma.CargoWhereInput;
};
export type CargoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CargoOrderByRelevanceInput = {
    fields: Prisma.CargoOrderByRelevanceFieldEnum | Prisma.CargoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CargoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CargoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CargoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CargoScalarRelationFilter = {
    is?: Prisma.CargoWhereInput;
    isNot?: Prisma.CargoWhereInput;
};
export type CargoCreateNestedManyWithoutSetorInput = {
    create?: Prisma.XOR<Prisma.CargoCreateWithoutSetorInput, Prisma.CargoUncheckedCreateWithoutSetorInput> | Prisma.CargoCreateWithoutSetorInput[] | Prisma.CargoUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.CargoCreateOrConnectWithoutSetorInput | Prisma.CargoCreateOrConnectWithoutSetorInput[];
    createMany?: Prisma.CargoCreateManySetorInputEnvelope;
    connect?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
};
export type CargoUncheckedCreateNestedManyWithoutSetorInput = {
    create?: Prisma.XOR<Prisma.CargoCreateWithoutSetorInput, Prisma.CargoUncheckedCreateWithoutSetorInput> | Prisma.CargoCreateWithoutSetorInput[] | Prisma.CargoUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.CargoCreateOrConnectWithoutSetorInput | Prisma.CargoCreateOrConnectWithoutSetorInput[];
    createMany?: Prisma.CargoCreateManySetorInputEnvelope;
    connect?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
};
export type CargoUpdateManyWithoutSetorNestedInput = {
    create?: Prisma.XOR<Prisma.CargoCreateWithoutSetorInput, Prisma.CargoUncheckedCreateWithoutSetorInput> | Prisma.CargoCreateWithoutSetorInput[] | Prisma.CargoUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.CargoCreateOrConnectWithoutSetorInput | Prisma.CargoCreateOrConnectWithoutSetorInput[];
    upsert?: Prisma.CargoUpsertWithWhereUniqueWithoutSetorInput | Prisma.CargoUpsertWithWhereUniqueWithoutSetorInput[];
    createMany?: Prisma.CargoCreateManySetorInputEnvelope;
    set?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
    disconnect?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
    delete?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
    connect?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
    update?: Prisma.CargoUpdateWithWhereUniqueWithoutSetorInput | Prisma.CargoUpdateWithWhereUniqueWithoutSetorInput[];
    updateMany?: Prisma.CargoUpdateManyWithWhereWithoutSetorInput | Prisma.CargoUpdateManyWithWhereWithoutSetorInput[];
    deleteMany?: Prisma.CargoScalarWhereInput | Prisma.CargoScalarWhereInput[];
};
export type CargoUncheckedUpdateManyWithoutSetorNestedInput = {
    create?: Prisma.XOR<Prisma.CargoCreateWithoutSetorInput, Prisma.CargoUncheckedCreateWithoutSetorInput> | Prisma.CargoCreateWithoutSetorInput[] | Prisma.CargoUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.CargoCreateOrConnectWithoutSetorInput | Prisma.CargoCreateOrConnectWithoutSetorInput[];
    upsert?: Prisma.CargoUpsertWithWhereUniqueWithoutSetorInput | Prisma.CargoUpsertWithWhereUniqueWithoutSetorInput[];
    createMany?: Prisma.CargoCreateManySetorInputEnvelope;
    set?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
    disconnect?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
    delete?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
    connect?: Prisma.CargoWhereUniqueInput | Prisma.CargoWhereUniqueInput[];
    update?: Prisma.CargoUpdateWithWhereUniqueWithoutSetorInput | Prisma.CargoUpdateWithWhereUniqueWithoutSetorInput[];
    updateMany?: Prisma.CargoUpdateManyWithWhereWithoutSetorInput | Prisma.CargoUpdateManyWithWhereWithoutSetorInput[];
    deleteMany?: Prisma.CargoScalarWhereInput | Prisma.CargoScalarWhereInput[];
};
export type CargoCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.CargoCreateWithoutUsersInput, Prisma.CargoUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.CargoCreateOrConnectWithoutUsersInput;
    connect?: Prisma.CargoWhereUniqueInput;
};
export type CargoUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.CargoCreateWithoutUsersInput, Prisma.CargoUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.CargoCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.CargoUpsertWithoutUsersInput;
    connect?: Prisma.CargoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CargoUpdateToOneWithWhereWithoutUsersInput, Prisma.CargoUpdateWithoutUsersInput>, Prisma.CargoUncheckedUpdateWithoutUsersInput>;
};
export type CargoCreateNestedOneWithoutRequerimentosInput = {
    create?: Prisma.XOR<Prisma.CargoCreateWithoutRequerimentosInput, Prisma.CargoUncheckedCreateWithoutRequerimentosInput>;
    connectOrCreate?: Prisma.CargoCreateOrConnectWithoutRequerimentosInput;
    connect?: Prisma.CargoWhereUniqueInput;
};
export type CargoUpdateOneRequiredWithoutRequerimentosNestedInput = {
    create?: Prisma.XOR<Prisma.CargoCreateWithoutRequerimentosInput, Prisma.CargoUncheckedCreateWithoutRequerimentosInput>;
    connectOrCreate?: Prisma.CargoCreateOrConnectWithoutRequerimentosInput;
    upsert?: Prisma.CargoUpsertWithoutRequerimentosInput;
    connect?: Prisma.CargoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CargoUpdateToOneWithWhereWithoutRequerimentosInput, Prisma.CargoUpdateWithoutRequerimentosInput>, Prisma.CargoUncheckedUpdateWithoutRequerimentosInput>;
};
export type CargoCreateWithoutSetorInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserCreateNestedManyWithoutCargoInput;
    requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutCargoInput;
};
export type CargoUncheckedCreateWithoutSetorInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserUncheckedCreateNestedManyWithoutCargoInput;
    requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutCargoInput;
};
export type CargoCreateOrConnectWithoutSetorInput = {
    where: Prisma.CargoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CargoCreateWithoutSetorInput, Prisma.CargoUncheckedCreateWithoutSetorInput>;
};
export type CargoCreateManySetorInputEnvelope = {
    data: Prisma.CargoCreateManySetorInput | Prisma.CargoCreateManySetorInput[];
    skipDuplicates?: boolean;
};
export type CargoUpsertWithWhereUniqueWithoutSetorInput = {
    where: Prisma.CargoWhereUniqueInput;
    update: Prisma.XOR<Prisma.CargoUpdateWithoutSetorInput, Prisma.CargoUncheckedUpdateWithoutSetorInput>;
    create: Prisma.XOR<Prisma.CargoCreateWithoutSetorInput, Prisma.CargoUncheckedCreateWithoutSetorInput>;
};
export type CargoUpdateWithWhereUniqueWithoutSetorInput = {
    where: Prisma.CargoWhereUniqueInput;
    data: Prisma.XOR<Prisma.CargoUpdateWithoutSetorInput, Prisma.CargoUncheckedUpdateWithoutSetorInput>;
};
export type CargoUpdateManyWithWhereWithoutSetorInput = {
    where: Prisma.CargoScalarWhereInput;
    data: Prisma.XOR<Prisma.CargoUpdateManyMutationInput, Prisma.CargoUncheckedUpdateManyWithoutSetorInput>;
};
export type CargoScalarWhereInput = {
    AND?: Prisma.CargoScalarWhereInput | Prisma.CargoScalarWhereInput[];
    OR?: Prisma.CargoScalarWhereInput[];
    NOT?: Prisma.CargoScalarWhereInput | Prisma.CargoScalarWhereInput[];
    id?: Prisma.StringFilter<"Cargo"> | string;
    nome?: Prisma.StringFilter<"Cargo"> | string;
    nomeVisivel?: Prisma.StringFilter<"Cargo"> | string;
    setor?: Prisma.StringFilter<"Cargo"> | string;
    created_at?: Prisma.DateTimeFilter<"Cargo"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Cargo"> | Date | string;
};
export type CargoCreateWithoutUsersInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Setor: Prisma.SetorCreateNestedOneWithoutCargosInput;
    requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutCargoInput;
};
export type CargoUncheckedCreateWithoutUsersInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    setor: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutCargoInput;
};
export type CargoCreateOrConnectWithoutUsersInput = {
    where: Prisma.CargoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CargoCreateWithoutUsersInput, Prisma.CargoUncheckedCreateWithoutUsersInput>;
};
export type CargoUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.CargoUpdateWithoutUsersInput, Prisma.CargoUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.CargoCreateWithoutUsersInput, Prisma.CargoUncheckedCreateWithoutUsersInput>;
    where?: Prisma.CargoWhereInput;
};
export type CargoUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.CargoWhereInput;
    data: Prisma.XOR<Prisma.CargoUpdateWithoutUsersInput, Prisma.CargoUncheckedUpdateWithoutUsersInput>;
};
export type CargoUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutCargosNestedInput;
    requerimentos?: Prisma.RequerimentoUpdateManyWithoutCargoNestedInput;
};
export type CargoUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutCargoNestedInput;
};
export type CargoCreateWithoutRequerimentosInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserCreateNestedManyWithoutCargoInput;
    Setor: Prisma.SetorCreateNestedOneWithoutCargosInput;
};
export type CargoUncheckedCreateWithoutRequerimentosInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    setor: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserUncheckedCreateNestedManyWithoutCargoInput;
};
export type CargoCreateOrConnectWithoutRequerimentosInput = {
    where: Prisma.CargoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CargoCreateWithoutRequerimentosInput, Prisma.CargoUncheckedCreateWithoutRequerimentosInput>;
};
export type CargoUpsertWithoutRequerimentosInput = {
    update: Prisma.XOR<Prisma.CargoUpdateWithoutRequerimentosInput, Prisma.CargoUncheckedUpdateWithoutRequerimentosInput>;
    create: Prisma.XOR<Prisma.CargoCreateWithoutRequerimentosInput, Prisma.CargoUncheckedCreateWithoutRequerimentosInput>;
    where?: Prisma.CargoWhereInput;
};
export type CargoUpdateToOneWithWhereWithoutRequerimentosInput = {
    where?: Prisma.CargoWhereInput;
    data: Prisma.XOR<Prisma.CargoUpdateWithoutRequerimentosInput, Prisma.CargoUncheckedUpdateWithoutRequerimentosInput>;
};
export type CargoUpdateWithoutRequerimentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUpdateManyWithoutCargoNestedInput;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutCargosNestedInput;
};
export type CargoUncheckedUpdateWithoutRequerimentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUncheckedUpdateManyWithoutCargoNestedInput;
};
export type CargoCreateManySetorInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CargoUpdateWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUpdateManyWithoutCargoNestedInput;
    requerimentos?: Prisma.RequerimentoUpdateManyWithoutCargoNestedInput;
};
export type CargoUncheckedUpdateWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUncheckedUpdateManyWithoutCargoNestedInput;
    requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutCargoNestedInput;
};
export type CargoUncheckedUpdateManyWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CargoCountOutputType = {
    Users: number;
    requerimentos: number;
};
export type CargoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Users?: boolean | CargoCountOutputTypeCountUsersArgs;
    requerimentos?: boolean | CargoCountOutputTypeCountRequerimentosArgs;
};
export type CargoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoCountOutputTypeSelect<ExtArgs> | null;
};
export type CargoCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type CargoCountOutputTypeCountRequerimentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoWhereInput;
};
export type CargoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    nomeVisivel?: boolean;
    setor?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    Users?: boolean | Prisma.Cargo$UsersArgs<ExtArgs>;
    Setor?: boolean | Prisma.SetorDefaultArgs<ExtArgs>;
    requerimentos?: boolean | Prisma.Cargo$requerimentosArgs<ExtArgs>;
    _count?: boolean | Prisma.CargoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cargo"]>;
export type CargoSelectScalar = {
    id?: boolean;
    nome?: boolean;
    nomeVisivel?: boolean;
    setor?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type CargoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "nomeVisivel" | "setor" | "created_at" | "updated_at", ExtArgs["result"]["cargo"]>;
export type CargoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Users?: boolean | Prisma.Cargo$UsersArgs<ExtArgs>;
    Setor?: boolean | Prisma.SetorDefaultArgs<ExtArgs>;
    requerimentos?: boolean | Prisma.Cargo$requerimentosArgs<ExtArgs>;
    _count?: boolean | Prisma.CargoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CargoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cargo";
    objects: {
        Users: Prisma.$UserPayload<ExtArgs>[];
        Setor: Prisma.$SetorPayload<ExtArgs>;
        requerimentos: Prisma.$RequerimentoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        nomeVisivel: string;
        setor: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["cargo"]>;
    composites: {};
};
export type CargoGetPayload<S extends boolean | null | undefined | CargoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CargoPayload, S>;
export type CargoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: CargoCountAggregateInputType | true;
};
export interface CargoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cargo'];
        meta: {
            name: 'Cargo';
        };
    };
    findUnique<T extends CargoFindUniqueArgs>(args: Prisma.SelectSubset<T, CargoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CargoClient<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CargoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CargoClient<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CargoFindFirstArgs>(args?: Prisma.SelectSubset<T, CargoFindFirstArgs<ExtArgs>>): Prisma.Prisma__CargoClient<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CargoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CargoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CargoClient<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CargoFindManyArgs>(args?: Prisma.SelectSubset<T, CargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CargoCreateArgs>(args: Prisma.SelectSubset<T, CargoCreateArgs<ExtArgs>>): Prisma.Prisma__CargoClient<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CargoCreateManyArgs>(args?: Prisma.SelectSubset<T, CargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends CargoDeleteArgs>(args: Prisma.SelectSubset<T, CargoDeleteArgs<ExtArgs>>): Prisma.Prisma__CargoClient<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CargoUpdateArgs>(args: Prisma.SelectSubset<T, CargoUpdateArgs<ExtArgs>>): Prisma.Prisma__CargoClient<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CargoDeleteManyArgs>(args?: Prisma.SelectSubset<T, CargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CargoUpdateManyArgs>(args: Prisma.SelectSubset<T, CargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends CargoUpsertArgs>(args: Prisma.SelectSubset<T, CargoUpsertArgs<ExtArgs>>): Prisma.Prisma__CargoClient<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CargoCountArgs>(args?: Prisma.Subset<T, CargoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CargoCountAggregateOutputType> : number>;
    aggregate<T extends CargoAggregateArgs>(args: Prisma.Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>;
    groupBy<T extends CargoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CargoGroupByArgs['orderBy'];
    } : {
        orderBy?: CargoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CargoFieldRefs;
}
export interface Prisma__CargoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Users<T extends Prisma.Cargo$UsersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cargo$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Setor<T extends Prisma.SetorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SetorDefaultArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requerimentos<T extends Prisma.Cargo$requerimentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cargo$requerimentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CargoFieldRefs {
    readonly id: Prisma.FieldRef<"Cargo", 'String'>;
    readonly nome: Prisma.FieldRef<"Cargo", 'String'>;
    readonly nomeVisivel: Prisma.FieldRef<"Cargo", 'String'>;
    readonly setor: Prisma.FieldRef<"Cargo", 'String'>;
    readonly created_at: Prisma.FieldRef<"Cargo", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Cargo", 'DateTime'>;
}
export type CargoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    where: Prisma.CargoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CargoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    where: Prisma.CargoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CargoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    where?: Prisma.CargoWhereInput;
    orderBy?: Prisma.CargoOrderByWithRelationInput | Prisma.CargoOrderByWithRelationInput[];
    cursor?: Prisma.CargoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CargoScalarFieldEnum | Prisma.CargoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CargoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    where?: Prisma.CargoWhereInput;
    orderBy?: Prisma.CargoOrderByWithRelationInput | Prisma.CargoOrderByWithRelationInput[];
    cursor?: Prisma.CargoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CargoScalarFieldEnum | Prisma.CargoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CargoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    where?: Prisma.CargoWhereInput;
    orderBy?: Prisma.CargoOrderByWithRelationInput | Prisma.CargoOrderByWithRelationInput[];
    cursor?: Prisma.CargoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CargoScalarFieldEnum | Prisma.CargoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CargoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CargoCreateInput, Prisma.CargoUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CargoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CargoCreateManyInput | Prisma.CargoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CargoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CargoUpdateInput, Prisma.CargoUncheckedUpdateInput>;
    where: Prisma.CargoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CargoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CargoUpdateManyMutationInput, Prisma.CargoUncheckedUpdateManyInput>;
    where?: Prisma.CargoWhereInput;
    limit?: number;
};
export type CargoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    where: Prisma.CargoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CargoCreateInput, Prisma.CargoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CargoUpdateInput, Prisma.CargoUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CargoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    where: Prisma.CargoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type CargoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CargoWhereInput;
    limit?: number;
};
export type Cargo$UsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Cargo$requerimentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CargoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
};
