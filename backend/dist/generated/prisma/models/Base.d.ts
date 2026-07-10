import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BaseModel = runtime.Types.Result.DefaultSelection<Prisma.$BasePayload>;
export type AggregateBase = {
    _count: BaseCountAggregateOutputType | null;
    _min: BaseMinAggregateOutputType | null;
    _max: BaseMaxAggregateOutputType | null;
};
export type BaseMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    tipo_ambulancias: $Enums.TipoAmbulancias | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BaseMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    tipo_ambulancias: $Enums.TipoAmbulancias | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BaseCountAggregateOutputType = {
    id: number;
    nome: number;
    tipo_ambulancias: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type BaseMinAggregateInputType = {
    id?: true;
    nome?: true;
    tipo_ambulancias?: true;
    created_at?: true;
    updated_at?: true;
};
export type BaseMaxAggregateInputType = {
    id?: true;
    nome?: true;
    tipo_ambulancias?: true;
    created_at?: true;
    updated_at?: true;
};
export type BaseCountAggregateInputType = {
    id?: true;
    nome?: true;
    tipo_ambulancias?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type BaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BaseWhereInput;
    orderBy?: Prisma.BaseOrderByWithRelationInput | Prisma.BaseOrderByWithRelationInput[];
    cursor?: Prisma.BaseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BaseCountAggregateInputType;
    _min?: BaseMinAggregateInputType;
    _max?: BaseMaxAggregateInputType;
};
export type GetBaseAggregateType<T extends BaseAggregateArgs> = {
    [P in keyof T & keyof AggregateBase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBase[P]> : Prisma.GetScalarType<T[P], AggregateBase[P]>;
};
export type BaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BaseWhereInput;
    orderBy?: Prisma.BaseOrderByWithAggregationInput | Prisma.BaseOrderByWithAggregationInput[];
    by: Prisma.BaseScalarFieldEnum[] | Prisma.BaseScalarFieldEnum;
    having?: Prisma.BaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BaseCountAggregateInputType | true;
    _min?: BaseMinAggregateInputType;
    _max?: BaseMaxAggregateInputType;
};
export type BaseGroupByOutputType = {
    id: string;
    nome: string;
    tipo_ambulancias: $Enums.TipoAmbulancias;
    created_at: Date;
    updated_at: Date;
    _count: BaseCountAggregateOutputType | null;
    _min: BaseMinAggregateOutputType | null;
    _max: BaseMaxAggregateOutputType | null;
};
export type GetBaseGroupByPayload<T extends BaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BaseGroupByOutputType[P]>;
}>>;
export type BaseWhereInput = {
    AND?: Prisma.BaseWhereInput | Prisma.BaseWhereInput[];
    OR?: Prisma.BaseWhereInput[];
    NOT?: Prisma.BaseWhereInput | Prisma.BaseWhereInput[];
    id?: Prisma.StringFilter<"Base"> | string;
    nome?: Prisma.StringFilter<"Base"> | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFilter<"Base"> | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFilter<"Base"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Base"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    Requerimentos?: Prisma.RequerimentoListRelationFilter;
    Ambulancias?: Prisma.AmbulanciaListRelationFilter;
    VisitasBases?: Prisma.VisitasBasesListRelationFilter;
    receituarios?: Prisma.ReceituarioListRelationFilter;
};
export type BaseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo_ambulancias?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    Requerimentos?: Prisma.RequerimentoOrderByRelationAggregateInput;
    Ambulancias?: Prisma.AmbulanciaOrderByRelationAggregateInput;
    VisitasBases?: Prisma.VisitasBasesOrderByRelationAggregateInput;
    receituarios?: Prisma.ReceituarioOrderByRelationAggregateInput;
    _relevance?: Prisma.BaseOrderByRelevanceInput;
};
export type BaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nome?: string;
    AND?: Prisma.BaseWhereInput | Prisma.BaseWhereInput[];
    OR?: Prisma.BaseWhereInput[];
    NOT?: Prisma.BaseWhereInput | Prisma.BaseWhereInput[];
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFilter<"Base"> | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFilter<"Base"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Base"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    Requerimentos?: Prisma.RequerimentoListRelationFilter;
    Ambulancias?: Prisma.AmbulanciaListRelationFilter;
    VisitasBases?: Prisma.VisitasBasesListRelationFilter;
    receituarios?: Prisma.ReceituarioListRelationFilter;
}, "id" | "nome">;
export type BaseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo_ambulancias?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.BaseCountOrderByAggregateInput;
    _max?: Prisma.BaseMaxOrderByAggregateInput;
    _min?: Prisma.BaseMinOrderByAggregateInput;
};
export type BaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.BaseScalarWhereWithAggregatesInput | Prisma.BaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.BaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BaseScalarWhereWithAggregatesInput | Prisma.BaseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Base"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Base"> | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasWithAggregatesFilter<"Base"> | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Base"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Base"> | Date | string;
};
export type BaseCreateInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBaseInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioCreateNestedManyWithoutBaseInput;
};
export type BaseUncheckedCreateInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBaseInput;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutBaseInput;
};
export type BaseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBaseNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUpdateManyWithoutBaseNestedInput;
};
export type BaseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBaseNestedInput;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutBaseNestedInput;
};
export type BaseCreateManyInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type BaseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BaseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BaseOrderByRelevanceInput = {
    fields: Prisma.BaseOrderByRelevanceFieldEnum | Prisma.BaseOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BaseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo_ambulancias?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BaseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo_ambulancias?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BaseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo_ambulancias?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BaseScalarRelationFilter = {
    is?: Prisma.BaseWhereInput;
    isNot?: Prisma.BaseWhereInput;
};
export type BaseNullableScalarRelationFilter = {
    is?: Prisma.BaseWhereInput | null;
    isNot?: Prisma.BaseWhereInput | null;
};
export type EnumTipoAmbulanciasFieldUpdateOperationsInput = {
    set?: $Enums.TipoAmbulancias;
};
export type BaseCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutUsersInput, Prisma.BaseUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutUsersInput;
    connect?: Prisma.BaseWhereUniqueInput;
};
export type BaseUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutUsersInput, Prisma.BaseUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.BaseUpsertWithoutUsersInput;
    connect?: Prisma.BaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BaseUpdateToOneWithWhereWithoutUsersInput, Prisma.BaseUpdateWithoutUsersInput>, Prisma.BaseUncheckedUpdateWithoutUsersInput>;
};
export type BaseCreateNestedOneWithoutAmbulanciasInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutAmbulanciasInput, Prisma.BaseUncheckedCreateWithoutAmbulanciasInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutAmbulanciasInput;
    connect?: Prisma.BaseWhereUniqueInput;
};
export type BaseUpdateOneRequiredWithoutAmbulanciasNestedInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutAmbulanciasInput, Prisma.BaseUncheckedCreateWithoutAmbulanciasInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutAmbulanciasInput;
    upsert?: Prisma.BaseUpsertWithoutAmbulanciasInput;
    connect?: Prisma.BaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BaseUpdateToOneWithWhereWithoutAmbulanciasInput, Prisma.BaseUpdateWithoutAmbulanciasInput>, Prisma.BaseUncheckedUpdateWithoutAmbulanciasInput>;
};
export type BaseCreateNestedOneWithoutRequerimentosInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutRequerimentosInput, Prisma.BaseUncheckedCreateWithoutRequerimentosInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutRequerimentosInput;
    connect?: Prisma.BaseWhereUniqueInput;
};
export type BaseUpdateOneRequiredWithoutRequerimentosNestedInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutRequerimentosInput, Prisma.BaseUncheckedCreateWithoutRequerimentosInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutRequerimentosInput;
    upsert?: Prisma.BaseUpsertWithoutRequerimentosInput;
    connect?: Prisma.BaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BaseUpdateToOneWithWhereWithoutRequerimentosInput, Prisma.BaseUpdateWithoutRequerimentosInput>, Prisma.BaseUncheckedUpdateWithoutRequerimentosInput>;
};
export type BaseCreateNestedOneWithoutVisitasBasesInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutVisitasBasesInput, Prisma.BaseUncheckedCreateWithoutVisitasBasesInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutVisitasBasesInput;
    connect?: Prisma.BaseWhereUniqueInput;
};
export type BaseUpdateOneWithoutVisitasBasesNestedInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutVisitasBasesInput, Prisma.BaseUncheckedCreateWithoutVisitasBasesInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutVisitasBasesInput;
    upsert?: Prisma.BaseUpsertWithoutVisitasBasesInput;
    disconnect?: Prisma.BaseWhereInput | boolean;
    delete?: Prisma.BaseWhereInput | boolean;
    connect?: Prisma.BaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BaseUpdateToOneWithWhereWithoutVisitasBasesInput, Prisma.BaseUpdateWithoutVisitasBasesInput>, Prisma.BaseUncheckedUpdateWithoutVisitasBasesInput>;
};
export type BaseCreateNestedOneWithoutReceituariosInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutReceituariosInput, Prisma.BaseUncheckedCreateWithoutReceituariosInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutReceituariosInput;
    connect?: Prisma.BaseWhereUniqueInput;
};
export type BaseUpdateOneRequiredWithoutReceituariosNestedInput = {
    create?: Prisma.XOR<Prisma.BaseCreateWithoutReceituariosInput, Prisma.BaseUncheckedCreateWithoutReceituariosInput>;
    connectOrCreate?: Prisma.BaseCreateOrConnectWithoutReceituariosInput;
    upsert?: Prisma.BaseUpsertWithoutReceituariosInput;
    connect?: Prisma.BaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BaseUpdateToOneWithWhereWithoutReceituariosInput, Prisma.BaseUpdateWithoutReceituariosInput>, Prisma.BaseUncheckedUpdateWithoutReceituariosInput>;
};
export type BaseCreateWithoutUsersInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioCreateNestedManyWithoutBaseInput;
};
export type BaseUncheckedCreateWithoutUsersInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutBaseInput;
};
export type BaseCreateOrConnectWithoutUsersInput = {
    where: Prisma.BaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.BaseCreateWithoutUsersInput, Prisma.BaseUncheckedCreateWithoutUsersInput>;
};
export type BaseUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.BaseUpdateWithoutUsersInput, Prisma.BaseUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.BaseCreateWithoutUsersInput, Prisma.BaseUncheckedCreateWithoutUsersInput>;
    where?: Prisma.BaseWhereInput;
};
export type BaseUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.BaseWhereInput;
    data: Prisma.XOR<Prisma.BaseUpdateWithoutUsersInput, Prisma.BaseUncheckedUpdateWithoutUsersInput>;
};
export type BaseUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUpdateManyWithoutBaseNestedInput;
};
export type BaseUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutBaseNestedInput;
};
export type BaseCreateWithoutAmbulanciasInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBaseInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioCreateNestedManyWithoutBaseInput;
};
export type BaseUncheckedCreateWithoutAmbulanciasInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBaseInput;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutBaseInput;
};
export type BaseCreateOrConnectWithoutAmbulanciasInput = {
    where: Prisma.BaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.BaseCreateWithoutAmbulanciasInput, Prisma.BaseUncheckedCreateWithoutAmbulanciasInput>;
};
export type BaseUpsertWithoutAmbulanciasInput = {
    update: Prisma.XOR<Prisma.BaseUpdateWithoutAmbulanciasInput, Prisma.BaseUncheckedUpdateWithoutAmbulanciasInput>;
    create: Prisma.XOR<Prisma.BaseCreateWithoutAmbulanciasInput, Prisma.BaseUncheckedCreateWithoutAmbulanciasInput>;
    where?: Prisma.BaseWhereInput;
};
export type BaseUpdateToOneWithWhereWithoutAmbulanciasInput = {
    where?: Prisma.BaseWhereInput;
    data: Prisma.XOR<Prisma.BaseUpdateWithoutAmbulanciasInput, Prisma.BaseUncheckedUpdateWithoutAmbulanciasInput>;
};
export type BaseUpdateWithoutAmbulanciasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBaseNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUpdateManyWithoutBaseNestedInput;
};
export type BaseUncheckedUpdateWithoutAmbulanciasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBaseNestedInput;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutBaseNestedInput;
};
export type BaseCreateWithoutRequerimentosInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioCreateNestedManyWithoutBaseInput;
};
export type BaseUncheckedCreateWithoutRequerimentosInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutBaseInput;
};
export type BaseCreateOrConnectWithoutRequerimentosInput = {
    where: Prisma.BaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.BaseCreateWithoutRequerimentosInput, Prisma.BaseUncheckedCreateWithoutRequerimentosInput>;
};
export type BaseUpsertWithoutRequerimentosInput = {
    update: Prisma.XOR<Prisma.BaseUpdateWithoutRequerimentosInput, Prisma.BaseUncheckedUpdateWithoutRequerimentosInput>;
    create: Prisma.XOR<Prisma.BaseCreateWithoutRequerimentosInput, Prisma.BaseUncheckedCreateWithoutRequerimentosInput>;
    where?: Prisma.BaseWhereInput;
};
export type BaseUpdateToOneWithWhereWithoutRequerimentosInput = {
    where?: Prisma.BaseWhereInput;
    data: Prisma.XOR<Prisma.BaseUpdateWithoutRequerimentosInput, Prisma.BaseUncheckedUpdateWithoutRequerimentosInput>;
};
export type BaseUpdateWithoutRequerimentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUpdateManyWithoutBaseNestedInput;
};
export type BaseUncheckedUpdateWithoutRequerimentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutBaseNestedInput;
};
export type BaseCreateWithoutVisitasBasesInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBaseInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioCreateNestedManyWithoutBaseInput;
};
export type BaseUncheckedCreateWithoutVisitasBasesInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBaseInput;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedCreateNestedManyWithoutBaseInput;
    receituarios?: Prisma.ReceituarioUncheckedCreateNestedManyWithoutBaseInput;
};
export type BaseCreateOrConnectWithoutVisitasBasesInput = {
    where: Prisma.BaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.BaseCreateWithoutVisitasBasesInput, Prisma.BaseUncheckedCreateWithoutVisitasBasesInput>;
};
export type BaseUpsertWithoutVisitasBasesInput = {
    update: Prisma.XOR<Prisma.BaseUpdateWithoutVisitasBasesInput, Prisma.BaseUncheckedUpdateWithoutVisitasBasesInput>;
    create: Prisma.XOR<Prisma.BaseCreateWithoutVisitasBasesInput, Prisma.BaseUncheckedCreateWithoutVisitasBasesInput>;
    where?: Prisma.BaseWhereInput;
};
export type BaseUpdateToOneWithWhereWithoutVisitasBasesInput = {
    where?: Prisma.BaseWhereInput;
    data: Prisma.XOR<Prisma.BaseUpdateWithoutVisitasBasesInput, Prisma.BaseUncheckedUpdateWithoutVisitasBasesInput>;
};
export type BaseUpdateWithoutVisitasBasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBaseNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUpdateManyWithoutBaseNestedInput;
};
export type BaseUncheckedUpdateWithoutVisitasBasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBaseNestedInput;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedUpdateManyWithoutBaseNestedInput;
    receituarios?: Prisma.ReceituarioUncheckedUpdateManyWithoutBaseNestedInput;
};
export type BaseCreateWithoutReceituariosInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBaseInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesCreateNestedManyWithoutBaseInput;
};
export type BaseUncheckedCreateWithoutReceituariosInput = {
    id?: string;
    nome: string;
    tipo_ambulancias?: $Enums.TipoAmbulancias;
    created_at?: Date | string;
    updated_at?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBaseInput;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutBaseInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedCreateNestedManyWithoutBaseInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedCreateNestedManyWithoutBaseInput;
};
export type BaseCreateOrConnectWithoutReceituariosInput = {
    where: Prisma.BaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.BaseCreateWithoutReceituariosInput, Prisma.BaseUncheckedCreateWithoutReceituariosInput>;
};
export type BaseUpsertWithoutReceituariosInput = {
    update: Prisma.XOR<Prisma.BaseUpdateWithoutReceituariosInput, Prisma.BaseUncheckedUpdateWithoutReceituariosInput>;
    create: Prisma.XOR<Prisma.BaseCreateWithoutReceituariosInput, Prisma.BaseUncheckedCreateWithoutReceituariosInput>;
    where?: Prisma.BaseWhereInput;
};
export type BaseUpdateToOneWithWhereWithoutReceituariosInput = {
    where?: Prisma.BaseWhereInput;
    data: Prisma.XOR<Prisma.BaseUpdateWithoutReceituariosInput, Prisma.BaseUncheckedUpdateWithoutReceituariosInput>;
};
export type BaseUpdateWithoutReceituariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBaseNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUpdateManyWithoutBaseNestedInput;
};
export type BaseUncheckedUpdateWithoutReceituariosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_ambulancias?: Prisma.EnumTipoAmbulanciasFieldUpdateOperationsInput | $Enums.TipoAmbulancias;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBaseNestedInput;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutBaseNestedInput;
    Ambulancias?: Prisma.AmbulanciaUncheckedUpdateManyWithoutBaseNestedInput;
    VisitasBases?: Prisma.VisitasBasesUncheckedUpdateManyWithoutBaseNestedInput;
};
export type BaseCountOutputType = {
    users: number;
    Requerimentos: number;
    Ambulancias: number;
    VisitasBases: number;
    receituarios: number;
};
export type BaseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | BaseCountOutputTypeCountUsersArgs;
    Requerimentos?: boolean | BaseCountOutputTypeCountRequerimentosArgs;
    Ambulancias?: boolean | BaseCountOutputTypeCountAmbulanciasArgs;
    VisitasBases?: boolean | BaseCountOutputTypeCountVisitasBasesArgs;
    receituarios?: boolean | BaseCountOutputTypeCountReceituariosArgs;
};
export type BaseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseCountOutputTypeSelect<ExtArgs> | null;
};
export type BaseCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type BaseCountOutputTypeCountRequerimentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoWhereInput;
};
export type BaseCountOutputTypeCountAmbulanciasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AmbulanciaWhereInput;
};
export type BaseCountOutputTypeCountVisitasBasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitasBasesWhereInput;
};
export type BaseCountOutputTypeCountReceituariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReceituarioWhereInput;
};
export type BaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    tipo_ambulancias?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.Base$usersArgs<ExtArgs>;
    Requerimentos?: boolean | Prisma.Base$RequerimentosArgs<ExtArgs>;
    Ambulancias?: boolean | Prisma.Base$AmbulanciasArgs<ExtArgs>;
    VisitasBases?: boolean | Prisma.Base$VisitasBasesArgs<ExtArgs>;
    receituarios?: boolean | Prisma.Base$receituariosArgs<ExtArgs>;
    _count?: boolean | Prisma.BaseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["base"]>;
