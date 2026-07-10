import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NotificacaoModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificacaoPayload>;
export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null;
    _min: NotificacaoMinAggregateOutputType | null;
    _max: NotificacaoMaxAggregateOutputType | null;
};
export type NotificacaoMinAggregateOutputType = {
    id: string | null;
    mensagem: string | null;
    artefatoUUID: string | null;
    tipo: $Enums.TipoNotificacao | null;
    evento: string | null;
    link: string | null;
    lida: boolean | null;
    removida: boolean | null;
    userId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type NotificacaoMaxAggregateOutputType = {
    id: string | null;
    mensagem: string | null;
    artefatoUUID: string | null;
    tipo: $Enums.TipoNotificacao | null;
    evento: string | null;
    link: string | null;
    lida: boolean | null;
    removida: boolean | null;
    userId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type NotificacaoCountAggregateOutputType = {
    id: number;
    mensagem: number;
    artefatoUUID: number;
    tipo: number;
    evento: number;
    link: number;
    lida: number;
    removida: number;
    userId: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type NotificacaoMinAggregateInputType = {
    id?: true;
    mensagem?: true;
    artefatoUUID?: true;
    tipo?: true;
    evento?: true;
    link?: true;
    lida?: true;
    removida?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
};
export type NotificacaoMaxAggregateInputType = {
    id?: true;
    mensagem?: true;
    artefatoUUID?: true;
    tipo?: true;
    evento?: true;
    link?: true;
    lida?: true;
    removida?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
};
export type NotificacaoCountAggregateInputType = {
    id?: true;
    mensagem?: true;
    artefatoUUID?: true;
    tipo?: true;
    evento?: true;
    link?: true;
    lida?: true;
    removida?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type NotificacaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificacaoWhereInput;
    orderBy?: Prisma.NotificacaoOrderByWithRelationInput | Prisma.NotificacaoOrderByWithRelationInput[];
    cursor?: Prisma.NotificacaoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificacaoCountAggregateInputType;
    _min?: NotificacaoMinAggregateInputType;
    _max?: NotificacaoMaxAggregateInputType;
};
export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
    [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotificacao[P]> : Prisma.GetScalarType<T[P], AggregateNotificacao[P]>;
};
export type NotificacaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificacaoWhereInput;
    orderBy?: Prisma.NotificacaoOrderByWithAggregationInput | Prisma.NotificacaoOrderByWithAggregationInput[];
    by: Prisma.NotificacaoScalarFieldEnum[] | Prisma.NotificacaoScalarFieldEnum;
    having?: Prisma.NotificacaoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificacaoCountAggregateInputType | true;
    _min?: NotificacaoMinAggregateInputType;
    _max?: NotificacaoMaxAggregateInputType;
};
export type NotificacaoGroupByOutputType = {
    id: string;
    mensagem: string;
    artefatoUUID: string;
    tipo: $Enums.TipoNotificacao;
    evento: string;
    link: string | null;
    lida: boolean;
    removida: boolean;
    userId: string;
    created_at: Date;
    updated_at: Date;
    _count: NotificacaoCountAggregateOutputType | null;
    _min: NotificacaoMinAggregateOutputType | null;
    _max: NotificacaoMaxAggregateOutputType | null;
};
export type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificacaoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificacaoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificacaoGroupByOutputType[P]>;
}>>;
export type NotificacaoWhereInput = {
    AND?: Prisma.NotificacaoWhereInput | Prisma.NotificacaoWhereInput[];
    OR?: Prisma.NotificacaoWhereInput[];
    NOT?: Prisma.NotificacaoWhereInput | Prisma.NotificacaoWhereInput[];
    id?: Prisma.StringFilter<"Notificacao"> | string;
    mensagem?: Prisma.StringFilter<"Notificacao"> | string;
    artefatoUUID?: Prisma.StringFilter<"Notificacao"> | string;
    tipo?: Prisma.EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao;
    evento?: Prisma.StringFilter<"Notificacao"> | string;
    link?: Prisma.StringNullableFilter<"Notificacao"> | string | null;
    lida?: Prisma.BoolFilter<"Notificacao"> | boolean;
    removida?: Prisma.BoolFilter<"Notificacao"> | boolean;
    userId?: Prisma.StringFilter<"Notificacao"> | string;
    created_at?: Prisma.DateTimeFilter<"Notificacao"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Notificacao"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type NotificacaoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    evento?: Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    lida?: Prisma.SortOrder;
    removida?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.NotificacaoOrderByRelevanceInput;
};
export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.NotificacaoWhereInput | Prisma.NotificacaoWhereInput[];
    OR?: Prisma.NotificacaoWhereInput[];
    NOT?: Prisma.NotificacaoWhereInput | Prisma.NotificacaoWhereInput[];
    mensagem?: Prisma.StringFilter<"Notificacao"> | string;
    artefatoUUID?: Prisma.StringFilter<"Notificacao"> | string;
    tipo?: Prisma.EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao;
    evento?: Prisma.StringFilter<"Notificacao"> | string;
    link?: Prisma.StringNullableFilter<"Notificacao"> | string | null;
    lida?: Prisma.BoolFilter<"Notificacao"> | boolean;
    removida?: Prisma.BoolFilter<"Notificacao"> | boolean;
    userId?: Prisma.StringFilter<"Notificacao"> | string;
    created_at?: Prisma.DateTimeFilter<"Notificacao"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Notificacao"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type NotificacaoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    evento?: Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    lida?: Prisma.SortOrder;
    removida?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.NotificacaoCountOrderByAggregateInput;
    _max?: Prisma.NotificacaoMaxOrderByAggregateInput;
    _min?: Prisma.NotificacaoMinOrderByAggregateInput;
};
export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificacaoScalarWhereWithAggregatesInput | Prisma.NotificacaoScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificacaoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificacaoScalarWhereWithAggregatesInput | Prisma.NotificacaoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Notificacao"> | string;
    mensagem?: Prisma.StringWithAggregatesFilter<"Notificacao"> | string;
    artefatoUUID?: Prisma.StringWithAggregatesFilter<"Notificacao"> | string;
    tipo?: Prisma.EnumTipoNotificacaoWithAggregatesFilter<"Notificacao"> | $Enums.TipoNotificacao;
    evento?: Prisma.StringWithAggregatesFilter<"Notificacao"> | string;
    link?: Prisma.StringNullableWithAggregatesFilter<"Notificacao"> | string | null;
    lida?: Prisma.BoolWithAggregatesFilter<"Notificacao"> | boolean;
    removida?: Prisma.BoolWithAggregatesFilter<"Notificacao"> | boolean;
    userId?: Prisma.StringWithAggregatesFilter<"Notificacao"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Notificacao"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Notificacao"> | Date | string;
};
export type NotificacaoCreateInput = {
    id?: string;
    mensagem: string;
    artefatoUUID: string;
    tipo: $Enums.TipoNotificacao;
    evento: string;
    link?: string | null;
    lida?: boolean;
    removida?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutNotificacaosInput;
};
export type NotificacaoUncheckedCreateInput = {
    id?: string;
    mensagem: string;
    artefatoUUID: string;
    tipo: $Enums.TipoNotificacao;
    evento: string;
    link?: string | null;
    lida?: boolean;
    removida?: boolean;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type NotificacaoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao;
    evento?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    removida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutNotificacaosNestedInput;
};
export type NotificacaoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao;
    evento?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    removida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificacaoCreateManyInput = {
    id?: string;
    mensagem: string;
    artefatoUUID: string;
    tipo: $Enums.TipoNotificacao;
    evento: string;
    link?: string | null;
    lida?: boolean;
    removida?: boolean;
    userId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type NotificacaoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao;
    evento?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    removida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificacaoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao;
    evento?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    removida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificacaoListRelationFilter = {
    every?: Prisma.NotificacaoWhereInput;
    some?: Prisma.NotificacaoWhereInput;
    none?: Prisma.NotificacaoWhereInput;
};
export type NotificacaoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificacaoOrderByRelevanceInput = {
    fields: Prisma.NotificacaoOrderByRelevanceFieldEnum | Prisma.NotificacaoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type NotificacaoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    evento?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    lida?: Prisma.SortOrder;
    removida?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type NotificacaoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    evento?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    lida?: Prisma.SortOrder;
    removida?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type NotificacaoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mensagem?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    evento?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    lida?: Prisma.SortOrder;
    removida?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type NotificacaoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificacaoCreateWithoutUserInput, Prisma.NotificacaoUncheckedCreateWithoutUserInput> | Prisma.NotificacaoCreateWithoutUserInput[] | Prisma.NotificacaoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificacaoCreateOrConnectWithoutUserInput | Prisma.NotificacaoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificacaoCreateManyUserInputEnvelope;
    connect?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
};
export type NotificacaoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificacaoCreateWithoutUserInput, Prisma.NotificacaoUncheckedCreateWithoutUserInput> | Prisma.NotificacaoCreateWithoutUserInput[] | Prisma.NotificacaoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificacaoCreateOrConnectWithoutUserInput | Prisma.NotificacaoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificacaoCreateManyUserInputEnvelope;
    connect?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
};
export type NotificacaoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificacaoCreateWithoutUserInput, Prisma.NotificacaoUncheckedCreateWithoutUserInput> | Prisma.NotificacaoCreateWithoutUserInput[] | Prisma.NotificacaoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificacaoCreateOrConnectWithoutUserInput | Prisma.NotificacaoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificacaoUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificacaoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificacaoCreateManyUserInputEnvelope;
    set?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
    disconnect?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
    delete?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
    connect?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
    update?: Prisma.NotificacaoUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificacaoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificacaoUpdateManyWithWhereWithoutUserInput | Prisma.NotificacaoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificacaoScalarWhereInput | Prisma.NotificacaoScalarWhereInput[];
};
export type NotificacaoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificacaoCreateWithoutUserInput, Prisma.NotificacaoUncheckedCreateWithoutUserInput> | Prisma.NotificacaoCreateWithoutUserInput[] | Prisma.NotificacaoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificacaoCreateOrConnectWithoutUserInput | Prisma.NotificacaoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificacaoUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificacaoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificacaoCreateManyUserInputEnvelope;
    set?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
    disconnect?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
    delete?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
    connect?: Prisma.NotificacaoWhereUniqueInput | Prisma.NotificacaoWhereUniqueInput[];
    update?: Prisma.NotificacaoUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificacaoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificacaoUpdateManyWithWhereWithoutUserInput | Prisma.NotificacaoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificacaoScalarWhereInput | Prisma.NotificacaoScalarWhereInput[];
};
export type EnumTipoNotificacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoNotificacao;
};
export type NotificacaoCreateWithoutUserInput = {
    id?: string;
    mensagem: string;
    artefatoUUID: string;
    tipo: $Enums.TipoNotificacao;
    evento: string;
    link?: string | null;
    lida?: boolean;
    removida?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type NotificacaoUncheckedCreateWithoutUserInput = {
    id?: string;
    mensagem: string;
    artefatoUUID: string;
    tipo: $Enums.TipoNotificacao;
    evento: string;
    link?: string | null;
    lida?: boolean;
    removida?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type NotificacaoCreateOrConnectWithoutUserInput = {
    where: Prisma.NotificacaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificacaoCreateWithoutUserInput, Prisma.NotificacaoUncheckedCreateWithoutUserInput>;
};
export type NotificacaoCreateManyUserInputEnvelope = {
    data: Prisma.NotificacaoCreateManyUserInput | Prisma.NotificacaoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type NotificacaoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificacaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificacaoUpdateWithoutUserInput, Prisma.NotificacaoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.NotificacaoCreateWithoutUserInput, Prisma.NotificacaoUncheckedCreateWithoutUserInput>;
};
export type NotificacaoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificacaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificacaoUpdateWithoutUserInput, Prisma.NotificacaoUncheckedUpdateWithoutUserInput>;
};
export type NotificacaoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.NotificacaoScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificacaoUpdateManyMutationInput, Prisma.NotificacaoUncheckedUpdateManyWithoutUserInput>;
};
export type NotificacaoScalarWhereInput = {
    AND?: Prisma.NotificacaoScalarWhereInput | Prisma.NotificacaoScalarWhereInput[];
    OR?: Prisma.NotificacaoScalarWhereInput[];
    NOT?: Prisma.NotificacaoScalarWhereInput | Prisma.NotificacaoScalarWhereInput[];
    id?: Prisma.StringFilter<"Notificacao"> | string;
    mensagem?: Prisma.StringFilter<"Notificacao"> | string;
    artefatoUUID?: Prisma.StringFilter<"Notificacao"> | string;
    tipo?: Prisma.EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao;
    evento?: Prisma.StringFilter<"Notificacao"> | string;
    link?: Prisma.StringNullableFilter<"Notificacao"> | string | null;
    lida?: Prisma.BoolFilter<"Notificacao"> | boolean;
    removida?: Prisma.BoolFilter<"Notificacao"> | boolean;
    userId?: Prisma.StringFilter<"Notificacao"> | string;
    created_at?: Prisma.DateTimeFilter<"Notificacao"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Notificacao"> | Date | string;
};
export type NotificacaoCreateManyUserInput = {
    id?: string;
    mensagem: string;
    artefatoUUID: string;
    tipo: $Enums.TipoNotificacao;
    evento: string;
    link?: string | null;
    lida?: boolean;
    removida?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type NotificacaoUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao;
    evento?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    removida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificacaoUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao;
    evento?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    removida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificacaoUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mensagem?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao;
    evento?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    removida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificacaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mensagem?: boolean;
    artefatoUUID?: boolean;
    tipo?: boolean;
    evento?: boolean;
    link?: boolean;
    lida?: boolean;
    removida?: boolean;
    userId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificacao"]>;
export type NotificacaoSelectScalar = {
    id?: boolean;
    mensagem?: boolean;
    artefatoUUID?: boolean;
    tipo?: boolean;
    evento?: boolean;
    link?: boolean;
    lida?: boolean;
    removida?: boolean;
    userId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type NotificacaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mensagem" | "artefatoUUID" | "tipo" | "evento" | "link" | "lida" | "removida" | "userId" | "created_at" | "updated_at", ExtArgs["result"]["notificacao"]>;
export type NotificacaoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $NotificacaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Notificacao";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        mensagem: string;
        artefatoUUID: string;
        tipo: $Enums.TipoNotificacao;
        evento: string;
        link: string | null;
        lida: boolean;
        removida: boolean;
        userId: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["notificacao"]>;
    composites: {};
};
export type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload, S>;
export type NotificacaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: NotificacaoCountAggregateInputType | true;
};
export interface NotificacaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'];
        meta: {
            name: 'Notificacao';
        };
    };
    findUnique<T extends NotificacaoFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificacaoClient<runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificacaoClient<runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificacaoFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificacaoClient<runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificacaoClient<runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificacaoFindManyArgs>(args?: Prisma.SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificacaoCreateArgs>(args: Prisma.SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma.Prisma__NotificacaoClient<runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificacaoCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends NotificacaoDeleteArgs>(args: Prisma.SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificacaoClient<runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificacaoUpdateArgs>(args: Prisma.SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificacaoClient<runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificacaoUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends NotificacaoUpsertArgs>(args: Prisma.SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificacaoClient<runtime.Types.Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotificacaoCountArgs>(args?: Prisma.Subset<T, NotificacaoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificacaoCountAggregateOutputType> : number>;
    aggregate<T extends NotificacaoAggregateArgs>(args: Prisma.Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>;
    groupBy<T extends NotificacaoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificacaoGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificacaoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificacaoFieldRefs;
}
export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificacaoFieldRefs {
    readonly id: Prisma.FieldRef<"Notificacao", 'String'>;
    readonly mensagem: Prisma.FieldRef<"Notificacao", 'String'>;
    readonly artefatoUUID: Prisma.FieldRef<"Notificacao", 'String'>;
    readonly tipo: Prisma.FieldRef<"Notificacao", 'TipoNotificacao'>;
    readonly evento: Prisma.FieldRef<"Notificacao", 'String'>;
    readonly link: Prisma.FieldRef<"Notificacao", 'String'>;
    readonly lida: Prisma.FieldRef<"Notificacao", 'Boolean'>;
    readonly removida: Prisma.FieldRef<"Notificacao", 'Boolean'>;
    readonly userId: Prisma.FieldRef<"Notificacao", 'String'>;
    readonly created_at: Prisma.FieldRef<"Notificacao", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Notificacao", 'DateTime'>;
}
export type NotificacaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
    where: Prisma.NotificacaoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
    where: Prisma.NotificacaoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type NotificacaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
    where?: Prisma.NotificacaoWhereInput;
    orderBy?: Prisma.NotificacaoOrderByWithRelationInput | Prisma.NotificacaoOrderByWithRelationInput[];
    cursor?: Prisma.NotificacaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificacaoScalarFieldEnum | Prisma.NotificacaoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
    where?: Prisma.NotificacaoWhereInput;
    orderBy?: Prisma.NotificacaoOrderByWithRelationInput | Prisma.NotificacaoOrderByWithRelationInput[];
    cursor?: Prisma.NotificacaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificacaoScalarFieldEnum | Prisma.NotificacaoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type NotificacaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
    where?: Prisma.NotificacaoWhereInput;
    orderBy?: Prisma.NotificacaoOrderByWithRelationInput | Prisma.NotificacaoOrderByWithRelationInput[];
    cursor?: Prisma.NotificacaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificacaoScalarFieldEnum | Prisma.NotificacaoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type NotificacaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificacaoCreateInput, Prisma.NotificacaoUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type NotificacaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificacaoCreateManyInput | Prisma.NotificacaoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotificacaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificacaoUpdateInput, Prisma.NotificacaoUncheckedUpdateInput>;
    where: Prisma.NotificacaoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type NotificacaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificacaoUpdateManyMutationInput, Prisma.NotificacaoUncheckedUpdateManyInput>;
    where?: Prisma.NotificacaoWhereInput;
    limit?: number;
};
export type NotificacaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
    where: Prisma.NotificacaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificacaoCreateInput, Prisma.NotificacaoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificacaoUpdateInput, Prisma.NotificacaoUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type NotificacaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
    where: Prisma.NotificacaoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type NotificacaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificacaoWhereInput;
    limit?: number;
};
export type NotificacaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificacaoSelect<ExtArgs> | null;
    omit?: Prisma.NotificacaoOmit<ExtArgs> | null;
    include?: Prisma.NotificacaoInclude<ExtArgs> | null;
};
