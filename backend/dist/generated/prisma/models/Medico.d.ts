import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MedicoModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicoPayload>;
export type AggregateMedico = {
    _count: MedicoCountAggregateOutputType | null;
    _min: MedicoMinAggregateOutputType | null;
    _max: MedicoMaxAggregateOutputType | null;
};
export type MedicoMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    crm: string | null;
    telefone: string | null;
    userId: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MedicoMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    crm: string | null;
    telefone: string | null;
    userId: string | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MedicoCountAggregateOutputType = {
    id: number;
    nome: number;
    crm: number;
    telefone: number;
    userId: number;
    active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type MedicoMinAggregateInputType = {
    id?: true;
    nome?: true;
    crm?: true;
    telefone?: true;
    userId?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type MedicoMaxAggregateInputType = {
    id?: true;
    nome?: true;
    crm?: true;
    telefone?: true;
    userId?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
};
export type MedicoCountAggregateInputType = {
    id?: true;
    nome?: true;
    crm?: true;
    telefone?: true;
    userId?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type MedicoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MedicoCountAggregateInputType;
    _min?: MedicoMinAggregateInputType;
    _max?: MedicoMaxAggregateInputType;
};
export type GetMedicoAggregateType<T extends MedicoAggregateArgs> = {
    [P in keyof T & keyof AggregateMedico]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedico[P]> : Prisma.GetScalarType<T[P], AggregateMedico[P]>;
};
export type MedicoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithAggregationInput | Prisma.MedicoOrderByWithAggregationInput[];
    by: Prisma.MedicoScalarFieldEnum[] | Prisma.MedicoScalarFieldEnum;
    having?: Prisma.MedicoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicoCountAggregateInputType | true;
    _min?: MedicoMinAggregateInputType;
    _max?: MedicoMaxAggregateInputType;
};
export type MedicoGroupByOutputType = {
    id: string;
    nome: string;
    crm: string;
    telefone: string | null;
    userId: string;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: MedicoCountAggregateOutputType | null;
    _min: MedicoMinAggregateOutputType | null;
    _max: MedicoMaxAggregateOutputType | null;
};
export type GetMedicoGroupByPayload<T extends MedicoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicoGroupByOutputType[P]>;
}>>;
export type MedicoWhereInput = {
    AND?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    OR?: Prisma.MedicoWhereInput[];
    NOT?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    id?: Prisma.StringFilter<"Medico"> | string;
    nome?: Prisma.StringFilter<"Medico"> | string;
    crm?: Prisma.StringFilter<"Medico"> | string;
    telefone?: Prisma.StringNullableFilter<"Medico"> | string | null;
    userId?: Prisma.StringFilter<"Medico"> | string;
    active?: Prisma.BoolFilter<"Medico"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Receituario?: Prisma.ReceituarioListRelationFilter;
};
export type MedicoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    crm?: Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    Receituario?: Prisma.ReceituarioOrderByRelationAggregateInput;
    _relevance?: Prisma.MedicoOrderByRelevanceInput;
};
export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nome?: string;
    crm?: string;
    telefone?: string;
    AND?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    OR?: Prisma.MedicoWhereInput[];
    NOT?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    userId?: Prisma.StringFilter<"Medico"> | string;
    active?: Prisma.BoolFilter<"Medico"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Receituario?: Prisma.ReceituarioListRelationFilter;
}, "id" | "nome" | "crm" | "telefone">;
export type MedicoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    crm?: Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.MedicoCountOrderByAggregateInput;
    _max?: Prisma.MedicoMaxOrderByAggregateInput;
    _min?: Prisma.MedicoMinOrderByAggregateInput;
};
export type MedicoScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicoScalarWhereWithAggregatesInput | Prisma.MedicoScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicoScalarWhereWithAggregatesInput | Prisma.MedicoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    crm?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    telefone?: Prisma.StringNullableWithAggregatesFilter<"Medico"> | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    active?: Prisma.BoolWithAggregatesFilter<"Medico"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Medico"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Medico"> | Date | string;
};
export type MedicoCreateInput = {
    id?: string;
    nome: string;
    crm: string;
    telefone?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutMedicosInput;
    Receituario?: Prisma.ReceituarioCreateNestedManyWithoutMedicoInput;
};
export type MedicoUncheckedCreateInput = {
    id?: string;
    nome: string;
    crm: string;
    telefone?: string | null;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Receituario?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    crm?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutMedicosNestedInput;
    Receituario?: Prisma.ReceituarioUpdateManyWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    crm?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Receituario?: Prisma.ReceituarioUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoCreateManyInput = {
    id?: string;
    nome: string;
    crm: string;
    telefone?: string | null;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MedicoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    crm?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    crm?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicoListRelationFilter = {
    every?: Prisma.MedicoWhereInput;
    some?: Prisma.MedicoWhereInput;
    none?: Prisma.MedicoWhereInput;
};
export type MedicoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MedicoOrderByRelevanceInput = {
    fields: Prisma.MedicoOrderByRelevanceFieldEnum | Prisma.MedicoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type MedicoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    crm?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MedicoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    crm?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MedicoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    crm?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type MedicoNullableScalarRelationFilter = {
    is?: Prisma.MedicoWhereInput | null;
    isNot?: Prisma.MedicoWhereInput | null;
};
export type MedicoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput> | Prisma.MedicoCreateWithoutUserInput[] | Prisma.MedicoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutUserInput | Prisma.MedicoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MedicoCreateManyUserInputEnvelope;
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
};
export type MedicoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput> | Prisma.MedicoCreateWithoutUserInput[] | Prisma.MedicoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutUserInput | Prisma.MedicoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MedicoCreateManyUserInputEnvelope;
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
};
export type MedicoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput> | Prisma.MedicoCreateWithoutUserInput[] | Prisma.MedicoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutUserInput | Prisma.MedicoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MedicoUpsertWithWhereUniqueWithoutUserInput | Prisma.MedicoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MedicoCreateManyUserInputEnvelope;
    set?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    disconnect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    delete?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    update?: Prisma.MedicoUpdateWithWhereUniqueWithoutUserInput | Prisma.MedicoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MedicoUpdateManyWithWhereWithoutUserInput | Prisma.MedicoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
};
export type MedicoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput> | Prisma.MedicoCreateWithoutUserInput[] | Prisma.MedicoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutUserInput | Prisma.MedicoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MedicoUpsertWithWhereUniqueWithoutUserInput | Prisma.MedicoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MedicoCreateManyUserInputEnvelope;
    set?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    disconnect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    delete?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    update?: Prisma.MedicoUpdateWithWhereUniqueWithoutUserInput | Prisma.MedicoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MedicoUpdateManyWithWhereWithoutUserInput | Prisma.MedicoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
};
export type MedicoCreateNestedOneWithoutReceituarioInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutReceituarioInput, Prisma.MedicoUncheckedCreateWithoutReceituarioInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutReceituarioInput;
    connect?: Prisma.MedicoWhereUniqueInput;
};
export type MedicoUpdateOneWithoutReceituarioNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutReceituarioInput, Prisma.MedicoUncheckedCreateWithoutReceituarioInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutReceituarioInput;
    upsert?: Prisma.MedicoUpsertWithoutReceituarioInput;
    disconnect?: Prisma.MedicoWhereInput | boolean;
    delete?: Prisma.MedicoWhereInput | boolean;
    connect?: Prisma.MedicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicoUpdateToOneWithWhereWithoutReceituarioInput, Prisma.MedicoUpdateWithoutReceituarioInput>, Prisma.MedicoUncheckedUpdateWithoutReceituarioInput>;
};
export type MedicoCreateWithoutUserInput = {
    id?: string;
    nome: string;
    crm: string;
    telefone?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Receituario?: Prisma.ReceituarioCreateNestedManyWithoutMedicoInput;
};
export type MedicoUncheckedCreateWithoutUserInput = {
    id?: string;
    nome: string;
    crm: string;
    telefone?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Receituario?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoCreateOrConnectWithoutUserInput = {
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput>;
};
export type MedicoCreateManyUserInputEnvelope = {
    data: Prisma.MedicoCreateManyUserInput | Prisma.MedicoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MedicoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MedicoWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicoUpdateWithoutUserInput, Prisma.MedicoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput>;
};
export type MedicoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MedicoWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicoUpdateWithoutUserInput, Prisma.MedicoUncheckedUpdateWithoutUserInput>;
};
export type MedicoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MedicoScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicoUpdateManyMutationInput, Prisma.MedicoUncheckedUpdateManyWithoutUserInput>;
};
export type MedicoScalarWhereInput = {
    AND?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
    OR?: Prisma.MedicoScalarWhereInput[];
    NOT?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
    id?: Prisma.StringFilter<"Medico"> | string;
    nome?: Prisma.StringFilter<"Medico"> | string;
    crm?: Prisma.StringFilter<"Medico"> | string;
    telefone?: Prisma.StringNullableFilter<"Medico"> | string | null;
    userId?: Prisma.StringFilter<"Medico"> | string;
    active?: Prisma.BoolFilter<"Medico"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Medico"> | Date | string;
};
export type MedicoCreateWithoutReceituarioInput = {
    id?: string;
    nome: string;
    crm: string;
    telefone?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutMedicosInput;
};
export type MedicoUncheckedCreateWithoutReceituarioInput = {
    id?: string;
    nome: string;
    crm: string;
    telefone?: string | null;
    userId: string;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MedicoCreateOrConnectWithoutReceituarioInput = {
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutReceituarioInput, Prisma.MedicoUncheckedCreateWithoutReceituarioInput>;
};
export type MedicoUpsertWithoutReceituarioInput = {
    update: Prisma.XOR<Prisma.MedicoUpdateWithoutReceituarioInput, Prisma.MedicoUncheckedUpdateWithoutReceituarioInput>;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutReceituarioInput, Prisma.MedicoUncheckedCreateWithoutReceituarioInput>;
    where?: Prisma.MedicoWhereInput;
};
export type MedicoUpdateToOneWithWhereWithoutReceituarioInput = {
    where?: Prisma.MedicoWhereInput;
    data: Prisma.XOR<Prisma.MedicoUpdateWithoutReceituarioInput, Prisma.MedicoUncheckedUpdateWithoutReceituarioInput>;
};
export type MedicoUpdateWithoutReceituarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    crm?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutMedicosNestedInput;
};
export type MedicoUncheckedUpdateWithoutReceituarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    crm?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicoCreateManyUserInput = {
    id?: string;
    nome: string;
    crm: string;
    telefone?: string | null;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type MedicoUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    crm?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Receituario?: Prisma.ReceituarioUpdateManyWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    crm?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Receituario?: Prisma.ReceituarioUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    crm?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicoCountOutputType = {
    Receituario: number;
};
export type MedicoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Receituario?: boolean | MedicoCountOutputTypeCountReceituarioArgs;
};
export type MedicoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoCountOutputTypeSelect<ExtArgs> | null;
};
export type MedicoCountOutputTypeCountReceituarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioWhereInput;
};
export type MedicoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    crm?: boolean;
    telefone?: boolean;
    userId?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Receituario?: boolean | Prisma.Medico$ReceituarioArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medico"]>;
