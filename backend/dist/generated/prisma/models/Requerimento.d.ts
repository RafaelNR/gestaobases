import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RequerimentoModel = runtime.Types.Result.DefaultSelection<Prisma.$RequerimentoPayload>;
export type AggregateRequerimento = {
    _count: RequerimentoCountAggregateOutputType | null;
    _avg: RequerimentoAvgAggregateOutputType | null;
    _sum: RequerimentoSumAggregateOutputType | null;
    _min: RequerimentoMinAggregateOutputType | null;
    _max: RequerimentoMaxAggregateOutputType | null;
};
export type RequerimentoAvgAggregateOutputType = {
    numero: number | null;
};
export type RequerimentoSumAggregateOutputType = {
    numero: number | null;
};
export type RequerimentoMinAggregateOutputType = {
    id: string | null;
    numero: number | null;
    tipo: $Enums.TipoRequerimento | null;
    status: $Enums.Status | null;
    data_inicio: Date | null;
    data_fim: Date | null;
    base: string | null;
    setor: string | null;
    cargo: string | null;
    userId: string | null;
    ambulanciaId: string | null;
    obs: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RequerimentoMaxAggregateOutputType = {
    id: string | null;
    numero: number | null;
    tipo: $Enums.TipoRequerimento | null;
    status: $Enums.Status | null;
    data_inicio: Date | null;
    data_fim: Date | null;
    base: string | null;
    setor: string | null;
    cargo: string | null;
    userId: string | null;
    ambulanciaId: string | null;
    obs: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RequerimentoCountAggregateOutputType = {
    id: number;
    numero: number;
    tipo: number;
    status: number;
    data_inicio: number;
    data_fim: number;
    base: number;
    setor: number;
    cargo: number;
    userId: number;
    ambulanciaId: number;
    obs: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type RequerimentoAvgAggregateInputType = {
    numero?: true;
};
export type RequerimentoSumAggregateInputType = {
    numero?: true;
};
export type RequerimentoMinAggregateInputType = {
    id?: true;
    numero?: true;
    tipo?: true;
    status?: true;
    data_inicio?: true;
    data_fim?: true;
    base?: true;
    setor?: true;
    cargo?: true;
    userId?: true;
    ambulanciaId?: true;
    obs?: true;
    created_at?: true;
    updated_at?: true;
};
export type RequerimentoMaxAggregateInputType = {
    id?: true;
    numero?: true;
    tipo?: true;
    status?: true;
    data_inicio?: true;
    data_fim?: true;
    base?: true;
    setor?: true;
    cargo?: true;
    userId?: true;
    ambulanciaId?: true;
    obs?: true;
    created_at?: true;
    updated_at?: true;
};
export type RequerimentoCountAggregateInputType = {
    id?: true;
    numero?: true;
    tipo?: true;
    status?: true;
    data_inicio?: true;
    data_fim?: true;
    base?: true;
    setor?: true;
    cargo?: true;
    userId?: true;
    ambulanciaId?: true;
    obs?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type RequerimentoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoWhereInput;
    orderBy?: Prisma.RequerimentoOrderByWithRelationInput | Prisma.RequerimentoOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RequerimentoCountAggregateInputType;
    _avg?: RequerimentoAvgAggregateInputType;
    _sum?: RequerimentoSumAggregateInputType;
    _min?: RequerimentoMinAggregateInputType;
    _max?: RequerimentoMaxAggregateInputType;
};
export type GetRequerimentoAggregateType<T extends RequerimentoAggregateArgs> = {
    [P in keyof T & keyof AggregateRequerimento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRequerimento[P]> : Prisma.GetScalarType<T[P], AggregateRequerimento[P]>;
};
export type RequerimentoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoWhereInput;
    orderBy?: Prisma.RequerimentoOrderByWithAggregationInput | Prisma.RequerimentoOrderByWithAggregationInput[];
    by: Prisma.RequerimentoScalarFieldEnum[] | Prisma.RequerimentoScalarFieldEnum;
    having?: Prisma.RequerimentoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RequerimentoCountAggregateInputType | true;
    _avg?: RequerimentoAvgAggregateInputType;
    _sum?: RequerimentoSumAggregateInputType;
    _min?: RequerimentoMinAggregateInputType;
    _max?: RequerimentoMaxAggregateInputType;
};
export type RequerimentoGroupByOutputType = {
    id: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status: $Enums.Status;
    data_inicio: Date;
    data_fim: Date | null;
    base: string;
    setor: string;
    cargo: string;
    userId: string;
    ambulanciaId: string | null;
    obs: string | null;
    created_at: Date;
    updated_at: Date;
    _count: RequerimentoCountAggregateOutputType | null;
    _avg: RequerimentoAvgAggregateOutputType | null;
    _sum: RequerimentoSumAggregateOutputType | null;
    _min: RequerimentoMinAggregateOutputType | null;
    _max: RequerimentoMaxAggregateOutputType | null;
};
export type GetRequerimentoGroupByPayload<T extends RequerimentoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RequerimentoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RequerimentoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RequerimentoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RequerimentoGroupByOutputType[P]>;
}>>;
export type RequerimentoWhereInput = {
    AND?: Prisma.RequerimentoWhereInput | Prisma.RequerimentoWhereInput[];
    OR?: Prisma.RequerimentoWhereInput[];
    NOT?: Prisma.RequerimentoWhereInput | Prisma.RequerimentoWhereInput[];
    id?: Prisma.StringFilter<"Requerimento"> | string;
    numero?: Prisma.IntFilter<"Requerimento"> | number;
    tipo?: Prisma.EnumTipoRequerimentoFilter<"Requerimento"> | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFilter<"Requerimento"> | $Enums.Status;
    data_inicio?: Prisma.DateTimeFilter<"Requerimento"> | Date | string;
    data_fim?: Prisma.DateTimeNullableFilter<"Requerimento"> | Date | string | null;
    base?: Prisma.StringFilter<"Requerimento"> | string;
    setor?: Prisma.StringFilter<"Requerimento"> | string;
    cargo?: Prisma.StringFilter<"Requerimento"> | string;
    userId?: Prisma.StringFilter<"Requerimento"> | string;
    ambulanciaId?: Prisma.StringNullableFilter<"Requerimento"> | string | null;
    obs?: Prisma.StringNullableFilter<"Requerimento"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Requerimento"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Requerimento"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Setor?: Prisma.XOR<Prisma.SetorScalarRelationFilter, Prisma.SetorWhereInput>;
    Cargo?: Prisma.XOR<Prisma.CargoScalarRelationFilter, Prisma.CargoWhereInput>;
    Base?: Prisma.XOR<Prisma.BaseScalarRelationFilter, Prisma.BaseWhereInput>;
    Ambulancia?: Prisma.XOR<Prisma.AmbulanciaNullableScalarRelationFilter, Prisma.AmbulanciaWhereInput> | null;
    RequerimentoStatus?: Prisma.RequerimentoStatusListRelationFilter;
    RequerimentoItems?: Prisma.RequerimentoItemListRelationFilter;
    Receituarios?: Prisma.ReceituarioListRelationFilter;
};
export type RequerimentoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_inicio?: Prisma.SortOrder;
    data_fim?: Prisma.SortOrderInput | Prisma.SortOrder;
    base?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    obs?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    Setor?: Prisma.SetorOrderByWithRelationInput;
    Cargo?: Prisma.CargoOrderByWithRelationInput;
    Base?: Prisma.BaseOrderByWithRelationInput;
    Ambulancia?: Prisma.AmbulanciaOrderByWithRelationInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusOrderByRelationAggregateInput;
    RequerimentoItems?: Prisma.RequerimentoItemOrderByRelationAggregateInput;
    Receituarios?: Prisma.ReceituarioOrderByRelationAggregateInput;
    _relevance?: Prisma.RequerimentoOrderByRelevanceInput;
};
export type RequerimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    numero?: number;
    AND?: Prisma.RequerimentoWhereInput | Prisma.RequerimentoWhereInput[];
    OR?: Prisma.RequerimentoWhereInput[];
    NOT?: Prisma.RequerimentoWhereInput | Prisma.RequerimentoWhereInput[];
    tipo?: Prisma.EnumTipoRequerimentoFilter<"Requerimento"> | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFilter<"Requerimento"> | $Enums.Status;
    data_inicio?: Prisma.DateTimeFilter<"Requerimento"> | Date | string;
    data_fim?: Prisma.DateTimeNullableFilter<"Requerimento"> | Date | string | null;
    base?: Prisma.StringFilter<"Requerimento"> | string;
    setor?: Prisma.StringFilter<"Requerimento"> | string;
    cargo?: Prisma.StringFilter<"Requerimento"> | string;
    userId?: Prisma.StringFilter<"Requerimento"> | string;
    ambulanciaId?: Prisma.StringNullableFilter<"Requerimento"> | string | null;
    obs?: Prisma.StringNullableFilter<"Requerimento"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Requerimento"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Requerimento"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Setor?: Prisma.XOR<Prisma.SetorScalarRelationFilter, Prisma.SetorWhereInput>;
    Cargo?: Prisma.XOR<Prisma.CargoScalarRelationFilter, Prisma.CargoWhereInput>;
    Base?: Prisma.XOR<Prisma.BaseScalarRelationFilter, Prisma.BaseWhereInput>;
    Ambulancia?: Prisma.XOR<Prisma.AmbulanciaNullableScalarRelationFilter, Prisma.AmbulanciaWhereInput> | null;
    RequerimentoStatus?: Prisma.RequerimentoStatusListRelationFilter;
    RequerimentoItems?: Prisma.RequerimentoItemListRelationFilter;
    Receituarios?: Prisma.ReceituarioListRelationFilter;
}, "id" | "numero">;
export type RequerimentoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_inicio?: Prisma.SortOrder;
    data_fim?: Prisma.SortOrderInput | Prisma.SortOrder;
    base?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    obs?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.RequerimentoCountOrderByAggregateInput;
    _avg?: Prisma.RequerimentoAvgOrderByAggregateInput;
    _max?: Prisma.RequerimentoMaxOrderByAggregateInput;
    _min?: Prisma.RequerimentoMinOrderByAggregateInput;
    _sum?: Prisma.RequerimentoSumOrderByAggregateInput;
};
export type RequerimentoScalarWhereWithAggregatesInput = {
    AND?: Prisma.RequerimentoScalarWhereWithAggregatesInput | Prisma.RequerimentoScalarWhereWithAggregatesInput[];
    OR?: Prisma.RequerimentoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RequerimentoScalarWhereWithAggregatesInput | Prisma.RequerimentoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Requerimento"> | string;
    numero?: Prisma.IntWithAggregatesFilter<"Requerimento"> | number;
    tipo?: Prisma.EnumTipoRequerimentoWithAggregatesFilter<"Requerimento"> | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusWithAggregatesFilter<"Requerimento"> | $Enums.Status;
    data_inicio?: Prisma.DateTimeWithAggregatesFilter<"Requerimento"> | Date | string;
    data_fim?: Prisma.DateTimeNullableWithAggregatesFilter<"Requerimento"> | Date | string | null;
    base?: Prisma.StringWithAggregatesFilter<"Requerimento"> | string;
    setor?: Prisma.StringWithAggregatesFilter<"Requerimento"> | string;
    cargo?: Prisma.StringWithAggregatesFilter<"Requerimento"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Requerimento"> | string;
    ambulanciaId?: Prisma.StringNullableWithAggregatesFilter<"Requerimento"> | string | null;
    obs?: Prisma.StringNullableWithAggregatesFilter<"Requerimento"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Requerimento"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Requerimento"> | Date | string;
};
export type RequerimentoCreateInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentosInput;
    Setor: Prisma.SetorCreateNestedOneWithoutRequerimentosInput;
    Cargo: Prisma.CargoCreateNestedOneWithoutRequerimentosInput;
    Base: Prisma.BaseCreateNestedOneWithoutRequerimentosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutRequerimentosInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUncheckedCreateInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    cargo: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentosNestedInput;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutRequerimentosNestedInput;
    Cargo?: Prisma.CargoUpdateOneRequiredWithoutRequerimentosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutRequerimentosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutRequerimentosNestedInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoCreateManyInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    cargo: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoListRelationFilter = {
    every?: Prisma.RequerimentoWhereInput;
    some?: Prisma.RequerimentoWhereInput;
    none?: Prisma.RequerimentoWhereInput;
};
export type RequerimentoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RequerimentoOrderByRelevanceInput = {
    fields: Prisma.RequerimentoOrderByRelevanceFieldEnum | Prisma.RequerimentoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type RequerimentoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_inicio?: Prisma.SortOrder;
    data_fim?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrder;
    obs?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RequerimentoAvgOrderByAggregateInput = {
    numero?: Prisma.SortOrder;
};
export type RequerimentoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_inicio?: Prisma.SortOrder;
    data_fim?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrder;
    obs?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RequerimentoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_inicio?: Prisma.SortOrder;
    data_fim?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    setor?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ambulanciaId?: Prisma.SortOrder;
    obs?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RequerimentoSumOrderByAggregateInput = {
    numero?: Prisma.SortOrder;
};
export type RequerimentoScalarRelationFilter = {
    is?: Prisma.RequerimentoWhereInput;
    isNot?: Prisma.RequerimentoWhereInput;
};
export type RequerimentoNullableScalarRelationFilter = {
    is?: Prisma.RequerimentoWhereInput | null;
    isNot?: Prisma.RequerimentoWhereInput | null;
};
export type RequerimentoCreateNestedManyWithoutSetorInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutSetorInput, Prisma.RequerimentoUncheckedCreateWithoutSetorInput> | Prisma.RequerimentoCreateWithoutSetorInput[] | Prisma.RequerimentoUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutSetorInput | Prisma.RequerimentoCreateOrConnectWithoutSetorInput[];
    createMany?: Prisma.RequerimentoCreateManySetorInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUncheckedCreateNestedManyWithoutSetorInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutSetorInput, Prisma.RequerimentoUncheckedCreateWithoutSetorInput> | Prisma.RequerimentoCreateWithoutSetorInput[] | Prisma.RequerimentoUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutSetorInput | Prisma.RequerimentoCreateOrConnectWithoutSetorInput[];
    createMany?: Prisma.RequerimentoCreateManySetorInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUpdateManyWithoutSetorNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutSetorInput, Prisma.RequerimentoUncheckedCreateWithoutSetorInput> | Prisma.RequerimentoCreateWithoutSetorInput[] | Prisma.RequerimentoUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutSetorInput | Prisma.RequerimentoCreateOrConnectWithoutSetorInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutSetorInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutSetorInput[];
    createMany?: Prisma.RequerimentoCreateManySetorInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutSetorInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutSetorInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutSetorInput | Prisma.RequerimentoUpdateManyWithWhereWithoutSetorInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type RequerimentoUncheckedUpdateManyWithoutSetorNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutSetorInput, Prisma.RequerimentoUncheckedCreateWithoutSetorInput> | Prisma.RequerimentoCreateWithoutSetorInput[] | Prisma.RequerimentoUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutSetorInput | Prisma.RequerimentoCreateOrConnectWithoutSetorInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutSetorInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutSetorInput[];
    createMany?: Prisma.RequerimentoCreateManySetorInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutSetorInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutSetorInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutSetorInput | Prisma.RequerimentoUpdateManyWithWhereWithoutSetorInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type RequerimentoCreateNestedManyWithoutCargoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutCargoInput, Prisma.RequerimentoUncheckedCreateWithoutCargoInput> | Prisma.RequerimentoCreateWithoutCargoInput[] | Prisma.RequerimentoUncheckedCreateWithoutCargoInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutCargoInput | Prisma.RequerimentoCreateOrConnectWithoutCargoInput[];
    createMany?: Prisma.RequerimentoCreateManyCargoInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUncheckedCreateNestedManyWithoutCargoInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutCargoInput, Prisma.RequerimentoUncheckedCreateWithoutCargoInput> | Prisma.RequerimentoCreateWithoutCargoInput[] | Prisma.RequerimentoUncheckedCreateWithoutCargoInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutCargoInput | Prisma.RequerimentoCreateOrConnectWithoutCargoInput[];
    createMany?: Prisma.RequerimentoCreateManyCargoInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUpdateManyWithoutCargoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutCargoInput, Prisma.RequerimentoUncheckedCreateWithoutCargoInput> | Prisma.RequerimentoCreateWithoutCargoInput[] | Prisma.RequerimentoUncheckedCreateWithoutCargoInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutCargoInput | Prisma.RequerimentoCreateOrConnectWithoutCargoInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutCargoInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutCargoInput[];
    createMany?: Prisma.RequerimentoCreateManyCargoInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutCargoInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutCargoInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutCargoInput | Prisma.RequerimentoUpdateManyWithWhereWithoutCargoInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type RequerimentoUncheckedUpdateManyWithoutCargoNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutCargoInput, Prisma.RequerimentoUncheckedCreateWithoutCargoInput> | Prisma.RequerimentoCreateWithoutCargoInput[] | Prisma.RequerimentoUncheckedCreateWithoutCargoInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutCargoInput | Prisma.RequerimentoCreateOrConnectWithoutCargoInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutCargoInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutCargoInput[];
    createMany?: Prisma.RequerimentoCreateManyCargoInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutCargoInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutCargoInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutCargoInput | Prisma.RequerimentoUpdateManyWithWhereWithoutCargoInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type RequerimentoCreateNestedManyWithoutBaseInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutBaseInput, Prisma.RequerimentoUncheckedCreateWithoutBaseInput> | Prisma.RequerimentoCreateWithoutBaseInput[] | Prisma.RequerimentoUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutBaseInput | Prisma.RequerimentoCreateOrConnectWithoutBaseInput[];
    createMany?: Prisma.RequerimentoCreateManyBaseInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUncheckedCreateNestedManyWithoutBaseInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutBaseInput, Prisma.RequerimentoUncheckedCreateWithoutBaseInput> | Prisma.RequerimentoCreateWithoutBaseInput[] | Prisma.RequerimentoUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutBaseInput | Prisma.RequerimentoCreateOrConnectWithoutBaseInput[];
    createMany?: Prisma.RequerimentoCreateManyBaseInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUpdateManyWithoutBaseNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutBaseInput, Prisma.RequerimentoUncheckedCreateWithoutBaseInput> | Prisma.RequerimentoCreateWithoutBaseInput[] | Prisma.RequerimentoUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutBaseInput | Prisma.RequerimentoCreateOrConnectWithoutBaseInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutBaseInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutBaseInput[];
    createMany?: Prisma.RequerimentoCreateManyBaseInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutBaseInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutBaseInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutBaseInput | Prisma.RequerimentoUpdateManyWithWhereWithoutBaseInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type RequerimentoUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutBaseInput, Prisma.RequerimentoUncheckedCreateWithoutBaseInput> | Prisma.RequerimentoCreateWithoutBaseInput[] | Prisma.RequerimentoUncheckedCreateWithoutBaseInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutBaseInput | Prisma.RequerimentoCreateOrConnectWithoutBaseInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutBaseInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutBaseInput[];
    createMany?: Prisma.RequerimentoCreateManyBaseInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutBaseInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutBaseInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutBaseInput | Prisma.RequerimentoUpdateManyWithWhereWithoutBaseInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type RequerimentoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutUserInput, Prisma.RequerimentoUncheckedCreateWithoutUserInput> | Prisma.RequerimentoCreateWithoutUserInput[] | Prisma.RequerimentoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutUserInput | Prisma.RequerimentoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RequerimentoCreateManyUserInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutUserInput, Prisma.RequerimentoUncheckedCreateWithoutUserInput> | Prisma.RequerimentoCreateWithoutUserInput[] | Prisma.RequerimentoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutUserInput | Prisma.RequerimentoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RequerimentoCreateManyUserInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutUserInput, Prisma.RequerimentoUncheckedCreateWithoutUserInput> | Prisma.RequerimentoCreateWithoutUserInput[] | Prisma.RequerimentoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutUserInput | Prisma.RequerimentoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutUserInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RequerimentoCreateManyUserInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutUserInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutUserInput | Prisma.RequerimentoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type RequerimentoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutUserInput, Prisma.RequerimentoUncheckedCreateWithoutUserInput> | Prisma.RequerimentoCreateWithoutUserInput[] | Prisma.RequerimentoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutUserInput | Prisma.RequerimentoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutUserInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RequerimentoCreateManyUserInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutUserInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutUserInput | Prisma.RequerimentoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type RequerimentoCreateNestedManyWithoutAmbulanciaInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutAmbulanciaInput, Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput> | Prisma.RequerimentoCreateWithoutAmbulanciaInput[] | Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutAmbulanciaInput | Prisma.RequerimentoCreateOrConnectWithoutAmbulanciaInput[];
    createMany?: Prisma.RequerimentoCreateManyAmbulanciaInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUncheckedCreateNestedManyWithoutAmbulanciaInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutAmbulanciaInput, Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput> | Prisma.RequerimentoCreateWithoutAmbulanciaInput[] | Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutAmbulanciaInput | Prisma.RequerimentoCreateOrConnectWithoutAmbulanciaInput[];
    createMany?: Prisma.RequerimentoCreateManyAmbulanciaInputEnvelope;
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
};
export type RequerimentoUpdateManyWithoutAmbulanciaNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutAmbulanciaInput, Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput> | Prisma.RequerimentoCreateWithoutAmbulanciaInput[] | Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutAmbulanciaInput | Prisma.RequerimentoCreateOrConnectWithoutAmbulanciaInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutAmbulanciaInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutAmbulanciaInput[];
    createMany?: Prisma.RequerimentoCreateManyAmbulanciaInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutAmbulanciaInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutAmbulanciaInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutAmbulanciaInput | Prisma.RequerimentoUpdateManyWithWhereWithoutAmbulanciaInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type RequerimentoUncheckedUpdateManyWithoutAmbulanciaNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutAmbulanciaInput, Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput> | Prisma.RequerimentoCreateWithoutAmbulanciaInput[] | Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput[];
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutAmbulanciaInput | Prisma.RequerimentoCreateOrConnectWithoutAmbulanciaInput[];
    upsert?: Prisma.RequerimentoUpsertWithWhereUniqueWithoutAmbulanciaInput | Prisma.RequerimentoUpsertWithWhereUniqueWithoutAmbulanciaInput[];
    createMany?: Prisma.RequerimentoCreateManyAmbulanciaInputEnvelope;
    set?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    disconnect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    delete?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    connect?: Prisma.RequerimentoWhereUniqueInput | Prisma.RequerimentoWhereUniqueInput[];
    update?: Prisma.RequerimentoUpdateWithWhereUniqueWithoutAmbulanciaInput | Prisma.RequerimentoUpdateWithWhereUniqueWithoutAmbulanciaInput[];
    updateMany?: Prisma.RequerimentoUpdateManyWithWhereWithoutAmbulanciaInput | Prisma.RequerimentoUpdateManyWithWhereWithoutAmbulanciaInput[];
    deleteMany?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
};
export type EnumTipoRequerimentoFieldUpdateOperationsInput = {
    set?: $Enums.TipoRequerimento;
};
export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status;
};
export type RequerimentoCreateNestedOneWithoutRequerimentoStatusInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutRequerimentoStatusInput, Prisma.RequerimentoUncheckedCreateWithoutRequerimentoStatusInput>;
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutRequerimentoStatusInput;
    connect?: Prisma.RequerimentoWhereUniqueInput;
};
export type RequerimentoUpdateOneRequiredWithoutRequerimentoStatusNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutRequerimentoStatusInput, Prisma.RequerimentoUncheckedCreateWithoutRequerimentoStatusInput>;
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutRequerimentoStatusInput;
    upsert?: Prisma.RequerimentoUpsertWithoutRequerimentoStatusInput;
    connect?: Prisma.RequerimentoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RequerimentoUpdateToOneWithWhereWithoutRequerimentoStatusInput, Prisma.RequerimentoUpdateWithoutRequerimentoStatusInput>, Prisma.RequerimentoUncheckedUpdateWithoutRequerimentoStatusInput>;
};
export type RequerimentoCreateNestedOneWithoutRequerimentoItemsInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutRequerimentoItemsInput, Prisma.RequerimentoUncheckedCreateWithoutRequerimentoItemsInput>;
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutRequerimentoItemsInput;
    connect?: Prisma.RequerimentoWhereUniqueInput;
};
export type RequerimentoUpdateOneRequiredWithoutRequerimentoItemsNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutRequerimentoItemsInput, Prisma.RequerimentoUncheckedCreateWithoutRequerimentoItemsInput>;
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutRequerimentoItemsInput;
    upsert?: Prisma.RequerimentoUpsertWithoutRequerimentoItemsInput;
    connect?: Prisma.RequerimentoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RequerimentoUpdateToOneWithWhereWithoutRequerimentoItemsInput, Prisma.RequerimentoUpdateWithoutRequerimentoItemsInput>, Prisma.RequerimentoUncheckedUpdateWithoutRequerimentoItemsInput>;
};
export type RequerimentoCreateNestedOneWithoutReceituariosInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutReceituariosInput, Prisma.RequerimentoUncheckedCreateWithoutReceituariosInput>;
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutReceituariosInput;
    connect?: Prisma.RequerimentoWhereUniqueInput;
};
export type RequerimentoUpdateOneWithoutReceituariosNestedInput = {
    create?: Prisma.XOR<Prisma.RequerimentoCreateWithoutReceituariosInput, Prisma.RequerimentoUncheckedCreateWithoutReceituariosInput>;
    connectOrCreate?: Prisma.RequerimentoCreateOrConnectWithoutReceituariosInput;
    upsert?: Prisma.RequerimentoUpsertWithoutReceituariosInput;
    disconnect?: Prisma.RequerimentoWhereInput | boolean;
    delete?: Prisma.RequerimentoWhereInput | boolean;
    connect?: Prisma.RequerimentoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RequerimentoUpdateToOneWithWhereWithoutReceituariosInput, Prisma.RequerimentoUpdateWithoutReceituariosInput>, Prisma.RequerimentoUncheckedUpdateWithoutReceituariosInput>;
};
export type RequerimentoCreateWithoutSetorInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentosInput;
    Cargo: Prisma.CargoCreateNestedOneWithoutRequerimentosInput;
    Base: Prisma.BaseCreateNestedOneWithoutRequerimentosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutRequerimentosInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUncheckedCreateWithoutSetorInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    cargo: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoCreateOrConnectWithoutSetorInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutSetorInput, Prisma.RequerimentoUncheckedCreateWithoutSetorInput>;
};
export type RequerimentoCreateManySetorInputEnvelope = {
    data: Prisma.RequerimentoCreateManySetorInput | Prisma.RequerimentoCreateManySetorInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoUpsertWithWhereUniqueWithoutSetorInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoUpdateWithoutSetorInput, Prisma.RequerimentoUncheckedUpdateWithoutSetorInput>;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutSetorInput, Prisma.RequerimentoUncheckedCreateWithoutSetorInput>;
};
export type RequerimentoUpdateWithWhereUniqueWithoutSetorInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateWithoutSetorInput, Prisma.RequerimentoUncheckedUpdateWithoutSetorInput>;
};
export type RequerimentoUpdateManyWithWhereWithoutSetorInput = {
    where: Prisma.RequerimentoScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateManyMutationInput, Prisma.RequerimentoUncheckedUpdateManyWithoutSetorInput>;
};
export type RequerimentoScalarWhereInput = {
    AND?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
    OR?: Prisma.RequerimentoScalarWhereInput[];
    NOT?: Prisma.RequerimentoScalarWhereInput | Prisma.RequerimentoScalarWhereInput[];
    id?: Prisma.StringFilter<"Requerimento"> | string;
    numero?: Prisma.IntFilter<"Requerimento"> | number;
    tipo?: Prisma.EnumTipoRequerimentoFilter<"Requerimento"> | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFilter<"Requerimento"> | $Enums.Status;
    data_inicio?: Prisma.DateTimeFilter<"Requerimento"> | Date | string;
    data_fim?: Prisma.DateTimeNullableFilter<"Requerimento"> | Date | string | null;
    base?: Prisma.StringFilter<"Requerimento"> | string;
    setor?: Prisma.StringFilter<"Requerimento"> | string;
    cargo?: Prisma.StringFilter<"Requerimento"> | string;
    userId?: Prisma.StringFilter<"Requerimento"> | string;
    ambulanciaId?: Prisma.StringNullableFilter<"Requerimento"> | string | null;
    obs?: Prisma.StringNullableFilter<"Requerimento"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Requerimento"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Requerimento"> | Date | string;
};
export type RequerimentoCreateWithoutCargoInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentosInput;
    Setor: Prisma.SetorCreateNestedOneWithoutRequerimentosInput;
    Base: Prisma.BaseCreateNestedOneWithoutRequerimentosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutRequerimentosInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUncheckedCreateWithoutCargoInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoCreateOrConnectWithoutCargoInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutCargoInput, Prisma.RequerimentoUncheckedCreateWithoutCargoInput>;
};
export type RequerimentoCreateManyCargoInputEnvelope = {
    data: Prisma.RequerimentoCreateManyCargoInput | Prisma.RequerimentoCreateManyCargoInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoUpsertWithWhereUniqueWithoutCargoInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoUpdateWithoutCargoInput, Prisma.RequerimentoUncheckedUpdateWithoutCargoInput>;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutCargoInput, Prisma.RequerimentoUncheckedCreateWithoutCargoInput>;
};
export type RequerimentoUpdateWithWhereUniqueWithoutCargoInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateWithoutCargoInput, Prisma.RequerimentoUncheckedUpdateWithoutCargoInput>;
};
export type RequerimentoUpdateManyWithWhereWithoutCargoInput = {
    where: Prisma.RequerimentoScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateManyMutationInput, Prisma.RequerimentoUncheckedUpdateManyWithoutCargoInput>;
};
export type RequerimentoCreateWithoutBaseInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentosInput;
    Setor: Prisma.SetorCreateNestedOneWithoutRequerimentosInput;
    Cargo: Prisma.CargoCreateNestedOneWithoutRequerimentosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutRequerimentosInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUncheckedCreateWithoutBaseInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    setor: string;
    cargo: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoCreateOrConnectWithoutBaseInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutBaseInput, Prisma.RequerimentoUncheckedCreateWithoutBaseInput>;
};
export type RequerimentoCreateManyBaseInputEnvelope = {
    data: Prisma.RequerimentoCreateManyBaseInput | Prisma.RequerimentoCreateManyBaseInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoUpsertWithWhereUniqueWithoutBaseInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoUpdateWithoutBaseInput, Prisma.RequerimentoUncheckedUpdateWithoutBaseInput>;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutBaseInput, Prisma.RequerimentoUncheckedCreateWithoutBaseInput>;
};
export type RequerimentoUpdateWithWhereUniqueWithoutBaseInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateWithoutBaseInput, Prisma.RequerimentoUncheckedUpdateWithoutBaseInput>;
};
export type RequerimentoUpdateManyWithWhereWithoutBaseInput = {
    where: Prisma.RequerimentoScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateManyMutationInput, Prisma.RequerimentoUncheckedUpdateManyWithoutBaseInput>;
};
export type RequerimentoCreateWithoutUserInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    Setor: Prisma.SetorCreateNestedOneWithoutRequerimentosInput;
    Cargo: Prisma.CargoCreateNestedOneWithoutRequerimentosInput;
    Base: Prisma.BaseCreateNestedOneWithoutRequerimentosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutRequerimentosInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUncheckedCreateWithoutUserInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    cargo: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoCreateOrConnectWithoutUserInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutUserInput, Prisma.RequerimentoUncheckedCreateWithoutUserInput>;
};
export type RequerimentoCreateManyUserInputEnvelope = {
    data: Prisma.RequerimentoCreateManyUserInput | Prisma.RequerimentoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoUpdateWithoutUserInput, Prisma.RequerimentoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutUserInput, Prisma.RequerimentoUncheckedCreateWithoutUserInput>;
};
export type RequerimentoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateWithoutUserInput, Prisma.RequerimentoUncheckedUpdateWithoutUserInput>;
};
export type RequerimentoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RequerimentoScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateManyMutationInput, Prisma.RequerimentoUncheckedUpdateManyWithoutUserInput>;
};
export type RequerimentoCreateWithoutAmbulanciaInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentosInput;
    Setor: Prisma.SetorCreateNestedOneWithoutRequerimentosInput;
    Cargo: Prisma.CargoCreateNestedOneWithoutRequerimentosInput;
    Base: Prisma.BaseCreateNestedOneWithoutRequerimentosInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUncheckedCreateWithoutAmbulanciaInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    cargo: string;
    userId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoCreateOrConnectWithoutAmbulanciaInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutAmbulanciaInput, Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput>;
};
export type RequerimentoCreateManyAmbulanciaInputEnvelope = {
    data: Prisma.RequerimentoCreateManyAmbulanciaInput | Prisma.RequerimentoCreateManyAmbulanciaInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoUpsertWithWhereUniqueWithoutAmbulanciaInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequerimentoUpdateWithoutAmbulanciaInput, Prisma.RequerimentoUncheckedUpdateWithoutAmbulanciaInput>;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutAmbulanciaInput, Prisma.RequerimentoUncheckedCreateWithoutAmbulanciaInput>;
};
export type RequerimentoUpdateWithWhereUniqueWithoutAmbulanciaInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateWithoutAmbulanciaInput, Prisma.RequerimentoUncheckedUpdateWithoutAmbulanciaInput>;
};
export type RequerimentoUpdateManyWithWhereWithoutAmbulanciaInput = {
    where: Prisma.RequerimentoScalarWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateManyMutationInput, Prisma.RequerimentoUncheckedUpdateManyWithoutAmbulanciaInput>;
};
export type RequerimentoCreateWithoutRequerimentoStatusInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentosInput;
    Setor: Prisma.SetorCreateNestedOneWithoutRequerimentosInput;
    Cargo: Prisma.CargoCreateNestedOneWithoutRequerimentosInput;
    Base: Prisma.BaseCreateNestedOneWithoutRequerimentosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutRequerimentosInput;
    RequerimentoItems?: Prisma.RequerimentoItemCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUncheckedCreateWithoutRequerimentoStatusInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    cargo: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoCreateOrConnectWithoutRequerimentoStatusInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutRequerimentoStatusInput, Prisma.RequerimentoUncheckedCreateWithoutRequerimentoStatusInput>;
};
export type RequerimentoUpsertWithoutRequerimentoStatusInput = {
    update: Prisma.XOR<Prisma.RequerimentoUpdateWithoutRequerimentoStatusInput, Prisma.RequerimentoUncheckedUpdateWithoutRequerimentoStatusInput>;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutRequerimentoStatusInput, Prisma.RequerimentoUncheckedCreateWithoutRequerimentoStatusInput>;
    where?: Prisma.RequerimentoWhereInput;
};
export type RequerimentoUpdateToOneWithWhereWithoutRequerimentoStatusInput = {
    where?: Prisma.RequerimentoWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateWithoutRequerimentoStatusInput, Prisma.RequerimentoUncheckedUpdateWithoutRequerimentoStatusInput>;
};
export type RequerimentoUpdateWithoutRequerimentoStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentosNestedInput;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutRequerimentosNestedInput;
    Cargo?: Prisma.CargoUpdateOneRequiredWithoutRequerimentosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutRequerimentosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutRequerimentosNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateWithoutRequerimentoStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoCreateWithoutRequerimentoItemsInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentosInput;
    Setor: Prisma.SetorCreateNestedOneWithoutRequerimentosInput;
    Cargo: Prisma.CargoCreateNestedOneWithoutRequerimentosInput;
    Base: Prisma.BaseCreateNestedOneWithoutRequerimentosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutRequerimentosInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUncheckedCreateWithoutRequerimentoItemsInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    cargo: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedCreateNestedManyWithoutRequerimentoInput;
    Receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoCreateOrConnectWithoutRequerimentoItemsInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutRequerimentoItemsInput, Prisma.RequerimentoUncheckedCreateWithoutRequerimentoItemsInput>;
};
export type RequerimentoUpsertWithoutRequerimentoItemsInput = {
    update: Prisma.XOR<Prisma.RequerimentoUpdateWithoutRequerimentoItemsInput, Prisma.RequerimentoUncheckedUpdateWithoutRequerimentoItemsInput>;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutRequerimentoItemsInput, Prisma.RequerimentoUncheckedCreateWithoutRequerimentoItemsInput>;
    where?: Prisma.RequerimentoWhereInput;
};
export type RequerimentoUpdateToOneWithWhereWithoutRequerimentoItemsInput = {
    where?: Prisma.RequerimentoWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateWithoutRequerimentoItemsInput, Prisma.RequerimentoUncheckedUpdateWithoutRequerimentoItemsInput>;
};
export type RequerimentoUpdateWithoutRequerimentoItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentosNestedInput;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutRequerimentosNestedInput;
    Cargo?: Prisma.CargoUpdateOneRequiredWithoutRequerimentosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutRequerimentosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutRequerimentosNestedInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateWithoutRequerimentoItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoCreateWithoutReceituariosInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutRequerimentosInput;
    Setor: Prisma.SetorCreateNestedOneWithoutRequerimentosInput;
    Cargo: Prisma.CargoCreateNestedOneWithoutRequerimentosInput;
    Base: Prisma.BaseCreateNestedOneWithoutRequerimentosInput;
    Ambulancia?: Prisma.AmbulanciaCreateNestedOneWithoutRequerimentosInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoUncheckedCreateWithoutReceituariosInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    cargo: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedCreateNestedManyWithoutRequerimentoInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedCreateNestedManyWithoutRequerimentoInput;
};
export type RequerimentoCreateOrConnectWithoutReceituariosInput = {
    where: Prisma.RequerimentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutReceituariosInput, Prisma.RequerimentoUncheckedCreateWithoutReceituariosInput>;
};
export type RequerimentoUpsertWithoutReceituariosInput = {
    update: Prisma.XOR<Prisma.RequerimentoUpdateWithoutReceituariosInput, Prisma.RequerimentoUncheckedUpdateWithoutReceituariosInput>;
    create: Prisma.XOR<Prisma.RequerimentoCreateWithoutReceituariosInput, Prisma.RequerimentoUncheckedCreateWithoutReceituariosInput>;
    where?: Prisma.RequerimentoWhereInput;
};
export type RequerimentoUpdateToOneWithWhereWithoutReceituariosInput = {
    where?: Prisma.RequerimentoWhereInput;
    data: Prisma.XOR<Prisma.RequerimentoUpdateWithoutReceituariosInput, Prisma.RequerimentoUncheckedUpdateWithoutReceituariosInput>;
};
export type RequerimentoUpdateWithoutReceituariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentosNestedInput;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutRequerimentosNestedInput;
    Cargo?: Prisma.CargoUpdateOneRequiredWithoutRequerimentosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutRequerimentosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutRequerimentosNestedInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateWithoutReceituariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoCreateManySetorInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    cargo: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoUpdateWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentosNestedInput;
    Cargo?: Prisma.CargoUpdateOneRequiredWithoutRequerimentosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutRequerimentosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutRequerimentosNestedInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateManyWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoCreateManyCargoInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoUpdateWithoutCargoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentosNestedInput;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutRequerimentosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutRequerimentosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutRequerimentosNestedInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateWithoutCargoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateManyWithoutCargoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoCreateManyBaseInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    setor: string;
    cargo: string;
    userId: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoUpdateWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentosNestedInput;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutRequerimentosNestedInput;
    Cargo?: Prisma.CargoUpdateOneRequiredWithoutRequerimentosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutRequerimentosNestedInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateManyWithoutBaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoCreateManyUserInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    cargo: string;
    ambulanciaId?: string | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutRequerimentosNestedInput;
    Cargo?: Prisma.CargoUpdateOneRequiredWithoutRequerimentosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutRequerimentosNestedInput;
    Ambulancia?: Prisma.AmbulanciaUpdateOneWithoutRequerimentosNestedInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanciaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoCreateManyAmbulanciaInput = {
    id?: string;
    numero: number;
    tipo: $Enums.TipoRequerimento;
    status?: $Enums.Status;
    data_inicio: Date | string;
    data_fim?: Date | string | null;
    base: string;
    setor: string;
    cargo: string;
    userId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RequerimentoUpdateWithoutAmbulanciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutRequerimentosNestedInput;
    Setor?: Prisma.SetorUpdateOneRequiredWithoutRequerimentosNestedInput;
    Cargo?: Prisma.CargoUpdateOneRequiredWithoutRequerimentosNestedInput;
    Base?: Prisma.BaseUpdateOneRequiredWithoutRequerimentosNestedInput;
    RequerimentoStatus?: Prisma.RequerimentoStatusUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateWithoutAmbulanciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    RequerimentoStatus?: Prisma.RequerimentoStatusUncheckedUpdateManyWithoutRequerimentoNestedInput;
    RequerimentoItems?: Prisma.RequerimentoItemUncheckedUpdateManyWithoutRequerimentoNestedInput;
    Receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutRequerimentoNestedInput;
};
export type RequerimentoUncheckedUpdateManyWithoutAmbulanciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoRequerimentoFieldUpdateOperationsInput | $Enums.TipoRequerimento;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    data_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_fim?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    base?: Prisma.StringFieldUpdateOperationsInput | string;
    setor?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequerimentoCountOutputType = {
    RequerimentoStatus: number;
    RequerimentoItems: number;
    Receituarios: number;
};
export type RequerimentoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    RequerimentoStatus?: boolean | RequerimentoCountOutputTypeCountRequerimentoStatusArgs;
    RequerimentoItems?: boolean | RequerimentoCountOutputTypeCountRequerimentoItemsArgs;
    Receituarios?: boolean | RequerimentoCountOutputTypeCountReceituariosArgs;
};
export type RequerimentoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoCountOutputTypeSelect<ExtArgs> | null;
};
export type RequerimentoCountOutputTypeCountRequerimentoStatusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoStatusWhereInput;
};
export type RequerimentoCountOutputTypeCountRequerimentoItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoItemWhereInput;
};
export type RequerimentoCountOutputTypeCountReceituariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioWhereInput;
};
export type RequerimentoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    tipo?: boolean;
    status?: boolean;
    data_inicio?: boolean;
    data_fim?: boolean;
    base?: boolean;
    setor?: boolean;
    cargo?: boolean;
    userId?: boolean;
    ambulanciaId?: boolean;
    obs?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Setor?: boolean | Prisma.SetorDefaultArgs<ExtArgs>;
    Cargo?: boolean | Prisma.CargoDefaultArgs<ExtArgs>;
    Base?: boolean | Prisma.BaseDefaultArgs<ExtArgs>;
    Ambulancia?: boolean | Prisma.Requerimento$AmbulanciaArgs<ExtArgs>;
    RequerimentoStatus?: boolean | Prisma.Requerimento$RequerimentoStatusArgs<ExtArgs>;
    RequerimentoItems?: boolean | Prisma.Requerimento$RequerimentoItemsArgs<ExtArgs>;
    Receituarios?: boolean | Prisma.Requerimento$ReceituariosArgs<ExtArgs>;
    _count?: boolean | Prisma.RequerimentoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["requerimento"]>;
