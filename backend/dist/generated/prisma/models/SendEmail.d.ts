import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SendEmailModel = runtime.Types.Result.DefaultSelection<Prisma.$SendEmailPayload>;
export type AggregateSendEmail = {
    _count: SendEmailCountAggregateOutputType | null;
    _min: SendEmailMinAggregateOutputType | null;
    _max: SendEmailMaxAggregateOutputType | null;
};
export type SendEmailMinAggregateOutputType = {
    id: string | null;
    status: $Enums.StatusEmail | null;
    tipo: $Enums.TipoEmail | null;
    email: string | null;
    artefatoUUID: string | null;
    message: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SendEmailMaxAggregateOutputType = {
    id: string | null;
    status: $Enums.StatusEmail | null;
    tipo: $Enums.TipoEmail | null;
    email: string | null;
    artefatoUUID: string | null;
    message: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SendEmailCountAggregateOutputType = {
    id: number;
    status: number;
    tipo: number;
    email: number;
    artefatoUUID: number;
    message: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SendEmailMinAggregateInputType = {
    id?: true;
    status?: true;
    tipo?: true;
    email?: true;
    artefatoUUID?: true;
    message?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SendEmailMaxAggregateInputType = {
    id?: true;
    status?: true;
    tipo?: true;
    email?: true;
    artefatoUUID?: true;
    message?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SendEmailCountAggregateInputType = {
    id?: true;
    status?: true;
    tipo?: true;
    email?: true;
    artefatoUUID?: true;
    message?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SendEmailAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SendEmailWhereInput;
    orderBy?: Prisma.SendEmailOrderByWithRelationInput | Prisma.SendEmailOrderByWithRelationInput[];
    cursor?: Prisma.SendEmailWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SendEmailCountAggregateInputType;
    _min?: SendEmailMinAggregateInputType;
    _max?: SendEmailMaxAggregateInputType;
};
export type GetSendEmailAggregateType<T extends SendEmailAggregateArgs> = {
    [P in keyof T & keyof AggregateSendEmail]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSendEmail[P]> : Prisma.GetScalarType<T[P], AggregateSendEmail[P]>;
};
export type SendEmailGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SendEmailWhereInput;
    orderBy?: Prisma.SendEmailOrderByWithAggregationInput | Prisma.SendEmailOrderByWithAggregationInput[];
    by: Prisma.SendEmailScalarFieldEnum[] | Prisma.SendEmailScalarFieldEnum;
    having?: Prisma.SendEmailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SendEmailCountAggregateInputType | true;
    _min?: SendEmailMinAggregateInputType;
    _max?: SendEmailMaxAggregateInputType;
};
export type SendEmailGroupByOutputType = {
    id: string;
    status: $Enums.StatusEmail;
    tipo: $Enums.TipoEmail;
    email: string;
    artefatoUUID: string;
    message: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SendEmailCountAggregateOutputType | null;
    _min: SendEmailMinAggregateOutputType | null;
    _max: SendEmailMaxAggregateOutputType | null;
};
export type GetSendEmailGroupByPayload<T extends SendEmailGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SendEmailGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SendEmailGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SendEmailGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SendEmailGroupByOutputType[P]>;
}>>;
export type SendEmailWhereInput = {
    AND?: Prisma.SendEmailWhereInput | Prisma.SendEmailWhereInput[];
    OR?: Prisma.SendEmailWhereInput[];
    NOT?: Prisma.SendEmailWhereInput | Prisma.SendEmailWhereInput[];
    id?: Prisma.StringFilter<"SendEmail"> | string;
    status?: Prisma.EnumStatusEmailFilter<"SendEmail"> | $Enums.StatusEmail;
    tipo?: Prisma.EnumTipoEmailFilter<"SendEmail"> | $Enums.TipoEmail;
    email?: Prisma.StringFilter<"SendEmail"> | string;
    artefatoUUID?: Prisma.StringFilter<"SendEmail"> | string;
    message?: Prisma.StringNullableFilter<"SendEmail"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SendEmail"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SendEmail"> | Date | string;
};
export type SendEmailOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.SendEmailOrderByRelevanceInput;
};
export type SendEmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SendEmailWhereInput | Prisma.SendEmailWhereInput[];
    OR?: Prisma.SendEmailWhereInput[];
    NOT?: Prisma.SendEmailWhereInput | Prisma.SendEmailWhereInput[];
    status?: Prisma.EnumStatusEmailFilter<"SendEmail"> | $Enums.StatusEmail;
    tipo?: Prisma.EnumTipoEmailFilter<"SendEmail"> | $Enums.TipoEmail;
    email?: Prisma.StringFilter<"SendEmail"> | string;
    artefatoUUID?: Prisma.StringFilter<"SendEmail"> | string;
    message?: Prisma.StringNullableFilter<"SendEmail"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SendEmail"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SendEmail"> | Date | string;
}, "id">;
export type SendEmailOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SendEmailCountOrderByAggregateInput;
    _max?: Prisma.SendEmailMaxOrderByAggregateInput;
    _min?: Prisma.SendEmailMinOrderByAggregateInput;
};
export type SendEmailScalarWhereWithAggregatesInput = {
    AND?: Prisma.SendEmailScalarWhereWithAggregatesInput | Prisma.SendEmailScalarWhereWithAggregatesInput[];
    OR?: Prisma.SendEmailScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SendEmailScalarWhereWithAggregatesInput | Prisma.SendEmailScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SendEmail"> | string;
    status?: Prisma.EnumStatusEmailWithAggregatesFilter<"SendEmail"> | $Enums.StatusEmail;
    tipo?: Prisma.EnumTipoEmailWithAggregatesFilter<"SendEmail"> | $Enums.TipoEmail;
    email?: Prisma.StringWithAggregatesFilter<"SendEmail"> | string;
    artefatoUUID?: Prisma.StringWithAggregatesFilter<"SendEmail"> | string;
    message?: Prisma.StringNullableWithAggregatesFilter<"SendEmail"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SendEmail"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SendEmail"> | Date | string;
};
export type SendEmailCreateInput = {
    id?: string;
    status: $Enums.StatusEmail;
    tipo: $Enums.TipoEmail;
    email: string;
    artefatoUUID: string;
    message?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SendEmailUncheckedCreateInput = {
    id?: string;
    status: $Enums.StatusEmail;
    tipo: $Enums.TipoEmail;
    email: string;
    artefatoUUID: string;
    message?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SendEmailUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusEmailFieldUpdateOperationsInput | $Enums.StatusEmail;
    tipo?: Prisma.EnumTipoEmailFieldUpdateOperationsInput | $Enums.TipoEmail;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SendEmailUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusEmailFieldUpdateOperationsInput | $Enums.StatusEmail;
    tipo?: Prisma.EnumTipoEmailFieldUpdateOperationsInput | $Enums.TipoEmail;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SendEmailCreateManyInput = {
    id?: string;
    status: $Enums.StatusEmail;
    tipo: $Enums.TipoEmail;
    email: string;
    artefatoUUID: string;
    message?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SendEmailUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusEmailFieldUpdateOperationsInput | $Enums.StatusEmail;
    tipo?: Prisma.EnumTipoEmailFieldUpdateOperationsInput | $Enums.TipoEmail;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SendEmailUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusEmailFieldUpdateOperationsInput | $Enums.StatusEmail;
    tipo?: Prisma.EnumTipoEmailFieldUpdateOperationsInput | $Enums.TipoEmail;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    artefatoUUID?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SendEmailOrderByRelevanceInput = {
    fields: Prisma.SendEmailOrderByRelevanceFieldEnum | Prisma.SendEmailOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SendEmailCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SendEmailMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SendEmailMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    artefatoUUID?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnumStatusEmailFieldUpdateOperationsInput = {
    set?: $Enums.StatusEmail;
};
export type EnumTipoEmailFieldUpdateOperationsInput = {
    set?: $Enums.TipoEmail;
};
export type SendEmailSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    tipo?: boolean;
    email?: boolean;
    artefatoUUID?: boolean;
    message?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["sendEmail"]>;
export type SendEmailSelectScalar = {
    id?: boolean;
    status?: boolean;
    tipo?: boolean;
    email?: boolean;
    artefatoUUID?: boolean;
    message?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SendEmailOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status" | "tipo" | "email" | "artefatoUUID" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["sendEmail"]>;
export type $SendEmailPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SendEmail";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        status: $Enums.StatusEmail;
        tipo: $Enums.TipoEmail;
        email: string;
        artefatoUUID: string;
        message: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sendEmail"]>;
    composites: {};
};
export type SendEmailGetPayload<S extends boolean | null | undefined | SendEmailDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SendEmailPayload, S>;
export type SendEmailCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SendEmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: SendEmailCountAggregateInputType | true;
};
export interface SendEmailDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SendEmail'];
        meta: {
            name: 'SendEmail';
        };
    };
    findUnique<T extends SendEmailFindUniqueArgs>(args: Prisma.SelectSubset<T, SendEmailFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SendEmailClient<runtime.Types.Result.GetResult<Prisma.$SendEmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SendEmailFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SendEmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SendEmailClient<runtime.Types.Result.GetResult<Prisma.$SendEmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SendEmailFindFirstArgs>(args?: Prisma.SelectSubset<T, SendEmailFindFirstArgs<ExtArgs>>): Prisma.Prisma__SendEmailClient<runtime.Types.Result.GetResult<Prisma.$SendEmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SendEmailFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SendEmailFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SendEmailClient<runtime.Types.Result.GetResult<Prisma.$SendEmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SendEmailFindManyArgs>(args?: Prisma.SelectSubset<T, SendEmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SendEmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SendEmailCreateArgs>(args: Prisma.SelectSubset<T, SendEmailCreateArgs<ExtArgs>>): Prisma.Prisma__SendEmailClient<runtime.Types.Result.GetResult<Prisma.$SendEmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SendEmailCreateManyArgs>(args?: Prisma.SelectSubset<T, SendEmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SendEmailDeleteArgs>(args: Prisma.SelectSubset<T, SendEmailDeleteArgs<ExtArgs>>): Prisma.Prisma__SendEmailClient<runtime.Types.Result.GetResult<Prisma.$SendEmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SendEmailUpdateArgs>(args: Prisma.SelectSubset<T, SendEmailUpdateArgs<ExtArgs>>): Prisma.Prisma__SendEmailClient<runtime.Types.Result.GetResult<Prisma.$SendEmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SendEmailDeleteManyArgs>(args?: Prisma.SelectSubset<T, SendEmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SendEmailUpdateManyArgs>(args: Prisma.SelectSubset<T, SendEmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SendEmailUpsertArgs>(args: Prisma.SelectSubset<T, SendEmailUpsertArgs<ExtArgs>>): Prisma.Prisma__SendEmailClient<runtime.Types.Result.GetResult<Prisma.$SendEmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SendEmailCountArgs>(args?: Prisma.Subset<T, SendEmailCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SendEmailCountAggregateOutputType> : number>;
    aggregate<T extends SendEmailAggregateArgs>(args: Prisma.Subset<T, SendEmailAggregateArgs>): Prisma.PrismaPromise<GetSendEmailAggregateType<T>>;
    groupBy<T extends SendEmailGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SendEmailGroupByArgs['orderBy'];
    } : {
        orderBy?: SendEmailGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SendEmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSendEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SendEmailFieldRefs;
}
export interface Prisma__SendEmailClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SendEmailFieldRefs {
    readonly id: Prisma.FieldRef<"SendEmail", 'String'>;
    readonly status: Prisma.FieldRef<"SendEmail", 'StatusEmail'>;
    readonly tipo: Prisma.FieldRef<"SendEmail", 'TipoEmail'>;
    readonly email: Prisma.FieldRef<"SendEmail", 'String'>;
    readonly artefatoUUID: Prisma.FieldRef<"SendEmail", 'String'>;
    readonly message: Prisma.FieldRef<"SendEmail", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SendEmail", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SendEmail", 'DateTime'>;
}
export type SendEmailFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
    where: Prisma.SendEmailWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SendEmailFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
    where: Prisma.SendEmailWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SendEmailFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
    where?: Prisma.SendEmailWhereInput;
    orderBy?: Prisma.SendEmailOrderByWithRelationInput | Prisma.SendEmailOrderByWithRelationInput[];
    cursor?: Prisma.SendEmailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SendEmailScalarFieldEnum | Prisma.SendEmailScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SendEmailFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
    where?: Prisma.SendEmailWhereInput;
    orderBy?: Prisma.SendEmailOrderByWithRelationInput | Prisma.SendEmailOrderByWithRelationInput[];
    cursor?: Prisma.SendEmailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SendEmailScalarFieldEnum | Prisma.SendEmailScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SendEmailFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
    where?: Prisma.SendEmailWhereInput;
    orderBy?: Prisma.SendEmailOrderByWithRelationInput | Prisma.SendEmailOrderByWithRelationInput[];
    cursor?: Prisma.SendEmailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SendEmailScalarFieldEnum | Prisma.SendEmailScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SendEmailCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SendEmailCreateInput, Prisma.SendEmailUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SendEmailCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SendEmailCreateManyInput | Prisma.SendEmailCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SendEmailUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SendEmailUpdateInput, Prisma.SendEmailUncheckedUpdateInput>;
    where: Prisma.SendEmailWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SendEmailUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SendEmailUpdateManyMutationInput, Prisma.SendEmailUncheckedUpdateManyInput>;
    where?: Prisma.SendEmailWhereInput;
    limit?: number;
};
export type SendEmailUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
    where: Prisma.SendEmailWhereUniqueInput;
    create: Prisma.XOR<Prisma.SendEmailCreateInput, Prisma.SendEmailUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SendEmailUpdateInput, Prisma.SendEmailUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SendEmailDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
    where: Prisma.SendEmailWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SendEmailDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SendEmailWhereInput;
    limit?: number;
};
export type SendEmailDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SendEmailSelect<ExtArgs> | null;
    omit?: Prisma.SendEmailOmit<ExtArgs> | null;
};