export type BaseSelectScalar = {
    id?: boolean;
    nome?: boolean;
    tipo_ambulancias?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type BaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "tipo_ambulancias" | "created_at" | "updated_at", ExtArgs["result"]["base"]>;
export type BaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Base$usersArgs<ExtArgs>;
    Requerimentos?: boolean | Prisma.Base$RequerimentosArgs<ExtArgs>;
    Ambulancias?: boolean | Prisma.Base$AmbulanciasArgs<ExtArgs>;
    VisitasBases?: boolean | Prisma.Base$VisitasBasesArgs<ExtArgs>;
    receituarios?: boolean | Prisma.Base$receituariosArgs<ExtArgs>;
    _count?: boolean | Prisma.BaseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $BasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Base";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        Requerimentos: Prisma.$RequerimentoPayload<ExtArgs>[];
        Ambulancias: Prisma.$AmbulanciaPayload<ExtArgs>[];
        VisitasBases: Prisma.$VisitasBasesPayload<ExtArgs>[];
        receituarios: Prisma.$ReceituarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        tipo_ambulancias: $Enums.TipoAmbulancias;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["base"]>;
    composites: {};
};
export type BaseGetPayload<S extends boolean | null | undefined | BaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BasePayload, S>;
export type BaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: BaseCountAggregateInputType | true;
};
export interface BaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Base'];
        meta: {
            name: 'Base';
        };
    };
    findUnique<T extends BaseFindUniqueArgs>(args: Prisma.SelectSubset<T, BaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BaseFindFirstArgs>(args?: Prisma.SelectSubset<T, BaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BaseFindManyArgs>(args?: Prisma.SelectSubset<T, BaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BaseCreateArgs>(args: Prisma.SelectSubset<T, BaseCreateArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BaseCreateManyArgs>(args?: Prisma.SelectSubset<T, BaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BaseDeleteArgs>(args: Prisma.SelectSubset<T, BaseDeleteArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BaseUpdateArgs>(args: Prisma.SelectSubset<T, BaseUpdateArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, BaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BaseUpdateManyArgs>(args: Prisma.SelectSubset<T, BaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BaseUpsertArgs>(args: Prisma.SelectSubset<T, BaseUpsertArgs<ExtArgs>>): Prisma.Prisma__BaseClient<runtime.Types.Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BaseCountArgs>(args?: Prisma.Subset<T, BaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BaseCountAggregateOutputType> : number>;
    aggregate<T extends BaseAggregateArgs>(args: Prisma.Subset<T, BaseAggregateArgs>): Prisma.PrismaPromise<GetBaseAggregateType<T>>;
    groupBy<T extends BaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BaseGroupByArgs['orderBy'];
    } : {
        orderBy?: BaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BaseFieldRefs;
}
export interface Prisma__BaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Base$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Base$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Requerimentos<T extends Prisma.Base$RequerimentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Base$RequerimentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Ambulancias<T extends Prisma.Base$AmbulanciasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Base$AmbulanciasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    VisitasBases<T extends Prisma.Base$VisitasBasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Base$VisitasBasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitasBasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    receituarios<T extends Prisma.Base$receituariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Base$receituariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReceituarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BaseFieldRefs {
    readonly id: Prisma.FieldRef<"Base", 'String'>;
    readonly nome: Prisma.FieldRef<"Base", 'String'>;
    readonly tipo_ambulancias: Prisma.FieldRef<"Base", 'TipoAmbulancias'>;
    readonly created_at: Prisma.FieldRef<"Base", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Base", 'DateTime'>;
}
export type BaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    where: Prisma.BaseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type BaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    where: Prisma.BaseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type BaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    where?: Prisma.BaseWhereInput;
    orderBy?: Prisma.BaseOrderByWithRelationInput | Prisma.BaseOrderByWithRelationInput[];
    cursor?: Prisma.BaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BaseScalarFieldEnum | Prisma.BaseScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type BaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    where?: Prisma.BaseWhereInput;
    orderBy?: Prisma.BaseOrderByWithRelationInput | Prisma.BaseOrderByWithRelationInput[];
    cursor?: Prisma.BaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BaseScalarFieldEnum | Prisma.BaseScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type BaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    where?: Prisma.BaseWhereInput;
    orderBy?: Prisma.BaseOrderByWithRelationInput | Prisma.BaseOrderByWithRelationInput[];
    cursor?: Prisma.BaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BaseScalarFieldEnum | Prisma.BaseScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type BaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BaseCreateInput, Prisma.BaseUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type BaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BaseCreateManyInput | Prisma.BaseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BaseUpdateInput, Prisma.BaseUncheckedUpdateInput>;
    where: Prisma.BaseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type BaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BaseUpdateManyMutationInput, Prisma.BaseUncheckedUpdateManyInput>;
    where?: Prisma.BaseWhereInput;
    limit?: number;
};
export type BaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    where: Prisma.BaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.BaseCreateInput, Prisma.BaseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BaseUpdateInput, Prisma.BaseUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type BaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
    where: Prisma.BaseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type BaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BaseWhereInput;
    limit?: number;
};
export type Base$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Base$RequerimentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Base$AmbulanciasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmbulanciaSelect<ExtArgs> | null;
    omit?: Prisma.AmbulanciaOmit<ExtArgs> | null;
    include?: Prisma.AmbulanciaInclude<ExtArgs> | null;
    where?: Prisma.AmbulanciaWhereInput;
    orderBy?: Prisma.AmbulanciaOrderByWithRelationInput | Prisma.AmbulanciaOrderByWithRelationInput[];
    cursor?: Prisma.AmbulanciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AmbulanciaScalarFieldEnum | Prisma.AmbulanciaScalarFieldEnum[];
};
export type Base$VisitasBasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitasBasesSelect<ExtArgs> | null;
    omit?: Prisma.VisitasBasesOmit<ExtArgs> | null;
    include?: Prisma.VisitasBasesInclude<ExtArgs> | null;
    where?: Prisma.VisitasBasesWhereInput;
    orderBy?: Prisma.VisitasBasesOrderByWithRelationInput | Prisma.VisitasBasesOrderByWithRelationInput[];
    cursor?: Prisma.VisitasBasesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitasBasesScalarFieldEnum | Prisma.VisitasBasesScalarFieldEnum[];
};
export type Base$receituariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BaseSelect<ExtArgs> | null;
    omit?: Prisma.BaseOmit<ExtArgs> | null;
    include?: Prisma.BaseInclude<ExtArgs> | null;
};