export type MedicoSelectScalar = {
    id?: boolean;
    nome?: boolean;
    crm?: boolean;
    telefone?: boolean;
    userId?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type MedicoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "crm" | "telefone" | "userId" | "active" | "created_at" | "updated_at", ExtArgs["result"]["medico"]>;
export type MedicoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Receituario?: boolean | Prisma.Medico$ReceituarioArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MedicoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Medico";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
        Receituario: Prisma.$ReceituarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        crm: string;
        telefone: string | null;
        userId: string;
        active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["medico"]>;
    composites: {};
};
export type MedicoGetPayload<S extends boolean | null | undefined | MedicoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicoPayload, S>;
export type MedicoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: MedicoCountAggregateInputType | true;
};
export interface MedicoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Medico'];
        meta: {
            name: 'Medico';
        };
    };
    findUnique<T extends MedicoFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MedicoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MedicoFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicoFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MedicoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MedicoFindManyArgs>(args?: Prisma.SelectSubset<T, MedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MedicoCreateArgs>(args: Prisma.SelectSubset<T, MedicoCreateArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MedicoCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MedicoDeleteArgs>(args: Prisma.SelectSubset<T, MedicoDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MedicoUpdateArgs>(args: Prisma.SelectSubset<T, MedicoUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MedicoDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MedicoUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MedicoUpsertArgs>(args: Prisma.SelectSubset<T, MedicoUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MedicoCountArgs>(args?: Prisma.Subset<T, MedicoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicoCountAggregateOutputType> : number>;
    aggregate<T extends MedicoAggregateArgs>(args: Prisma.Subset<T, MedicoAggregateArgs>): Prisma.PrismaPromise<GetMedicoAggregateType<T>>;
    groupBy<T extends MedicoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicoGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MedicoFieldRefs;
}
export interface Prisma__MedicoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Receituario<T extends Prisma.Medico$ReceituarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medico$ReceituarioArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MedicoFieldRefs {
    readonly id: Prisma.FieldRef<"Medico", 'String'>;
    readonly nome: Prisma.FieldRef<"Medico", 'String'>;
    readonly crm: Prisma.FieldRef<"Medico", 'String'>;
    readonly telefone: Prisma.FieldRef<"Medico", 'String'>;
    readonly userId: Prisma.FieldRef<"Medico", 'String'>;
    readonly active: Prisma.FieldRef<"Medico", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"Medico", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Medico", 'DateTime'>;
}
export type MedicoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where: Prisma.MedicoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where: Prisma.MedicoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicoCreateInput, Prisma.MedicoUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MedicoCreateManyInput | Prisma.MedicoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MedicoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicoUpdateInput, Prisma.MedicoUncheckedUpdateInput>;
    where: Prisma.MedicoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MedicoUpdateManyMutationInput, Prisma.MedicoUncheckedUpdateManyInput>;
    where?: Prisma.MedicoWhereInput;
    limit?: number;
};
export type MedicoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateInput, Prisma.MedicoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MedicoUpdateInput, Prisma.MedicoUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where: Prisma.MedicoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type MedicoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicoWhereInput;
    limit?: number;
};
export type Medico$ReceituarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MedicoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
};
