import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReceituarioModel = runtime.Types.Result.DefaultSelection<Prisma.$ReceituarioPayload>;
export type AggregateReceituario = {
    _count: ReceituarioCountAggregateOutputType | null;
    _avg: ReceituarioAvgAggregateOutputType | null;
    _sum: ReceituarioSumAggregateOutputType | null;
    _min: ReceituarioMinAggregateOutputType | null;
    _max: ReceituarioMaxAggregateOutputType | null;
};
export type ReceituarioAvgAggregateOutputType = {
    ocorrencia: number | null;
};
export type ReceituarioSumAggregateOutputType = {
    ocorrencia: number | null;
};
export type ReceituarioMinAggregateOutputType = {
    id: string | null;
    requerimentoId: string | null;
    status: $Enums.StatusReceituario | null;
    numero: string | null;
    data: Date | null;
    ocorrencia: number | null;
    data_ocorrencia: Date | null;
    medicoId: string | null;
    baseId: string | null;
    ambulanciaId: string | null;
    obs: string | null;
    userId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ReceituarioMaxAggregateOutputType = {
    id: string | null;
    requerimentoId: string | null;
    status: $Enums.StatusReceituario | null;
    numero: string | null;
    data: Date | null;
    ocorrencia: number | null;
    data_ocorrencia: Date | null;
    medicoId: string | null;
    baseId: string | null;
    ambulanciaId: string | null;
    obs: string | null;
    userId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ReceituarioCountAggregateOutputType = {
    id: number;
    requerimentoId: number;
    status: number;
    numero: number;
    data: number;
    ocorrencia: number;
    data_ocorrencia: number;
    medicoId: number;
    baseId: number;
    ambulanciaId: number;
    obs: number;
    userId: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type ReceituarioAvgAggregateInputType = {
    ocorrencia?: true;
};
export type ReceituarioSumAggregateInputType = {
    ocorrencia?: true;
};
export type ReceituarioMinAggregateInputType = {
    id?: true;
    requerimentoId?: true;
    status?: true;
    numero?: true;
    data?: true;
    ocorrencia?: true;
    data_ocorrencia?: true;
    medicoId?: true;
    baseId?: true;
    ambulanciaId?: true;
    obs?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
};
export type ReceituarioMaxAggregateInputType = {
    id?: true;
    requerimentoId?: true;
    status?: true;
    numero?: true;
    data?: true;
    ocorrencia?: true;
    data_ocorrencia?: true;
    medicoId?: true;
    baseId?: true;
    ambulanciaId?: true;
    obs?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
};
export type ReceituarioCountAggregateInputType = {
    id?: true;
    requerimentoId?: true;
    status?: true;
    numero?: true;
    data?: true;
    ocorrencia?: true;
    data_ocorrencia?: true;
    medicoId?: true;
    baseId?: true;
    ambulanciaId?: true;
    obs?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type ReceituarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioWhereInput;
    orderBy?: Prisma.ReceituarioOrderByWithRelationInput | Prisma.ReceituarioOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReceituarioCountAggregateInputType;
    _avg?: ReceituarioAvgAggregateInputType;
    _sum?: ReceituarioSumAggregateInputType;
    _min?: ReceituarioMinAggregateInputType;
    _max?: ReceituarioMaxAggregateInputType;
};
export type GetReceituarioAggregateType<T extends ReceituarioAggregateArgs> = {
    [P in keyof T & keyof AggregateReceituario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReceituario[P]> : Prisma.GetScalarType<T[P], AggregateReceituario[P]>;
};
export type ReceituarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioWhereInput;
    orderBy?: Prisma.ReceituarioOrderByWithAggregationInput | Prisma.ReceituarioOrderByWithAggregationInput[];
    by: Prisma.ReceituarioScalarFieldEnum[] | Prisma.ReceituarioScalarFieldEnum;
    having?: Prisma.ReceituarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReceituarioCountAggregateInputType | true;
    _avg?: ReceituarioAvgAggregateInputType;
    _sum?: ReceituarioSumAggregateInputType;
    _min?: ReceituarioMinAggregateInputType;
    _max?: ReceituarioMaxAggregateInputType;
};
export type ReceituarioGroupByOutputType = {
    id: string;
    requerimentoId: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date;
    ocorrencia: number;
    data_ocorrencia: Date;
    medicoId: string;
    baseId: string;
    ambulanciaId: string;
    obs: string | null;
    userId: string;
    created_at: Date;
    updated_at: Date;
    _count: ReceituarioCountAggregateOutputType | null;
    _avg: ReceituarioAvgAggregateOutputType | null;
    _sum: ReceituarioSumAggregateOutputType | null;
    _min: ReceituarioMinAggregateOutputType | null;
    _max: ReceituarioMaxAggregateOutputType | null;
};
export type GetReceituarioGroupByPayload<T extends ReceituarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReceituarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReceituarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReceituarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReceituarioGroupByOutputType[P]>;
}>>;
export type ReceituarioWhereInput = {
    AND?: Prisma.ReceituarioWhereInput | Prisma.ReceituarioWhereInput[];
    OR?: Prisma.ReceituarioWhereInput[];
    NOT?: Prisma.ReceituarioWhereInput | Prisma.ReceituarioWhereInput[];
    id?: Prisma.StringFilter<"Receituario"> | string;
    requerimentoId?: Prisma.StringNullableFilter<"Receituario"> | string | null;
    status?: Prisma.EnumStatusReceituarioFilter<"Receituario"> | $Enums.StatusReceituario;
    numero?: Prisma.StringFilter<"Receituario"> | string;
    data?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    ocorrencia?: Prisma.IntFilter<"Receituario"> | number;
    data_ocorrencia?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    medicoId?: Prisma.StringFilter<"Receituario"> | string;
    baseId?: Prisma.StringFilter<"Receituario"> | string;
    ambulanciaId?: Prisma.StringFilter<"Receituario"> | string;
    obs?: Prisma.StringNullableFilter<"Receituario"> | string | null;
    userId?: Prisma.StringFilter<"Receituario"> | string;
    created_at?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Medico?: Prisma.XOR<Prisma.MedicoNullableScalarRelationFilter, Prisma.MedicoWhereInput> | null;
    Requerimento?: Prisma.XOR<Prisma.RequerimentoNullableScalarRelationFilter, Prisma.RequerimentoWhereInput> | null;
    Base?: Prisma.XOR<Prisma.BaseScalarRelationFilter, Prisma.BaseWhereInput>;
    Ambulancia?: Prisma.XOR<Prisma.AmbulanciaNullableScalarRelationFilter, Prisma.AmbulanciaWhereInput> | null;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosListRelationFilter;
};
export type ReceituarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrder;
    data_ocorrencia?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrder;
    obs?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    Medico?: Prisma.MedicoOrderByWithRelationInput;
    Requerimento?: Prisma.RequerimentoOrderByWithRelationInput;
    Base?: Prisma.BaseOrderByWithRelationInput;
    Ambulancia?: Prisma.AmbulanciaOrderByWithRelationInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosOrderByRelationAggregateInput;
    _relevance?: Prisma.ReceituarioOrderByRelevanceInput;
};
export type ReceituarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    numero?: string;
    AND?: Prisma.ReceituarioWhereInput | Prisma.ReceituarioWhereInput[];
    OR?: Prisma.ReceituarioWhereInput[];
    NOT?: Prisma.ReceituarioWhereInput | Prisma.ReceituarioWhereInput[];
    requerimentoId?: Prisma.StringNullableFilter<"Receituario"> | string | null;
    status?: Prisma.EnumStatusReceituarioFilter<"Receituario"> | $Enums.StatusReceituario;
    data?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    ocorrencia?: Prisma.IntFilter<"Receituario"> | number;
    data_ocorrencia?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    medicoId?: Prisma.StringFilter<"Receituario"> | string;
    baseId?: Prisma.StringFilter<"Receituario"> | string;
    ambulanciaId?: Prisma.StringFilter<"Receituario"> | string;
    obs?: Prisma.StringNullableFilter<"Receituario"> | string | null;
    userId?: Prisma.StringFilter<"Receituario"> | string;
    created_at?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Medico?: Prisma.XOR<Prisma.MedicoNullableScalarRelationFilter, Prisma.MedicoWhereInput> | null;
    Requerimento?: Prisma.XOR<Prisma.RequerimentoNullableScalarRelationFilter, Prisma.RequerimentoWhereInput> | null;
    Base?: Prisma.XOR<Prisma.BaseScalarRelationFilter, Prisma.BaseWhereInput>;
    Ambulancia?: Prisma.XOR<Prisma.AmbulanciaNullableScalarRelationFilter, Prisma.AmbulanciaWhereInput> | null;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosListRelationFilter;
}, "id" | "numero">;
export type ReceituarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrder;
    data_ocorrencia?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrder;
    obs?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.ReceituarioCountOrderByAggregateInput;
    _avg?: Prisma.ReceituarioAvgOrderByAggregateInput;
    _max?: Prisma.ReceituarioMaxOrderByAggregateInput;
    _min?: Prisma.ReceituarioMinOrderByAggregateInput;
    _sum?: Prisma.ReceituarioSumOrderByAggregateInput;
};
export type ReceituarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReceituarioScalarWhereWithAggregatesInput | Prisma.ReceituarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReceituarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReceituarioScalarWhereWithAggregatesInput | Prisma.ReceituarioScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Receituario"> | string;
    requerimentoId?: Prisma.StringNullableWithAggregatesFilter<"Receituario"> | string | null;
    status?: Prisma.EnumStatusReceituarioWithAggregatesFilter<"Receituario"> | $Enums.StatusReceituario;
    numero?: Prisma.StringWithAggregatesFilter<"Receituario"> | string;
    data?: Prisma.DateTimeWithAggregatesFilter<"Receituario"> | Date | string;
    ocorrencia?: Prisma.IntWithAggregatesFilter<"Receituario"> | number;
    data_ocorrencia?: Prisma.DateTimeWithAggregatesFilter<"Receituario"> | Date | string;
    medicoId?: Prisma.StringWithAggregatesFilter<"Receituario"> | string;
    baseId?: Prisma.StringWithAggregatesFilter<"Receituario"> | string;
    ambulanciaId?: Prisma.StringWithAggregatesFilter<"Receituario"> | string;
    obs?: Prisma.StringNullableWithAggregatesFilter<"Receituario"> | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"Receituario"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Receituario"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Receituario"> | Date | string;
};
export type ReceituarioCreateInput = {
    id?: string;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutReceituariosInput;
    Medico?: Prisma.MedicoCreateNestedOneWithoutReceituarioInput;
    Requerimento?: Prisma.RequerimentoCreateNestedOneWithoutReceituariosInput;
    Base: Prisma.BaseCreateNestedOneWithoutReceituariosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutReceituariosInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioUncheckedCreateInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    baseId: string;
    ambulanciaId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutReceituariosNestedInput;
    Medico?: Prisma.MedicoUpdateOneWithoutReceituarioNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneWithoutReceituariosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutReceituariosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutReceituariosNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioCreateManyInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    baseId: string;
    ambulanciaId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioListRelationFilter = {
    every?: Prisma.ReceituarioWhereInput;
    some?: Prisma.ReceituarioWhereInput;
    none?: Prisma.ReceituarioWhereInput;
};
export type ReceituarioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReceituarioOrderByRelevanceInput = {
    fields: Prisma.ReceituarioOrderByRelevanceFieldEnum | Prisma.ReceituarioOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ReceituarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrder;
    data_ocorrencia?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrder;
    obs?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ReceituarioAvgOrderByAggregateInput = {
    ocorrencia?: Prisma.SortOrder;
};
export type ReceituarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrder;
    data_ocorrencia?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrder;
    obs?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ReceituarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requerimentoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    ocorrencia?: Prisma.SortOrder;
    data_ocorrencia?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    baseId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrder;
    obs?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ReceituarioSumOrderByAggregateInput = {
    ocorrencia?: Prisma.SortOrder;
};
export type ReceituarioScalarRelationFilter = {
    is?: Prisma.ReceituarioWhereInput;
    isNot?: Prisma.ReceituarioWhereInput;
};
export type ReceituarioCreateNestedManyWithoutBaseInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutBaseInput, Prisma.ReceituarioUncheckedCreateWithoutBaseInput> | Prisma.ReceituarioCreateWithoutBaseInput[] | Prisma.ReceituarioUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutBaseInput | Prisma.ReceituarioCreateOrConnectWithoutBaseInput[];
    createMany?: Prisma.ReceituarioCreateManyBaseInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUncheckedCreateNestedManyWithoutBaseInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutBaseInput, Prisma.ReceituarioUncheckedCreateWithoutBaseInput> | Prisma.ReceituarioCreateWithoutBaseInput[] | Prisma.ReceituarioUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutBaseInput | Prisma.ReceituarioCreateOrConnectWithoutBaseInput[];
    createMany?: Prisma.ReceituarioCreateManyBaseInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUpdateManyWithoutBaseNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutBaseInput, Prisma.ReceituarioUncheckedCreateWithoutBaseInput> | Prisma.ReceituarioCreateWithoutBaseInput[] | Prisma.ReceituarioUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutBaseInput | Prisma.ReceituarioCreateOrConnectWithoutBaseInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutBaseInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutBaseInput[];
    createMany?: Prisma.ReceituarioCreateManyBaseInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutBaseInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutBaseInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutBaseInput | Prisma.ReceituarioUpdateManyWithWhereWithoutBaseInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type ReceituarioUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutBaseInput, Prisma.ReceituarioUncheckedCreateWithoutBaseInput> | Prisma.ReceituarioCreateWithoutBaseInput[] | Prisma.ReceituarioUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutBaseInput | Prisma.ReceituarioCreateOrConnectWithoutBaseInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutBaseInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutBaseInput[];
    createMany?: Prisma.ReceituarioCreateManyBaseInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutBaseInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutBaseInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutBaseInput | Prisma.ReceituarioUpdateManyWithWhereWithoutBaseInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type ReceituarioCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutUserInput, Prisma.ReceituarioUncheckedCreateWithoutUserInput> | Prisma.ReceituarioCreateWithoutUserInput[] | Prisma.ReceituarioUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutUserInput | Prisma.ReceituarioCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ReceituarioCreateManyUserInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutUserInput, Prisma.ReceituarioUncheckedCreateWithoutUserInput> | Prisma.ReceituarioCreateWithoutUserInput[] | Prisma.ReceituarioUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutUserInput | Prisma.ReceituarioCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ReceituarioCreateManyUserInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutUserInput, Prisma.ReceituarioUncheckedCreateWithoutUserInput> | Prisma.ReceituarioCreateWithoutUserInput[] | Prisma.ReceituarioUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutUserInput | Prisma.ReceituarioCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutUserInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ReceituarioCreateManyUserInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutUserInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutUserInput | Prisma.ReceituarioUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type ReceituarioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutUserInput, Prisma.ReceituarioUncheckedCreateWithoutUserInput> | Prisma.ReceituarioCreateWithoutUserInput[] | Prisma.ReceituarioUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutUserInput | Prisma.ReceituarioCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutUserInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ReceituarioCreateManyUserInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutUserInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutUserInput | Prisma.ReceituarioUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type ReceituarioCreateNestedManyWithoutAmbulanciaInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutAmbulanciaInput, Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput> | Prisma.ReceituarioCreateWithoutAmbulanciaInput[] | Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutAmbulanciaInput | Prisma.ReceituarioCreateOrConnectWithoutAmbulanciaInput[];
    createMany?: Prisma.ReceituarioCreateManyAmbulanciaInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUncheckedCreateNestedManyWithoutAmbulanciaInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutAmbulanciaInput, Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput> | Prisma.ReceituarioCreateWithoutAmbulanciaInput[] | Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutAmbulanciaInput | Prisma.ReceituarioCreateOrConnectWithoutAmbulanciaInput[];
    createMany?: Prisma.ReceituarioCreateManyAmbulanciaInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUpdateManyWithoutAmbulanciaNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutAmbulanciaInput, Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput> | Prisma.ReceituarioCreateWithoutAmbulanciaInput[] | Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutAmbulanciaInput | Prisma.ReceituarioCreateOrConnectWithoutAmbulanciaInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutAmbulanciaInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutAmbulanciaInput[];
    createMany?: Prisma.ReceituarioCreateManyAmbulanciaInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutAmbulanciaInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutAmbulanciaInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutAmbulanciaInput | Prisma.ReceituarioUpdateManyWithWhereWithoutAmbulanciaInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type ReceituarioUncheckedUpdateManyWithoutAmbulanciaNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutAmbulanciaInput, Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput> | Prisma.ReceituarioCreateWithoutAmbulanciaInput[] | Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutAmbulanciaInput | Prisma.ReceituarioCreateOrConnectWithoutAmbulanciaInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutAmbulanciaInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutAmbulanciaInput[];
    createMany?: Prisma.ReceituarioCreateManyAmbulanciaInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutAmbulanciaInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutAmbulanciaInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutAmbulanciaInput | Prisma.ReceituarioUpdateManyWithWhereWithoutAmbulanciaInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type ReceituarioCreateNestedManyWithoutRequerimentoInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutRequerimentoInput, Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput> | Prisma.ReceituarioCreateWithoutRequerimentoInput[] | Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutRequerimentoInput | Prisma.ReceituarioCreateOrConnectWithoutRequerimentoInput[];
    createMany?: Prisma.ReceituarioCreateManyRequerimentoInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUncheckedCreateNestedManyWithoutRequerimentoInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutRequerimentoInput, Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput> | Prisma.ReceituarioCreateWithoutRequerimentoInput[] | Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutRequerimentoInput | Prisma.ReceituarioCreateOrConnectWithoutRequerimentoInput[];
    createMany?: Prisma.ReceituarioCreateManyRequerimentoInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUpdateManyWithoutRequerimentoNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutRequerimentoInput, Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput> | Prisma.ReceituarioCreateWithoutRequerimentoInput[] | Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutRequerimentoInput | Prisma.ReceituarioCreateOrConnectWithoutRequerimentoInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutRequerimentoInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutRequerimentoInput[];
    createMany?: Prisma.ReceituarioCreateManyRequerimentoInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutRequerimentoInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutRequerimentoInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutRequerimentoInput | Prisma.ReceituarioUpdateManyWithWhereWithoutRequerimentoInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type ReceituarioUncheckedUpdateManyWithoutRequerimentoNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutRequerimentoInput, Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput> | Prisma.ReceituarioCreateWithoutRequerimentoInput[] | Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutRequerimentoInput | Prisma.ReceituarioCreateOrConnectWithoutRequerimentoInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutRequerimentoInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutRequerimentoInput[];
    createMany?: Prisma.ReceituarioCreateManyRequerimentoInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutRequerimentoInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutRequerimentoInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutRequerimentoInput | Prisma.ReceituarioUpdateManyWithWhereWithoutRequerimentoInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type ReceituarioCreateNestedManyWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutMedicoInput, Prisma.ReceituarioUncheckedCreateWithoutMedicoInput> | Prisma.ReceituarioCreateWithoutMedicoInput[] | Prisma.ReceituarioUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutMedicoInput | Prisma.ReceituarioCreateOrConnectWithoutMedicoInput[];
    createMany?: Prisma.ReceituarioCreateManyMedicoInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutMedicoInput, Prisma.ReceituarioUncheckedCreateWithoutMedicoInput> | Prisma.ReceituarioCreateWithoutMedicoInput[] | Prisma.ReceituarioUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutMedicoInput | Prisma.ReceituarioCreateOrConnectWithoutMedicoInput[];
    createMany?: Prisma.ReceituarioCreateManyMedicoInputEnvelope;
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
};
export type ReceituarioUpdateManyWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutMedicoInput, Prisma.ReceituarioUncheckedCreateWithoutMedicoInput> | Prisma.ReceituarioCreateWithoutMedicoInput[] | Prisma.ReceituarioUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutMedicoInput | Prisma.ReceituarioCreateOrConnectWithoutMedicoInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutMedicoInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutMedicoInput[];
    createMany?: Prisma.ReceituarioCreateManyMedicoInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutMedicoInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutMedicoInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutMedicoInput | Prisma.ReceituarioUpdateManyWithWhereWithoutMedicoInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type ReceituarioUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutMedicoInput, Prisma.ReceituarioUncheckedCreateWithoutMedicoInput> | Prisma.ReceituarioCreateWithoutMedicoInput[] | Prisma.ReceituarioUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutMedicoInput | Prisma.ReceituarioCreateOrConnectWithoutMedicoInput[];
    upsert?: Prisma.ReceituarioUpsertWithWhereUniqueWithoutMedicoInput | Prisma.ReceituarioUpsertWithWhereUniqueWithoutMedicoInput[];
    createMany?: Prisma.ReceituarioCreateManyMedicoInputEnvelope;
    set?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    delete?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    connect?: Prisma.ReceituarioWhereUniqueInput | Prisma.ReceituarioWhereUniqueInput[];
    update?: Prisma.ReceituarioUpdateWithWhereUniqueWithoutMedicoInput | Prisma.ReceituarioUpdateWithWhereUniqueWithoutMedicoInput[];
    updateMany?: Prisma.ReceituarioUpdateManyWithWhereWithoutMedicoInput | Prisma.ReceituarioUpdateManyWithWhereWithoutMedicoInput[];
    deleteMany?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
};
export type EnumStatusReceituarioFieldUpdateOperationsInput = {
    set?: $Enums.StatusReceituario;
};
export type ReceituarioCreateNestedOneWithoutReceituarioMedicamentosInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutReceituarioMedicamentosInput, Prisma.ReceituarioUncheckedCreateWithoutReceituarioMedicamentosInput>;
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutReceituarioMedicamentosInput;
    connect?: Prisma.ReceituarioWhereUniqueInput;
};
export type ReceituarioUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioCreateWithoutReceituarioMedicamentosInput, Prisma.ReceituarioUncheckedCreateWithoutReceituarioMedicamentosInput>;
    connectOrCreate?: Prisma.ReceituarioCreateOrConnectWithoutReceituarioMedicamentosInput;
    upsert?: Prisma.ReceituarioUpsertWithoutReceituarioMedicamentosInput;
    connect?: Prisma.ReceituarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReceituarioUpdateToOneWithWhereWithoutReceituarioMedicamentosInput, Prisma.ReceituarioUpdateWithoutReceituarioMedicamentosInput>, Prisma.ReceituarioUncheckedUpdateWithoutReceituarioMedicamentosInput>;
};
export type ReceituarioCreateWithoutBaseInput = {
    id?: string;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutReceituariosInput;
    Medico?: Prisma.MedicoCreateNestedOneWithoutReceituarioInput;
    Requerimento?: Prisma.RequerimentoCreateNestedOneWithoutReceituariosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutReceituariosInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioUncheckedCreateWithoutBaseInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    ambulanciaId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioCreateOrConnectWithoutBaseInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutBaseInput, Prisma.ReceituarioUncheckedCreateWithoutBaseInput>;
};
export type ReceituarioCreateManyBaseInputEnvelope = {
    data: Prisma.ReceituarioCreateManyBaseInput | Prisma.ReceituarioCreateManyBaseInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioUpsertWithWhereUniqueWithoutBaseInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReceituarioUpdateWithoutBaseInput, Prisma.ReceituarioUncheckedUpdateWithoutBaseInput>;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutBaseInput, Prisma.ReceituarioUncheckedCreateWithoutBaseInput>;
};
export type ReceituarioUpdateWithWhereUniqueWithoutBaseInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateWithoutBaseInput, Prisma.ReceituarioUncheckedUpdateWithoutBaseInput>;
};
export type ReceituarioUpdateManyWithWhereWithoutBaseInput = {
    where: Prisma.ReceituarioScalarWhereInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateManyMutationInput, Prisma.ReceituarioUncheckedUpdateManyWithoutBaseInput>;
};
export type ReceituarioScalarWhereInput = {
    AND?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
    OR?: Prisma.ReceituarioScalarWhereInput[];
    NOT?: Prisma.ReceituarioScalarWhereInput | Prisma.ReceituarioScalarWhereInput[];
    id?: Prisma.StringFilter<"Receituario"> | string;
    requerimentoId?: Prisma.StringNullableFilter<"Receituario"> | string | null;
    status?: Prisma.EnumStatusReceituarioFilter<"Receituario"> | $Enums.StatusReceituario;
    numero?: Prisma.StringFilter<"Receituario"> | string;
    data?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    ocorrencia?: Prisma.IntFilter<"Receituario"> | number;
    data_ocorrencia?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    medicoId?: Prisma.StringFilter<"Receituario"> | string;
    baseId?: Prisma.StringFilter<"Receituario"> | string;
    ambulanciaId?: Prisma.StringFilter<"Receituario"> | string;
    obs?: Prisma.StringNullableFilter<"Receituario"> | string | null;
    userId?: Prisma.StringFilter<"Receituario"> | string;
    created_at?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Receituario"> | Date | string;
};
export type ReceituarioCreateWithoutUserInput = {
    id?: string;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    Medico?: Prisma.MedicoCreateNestedOneWithoutReceituarioInput;
    Requerimento?: Prisma.RequerimentoCreateNestedOneWithoutReceituariosInput;
    Base: Prisma.BaseCreateNestedOneWithoutReceituariosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutReceituariosInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioUncheckedCreateWithoutUserInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    baseId: string;
    ambulanciaId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioCreateOrConnectWithoutUserInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutUserInput, Prisma.ReceituarioUncheckedCreateWithoutUserInput>;
};
export type ReceituarioCreateManyUserInputEnvelope = {
    data: Prisma.ReceituarioCreateManyUserInput | Prisma.ReceituarioCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReceituarioUpdateWithoutUserInput, Prisma.ReceituarioUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutUserInput, Prisma.ReceituarioUncheckedCreateWithoutUserInput>;
};
export type ReceituarioUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateWithoutUserInput, Prisma.ReceituarioUncheckedUpdateWithoutUserInput>;
};
export type ReceituarioUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ReceituarioScalarWhereInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateManyMutationInput, Prisma.ReceituarioUncheckedUpdateManyWithoutUserInput>;
};
export type ReceituarioCreateWithoutAmbulanciaInput = {
    id?: string;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutReceituariosInput;
    Medico?: Prisma.MedicoCreateNestedOneWithoutReceituarioInput;
    Requerimento?: Prisma.RequerimentoCreateNestedOneWithoutReceituariosInput;
    Base: Prisma.BaseCreateNestedOneWithoutReceituariosInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioUncheckedCreateWithoutAmbulanciaInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    baseId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioCreateOrConnectWithoutAmbulanciaInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutAmbulanciaInput, Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput>;
};
export type ReceituarioCreateManyAmbulanciaInputEnvelope = {
    data: Prisma.ReceituarioCreateManyAmbulanciaInput | Prisma.ReceituarioCreateManyAmbulanciaInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioUpsertWithWhereUniqueWithoutAmbulanciaInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReceituarioUpdateWithoutAmbulanciaInput, Prisma.ReceituarioUncheckedUpdateWithoutAmbulanciaInput>;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutAmbulanciaInput, Prisma.ReceituarioUncheckedCreateWithoutAmbulanciaInput>;
};
export type ReceituarioUpdateWithWhereUniqueWithoutAmbulanciaInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateWithoutAmbulanciaInput, Prisma.ReceituarioUncheckedUpdateWithoutAmbulanciaInput>;
};
export type ReceituarioUpdateManyWithWhereWithoutAmbulanciaInput = {
    where: Prisma.ReceituarioScalarWhereInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateManyMutationInput, Prisma.ReceituarioUncheckedUpdateManyWithoutAmbulanciaInput>;
};
export type ReceituarioCreateWithoutRequerimentoInput = {
    id?: string;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutReceituariosInput;
    Medico?: Prisma.MedicoCreateNestedOneWithoutReceituarioInput;
    Base: Prisma.BaseCreateNestedOneWithoutReceituariosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutReceituariosInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioUncheckedCreateWithoutRequerimentoInput = {
    id?: string;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    baseId: string;
    ambulanciaId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioCreateOrConnectWithoutRequerimentoInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutRequerimentoInput, Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput>;
};
export type ReceituarioCreateManyRequerimentoInputEnvelope = {
    data: Prisma.ReceituarioCreateManyRequerimentoInput | Prisma.ReceituarioCreateManyRequerimentoInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioUpsertWithWhereUniqueWithoutRequerimentoInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReceituarioUpdateWithoutRequerimentoInput, Prisma.ReceituarioUncheckedUpdateWithoutRequerimentoInput>;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutRequerimentoInput, Prisma.ReceituarioUncheckedCreateWithoutRequerimentoInput>;
};
export type ReceituarioUpdateWithWhereUniqueWithoutRequerimentoInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateWithoutRequerimentoInput, Prisma.ReceituarioUncheckedUpdateWithoutRequerimentoInput>;
};
export type ReceituarioUpdateManyWithWhereWithoutRequerimentoInput = {
    where: Prisma.ReceituarioScalarWhereInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateManyMutationInput, Prisma.ReceituarioUncheckedUpdateManyWithoutRequerimentoInput>;
};
export type ReceituarioCreateWithoutMedicoInput = {
    id?: string;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutReceituariosInput;
    Requerimento?: Prisma.RequerimentoCreateNestedOneWithoutReceituariosInput;
    Base: Prisma.BaseCreateNestedOneWithoutReceituariosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutReceituariosInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioUncheckedCreateWithoutMedicoInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    baseId: string;
    ambulanciaId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedCreateNestedManyWithoutReceituarioInput;
};
export type ReceituarioCreateOrConnectWithoutMedicoInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutMedicoInput, Prisma.ReceituarioUncheckedCreateWithoutMedicoInput>;
};
export type ReceituarioCreateManyMedicoInputEnvelope = {
    data: Prisma.ReceituarioCreateManyMedicoInput | Prisma.ReceituarioCreateManyMedicoInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioUpsertWithWhereUniqueWithoutMedicoInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReceituarioUpdateWithoutMedicoInput, Prisma.ReceituarioUncheckedUpdateWithoutMedicoInput>;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutMedicoInput, Prisma.ReceituarioUncheckedCreateWithoutMedicoInput>;
};
export type ReceituarioUpdateWithWhereUniqueWithoutMedicoInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateWithoutMedicoInput, Prisma.ReceituarioUncheckedUpdateWithoutMedicoInput>;
};
export type ReceituarioUpdateManyWithWhereWithoutMedicoInput = {
    where: Prisma.ReceituarioScalarWhereInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateManyMutationInput, Prisma.ReceituarioUncheckedUpdateManyWithoutMedicoInput>;
};
export type ReceituarioCreateWithoutReceituarioMedicamentosInput = {
    id?: string;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutReceituariosInput;
    Medico?: Prisma.MedicoCreateNestedOneWithoutReceituarioInput;
    Requerimento?: Prisma.RequerimentoCreateNestedOneWithoutReceituariosInput;
    Base: Prisma.BaseCreateNestedOneWithoutReceituariosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutReceituariosInput;
};
export type ReceituarioUncheckedCreateWithoutReceituarioMedicamentosInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    baseId: string;
    ambulanciaId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioCreateOrConnectWithoutReceituarioMedicamentosInput = {
    where: Prisma.ReceituarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutReceituarioMedicamentosInput, Prisma.ReceituarioUncheckedCreateWithoutReceituarioMedicamentosInput>;
};
export type ReceituarioUpsertWithoutReceituarioMedicamentosInput = {
    update: Prisma.XOR<Prisma.ReceituarioUpdateWithoutReceituarioMedicamentosInput, Prisma.ReceituarioUncheckedUpdateWithoutReceituarioMedicamentosInput>;
    create: Prisma.XOR<Prisma.ReceituarioCreateWithoutReceituarioMedicamentosInput, Prisma.ReceituarioUncheckedCreateWithoutReceituarioMedicamentosInput>;
    where?: Prisma.ReceituarioWhereInput;
};
export type ReceituarioUpdateToOneWithWhereWithoutReceituarioMedicamentosInput = {
    where?: Prisma.ReceituarioWhereInput;
    data: Prisma.XOR<Prisma.ReceituarioUpdateWithoutReceituarioMedicamentosInput, Prisma.ReceituarioUncheckedUpdateWithoutReceituarioMedicamentosInput>;
};
export type ReceituarioUpdateWithoutReceituarioMedicamentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutReceituariosNestedInput;
    Medico?: Prisma.MedicoUpdateOneWithoutReceituarioNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneWithoutReceituariosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutReceituariosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutReceituariosNestedInput;
};
export type ReceituarioUncheckedUpdateWithoutReceituarioMedicamentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioCreateManyBaseInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    ambulanciaId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioUpdateWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutReceituariosNestedInput;
    Medico?: Prisma.MedicoUpdateOneWithoutReceituarioNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneWithoutReceituariosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutReceituariosNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateManyWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioCreateManyUserInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    baseId: string;
    ambulanciaId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Medico?: Prisma.MedicoUpdateOneWithoutReceituarioNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneWithoutReceituariosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutReceituariosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutReceituariosNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioCreateManyAmbulanciaInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    baseId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioUpdateWithoutAmbulanciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutReceituariosNestedInput;
    Medico?: Prisma.MedicoUpdateOneWithoutReceituarioNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneWithoutReceituariosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutReceituariosNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateWithoutAmbulanciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateManyWithoutAmbulanciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioCreateManyRequerimentoInput = {
    id?: string;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    medicoId: string;
    baseId: string;
    ambulanciaId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioUpdateWithoutRequerimentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutReceituariosNestedInput;
    Medico?: Prisma.MedicoUpdateOneWithoutReceituarioNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutReceituariosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutReceituariosNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateWithoutRequerimentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateManyWithoutRequerimentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioCreateManyMedicoInput = {
    id?: string;
    requerimentoId?: string | null;
    status: $Enums.StatusReceituario;
    numero: string;
    data: Date | string;
    ocorrencia: number;
    data_ocorrencia: Date | string;
    baseId: string;
    ambulanciaId: string;
    obs?: string | null;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioUpdateWithoutMedicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutReceituariosNestedInput;
    Requerimento?: Prisma.RequerimentoUpdateOneWithoutReceituariosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutReceituariosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutReceituariosNestedInput;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateWithoutMedicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ReceituarioMedicamentos?: Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutReceituarioNestedInput;
};
export type ReceituarioUncheckedUpdateManyWithoutMedicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requerimentoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusReceituarioFieldUpdateOperationsInput | $Enums.StatusReceituario;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ocorrencia?: Prisma.IntFieldUpdateOperationsInput | number;
    data_ocorrencia?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioCountOutputType = {
    ReceituarioMedicamentos: number;
};
export type ReceituarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ReceituarioMedicamentos?: boolean | ReceituarioCountOutputTypeCountReceituarioMedicamentosArgs;
};
export type ReceituarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioCountOutputTypeSelect<ExtArgs> | null;
};
export type ReceituarioCountOutputTypeCountReceituarioMedicamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioMedicamentosWhereInput;
};
export type ReceituarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requerimentoId?: boolean;
    status?: boolean;
    numero?: boolean;
    data?: boolean;
    ocorrencia?: boolean;
    data_ocorrencia?: boolean;
    medicoId?: boolean;
    baseId?: boolean;
    ambulanciaId?: boolean;
    obs?: boolean;
    userId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Medico?: boolean | Prisma.Receituario$MedicoArgs<ExtArgs>;
    Requerimento?: boolean | Prisma.Receituario$RequerimentoArgs<ExtArgs>;
    Base?: boolean | Prisma.BaseDefaultArgs<ExtArgs>;
    Ambulancia?: boolean | Prisma.Receituario$AmbulanciaArgs<ExtArgs>;
    ReceituarioMedicamentos?: boolean | Prisma.Receituario$ReceituarioMedicamentosArgs<ExtArgs>;
    _count?: boolean | Prisma.ReceituarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["receituario"]>;
