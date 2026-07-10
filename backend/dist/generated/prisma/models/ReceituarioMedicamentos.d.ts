import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReceituarioMedicamentosModel = runtime.Types.Result.DefaultSelection<Prisma.$ReceituarioMedicamentosPayload>;
export type AggregateReceituarioMedicamentos = {
    _count: ReceituarioMedicamentosCountAggregateOutputType | null;
    _avg: ReceituarioMedicamentosAvgAggregateOutputType | null;
    _sum: ReceituarioMedicamentosSumAggregateOutputType | null;
    _min: ReceituarioMedicamentosMinAggregateOutputType | null;
    _max: ReceituarioMedicamentosMaxAggregateOutputType | null;
};
export type ReceituarioMedicamentosAvgAggregateOutputType = {
    qnt: number | null;
    qnt_diluente: number | null;
    qnt_tempo: number | null;
};
export type ReceituarioMedicamentosSumAggregateOutputType = {
    qnt: number | null;
    qnt_diluente: number | null;
    qnt_tempo: number | null;
};
export type ReceituarioMedicamentosMinAggregateOutputType = {
    id: string | null;
    receituarioId: string | null;
    medicamentoId: string | null;
    qnt: number | null;
    unidade: $Enums.UnidadeMedicamento | null;
    administracao: $Enums.TipoAdministracao | null;
    diluente: $Enums.TipoDiluente | null;
    qnt_diluente: number | null;
    qnt_tempo: number | null;
    userId: string | null;
    obs: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ReceituarioMedicamentosMaxAggregateOutputType = {
    id: string | null;
    receituarioId: string | null;
    medicamentoId: string | null;
    qnt: number | null;
    unidade: $Enums.UnidadeMedicamento | null;
    administracao: $Enums.TipoAdministracao | null;
    diluente: $Enums.TipoDiluente | null;
    qnt_diluente: number | null;
    qnt_tempo: number | null;
    userId: string | null;
    obs: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ReceituarioMedicamentosCountAggregateOutputType = {
    id: number;
    receituarioId: number;
    medicamentoId: number;
    qnt: number;
    unidade: number;
    administracao: number;
    diluente: number;
    qnt_diluente: number;
    qnt_tempo: number;
    userId: number;
    obs: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type ReceituarioMedicamentosAvgAggregateInputType = {
    qnt?: true;
    qnt_diluente?: true;
    qnt_tempo?: true;
};
export type ReceituarioMedicamentosSumAggregateInputType = {
    qnt?: true;
    qnt_diluente?: true;
    qnt_tempo?: true;
};
export type ReceituarioMedicamentosMinAggregateInputType = {
    id?: true;
    receituarioId?: true;
    medicamentoId?: true;
    qnt?: true;
    unidade?: true;
    administracao?: true;
    diluente?: true;
    qnt_diluente?: true;
    qnt_tempo?: true;
    userId?: true;
    obs?: true;
    created_at?: true;
    updated_at?: true;
};
export type ReceituarioMedicamentosMaxAggregateInputType = {
    id?: true;
    receituarioId?: true;
    medicamentoId?: true;
    qnt?: true;
    unidade?: true;
    administracao?: true;
    diluente?: true;
    qnt_diluente?: true;
    qnt_tempo?: true;
    userId?: true;
    obs?: true;
    created_at?: true;
    updated_at?: true;
};
export type ReceituarioMedicamentosCountAggregateInputType = {
    id?: true;
    receituarioId?: true;
    medicamentoId?: true;
    qnt?: true;
    unidade?: true;
    administracao?: true;
    diluente?: true;
    qnt_diluente?: true;
    qnt_tempo?: true;
    userId?: true;
    obs?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type ReceituarioMedicamentosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioMedicamentosWhereInput;
    orderBy?: Prisma.ReceituarioMedicamentosOrderByWithRelationInput | Prisma.ReceituarioMedicamentosOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReceituarioMedicamentosCountAggregateInputType;
    _avg?: ReceituarioMedicamentosAvgAggregateInputType;
    _sum?: ReceituarioMedicamentosSumAggregateInputType;
    _min?: ReceituarioMedicamentosMinAggregateInputType;
    _max?: ReceituarioMedicamentosMaxAggregateInputType;
};
export type GetReceituarioMedicamentosAggregateType<T extends ReceituarioMedicamentosAggregateArgs> = {
    [P in keyof T & keyof AggregateReceituarioMedicamentos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReceituarioMedicamentos[P]> : Prisma.GetScalarType<T[P], AggregateReceituarioMedicamentos[P]>;
};
export type ReceituarioMedicamentosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioMedicamentosWhereInput;
    orderBy?: Prisma.ReceituarioMedicamentosOrderByWithAggregationInput | Prisma.ReceituarioMedicamentosOrderByWithAggregationInput[];
    by: Prisma.ReceituarioMedicamentosScalarFieldEnum[] | Prisma.ReceituarioMedicamentosScalarFieldEnum;
    having?: Prisma.ReceituarioMedicamentosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReceituarioMedicamentosCountAggregateInputType | true;
    _avg?: ReceituarioMedicamentosAvgAggregateInputType;
    _sum?: ReceituarioMedicamentosSumAggregateInputType;
    _min?: ReceituarioMedicamentosMinAggregateInputType;
    _max?: ReceituarioMedicamentosMaxAggregateInputType;
};
export type ReceituarioMedicamentosGroupByOutputType = {
    id: string;
    receituarioId: string;
    medicamentoId: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente: $Enums.TipoDiluente | null;
    qnt_diluente: number | null;
    qnt_tempo: number | null;
    userId: string;
    obs: string | null;
    created_at: Date;
    updated_at: Date;
    _count: ReceituarioMedicamentosCountAggregateOutputType | null;
    _avg: ReceituarioMedicamentosAvgAggregateOutputType | null;
    _sum: ReceituarioMedicamentosSumAggregateOutputType | null;
    _min: ReceituarioMedicamentosMinAggregateOutputType | null;
    _max: ReceituarioMedicamentosMaxAggregateOutputType | null;
};
export type GetReceituarioMedicamentosGroupByPayload<T extends ReceituarioMedicamentosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReceituarioMedicamentosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReceituarioMedicamentosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReceituarioMedicamentosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReceituarioMedicamentosGroupByOutputType[P]>;
}>>;
export type ReceituarioMedicamentosWhereInput = {
    AND?: Prisma.ReceituarioMedicamentosWhereInput | Prisma.ReceituarioMedicamentosWhereInput[];
    OR?: Prisma.ReceituarioMedicamentosWhereInput[];
    NOT?: Prisma.ReceituarioMedicamentosWhereInput | Prisma.ReceituarioMedicamentosWhereInput[];
    id?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    receituarioId?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    medicamentoId?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    qnt?: Prisma.IntFilter<"ReceituarioMedicamentos"> | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFilter<"ReceituarioMedicamentos"> | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFilter<"ReceituarioMedicamentos"> | $Enums.TipoAdministracao;
    diluente?: Prisma.EnumTipoDiluenteNullableFilter<"ReceituarioMedicamentos"> | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.IntNullableFilter<"ReceituarioMedicamentos"> | number | null;
    qnt_tempo?: Prisma.IntNullableFilter<"ReceituarioMedicamentos"> | number | null;
    userId?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    obs?: Prisma.StringNullableFilter<"ReceituarioMedicamentos"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ReceituarioMedicamentos"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ReceituarioMedicamentos"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Receituario?: Prisma.XOR<Prisma.ReceituarioScalarRelationFilter, Prisma.ReceituarioWhereInput>;
    Medicamento?: Prisma.XOR<Prisma.MedicamentoScalarRelationFilter, Prisma.MedicamentoWhereInput>;
};
export type ReceituarioMedicamentosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    receituarioId?: Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrder;
    qnt?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    administracao?: Prisma.SortOrder;
    diluente?: Prisma.SortOrderInput | Prisma.SortOrder;
    qnt_diluente?: Prisma.SortOrderInput | Prisma.SortOrder;
    qnt_tempo?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    obs?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    Receituario?: Prisma.ReceituarioOrderByWithRelationInput;
    Medicamento?: Prisma.MedicamentoOrderByWithRelationInput;
    _relevance?: Prisma.ReceituarioMedicamentosOrderByRelevanceInput;
};
export type ReceituarioMedicamentosWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ReceituarioMedicamentosWhereInput | Prisma.ReceituarioMedicamentosWhereInput[];
    OR?: Prisma.ReceituarioMedicamentosWhereInput[];
    NOT?: Prisma.ReceituarioMedicamentosWhereInput | Prisma.ReceituarioMedicamentosWhereInput[];
    receituarioId?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    medicamentoId?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    qnt?: Prisma.IntFilter<"ReceituarioMedicamentos"> | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFilter<"ReceituarioMedicamentos"> | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFilter<"ReceituarioMedicamentos"> | $Enums.TipoAdministracao;
    diluente?: Prisma.EnumTipoDiluenteNullableFilter<"ReceituarioMedicamentos"> | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.IntNullableFilter<"ReceituarioMedicamentos"> | number | null;
    qnt_tempo?: Prisma.IntNullableFilter<"ReceituarioMedicamentos"> | number | null;
    userId?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    obs?: Prisma.StringNullableFilter<"ReceituarioMedicamentos"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ReceituarioMedicamentos"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ReceituarioMedicamentos"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Receituario?: Prisma.XOR<Prisma.ReceituarioScalarRelationFilter, Prisma.ReceituarioWhereInput>;
    Medicamento?: Prisma.XOR<Prisma.MedicamentoScalarRelationFilter, Prisma.MedicamentoWhereInput>;
}, "id">;
export type ReceituarioMedicamentosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    receituarioId?: Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrder;
    qnt?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    administracao?: Prisma.SortOrder;
    diluente?: Prisma.SortOrderInput | Prisma.SortOrder;
    qnt_diluente?: Prisma.SortOrderInput | Prisma.SortOrder;
    qnt_tempo?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    obs?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.ReceituarioMedicamentosCountOrderByAggregateInput;
    _avg?: Prisma.ReceituarioMedicamentosAvgOrderByAggregateInput;
    _max?: Prisma.ReceituarioMedicamentosMaxOrderByAggregateInput;
    _min?: Prisma.ReceituarioMedicamentosMinOrderByAggregateInput;
    _sum?: Prisma.ReceituarioMedicamentosSumOrderByAggregateInput;
};
export type ReceituarioMedicamentosScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReceituarioMedicamentosScalarWhereWithAggregatesInput | Prisma.ReceituarioMedicamentosScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReceituarioMedicamentosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReceituarioMedicamentosScalarWhereWithAggregatesInput | Prisma.ReceituarioMedicamentosScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ReceituarioMedicamentos"> | string;
    receituarioId?: Prisma.StringWithAggregatesFilter<"ReceituarioMedicamentos"> | string;
    medicamentoId?: Prisma.StringWithAggregatesFilter<"ReceituarioMedicamentos"> | string;
    qnt?: Prisma.IntWithAggregatesFilter<"ReceituarioMedicamentos"> | number;
    unidade?: Prisma.EnumUnidadeMedicamentoWithAggregatesFilter<"ReceituarioMedicamentos"> | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoWithAggregatesFilter<"ReceituarioMedicamentos"> | $Enums.TipoAdministracao;
    diluente?: Prisma.EnumTipoDiluenteNullableWithAggregatesFilter<"ReceituarioMedicamentos"> | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.IntNullableWithAggregatesFilter<"ReceituarioMedicamentos"> | number | null;
    qnt_tempo?: Prisma.IntNullableWithAggregatesFilter<"ReceituarioMedicamentos"> | number | null;
    userId?: Prisma.StringWithAggregatesFilter<"ReceituarioMedicamentos"> | string;
    obs?: Prisma.StringNullableWithAggregatesFilter<"ReceituarioMedicamentos"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"ReceituarioMedicamentos"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"ReceituarioMedicamentos"> | Date | string;
};
export type ReceituarioMedicamentosCreateInput = {
    id?: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutReceituarioMedicamentosInput;
    Receituario: Prisma.ReceituarioCreateNestedOneWithoutReceituarioMedicamentosInput;
    Medicamento: Prisma.MedicamentoCreateNestedOneWithoutReceituarioMedicamentosInput;
};
export type ReceituarioMedicamentosUncheckedCreateInput = {
    id?: string;
    receituarioId: string;
    medicamentoId: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    userId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioMedicamentosUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput;
    Receituario?: Prisma.ReceituarioUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput;
    Medicamento?: Prisma.MedicamentoUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput;
};
export type ReceituarioMedicamentosUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receituarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioMedicamentosCreateManyInput = {
    id?: string;
    receituarioId: string;
    medicamentoId: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    userId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioMedicamentosUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioMedicamentosUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receituarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioMedicamentosListRelationFilter = {
    every?: Prisma.ReceituarioMedicamentosWhereInput;
    some?: Prisma.ReceituarioMedicamentosWhereInput;
    none?: Prisma.ReceituarioMedicamentosWhereInput;
};
export type ReceituarioMedicamentosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReceituarioMedicamentosOrderByRelevanceInput = {
    fields: Prisma.ReceituarioMedicamentosOrderByRelevanceFieldEnum | Prisma.ReceituarioMedicamentosOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ReceituarioMedicamentosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    receituarioId?: Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrder;
    qnt?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    administracao?: Prisma.SortOrder;
    diluente?: Prisma.SortOrder;
    qnt_diluente?: Prisma.SortOrder;
    qnt_tempo?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    obs?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ReceituarioMedicamentosAvgOrderByAggregateInput = {
    qnt?: Prisma.SortOrder;
    qnt_diluente?: Prisma.SortOrder;
    qnt_tempo?: Prisma.SortOrder;
};
export type ReceituarioMedicamentosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    receituarioId?: Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrder;
    qnt?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    administracao?: Prisma.SortOrder;
    diluente?: Prisma.SortOrder;
    qnt_diluente?: Prisma.SortOrder;
    qnt_tempo?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    obs?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ReceituarioMedicamentosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    receituarioId?: Prisma.SortOrder;
    medicamentoId?: Prisma.SortOrder;
    qnt?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    administracao?: Prisma.SortOrder;
    diluente?: Prisma.SortOrder;
    qnt_diluente?: Prisma.SortOrder;
    qnt_tempo?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    obs?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ReceituarioMedicamentosSumOrderByAggregateInput = {
    qnt?: Prisma.SortOrder;
    qnt_diluente?: Prisma.SortOrder;
    qnt_tempo?: Prisma.SortOrder;
};
export type ReceituarioMedicamentosCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutUserInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput> | Prisma.ReceituarioMedicamentosCreateWithoutUserInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutUserInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyUserInputEnvelope;
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
};
export type ReceituarioMedicamentosUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutUserInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput> | Prisma.ReceituarioMedicamentosCreateWithoutUserInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutUserInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyUserInputEnvelope;
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
};
export type ReceituarioMedicamentosUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutUserInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput> | Prisma.ReceituarioMedicamentosCreateWithoutUserInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutUserInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutUserInput | Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyUserInputEnvelope;
    set?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    delete?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    update?: Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutUserInput | Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutUserInput | Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ReceituarioMedicamentosScalarWhereInput | Prisma.ReceituarioMedicamentosScalarWhereInput[];
};
export type ReceituarioMedicamentosUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutUserInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput> | Prisma.ReceituarioMedicamentosCreateWithoutUserInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutUserInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutUserInput | Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyUserInputEnvelope;
    set?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    delete?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    update?: Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutUserInput | Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutUserInput | Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ReceituarioMedicamentosScalarWhereInput | Prisma.ReceituarioMedicamentosScalarWhereInput[];
};
export type ReceituarioMedicamentosCreateNestedManyWithoutMedicamentoInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput> | Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutMedicamentoInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyMedicamentoInputEnvelope;
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
};
export type ReceituarioMedicamentosUncheckedCreateNestedManyWithoutMedicamentoInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput> | Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutMedicamentoInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyMedicamentoInputEnvelope;
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
};
export type ReceituarioMedicamentosUpdateManyWithoutMedicamentoNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput> | Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutMedicamentoInput[];
    upsert?: Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutMedicamentoInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyMedicamentoInputEnvelope;
    set?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    delete?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    update?: Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutMedicamentoInput[];
    updateMany?: Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutMedicamentoInput[];
    deleteMany?: Prisma.ReceituarioMedicamentosScalarWhereInput | Prisma.ReceituarioMedicamentosScalarWhereInput[];
};
export type ReceituarioMedicamentosUncheckedUpdateManyWithoutMedicamentoNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput> | Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutMedicamentoInput[];
    upsert?: Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutMedicamentoInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyMedicamentoInputEnvelope;
    set?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    delete?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    update?: Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutMedicamentoInput[];
    updateMany?: Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutMedicamentoInput | Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutMedicamentoInput[];
    deleteMany?: Prisma.ReceituarioMedicamentosScalarWhereInput | Prisma.ReceituarioMedicamentosScalarWhereInput[];
};
export type ReceituarioMedicamentosCreateNestedManyWithoutReceituarioInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput> | Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutReceituarioInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutReceituarioInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyReceituarioInputEnvelope;
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
};
export type ReceituarioMedicamentosUncheckedCreateNestedManyWithoutReceituarioInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput> | Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutReceituarioInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutReceituarioInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyReceituarioInputEnvelope;
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
};
export type ReceituarioMedicamentosUpdateManyWithoutReceituarioNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput> | Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutReceituarioInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutReceituarioInput[];
    upsert?: Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutReceituarioInput | Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutReceituarioInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyReceituarioInputEnvelope;
    set?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    delete?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    update?: Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutReceituarioInput | Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutReceituarioInput[];
    updateMany?: Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutReceituarioInput | Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutReceituarioInput[];
    deleteMany?: Prisma.ReceituarioMedicamentosScalarWhereInput | Prisma.ReceituarioMedicamentosScalarWhereInput[];
};
export type ReceituarioMedicamentosUncheckedUpdateManyWithoutReceituarioNestedInput = {
    create?: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput> | Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput[] | Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput[];
    connectOrCreate?: Prisma.ReceituarioMedicamentosCreateOrConnectWithoutReceituarioInput | Prisma.ReceituarioMedicamentosCreateOrConnectWithoutReceituarioInput[];
    upsert?: Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutReceituarioInput | Prisma.ReceituarioMedicamentosUpsertWithWhereUniqueWithoutReceituarioInput[];
    createMany?: Prisma.ReceituarioMedicamentosCreateManyReceituarioInputEnvelope;
    set?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    disconnect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    delete?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    connect?: Prisma.ReceituarioMedicamentosWhereUniqueInput | Prisma.ReceituarioMedicamentosWhereUniqueInput[];
    update?: Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutReceituarioInput | Prisma.ReceituarioMedicamentosUpdateWithWhereUniqueWithoutReceituarioInput[];
    updateMany?: Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutReceituarioInput | Prisma.ReceituarioMedicamentosUpdateManyWithWhereWithoutReceituarioInput[];
    deleteMany?: Prisma.ReceituarioMedicamentosScalarWhereInput | Prisma.ReceituarioMedicamentosScalarWhereInput[];
};
export type EnumUnidadeMedicamentoFieldUpdateOperationsInput = {
    set?: $Enums.UnidadeMedicamento;
};
export type EnumTipoAdministracaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoAdministracao;
};
export type NullableEnumTipoDiluenteFieldUpdateOperationsInput = {
    set?: $Enums.TipoDiluente | null;
};
export type ReceituarioMedicamentosCreateWithoutUserInput = {
    id?: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    Receituario: Prisma.ReceituarioCreateNestedOneWithoutReceituarioMedicamentosInput;
    Medicamento: Prisma.MedicamentoCreateNestedOneWithoutReceituarioMedicamentosInput;
};
export type ReceituarioMedicamentosUncheckedCreateWithoutUserInput = {
    id?: string;
    receituarioId: string;
    medicamentoId: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioMedicamentosCreateOrConnectWithoutUserInput = {
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutUserInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput>;
};
export type ReceituarioMedicamentosCreateManyUserInputEnvelope = {
    data: Prisma.ReceituarioMedicamentosCreateManyUserInput | Prisma.ReceituarioMedicamentosCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioMedicamentosUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateWithoutUserInput, Prisma.ReceituarioMedicamentosUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutUserInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutUserInput>;
};
export type ReceituarioMedicamentosUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateWithoutUserInput, Prisma.ReceituarioMedicamentosUncheckedUpdateWithoutUserInput>;
};
export type ReceituarioMedicamentosUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ReceituarioMedicamentosScalarWhereInput;
    data: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateManyMutationInput, Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutUserInput>;
};
export type ReceituarioMedicamentosScalarWhereInput = {
    AND?: Prisma.ReceituarioMedicamentosScalarWhereInput | Prisma.ReceituarioMedicamentosScalarWhereInput[];
    OR?: Prisma.ReceituarioMedicamentosScalarWhereInput[];
    NOT?: Prisma.ReceituarioMedicamentosScalarWhereInput | Prisma.ReceituarioMedicamentosScalarWhereInput[];
    id?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    receituarioId?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    medicamentoId?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    qnt?: Prisma.IntFilter<"ReceituarioMedicamentos"> | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFilter<"ReceituarioMedicamentos"> | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFilter<"ReceituarioMedicamentos"> | $Enums.TipoAdministracao;
    diluente?: Prisma.EnumTipoDiluenteNullableFilter<"ReceituarioMedicamentos"> | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.IntNullableFilter<"ReceituarioMedicamentos"> | number | null;
    qnt_tempo?: Prisma.IntNullableFilter<"ReceituarioMedicamentos"> | number | null;
    userId?: Prisma.StringFilter<"ReceituarioMedicamentos"> | string;
    obs?: Prisma.StringNullableFilter<"ReceituarioMedicamentos"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ReceituarioMedicamentos"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"ReceituarioMedicamentos"> | Date | string;
};
export type ReceituarioMedicamentosCreateWithoutMedicamentoInput = {
    id?: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutReceituarioMedicamentosInput;
    Receituario: Prisma.ReceituarioCreateNestedOneWithoutReceituarioMedicamentosInput;
};
export type ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput = {
    id?: string;
    receituarioId: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    userId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioMedicamentosCreateOrConnectWithoutMedicamentoInput = {
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput>;
};
export type ReceituarioMedicamentosCreateManyMedicamentoInputEnvelope = {
    data: Prisma.ReceituarioMedicamentosCreateManyMedicamentoInput | Prisma.ReceituarioMedicamentosCreateManyMedicamentoInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioMedicamentosUpsertWithWhereUniqueWithoutMedicamentoInput = {
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateWithoutMedicamentoInput, Prisma.ReceituarioMedicamentosUncheckedUpdateWithoutMedicamentoInput>;
    create: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutMedicamentoInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutMedicamentoInput>;
};
export type ReceituarioMedicamentosUpdateWithWhereUniqueWithoutMedicamentoInput = {
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateWithoutMedicamentoInput, Prisma.ReceituarioMedicamentosUncheckedUpdateWithoutMedicamentoInput>;
};
export type ReceituarioMedicamentosUpdateManyWithWhereWithoutMedicamentoInput = {
    where: Prisma.ReceituarioMedicamentosScalarWhereInput;
    data: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateManyMutationInput, Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutMedicamentoInput>;
};
export type ReceituarioMedicamentosCreateWithoutReceituarioInput = {
    id?: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutReceituarioMedicamentosInput;
    Medicamento: Prisma.MedicamentoCreateNestedOneWithoutReceituarioMedicamentosInput;
};
export type ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput = {
    id?: string;
    medicamentoId: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    userId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioMedicamentosCreateOrConnectWithoutReceituarioInput = {
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput>;
};
export type ReceituarioMedicamentosCreateManyReceituarioInputEnvelope = {
    data: Prisma.ReceituarioMedicamentosCreateManyReceituarioInput | Prisma.ReceituarioMedicamentosCreateManyReceituarioInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioMedicamentosUpsertWithWhereUniqueWithoutReceituarioInput = {
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateWithoutReceituarioInput, Prisma.ReceituarioMedicamentosUncheckedUpdateWithoutReceituarioInput>;
    create: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateWithoutReceituarioInput, Prisma.ReceituarioMedicamentosUncheckedCreateWithoutReceituarioInput>;
};
export type ReceituarioMedicamentosUpdateWithWhereUniqueWithoutReceituarioInput = {
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateWithoutReceituarioInput, Prisma.ReceituarioMedicamentosUncheckedUpdateWithoutReceituarioInput>;
};
export type ReceituarioMedicamentosUpdateManyWithWhereWithoutReceituarioInput = {
    where: Prisma.ReceituarioMedicamentosScalarWhereInput;
    data: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateManyMutationInput, Prisma.ReceituarioMedicamentosUncheckedUpdateManyWithoutReceituarioInput>;
};
export type ReceituarioMedicamentosCreateManyUserInput = {
    id?: string;
    receituarioId: string;
    medicamentoId: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioMedicamentosUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Receituario?: Prisma.ReceituarioUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput;
    Medicamento?: Prisma.MedicamentoUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput;
};
export type ReceituarioMedicamentosUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receituarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioMedicamentosUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receituarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioMedicamentosCreateManyMedicamentoInput = {
    id?: string;
    receituarioId: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    userId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioMedicamentosUpdateWithoutMedicamentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput;
    Receituario?: Prisma.ReceituarioUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput;
};
export type ReceituarioMedicamentosUncheckedUpdateWithoutMedicamentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receituarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioMedicamentosUncheckedUpdateManyWithoutMedicamentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receituarioId?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioMedicamentosCreateManyReceituarioInput = {
    id?: string;
    medicamentoId: string;
    qnt: number;
    unidade: $Enums.UnidadeMedicamento;
    administracao: $Enums.TipoAdministracao;
    diluente?: $Enums.TipoDiluente | null;
    qnt_diluente?: number | null;
    qnt_tempo?: number | null;
    userId: string;
    obs?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ReceituarioMedicamentosUpdateWithoutReceituarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput;
    Medicamento?: Prisma.MedicamentoUpdateOneRequiredWithoutReceituarioMedicamentosNestedInput;
};
export type ReceituarioMedicamentosUncheckedUpdateWithoutReceituarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioMedicamentosUncheckedUpdateManyWithoutReceituarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    qnt?: Prisma.IntFieldUpdateOperationsInput | number;
    unidade?: Prisma.EnumUnidadeMedicamentoFieldUpdateOperationsInput | $Enums.UnidadeMedicamento;
    administracao?: Prisma.EnumTipoAdministracaoFieldUpdateOperationsInput | $Enums.TipoAdministracao;
    diluente?: Prisma.NullableEnumTipoDiluenteFieldUpdateOperationsInput | $Enums.TipoDiluente | null;
    qnt_diluente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    qnt_tempo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    obs?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceituarioMedicamentosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    receituarioId?: boolean;
    medicamentoId?: boolean;
    qnt?: boolean;
    unidade?: boolean;
    administracao?: boolean;
    diluente?: boolean;
    qnt_diluente?: boolean;
    qnt_tempo?: boolean;
    userId?: boolean;
    obs?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Receituario?: boolean | Prisma.ReceituarioDefaultArgs<ExtArgs>;
    Medicamento?: boolean | Prisma.MedicamentoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["receituarioMedicamentos"]>;
export type ReceituarioMedicamentosSelectScalar = {
    id?: boolean;
    receituarioId?: boolean;
    medicamentoId?: boolean;
    qnt?: boolean;
    unidade?: boolean;
    administracao?: boolean;
    diluente?: boolean;
    qnt_diluente?: boolean;
    qnt_tempo?: boolean;
    userId?: boolean;
    obs?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type ReceituarioMedicamentosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "receituarioId" | "medicamentoId" | "qnt" | "unidade" | "administracao" | "diluente" | "qnt_diluente" | "qnt_tempo" | "userId" | "obs" | "created_at" | "updated_at", ExtArgs["result"]["receituarioMedicamentos"]>;
export type ReceituarioMedicamentosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Receituario?: boolean | Prisma.ReceituarioDefaultArgs<ExtArgs>;
    Medicamento?: boolean | Prisma.MedicamentoDefaultArgs<ExtArgs>;
};
export type $ReceituarioMedicamentosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReceituarioMedicamentos";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
        Receituario: Prisma.$ReceituarioPayload<ExtArgs>;
        Medicamento: Prisma.$MedicamentoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        receituarioId: string;
        medicamentoId: string;
        qnt: number;
        unidade: $Enums.UnidadeMedicamento;
        administracao: $Enums.TipoAdministracao;
        diluente: $Enums.TipoDiluente | null;
        qnt_diluente: number | null;
        qnt_tempo: number | null;
        userId: string;
        obs: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["receituarioMedicamentos"]>;
    composites: {};
};
export type ReceituarioMedicamentosGetPayload<S extends boolean | null | undefined | ReceituarioMedicamentosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload, S>;
export type ReceituarioMedicamentosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReceituarioMedicamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: ReceituarioMedicamentosCountAggregateInputType | true;
};
export interface ReceituarioMedicamentosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReceituarioMedicamentos'];
        meta: {
            name: 'ReceituarioMedicamentos';
        };
    };
    findUnique<T extends ReceituarioMedicamentosFindUniqueArgs>(args: Prisma.SelectSubset<T, ReceituarioMedicamentosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReceituarioMedicamentosClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReceituarioMedicamentosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReceituarioMedicamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReceituarioMedicamentosClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReceituarioMedicamentosFindFirstArgs>(args?: Prisma.SelectSubset<T, ReceituarioMedicamentosFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReceituarioMedicamentosClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReceituarioMedicamentosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReceituarioMedicamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReceituarioMedicamentosClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReceituarioMedicamentosFindManyArgs>(args?: Prisma.SelectSubset<T, ReceituarioMedicamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReceituarioMedicamentosCreateArgs>(args: Prisma.SelectSubset<T, ReceituarioMedicamentosCreateArgs<ExtArgs>>): Prisma.Prisma__ReceituarioMedicamentosClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReceituarioMedicamentosCreateManyArgs>(args?: Prisma.SelectSubset<T, ReceituarioMedicamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ReceituarioMedicamentosDeleteArgs>(args: Prisma.SelectSubset<T, ReceituarioMedicamentosDeleteArgs<ExtArgs>>): Prisma.Prisma__ReceituarioMedicamentosClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReceituarioMedicamentosUpdateArgs>(args: Prisma.SelectSubset<T, ReceituarioMedicamentosUpdateArgs<ExtArgs>>): Prisma.Prisma__ReceituarioMedicamentosClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReceituarioMedicamentosDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReceituarioMedicamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReceituarioMedicamentosUpdateManyArgs>(args: Prisma.SelectSubset<T, ReceituarioMedicamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ReceituarioMedicamentosUpsertArgs>(args: Prisma.SelectSubset<T, ReceituarioMedicamentosUpsertArgs<ExtArgs>>): Prisma.Prisma__ReceituarioMedicamentosClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioMedicamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReceituarioMedicamentosCountArgs>(args?: Prisma.Subset<T, ReceituarioMedicamentosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReceituarioMedicamentosCountAggregateOutputType> : number>;
    aggregate<T extends ReceituarioMedicamentosAggregateArgs>(args: Prisma.Subset<T, ReceituarioMedicamentosAggregateArgs>): Prisma.PrismaPromise<GetReceituarioMedicamentosAggregateType<T>>;
    groupBy<T extends ReceituarioMedicamentosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReceituarioMedicamentosGroupByArgs['orderBy'];
    } : {
        orderBy?: ReceituarioMedicamentosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReceituarioMedicamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceituarioMedicamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReceituarioMedicamentosFieldRefs;
}
export interface Prisma__ReceituarioMedicamentosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Receituario<T extends Prisma.ReceituarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReceituarioDefaultArgs<ExtArgs>>): Prisma.Prisma__ReceituarioClient<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Medicamento<T extends Prisma.MedicamentoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MedicamentoDefaultArgs<ExtArgs>>): Prisma.Prisma__MedicamentoClient<runtime.Types.Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReceituarioMedicamentosFieldRefs {
    readonly id: Prisma.FieldRef<"ReceituarioMedicamentos", 'String'>;
    readonly receituarioId: Prisma.FieldRef<"ReceituarioMedicamentos", 'String'>;
    readonly medicamentoId: Prisma.FieldRef<"ReceituarioMedicamentos", 'String'>;
    readonly qnt: Prisma.FieldRef<"ReceituarioMedicamentos", 'Int'>;
    readonly unidade: Prisma.FieldRef<"ReceituarioMedicamentos", 'UnidadeMedicamento'>;
    readonly administracao: Prisma.FieldRef<"ReceituarioMedicamentos", 'TipoAdministracao'>;
    readonly diluente: Prisma.FieldRef<"ReceituarioMedicamentos", 'TipoDiluente'>;
    readonly qnt_diluente: Prisma.FieldRef<"ReceituarioMedicamentos", 'Int'>;
    readonly qnt_tempo: Prisma.FieldRef<"ReceituarioMedicamentos", 'Int'>;
    readonly userId: Prisma.FieldRef<"ReceituarioMedicamentos", 'String'>;
    readonly obs: Prisma.FieldRef<"ReceituarioMedicamentos", 'String'>;
    readonly created_at: Prisma.FieldRef<"ReceituarioMedicamentos", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"ReceituarioMedicamentos", 'DateTime'>;
}
export type ReceituarioMedicamentosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioMedicamentosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioMedicamentosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    where?: Prisma.ReceituarioMedicamentosWhereInput;
    orderBy?: Prisma.ReceituarioMedicamentosOrderByWithRelationInput | Prisma.ReceituarioMedicamentosOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceituarioMedicamentosScalarFieldEnum | Prisma.ReceituarioMedicamentosScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioMedicamentosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    where?: Prisma.ReceituarioMedicamentosWhereInput;
    orderBy?: Prisma.ReceituarioMedicamentosOrderByWithRelationInput | Prisma.ReceituarioMedicamentosOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceituarioMedicamentosScalarFieldEnum | Prisma.ReceituarioMedicamentosScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioMedicamentosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    where?: Prisma.ReceituarioMedicamentosWhereInput;
    orderBy?: Prisma.ReceituarioMedicamentosOrderByWithRelationInput | Prisma.ReceituarioMedicamentosOrderByWithRelationInput[];
    cursor?: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceituarioMedicamentosScalarFieldEnum | Prisma.ReceituarioMedicamentosScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioMedicamentosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateInput, Prisma.ReceituarioMedicamentosUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioMedicamentosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReceituarioMedicamentosCreateManyInput | Prisma.ReceituarioMedicamentosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReceituarioMedicamentosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateInput, Prisma.ReceituarioMedicamentosUncheckedUpdateInput>;
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioMedicamentosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateManyMutationInput, Prisma.ReceituarioMedicamentosUncheckedUpdateManyInput>;
    where?: Prisma.ReceituarioMedicamentosWhereInput;
    limit?: number;
};
export type ReceituarioMedicamentosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReceituarioMedicamentosCreateInput, Prisma.ReceituarioMedicamentosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReceituarioMedicamentosUpdateInput, Prisma.ReceituarioMedicamentosUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioMedicamentosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
    where: Prisma.ReceituarioMedicamentosWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ReceituarioMedicamentosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioMedicamentosWhereInput;
    limit?: number;
};
export type ReceituarioMedicamentosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReceituarioMedicamentosSelect<ExtArgs> | null;
    omit?: Prisma.ReceituarioMedicamentosOmit<ExtArgs> | null;
    include?: Prisma.ReceituarioMedicamentosInclude<ExtArgs> | null;
};
