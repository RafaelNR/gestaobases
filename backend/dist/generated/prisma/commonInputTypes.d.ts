import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumTipoAmbulanciasFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAmbulancias | Prisma.EnumTipoAmbulanciasFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAmbulancias[];
    notIn?: $Enums.TipoAmbulancias[];
    not?: Prisma.NestedEnumTipoAmbulanciasFilter<$PrismaModel> | $Enums.TipoAmbulancias;
};
export type EnumTipoAmbulanciasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAmbulancias | Prisma.EnumTipoAmbulanciasFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAmbulancias[];
    notIn?: $Enums.TipoAmbulancias[];
    not?: Prisma.NestedEnumTipoAmbulanciasWithAggregatesFilter<$PrismaModel> | $Enums.TipoAmbulancias;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoAmbulanciasFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoAmbulanciasFilter<$PrismaModel>;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumTipoUnidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUnidade | Prisma.EnumTipoUnidadeFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoUnidade[];
    notIn?: $Enums.TipoUnidade[];
    not?: Prisma.NestedEnumTipoUnidadeFilter<$PrismaModel> | $Enums.TipoUnidade;
};
export type EnumTipoUnidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUnidade | Prisma.EnumTipoUnidadeFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoUnidade[];
    notIn?: $Enums.TipoUnidade[];
    not?: Prisma.NestedEnumTipoUnidadeWithAggregatesFilter<$PrismaModel> | $Enums.TipoUnidade;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoUnidadeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoUnidadeFilter<$PrismaModel>;
};
export type EnumUnidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Unidade | Prisma.EnumUnidadeFieldRefInput<$PrismaModel>;
    in?: $Enums.Unidade[];
    notIn?: $Enums.Unidade[];
    not?: Prisma.NestedEnumUnidadeFilter<$PrismaModel> | $Enums.Unidade;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumUnidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unidade | Prisma.EnumUnidadeFieldRefInput<$PrismaModel>;
    in?: $Enums.Unidade[];
    notIn?: $Enums.Unidade[];
    not?: Prisma.NestedEnumUnidadeWithAggregatesFilter<$PrismaModel> | $Enums.Unidade;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUnidadeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUnidadeFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumTipoRequerimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRequerimento | Prisma.EnumTipoRequerimentoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoRequerimento[];
    notIn?: $Enums.TipoRequerimento[];
    not?: Prisma.NestedEnumTipoRequerimentoFilter<$PrismaModel> | $Enums.TipoRequerimento;
};
export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | Prisma.EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[];
    notIn?: $Enums.Status[];
    not?: Prisma.NestedEnumStatusFilter<$PrismaModel> | $Enums.Status;
};
export type EnumTipoRequerimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRequerimento | Prisma.EnumTipoRequerimentoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoRequerimento[];
    notIn?: $Enums.TipoRequerimento[];
    not?: Prisma.NestedEnumTipoRequerimentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoRequerimento;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoRequerimentoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoRequerimentoFilter<$PrismaModel>;
};
export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | Prisma.EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[];
    notIn?: $Enums.Status[];
    not?: Prisma.NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusFilter<$PrismaModel>;
};
export type EnumStatusEmailFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmail | Prisma.EnumStatusEmailFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusEmail[];
    notIn?: $Enums.StatusEmail[];
    not?: Prisma.NestedEnumStatusEmailFilter<$PrismaModel> | $Enums.StatusEmail;
};
export type EnumTipoEmailFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEmail | Prisma.EnumTipoEmailFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoEmail[];
    notIn?: $Enums.TipoEmail[];
    not?: Prisma.NestedEnumTipoEmailFilter<$PrismaModel> | $Enums.TipoEmail;
};
export type EnumStatusEmailWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmail | Prisma.EnumStatusEmailFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusEmail[];
    notIn?: $Enums.StatusEmail[];
    not?: Prisma.NestedEnumStatusEmailWithAggregatesFilter<$PrismaModel> | $Enums.StatusEmail;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusEmailFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusEmailFilter<$PrismaModel>;
};
export type EnumTipoEmailWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEmail | Prisma.EnumTipoEmailFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoEmail[];
    notIn?: $Enums.TipoEmail[];
    not?: Prisma.NestedEnumTipoEmailWithAggregatesFilter<$PrismaModel> | $Enums.TipoEmail;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoEmailFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoEmailFilter<$PrismaModel>;
};
export type EnumTipoLogFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLog | Prisma.EnumTipoLogFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoLog[];
    notIn?: $Enums.TipoLog[];
    not?: Prisma.NestedEnumTipoLogFilter<$PrismaModel> | $Enums.TipoLog;
};
export type EnumTipoLogWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLog | Prisma.EnumTipoLogFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoLog[];
    notIn?: $Enums.TipoLog[];
    not?: Prisma.NestedEnumTipoLogWithAggregatesFilter<$PrismaModel> | $Enums.TipoLog;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoLogFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoLogFilter<$PrismaModel>;
};
export type EnumStatusReceituarioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReceituario | Prisma.EnumStatusReceituarioFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusReceituario[];
    notIn?: $Enums.StatusReceituario[];
    not?: Prisma.NestedEnumStatusReceituarioFilter<$PrismaModel> | $Enums.StatusReceituario;
};
export type EnumStatusReceituarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReceituario | Prisma.EnumStatusReceituarioFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusReceituario[];
    notIn?: $Enums.StatusReceituario[];
    not?: Prisma.NestedEnumStatusReceituarioWithAggregatesFilter<$PrismaModel> | $Enums.StatusReceituario;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusReceituarioFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusReceituarioFilter<$PrismaModel>;
};
export type EnumUnidadeMedicamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedicamento | Prisma.EnumUnidadeMedicamentoFieldRefInput<$PrismaModel>;
    in?: $Enums.UnidadeMedicamento[];
    notIn?: $Enums.UnidadeMedicamento[];
    not?: Prisma.NestedEnumUnidadeMedicamentoFilter<$PrismaModel> | $Enums.UnidadeMedicamento;
};
export type EnumTipoAdministracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAdministracao | Prisma.EnumTipoAdministracaoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAdministracao[];
    notIn?: $Enums.TipoAdministracao[];
    not?: Prisma.NestedEnumTipoAdministracaoFilter<$PrismaModel> | $Enums.TipoAdministracao;
};
export type EnumTipoDiluenteNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDiluente | Prisma.EnumTipoDiluenteFieldRefInput<$PrismaModel> | null;
    in?: $Enums.TipoDiluente[] | null;
    notIn?: $Enums.TipoDiluente[] | null;
    not?: Prisma.NestedEnumTipoDiluenteNullableFilter<$PrismaModel> | $Enums.TipoDiluente | null;
};
export type EnumUnidadeMedicamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedicamento | Prisma.EnumUnidadeMedicamentoFieldRefInput<$PrismaModel>;
    in?: $Enums.UnidadeMedicamento[];
    notIn?: $Enums.UnidadeMedicamento[];
    not?: Prisma.NestedEnumUnidadeMedicamentoWithAggregatesFilter<$PrismaModel> | $Enums.UnidadeMedicamento;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUnidadeMedicamentoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUnidadeMedicamentoFilter<$PrismaModel>;
};
export type EnumTipoAdministracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAdministracao | Prisma.EnumTipoAdministracaoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAdministracao[];
    notIn?: $Enums.TipoAdministracao[];
    not?: Prisma.NestedEnumTipoAdministracaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAdministracao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoAdministracaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoAdministracaoFilter<$PrismaModel>;
};
export type EnumTipoDiluenteNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDiluente | Prisma.EnumTipoDiluenteFieldRefInput<$PrismaModel> | null;
    in?: $Enums.TipoDiluente[] | null;
    notIn?: $Enums.TipoDiluente[] | null;
    not?: Prisma.NestedEnumTipoDiluenteNullableWithAggregatesFilter<$PrismaModel> | $Enums.TipoDiluente | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoDiluenteNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoDiluenteNullableFilter<$PrismaModel>;
};
export type EnumTipoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | Prisma.EnumTipoNotificacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoNotificacao[];
    notIn?: $Enums.TipoNotificacao[];
    not?: Prisma.NestedEnumTipoNotificacaoFilter<$PrismaModel> | $Enums.TipoNotificacao;
};
export type EnumTipoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | Prisma.EnumTipoNotificacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoNotificacao[];
    notIn?: $Enums.TipoNotificacao[];
    not?: Prisma.NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoNotificacaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoNotificacaoFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumTipoAmbulanciasFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAmbulancias | Prisma.EnumTipoAmbulanciasFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAmbulancias[];
    notIn?: $Enums.TipoAmbulancias[];
    not?: Prisma.NestedEnumTipoAmbulanciasFilter<$PrismaModel> | $Enums.TipoAmbulancias;
};
export type NestedEnumTipoAmbulanciasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAmbulancias | Prisma.EnumTipoAmbulanciasFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAmbulancias[];
    notIn?: $Enums.TipoAmbulancias[];
    not?: Prisma.NestedEnumTipoAmbulanciasWithAggregatesFilter<$PrismaModel> | $Enums.TipoAmbulancias;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoAmbulanciasFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoAmbulanciasFilter<$PrismaModel>;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumTipoUnidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUnidade | Prisma.EnumTipoUnidadeFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoUnidade[];
    notIn?: $Enums.TipoUnidade[];
    not?: Prisma.NestedEnumTipoUnidadeFilter<$PrismaModel> | $Enums.TipoUnidade;
};
export type NestedEnumTipoUnidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUnidade | Prisma.EnumTipoUnidadeFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoUnidade[];
    notIn?: $Enums.TipoUnidade[];
    not?: Prisma.NestedEnumTipoUnidadeWithAggregatesFilter<$PrismaModel> | $Enums.TipoUnidade;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoUnidadeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoUnidadeFilter<$PrismaModel>;
};
export type NestedEnumUnidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Unidade | Prisma.EnumUnidadeFieldRefInput<$PrismaModel>;
    in?: $Enums.Unidade[];
    notIn?: $Enums.Unidade[];
    not?: Prisma.NestedEnumUnidadeFilter<$PrismaModel> | $Enums.Unidade;
};
export type NestedEnumUnidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unidade | Prisma.EnumUnidadeFieldRefInput<$PrismaModel>;
    in?: $Enums.Unidade[];
    notIn?: $Enums.Unidade[];
    not?: Prisma.NestedEnumUnidadeWithAggregatesFilter<$PrismaModel> | $Enums.Unidade;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUnidadeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUnidadeFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumTipoRequerimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRequerimento | Prisma.EnumTipoRequerimentoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoRequerimento[];
    notIn?: $Enums.TipoRequerimento[];
    not?: Prisma.NestedEnumTipoRequerimentoFilter<$PrismaModel> | $Enums.TipoRequerimento;
};
export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | Prisma.EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[];
    notIn?: $Enums.Status[];
    not?: Prisma.NestedEnumStatusFilter<$PrismaModel> | $Enums.Status;
};
export type NestedEnumTipoRequerimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRequerimento | Prisma.EnumTipoRequerimentoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoRequerimento[];
    notIn?: $Enums.TipoRequerimento[];
    not?: Prisma.NestedEnumTipoRequerimentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoRequerimento;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoRequerimentoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoRequerimentoFilter<$PrismaModel>;
};
export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | Prisma.EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[];
    notIn?: $Enums.Status[];
    not?: Prisma.NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusFilter<$PrismaModel>;
};
export type NestedEnumStatusEmailFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmail | Prisma.EnumStatusEmailFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusEmail[];
    notIn?: $Enums.StatusEmail[];
    not?: Prisma.NestedEnumStatusEmailFilter<$PrismaModel> | $Enums.StatusEmail;
};
export type NestedEnumTipoEmailFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEmail | Prisma.EnumTipoEmailFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoEmail[];
    notIn?: $Enums.TipoEmail[];
    not?: Prisma.NestedEnumTipoEmailFilter<$PrismaModel> | $Enums.TipoEmail;
};
export type NestedEnumStatusEmailWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmail | Prisma.EnumStatusEmailFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusEmail[];
    notIn?: $Enums.StatusEmail[];
    not?: Prisma.NestedEnumStatusEmailWithAggregatesFilter<$PrismaModel> | $Enums.StatusEmail;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusEmailFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusEmailFilter<$PrismaModel>;
};
export type NestedEnumTipoEmailWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEmail | Prisma.EnumTipoEmailFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoEmail[];
    notIn?: $Enums.TipoEmail[];
    not?: Prisma.NestedEnumTipoEmailWithAggregatesFilter<$PrismaModel> | $Enums.TipoEmail;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoEmailFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoEmailFilter<$PrismaModel>;
};
export type NestedEnumTipoLogFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLog | Prisma.EnumTipoLogFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoLog[];
    notIn?: $Enums.TipoLog[];
    not?: Prisma.NestedEnumTipoLogFilter<$PrismaModel> | $Enums.TipoLog;
};
export type NestedEnumTipoLogWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLog | Prisma.EnumTipoLogFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoLog[];
    notIn?: $Enums.TipoLog[];
    not?: Prisma.NestedEnumTipoLogWithAggregatesFilter<$PrismaModel> | $Enums.TipoLog;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoLogFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoLogFilter<$PrismaModel>;
};
export type NestedEnumStatusReceituarioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReceituario | Prisma.EnumStatusReceituarioFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusReceituario[];
    notIn?: $Enums.StatusReceituario[];
    not?: Prisma.NestedEnumStatusReceituarioFilter<$PrismaModel> | $Enums.StatusReceituario;
};
export type NestedEnumStatusReceituarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReceituario | Prisma.EnumStatusReceituarioFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusReceituario[];
    notIn?: $Enums.StatusReceituario[];
    not?: Prisma.NestedEnumStatusReceituarioWithAggregatesFilter<$PrismaModel> | $Enums.StatusReceituario;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusReceituarioFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusReceituarioFilter<$PrismaModel>;
};
export type NestedEnumUnidadeMedicamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedicamento | Prisma.EnumUnidadeMedicamentoFieldRefInput<$PrismaModel>;
    in?: $Enums.UnidadeMedicamento[];
    notIn?: $Enums.UnidadeMedicamento[];
    not?: Prisma.NestedEnumUnidadeMedicamentoFilter<$PrismaModel> | $Enums.UnidadeMedicamento;
};
export type NestedEnumTipoAdministracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAdministracao | Prisma.EnumTipoAdministracaoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAdministracao[];
    notIn?: $Enums.TipoAdministracao[];
    not?: Prisma.NestedEnumTipoAdministracaoFilter<$PrismaModel> | $Enums.TipoAdministracao;
};
export type NestedEnumTipoDiluenteNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDiluente | Prisma.EnumTipoDiluenteFieldRefInput<$PrismaModel> | null;
    in?: $Enums.TipoDiluente[] | null;
    notIn?: $Enums.TipoDiluente[] | null;
    not?: Prisma.NestedEnumTipoDiluenteNullableFilter<$PrismaModel> | $Enums.TipoDiluente | null;
};
export type NestedEnumUnidadeMedicamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedicamento | Prisma.EnumUnidadeMedicamentoFieldRefInput<$PrismaModel>;
    in?: $Enums.UnidadeMedicamento[];
    notIn?: $Enums.UnidadeMedicamento[];
    not?: Prisma.NestedEnumUnidadeMedicamentoWithAggregatesFilter<$PrismaModel> | $Enums.UnidadeMedicamento;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUnidadeMedicamentoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUnidadeMedicamentoFilter<$PrismaModel>;
};
export type NestedEnumTipoAdministracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAdministracao | Prisma.EnumTipoAdministracaoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAdministracao[];
    notIn?: $Enums.TipoAdministracao[];
    not?: Prisma.NestedEnumTipoAdministracaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAdministracao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoAdministracaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoAdministracaoFilter<$PrismaModel>;
};
export type NestedEnumTipoDiluenteNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDiluente | Prisma.EnumTipoDiluenteFieldRefInput<$PrismaModel> | null;
    in?: $Enums.TipoDiluente[] | null;
    notIn?: $Enums.TipoDiluente[] | null;
    not?: Prisma.NestedEnumTipoDiluenteNullableWithAggregatesFilter<$PrismaModel> | $Enums.TipoDiluente | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoDiluenteNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoDiluenteNullableFilter<$PrismaModel>;
};
export type NestedEnumTipoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | Prisma.EnumTipoNotificacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoNotificacao[];
    notIn?: $Enums.TipoNotificacao[];
    not?: Prisma.NestedEnumTipoNotificacaoFilter<$PrismaModel> | $Enums.TipoNotificacao;
};
export type NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | Prisma.EnumTipoNotificacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoNotificacao[];
    notIn?: $Enums.TipoNotificacao[];
    not?: Prisma.NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoNotificacaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoNotificacaoFilter<$PrismaModel>;
};