export type ReceituarioSelectScalar = {
    id?: boolean;
    requerimentoId?: boolean;
    status?: boolean;
    numero?: boolean;
    data?: boolean;
    ocorrencia?: boolean;
    data_ocorrencia?: boolean;
    medicoId?: boolean;
    baseId?: boolean;
    ambulanciaId?: boolean;
    obs?: boolean;
    userId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type ReceituarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requerimentoId" | "status" | "numero" | "data" | "ocorrencia" | "data_ocorrencia" | "medicoId" | "baseId" | "ambulanciaId" | "obs" | "userId" | "created_at" | "updated_at", ExtArgs["result"]["receituario"]>;
export type ReceituarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Medico?: boolean | Prisma.Receituario$MedicoArgs<ExtArgs>;
    Requerimento?: boolean | Prisma.Receituario$RequerimentoArgs<ExtArgs>;
    Base?: boolean | Prisma.BaseDefaultArgs<ExtArgs>;
    Ambulancia?: boolean | Prisma.Receituario$AmbulanciaArgs<ExtArgs>;
    ReceituarioMedicamentos?: boolean | Prisma.Receituario$ReceituarioMedicamentosArgs<ExtArgs>;
    _count?: boolean | Prisma.ReceituarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ReceituarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Receituario";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
        Medico: Prisma.$MedicoPayload<ExtArgs> | null;
        Requerimento: Prisma.$RequerimentoPayload<ExtArgs> | null;
        Base: Prisma.$BasePayload<ExtArgs>;
        Ambulancia: Prisma.$AmbulanciaPayload<ExtArgs> | null;
        ReceituarioMedicamentos: Prisma.$ReceituarioMedicamentosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requerimentoId: string | null;
        status: $Enums.StatusReceituario;
        numero: string;
        data: Date;
        ocorrencia: number;
        data_ocorrencia: Date;
        medicoId: string;
        baseId: string;
        ambulanciaId: string;
        obs: string | null;
        userId: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["receituario"]>;
    composites: {};
};
export type ReceituarioGetPayload<S extends boolean | null | undefined | ReceituarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload, S>;
export type ReceituarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReceituarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: ReceituarioCountAggregateInputType | true;
};
export interface ReceituarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Receituario'];
        meta: {
            name: 'Receituario';
        };
    };
    findUnique<T extends ReceituarioFindUniqueArgs>(args: Prisma.SelectSubset<T, ReceituarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReceituarioClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReceituarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReceituarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReceituarioClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReceituarioFindFirstArgs>(args?: Prisma.SelectSubset<T, ReceituarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReceituarioClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReceituarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReceituarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReceituarioClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReceituarioFindManyArgs>(args?: Prisma.SelectSubset<T, ReceituarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReceituarioCreateArgs>(args: Prisma.SelectSubset<T, ReceituarioCreateArgs<ExtArgs>>): Prisma.Prisma__ReceituarioClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReceituarioCreateManyArgs>(args?: Prisma.SelectSubset<T, ReceituarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ReceituarioDeleteArgs>(args: Prisma.SelectSubset<T, ReceituarioDeleteArgs<ExtArgs>>): Prisma.Prisma__ReceituarioClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReceituarioUpdateArgs>(args: Prisma.SelectSubset<T, ReceituarioUpdateArgs<ExtArgs>>): Prisma.Prisma__ReceituarioClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReceituarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReceituarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReceituarioUpdateManyArgs>(args: Prisma.SelectSubset<T, ReceituarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ReceituarioUpsertArgs>(args: Prisma.SelectSubset<T, ReceituarioUpsertArgs<ExtArgs>>): Prisma.Prisma__ReceituarioClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReceituarioCountArgs>(args?: Prisma.Subset<T, ReceituarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReceituarioCountAggregateOutputType> : number>;
    aggregate<T extends ReceituarioAggregateArgs>(args: Prisma.Subset<T, ReceituarioAggregateArgs>): Prisma.PrismaPromise<GetReceituarioAggregateType<T>>;
    groupBy<T extends ReceituarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReceituarioGroupByArgs['orderBy'];
    } : {
        orderBy?: ReceituarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReceituarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceituarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReceituarioFieldRefs;
}
export interface Prisma__ReceituarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Medico<T extends Prisma.Receituario$MedicoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Receituario$MedicoArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    Requerimento<T extends Prisma.Receituario$RequerimentoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Receituario$RequerimentoArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    Base<T extends Prisma.BaseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BaseDefaultArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Ambulancia<T extends Prisma.Receituario$AmbulanciaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Receituario$AmbulanciaArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ReceituarioMedicamentos<T extends Prisma.Receituario$ReceituarioMedicamentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Receituario$ReceituarioMedicamentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReceituarioFieldRefs {
    readonly id: Prisma.FieldRef<"Receituario", 'String'>;
    readonly requerimentoId: Prisma.FieldRef<"Receituario", 'String'>;
    readonly status: Prisma.FieldRef<"Receituario", 'StatusReceituario'>;
    readonly numero: Prisma.FieldRef<"Receituario", 'String'>;
    readonly data: Prisma.FieldRef<"Receituario", 'DateTime'>;
    readonly ocorrencia: Prisma.FieldRef<"Receituario", 'Int'>;
    readonly data_ocorrencia: Prisma.FieldRef<"Receituario", 'DateTime'>;
    readonly medicoId: Prisma.FieldRef<"Receituario", 'String'>;
    readonly baseId: Prisma.FieldRef<"Receituario", 'String'>;
    readonly ambulanciaId: Prisma.FieldRef<"Receituario", 'String'>;
    readonly obs: Prisma.FieldRef<"Receituario", 'String'>;
    readonly userId: Prisma.FieldRef<"Receituario", 'String'>;
    readonly created_at: Prisma.FieldRef<"Receituario", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Receituario", 'DateTime'>;
}
export type ReceituarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    where: Prisma.ReceituarioWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    where: Prisma.ReceituarioWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    where?: Prisma.ReceituarioWhereInput;
    orderBy?: Prisma.ReceituarioOrderByWithRelationInput | Prisma.ReceituarioOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceituarioScalarFieldEnum | Prisma.ReceituarioScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    where?: Prisma.ReceituarioWhereInput;
    orderBy?: Prisma.ReceituarioOrderByWithRelationInput | Prisma.ReceituarioOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceituarioScalarFieldEnum | Prisma.ReceituarioScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    where?: Prisma.ReceituarioWhereInput;
    orderBy?: Prisma.ReceituarioOrderByWithRelationInput | Prisma.ReceituarioOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceituarioScalarFieldEnum | Prisma.ReceituarioScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReceituarioCreateInput, Prisma.ReceituarioUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReceituarioCreateManyInput | Prisma.ReceituarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReceituarioUpdateInput, Prisma.ReceituarioUncheckedUpdateInput>;
    where: Prisma.ReceituarioWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReceituarioUpdateManyMutationInput, Prisma.ReceituarioUncheckedUpdateManyInput>;
    where?: Prisma.ReceituarioWhereInput;
    limit?: number;
};
export type ReceituarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    where: Prisma.ReceituarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioCreateInput, Prisma.ReceituarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReceituarioUpdateInput, Prisma.ReceituarioUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
    where: Prisma.ReceituarioWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioWhereInput;
    limit?: number;
};
export type Receituario$MedicoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where?: Prisma.MedicoWhereInput;
};
export type Receituario$RequerimentoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoWhereInput;
};
export type Receituario$AmbulanciaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where?: Prisma.AmbulanciaWhereInput;
};
export type Receituario$ReceituarioMedicamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReceituarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioInclude<ExtArgs> | null;
};
