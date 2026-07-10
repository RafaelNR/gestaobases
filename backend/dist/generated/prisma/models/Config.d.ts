import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$ConfigPayload>;
export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null;
    _avg: ConfigAvgAggregateOutputType | null;
    _sum: ConfigSumAggregateOutputType | null;
    _min: ConfigMinAggregateOutputType | null;
    _max: ConfigMaxAggregateOutputType | null;
};
export type ConfigAvgAggregateOutputType = {
    id: number | null;
};
export type ConfigSumAggregateOutputType = {
    id: number | null;
};
export type ConfigMinAggregateOutputType = {
    id: number | null;
    key: string | null;
    value: string | null;
};
export type ConfigMaxAggregateOutputType = {
    id: number | null;
    key: string | null;
    value: string | null;
};
export type ConfigCountAggregateOutputType = {
    id: number;
    key: number;
    value: number;
    _all: number;
};
export type ConfigAvgAggregateInputType = {
    id?: true;
};
export type ConfigSumAggregateInputType = {
    id?: true;
};
export type ConfigMinAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
};
export type ConfigMaxAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
};
export type ConfigCountAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    _all?: true;
};
export type ConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithRelationInput | Prisma.ConfigOrderByWithRelationInput[];
    cursor?: Prisma.ConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConfigCountAggregateInputType;
    _avg?: ConfigAvgAggregateInputType;
    _sum?: ConfigSumAggregateInputType;
    _min?: ConfigMinAggregateInputType;
    _max?: ConfigMaxAggregateInputType;
};
export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConfig[P]> : Prisma.GetScalarType<T[P], AggregateConfig[P]>;
};
export type ConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithAggregationInput | Prisma.ConfigOrderByWithAggregationInput[];
    by: Prisma.ConfigScalarFieldEnum[] | Prisma.ConfigScalarFieldEnum;
    having?: Prisma.ConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConfigCountAggregateInputType | true;
    _avg?: ConfigAvgAggregateInputType;
    _sum?: ConfigSumAggregateInputType;
    _min?: ConfigMinAggregateInputType;
    _max?: ConfigMaxAggregateInputType;
};
export type ConfigGroupByOutputType = {
    id: number;
    key: string;
    value: string;
    _count: ConfigCountAggregateOutputType | null;
    _avg: ConfigAvgAggregateOutputType | null;
    _sum: ConfigSumAggregateOutputType | null;
    _min: ConfigMinAggregateOutputType | null;
    _max: ConfigMaxAggregateOutputType | null;
};
export type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConfigGroupByOutputType[P]>;
}>>;
export type ConfigWhereInput = {
    AND?: Prisma.ConfigWhereInput | Prisma.ConfigWhereInput[];
    OR?: Prisma.ConfigWhereInput[];
    NOT?: Prisma.ConfigWhereInput | Prisma.ConfigWhereInput[];
    id?: Prisma.IntFilter<"Config"> | number;
    key?: Prisma.StringFilter<"Config"> | string;
    value?: Prisma.StringFilter<"Config"> | string;
};
export type ConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    _relevance?: Prisma.ConfigOrderByRelevanceInput;
};
export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    key?: string;
    AND?: Prisma.ConfigWhereInput | Prisma.ConfigWhereInput[];
    OR?: Prisma.ConfigWhereInput[];
    NOT?: Prisma.ConfigWhereInput | Prisma.ConfigWhereInput[];
    value?: Prisma.StringFilter<"Config"> | string;
}, "id" | "key">;
export type ConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    _count?: Prisma.ConfigCountOrderByAggregateInput;
    _avg?: Prisma.ConfigAvgOrderByAggregateInput;
    _max?: Prisma.ConfigMaxOrderByAggregateInput;
    _min?: Prisma.ConfigMinOrderByAggregateInput;
    _sum?: Prisma.ConfigSumOrderByAggregateInput;
};
export type ConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConfigScalarWhereWithAggregatesInput | Prisma.ConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConfigScalarWhereWithAggregatesInput | Prisma.ConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Config"> | number;
    key?: Prisma.StringWithAggregatesFilter<"Config"> | string;
    value?: Prisma.StringWithAggregatesFilter<"Config"> | string;
};
export type ConfigCreateInput = {
    key: string;
    value: string;
};
export type ConfigUncheckedCreateInput = {
    id?: number;
    key: string;
    value: string;
};
export type ConfigUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConfigCreateManyInput = {
    id?: number;
    key: string;
    value: string;
};
export type ConfigUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConfigOrderByRelevanceInput = {
    fields: Prisma.ConfigOrderByRelevanceFieldEnum | Prisma.ConfigOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type ConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type ConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type ConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    value?: boolean;
}, ExtArgs["result"]["config"]>;
export type ConfigSelectScalar = {
    id?: boolean;
    key?: boolean;
    value?: boolean;
};
export type ConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "value", ExtArgs["result"]["config"]>;
export type $ConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Config";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        key: string;
        value: string;
    }, ExtArgs["result"]["config"]>;
    composites: {};
};
export type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConfigPayload, S>;
export type ConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: ConfigCountAggregateInputType | true;
};
export interface ConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Config'];
        meta: {
            name: 'Config';
        };
    };
    findUnique<T extends ConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConfigFindManyArgs>(args?: Prisma.SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConfigCreateArgs>(args: Prisma.SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ConfigDeleteArgs>(args: Prisma.SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConfigUpdateArgs>(args: Prisma.SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ConfigUpsertArgs>(args: Prisma.SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConfigCountArgs>(args?: Prisma.Subset<T, ConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConfigCountAggregateOutputType> : number>;
    aggregate<T extends ConfigAggregateArgs>(args: Prisma.Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>;
    groupBy<T extends ConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: ConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConfigFieldRefs;
}
export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConfigFieldRefs {
    readonly id: Prisma.FieldRef<"Config", 'Int'>;
    readonly key: Prisma.FieldRef<"Config", 'String'>;
    readonly value: Prisma.FieldRef<"Config", 'String'>;
}
export type ConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where: Prisma.ConfigWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where: Prisma.ConfigWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithRelationInput | Prisma.ConfigOrderByWithRelationInput[];
    cursor?: Prisma.ConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfigScalarFieldEnum | Prisma.ConfigScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithRelationInput | Prisma.ConfigOrderByWithRelationInput[];
    cursor?: Prisma.ConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfigScalarFieldEnum | Prisma.ConfigScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithRelationInput | Prisma.ConfigOrderByWithRelationInput[];
    cursor?: Prisma.ConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfigScalarFieldEnum | Prisma.ConfigScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConfigCreateInput, Prisma.ConfigUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConfigCreateManyInput | Prisma.ConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConfigUpdateInput, Prisma.ConfigUncheckedUpdateInput>;
    where: Prisma.ConfigWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConfigUpdateManyMutationInput, Prisma.ConfigUncheckedUpdateManyInput>;
    where?: Prisma.ConfigWhereInput;
    limit?: number;
};
export type ConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where: Prisma.ConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConfigCreateInput, Prisma.ConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConfigUpdateInput, Prisma.ConfigUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where: Prisma.ConfigWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type ConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfigWhereInput;
    limit?: number;
};
export type ConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
};