export type RequerimentoSelectScalar = {
    id?: boolean;
    numero?: boolean;
    tipo?: boolean;
    status?: boolean;
    data_inicio?: boolean;
    data_fim?: boolean;
    base?: boolean;
    setor?: boolean;
    cargo?: boolean;
    userId?: boolean;
    ambulanciaId?: boolean;
    obs?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type RequerimentoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "numero" | "tipo" | "status" | "data_inicio" | "data_fim" | "base" | "setor" | "cargo" | "userId" | "ambulanciaId" | "obs" | "created_at" | "updated_at", ExtArgs["result"]["requerimento"]>;
export type RequerimentoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Setor?: boolean | Prisma.SetorDefaultArgs<ExtArgs>;
    Cargo?: boolean | Prisma.CargoDefaultArgs<ExtArgs>;
    Base?: boolean | Prisma.BaseDefaultArgs<ExtArgs>;
    Ambulancia?: boolean | Prisma.Requerimento$AmbulanciaArgs<ExtArgs>;
    RequerimentoStatus?: boolean | Prisma.Requerimento$RequerimentoStatusArgs<ExtArgs>;
    RequerimentoItems?: boolean | Prisma.Requerimento$RequerimentoItemsArgs<ExtArgs>;
    Receituarios?: boolean | Prisma.Requerimento$ReceituariosArgs<ExtArgs>;
    _count?: boolean | Prisma.RequerimentoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $RequerimentoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Requerimento";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
        Setor: Prisma.$SetorPayload<ExtArgs>;
        Cargo: Prisma.$CargoPayload<ExtArgs>;
        Base: Prisma.$BasePayload<ExtArgs>;
        Ambulancia: Prisma.$AmbulanciaPayload<ExtArgs> | null;
        RequerimentoStatus: Prisma.$RequerimentoStatusPayload<ExtArgs>[];
        RequerimentoItems: Prisma.$RequerimentoItemPayload<ExtArgs>[];
        Receituarios: Prisma.$ReceituarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        numero: number;
        tipo: $Enums.TipoRequerimento;
        status: $Enums.Status;
        data_inicio: Date;
        data_fim: Date | null;
        base: string;
        setor: string;
        cargo: string;
        userId: string;
        ambulanciaId: string | null;
        obs: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["requerimento"]>;
    composites: {};
};
export type RequerimentoGetPayload<S extends boolean | null | undefined | RequerimentoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload, S>;
export type RequerimentoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RequerimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: RequerimentoCountAggregateInputType | true;
};
export interface RequerimentoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Requerimento'];
        meta: {
            name: 'Requerimento';
        };
    };
    findUnique<T extends RequerimentoFindUniqueArgs>(args: Prisma.SelectSubset<T, RequerimentoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RequerimentoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RequerimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RequerimentoFindFirstArgs>(args?: Prisma.SelectSubset<T, RequerimentoFindFirstArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RequerimentoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RequerimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RequerimentoFindManyArgs>(args?: Prisma.SelectSubset<T, RequerimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RequerimentoCreateArgs>(args: Prisma.SelectSubset<T, RequerimentoCreateArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RequerimentoCreateManyArgs>(args?: Prisma.SelectSubset<T, RequerimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends RequerimentoDeleteArgs>(args: Prisma.SelectSubset<T, RequerimentoDeleteArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RequerimentoUpdateArgs>(args: Prisma.SelectSubset<T, RequerimentoUpdateArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RequerimentoDeleteManyArgs>(args?: Prisma.SelectSubset<T, RequerimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RequerimentoUpdateManyArgs>(args: Prisma.SelectSubset<T, RequerimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends RequerimentoUpsertArgs>(args: Prisma.SelectSubset<T, RequerimentoUpsertArgs<ExtArgs>>): Prisma.Prisma__RequerimentoClient<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RequerimentoCountArgs>(args?: Prisma.Subset<T, RequerimentoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RequerimentoCountAggregateOutputType> : number>;
    aggregate<T extends RequerimentoAggregateArgs>(args: Prisma.Subset<T, RequerimentoAggregateArgs>): Prisma.PrismaPromise<GetRequerimentoAggregateType<T>>;
    groupBy<T extends RequerimentoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RequerimentoGroupByArgs['orderBy'];
    } : {
        orderBy?: RequerimentoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RequerimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequerimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RequerimentoFieldRefs;
}
export interface Prisma__RequerimentoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Setor<T extends Prisma.SetorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SetorDefaultArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Cargo<T extends Prisma.CargoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CargoDefaultArgs<ExtArgs>>): Prisma.Prisma__CargoClient<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Base<T extends Prisma.BaseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BaseDefaultArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Ambulancia<T extends Prisma.Requerimento$AmbulanciaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Requerimento$AmbulanciaArgs<ExtArgs>>): Prisma.Prisma__AmbulanciaClient<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    RequerimentoStatus<T extends Prisma.Requerimento$RequerimentoStatusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Requerimento$RequerimentoStatusArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    RequerimentoItems<T extends Prisma.Requerimento$RequerimentoItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Requerimento$RequerimentoItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Receituarios<T extends Prisma.Requerimento$ReceituariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Requerimento$ReceituariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RequerimentoFieldRefs {
    readonly id: Prisma.FieldRef<"Requerimento", 'String'>;
    readonly numero: Prisma.FieldRef<"Requerimento", 'Int'>;
    readonly tipo: Prisma.FieldRef<"Requerimento", 'TipoRequerimento'>;
    readonly status: Prisma.FieldRef<"Requerimento", 'Status'>;
    readonly data_inicio: Prisma.FieldRef<"Requerimento", 'DateTime'>;
    readonly data_fim: Prisma.FieldRef<"Requerimento", 'DateTime'>;
    readonly base: Prisma.FieldRef<"Requerimento", 'String'>;
    readonly setor: Prisma.FieldRef<"Requerimento", 'String'>;
    readonly cargo: Prisma.FieldRef<"Requerimento", 'String'>;
    readonly userId: Prisma.FieldRef<"Requerimento", 'String'>;
    readonly ambulanciaId: Prisma.FieldRef<"Requerimento", 'String'>;
    readonly obs: Prisma.FieldRef<"Requerimento", 'String'>;
    readonly created_at: Prisma.FieldRef<"Requerimento", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Requerimento", 'DateTime'>;
}
export type RequerimentoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    where: Prisma.RequerimentoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    where: Prisma.RequerimentoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoWhereInput;
    orderBy?: Prisma.RequerimentoOrderByWithRelationInput | Prisma.RequerimentoOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoScalarFieldEnum | Prisma.RequerimentoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoWhereInput;
    orderBy?: Prisma.RequerimentoOrderByWithRelationInput | Prisma.RequerimentoOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoScalarFieldEnum | Prisma.RequerimentoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoWhereInput;
    orderBy?: Prisma.RequerimentoOrderByWithRelationInput | Prisma.RequerimentoOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoScalarFieldEnum | Prisma.RequerimentoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequerimentoCreateInput, Prisma.RequerimentoUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RequerimentoCreateManyInput | Prisma.RequerimentoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RequerimentoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequerimentoUpdateInput, Prisma.RequerimentoUncheckedUpdateInput>;
    where: Prisma.RequerimentoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RequerimentoUpdateManyMutationInput, Prisma.RequerimentoUncheckedUpdateManyInput>;
    where?: Prisma.RequerimentoWhereInput;
    limit?: number;
};
export type RequerimentoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    where: Prisma.RequerimentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequerimentoCreateInput, Prisma.RequerimentoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RequerimentoUpdateInput, Prisma.RequerimentoUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
    where: Prisma.RequerimentoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type RequerimentoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoWhereInput;
    limit?: number;
};
export type Requerimento$AmbulanciaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where?: Prisma.AmbulanciaWhereInput;
};
export type Requerimento$RequerimentoStatusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoStatusSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoStatusOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoStatusInclude<ExtArgs> | null;
    where?: Prisma.RequerimentoStatusWhereInput;
    orderBy?: Prisma.RequerimentoStatusOrderByWithRelationInput | Prisma.RequerimentoStatusOrderByWithRelationInput[];
    cursor?: Prisma.RequerimentoStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequerimentoStatusScalarFieldEnum | Prisma.RequerimentoStatusScalarFieldEnum[];
};
export type Requerimento$RequerimentoItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Requerimento$ReceituariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RequerimentoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequerimentoSelect<ExtArgs> | null;
    omit?: Prisma.RequerimentoOmit<ExtArgs> | null;
    include?: Prisma.RequerimentoInclude<ExtArgs> | null;
};
