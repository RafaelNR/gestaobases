import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SetorModel = runtime.Types.Result.DefaultSelection<Prisma.$SetorPayload>;
export type AggregateSetor = {
    _count: SetorCountAggregateOutputType | null;
    _min: SetorMinAggregateOutputType | null;
    _max: SetorMaxAggregateOutputType | null;
};
export type SetorMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    nomeVisivel: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SetorMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    nomeVisivel: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SetorCountAggregateOutputType = {
    id: number;
    nome: number;
    nomeVisivel: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type SetorMinAggregateInputType = {
    id?: true;
    nome?: true;
    nomeVisivel?: true;
    created_at?: true;
    updated_at?: true;
};
export type SetorMaxAggregateInputType = {
    id?: true;
    nome?: true;
    nomeVisivel?: true;
    created_at?: true;
    updated_at?: true;
};
export type SetorCountAggregateInputType = {
    id?: true;
    nome?: true;
    nomeVisivel?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type SetorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetorWhereInput;
    orderBy?: Prisma.SetorOrderByWithRelationInput | Prisma.SetorOrderByWithRelationInput[];
    cursor?: Prisma.SetorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SetorCountAggregateInputType;
    _min?: SetorMinAggregateInputType;
    _max?: SetorMaxAggregateInputType;
};
export type GetSetorAggregateType<T extends SetorAggregateArgs> = {
    [P in keyof T & keyof AggregateSetor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSetor[P]> : Prisma.GetScalarType<T[P], AggregateSetor[P]>;
};
export type SetorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetorWhereInput;
    orderBy?: Prisma.SetorOrderByWithAggregationInput | Prisma.SetorOrderByWithAggregationInput[];
    by: Prisma.SetorScalarFieldEnum[] | Prisma.SetorScalarFieldEnum;
    having?: Prisma.SetorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SetorCountAggregateInputType | true;
    _min?: SetorMinAggregateInputType;
    _max?: SetorMaxAggregateInputType;
};
export type SetorGroupByOutputType = {
    id: string;
    nome: string;
    nomeVisivel: string;
    created_at: Date;
    updated_at: Date;
    _count: SetorCountAggregateOutputType | null;
    _min: SetorMinAggregateOutputType | null;
    _max: SetorMaxAggregateOutputType | null;
};
export type GetSetorGroupByPayload<T extends SetorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SetorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SetorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SetorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SetorGroupByOutputType[P]>;
}>>;
export type SetorWhereInput = {
    AND?: Prisma.SetorWhereInput | Prisma.SetorWhereInput[];
    OR?: Prisma.SetorWhereInput[];
    NOT?: Prisma.SetorWhereInput | Prisma.SetorWhereInput[];
    id?: Prisma.StringFilter<"Setor"> | string;
    nome?: Prisma.StringFilter<"Setor"> | string;
    nomeVisivel?: Prisma.StringFilter<"Setor"> | string;
    created_at?: Prisma.DateTimeFilter<"Setor"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Setor"> | Date | string;
    Users?: Prisma.UserListRelationFilter;
    Requerimentos?: Prisma.RequerimentoListRelationFilter;
    cargos?: Prisma.CargoListRelationFilter;
};
export type SetorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    Users?: Prisma.UserOrderByRelationAggregateInput;
    Requerimentos?: Prisma.RequerimentoOrderByRelationAggregateInput;
    cargos?: Prisma.CargoOrderByRelationAggregateInput;
    _relevance?: Prisma.SetorOrderByRelevanceInput;
};
export type SetorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nome?: string;
    nomeVisivel?: string;
    AND?: Prisma.SetorWhereInput | Prisma.SetorWhereInput[];
    OR?: Prisma.SetorWhereInput[];
    NOT?: Prisma.SetorWhereInput | Prisma.SetorWhereInput[];
    created_at?: Prisma.DateTimeFilter<"Setor"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Setor"> | Date | string;
    Users?: Prisma.UserListRelationFilter;
    Requerimentos?: Prisma.RequerimentoListRelationFilter;
    cargos?: Prisma.CargoListRelationFilter;
}, "id" | "nome" | "nomeVisivel">;
export type SetorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.SetorCountOrderByAggregateInput;
    _max?: Prisma.SetorMaxOrderByAggregateInput;
    _min?: Prisma.SetorMinOrderByAggregateInput;
};
export type SetorScalarWhereWithAggregatesInput = {
    AND?: Prisma.SetorScalarWhereWithAggregatesInput | Prisma.SetorScalarWhereWithAggregatesInput[];
    OR?: Prisma.SetorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SetorScalarWhereWithAggregatesInput | Prisma.SetorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Setor"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Setor"> | string;
    nomeVisivel?: Prisma.StringWithAggregatesFilter<"Setor"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Setor"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Setor"> | Date | string;
};
export type SetorCreateInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserCreateNestedManyWithoutSetorInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutSetorInput;
    cargos?: Prisma.CargoCreateNestedManyWithoutSetorInput;
};
export type SetorUncheckedCreateInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserUncheckedCreateNestedManyWithoutSetorInput;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutSetorInput;
    cargos?: Prisma.CargoUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUpdateManyWithoutSetorNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutSetorNestedInput;
    cargos?: Prisma.CargoUpdateManyWithoutSetorNestedInput;
};
export type SetorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUncheckedUpdateManyWithoutSetorNestedInput;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutSetorNestedInput;
    cargos?: Prisma.CargoUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorCreateManyInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SetorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SetorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SetorOrderByRelevanceInput = {
    fields: Prisma.SetorOrderByRelevanceFieldEnum | Prisma.SetorOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SetorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SetorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SetorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nomeVisivel?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SetorScalarRelationFilter = {
    is?: Prisma.SetorWhereInput;
    isNot?: Prisma.SetorWhereInput;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type SetorCreateNestedOneWithoutCargosInput = {
    create?: Prisma.XOR<Prisma.SetorCreateWithoutCargosInput, Prisma.SetorUncheckedCreateWithoutCargosInput>;
    connectOrCreate?: Prisma.SetorCreateOrConnectWithoutCargosInput;
    connect?: Prisma.SetorWhereUniqueInput;
};
export type SetorUpdateOneRequiredWithoutCargosNestedInput = {
    create?: Prisma.XOR<Prisma.SetorCreateWithoutCargosInput, Prisma.SetorUncheckedCreateWithoutCargosInput>;
    connectOrCreate?: Prisma.SetorCreateOrConnectWithoutCargosInput;
    upsert?: Prisma.SetorUpsertWithoutCargosInput;
    connect?: Prisma.SetorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SetorUpdateToOneWithWhereWithoutCargosInput, Prisma.SetorUpdateWithoutCargosInput>, Prisma.SetorUncheckedUpdateWithoutCargosInput>;
};
export type SetorCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.SetorCreateWithoutUsersInput, Prisma.SetorUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.SetorCreateOrConnectWithoutUsersInput;
    connect?: Prisma.SetorWhereUniqueInput;
};
export type SetorUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.SetorCreateWithoutUsersInput, Prisma.SetorUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.SetorCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.SetorUpsertWithoutUsersInput;
    connect?: Prisma.SetorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SetorUpdateToOneWithWhereWithoutUsersInput, Prisma.SetorUpdateWithoutUsersInput>, Prisma.SetorUncheckedUpdateWithoutUsersInput>;
};
export type SetorCreateNestedOneWithoutRequerimentosInput = {
    create?: Prisma.XOR<Prisma.SetorCreateWithoutRequerimentosInput, Prisma.SetorUncheckedCreateWithoutRequerimentosInput>;
    connectOrCreate?: Prisma.SetorCreateOrConnectWithoutRequerimentosInput;
    connect?: Prisma.SetorWhereUniqueInput;
};
export type SetorUpdateOneRequiredWithoutRequerimentosNestedInput = {
    create?: Prisma.XOR<Prisma.SetorCreateWithoutRequerimentosInput, Prisma.SetorUncheckedCreateWithoutRequerimentosInput>;
    connectOrCreate?: Prisma.SetorCreateOrConnectWithoutRequerimentosInput;
    upsert?: Prisma.SetorUpsertWithoutRequerimentosInput;
    connect?: Prisma.SetorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SetorUpdateToOneWithWhereWithoutRequerimentosInput, Prisma.SetorUpdateWithoutRequerimentosInput>, Prisma.SetorUncheckedUpdateWithoutRequerimentosInput>;
};
export type SetorCreateWithoutCargosInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserCreateNestedManyWithoutSetorInput;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutSetorInput;
};
export type SetorUncheckedCreateWithoutCargosInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserUncheckedCreateNestedManyWithoutSetorInput;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorCreateOrConnectWithoutCargosInput = {
    where: Prisma.SetorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorCreateWithoutCargosInput, Prisma.SetorUncheckedCreateWithoutCargosInput>;
};
export type SetorUpsertWithoutCargosInput = {
    update: Prisma.XOR<Prisma.SetorUpdateWithoutCargosInput, Prisma.SetorUncheckedUpdateWithoutCargosInput>;
    create: Prisma.XOR<Prisma.SetorCreateWithoutCargosInput, Prisma.SetorUncheckedCreateWithoutCargosInput>;
    where?: Prisma.SetorWhereInput;
};
export type SetorUpdateToOneWithWhereWithoutCargosInput = {
    where?: Prisma.SetorWhereInput;
    data: Prisma.XOR<Prisma.SetorUpdateWithoutCargosInput, Prisma.SetorUncheckedUpdateWithoutCargosInput>;
};
export type SetorUpdateWithoutCargosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUpdateManyWithoutSetorNestedInput;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutSetorNestedInput;
};
export type SetorUncheckedUpdateWithoutCargosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUncheckedUpdateManyWithoutSetorNestedInput;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorCreateWithoutUsersInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Requerimentos?: Prisma.RequerimentoCreateNestedManyWithoutSetorInput;
    cargos?: Prisma.CargoCreateNestedManyWithoutSetorInput;
};
export type SetorUncheckedCreateWithoutUsersInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedCreateNestedManyWithoutSetorInput;
    cargos?: Prisma.CargoUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorCreateOrConnectWithoutUsersInput = {
    where: Prisma.SetorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorCreateWithoutUsersInput, Prisma.SetorUncheckedCreateWithoutUsersInput>;
};
export type SetorUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.SetorUpdateWithoutUsersInput, Prisma.SetorUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.SetorCreateWithoutUsersInput, Prisma.SetorUncheckedCreateWithoutUsersInput>;
    where?: Prisma.SetorWhereInput;
};
export type SetorUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.SetorWhereInput;
    data: Prisma.XOR<Prisma.SetorUpdateWithoutUsersInput, Prisma.SetorUncheckedUpdateWithoutUsersInput>;
};
export type SetorUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Requerimentos?: Prisma.RequerimentoUpdateManyWithoutSetorNestedInput;
    cargos?: Prisma.CargoUpdateManyWithoutSetorNestedInput;
};
export type SetorUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Requerimentos?: Prisma.RequerimentoUncheckedUpdateManyWithoutSetorNestedInput;
    cargos?: Prisma.CargoUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorCreateWithoutRequerimentosInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserCreateNestedManyWithoutSetorInput;
    cargos?: Prisma.CargoCreateNestedManyWithoutSetorInput;
};
export type SetorUncheckedCreateWithoutRequerimentosInput = {
    id?: string;
    nome: string;
    nomeVisivel: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Users?: Prisma.UserUncheckedCreateNestedManyWithoutSetorInput;
    cargos?: Prisma.CargoUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorCreateOrConnectWithoutRequerimentosInput = {
    where: Prisma.SetorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorCreateWithoutRequerimentosInput, Prisma.SetorUncheckedCreateWithoutRequerimentosInput>;
};
export type SetorUpsertWithoutRequerimentosInput = {
    update: Prisma.XOR<Prisma.SetorUpdateWithoutRequerimentosInput, Prisma.SetorUncheckedUpdateWithoutRequerimentosInput>;
    create: Prisma.XOR<Prisma.SetorCreateWithoutRequerimentosInput, Prisma.SetorUncheckedCreateWithoutRequerimentosInput>;
    where?: Prisma.SetorWhereInput;
};
export type SetorUpdateToOneWithWhereWithoutRequerimentosInput = {
    where?: Prisma.SetorWhereInput;
    data: Prisma.XOR<Prisma.SetorUpdateWithoutRequerimentosInput, Prisma.SetorUncheckedUpdateWithoutRequerimentosInput>;
};
export type SetorUpdateWithoutRequerimentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUpdateManyWithoutSetorNestedInput;
    cargos?: Prisma.CargoUpdateManyWithoutSetorNestedInput;
};
export type SetorUncheckedUpdateWithoutRequerimentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nomeVisivel?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: Prisma.UserUncheckedUpdateManyWithoutSetorNestedInput;
    cargos?: Prisma.CargoUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorCountOutputType = {
    Users: number;
    Requerimentos: number;
    cargos: number;
};
export type SetorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Users?: boolean | SetorCountOutputTypeCountUsersArgs;
    Requerimentos?: boolean | SetorCountOutputTypeCountRequerimentosArgs;
    cargos?: boolean | SetorCountOutputTypeCountCargosArgs;
};
export type SetorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorCountOutputTypeSelect<ExtArgs> | null;
};
export type SetorCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type SetorCountOutputTypeCountRequerimentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequerimentoWhereInput;
};
export type SetorCountOutputTypeCountCargosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CargoWhereInput;
};
export type SetorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    nomeVisivel?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    Users?: boolean | Prisma.Setor$UsersArgs<ExtArgs>;
    Requerimentos?: boolean | Prisma.Setor$RequerimentosArgs<ExtArgs>;
    cargos?: boolean | Prisma.Setor$cargosArgs<ExtArgs>;
    _count?: boolean | Prisma.SetorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["setor"]>;
export type SetorSelectScalar = {
    id?: boolean;
    nome?: boolean;
    nomeVisivel?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type SetorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "nomeVisivel" | "created_at" | "updated_at", ExtArgs["result"]["setor"]>;
export type SetorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Users?: boolean | Prisma.Setor$UsersArgs<ExtArgs>;
    Requerimentos?: boolean | Prisma.Setor$RequerimentosArgs<ExtArgs>;
    cargos?: boolean | Prisma.Setor$cargosArgs<ExtArgs>;
    _count?: boolean | Prisma.SetorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $SetorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Setor";
    objects: {
        Users: Prisma.$UserPayload<ExtArgs>[];
        Requerimentos: Prisma.$RequerimentoPayload<ExtArgs>[];
        cargos: Prisma.$CargoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        nomeVisivel: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["setor"]>;
    composites: {};
};
export type SetorGetPayload<S extends boolean | null | undefined | SetorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SetorPayload, S>;
export type SetorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SetorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: SetorCountAggregateInputType | true;
};
export interface SetorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Setor'];
        meta: {
            name: 'Setor';
        };
    };
    findUnique<T extends SetorFindUniqueArgs>(args: Prisma.SelectSubset<T, SetorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SetorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SetorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SetorFindFirstArgs>(args?: Prisma.SelectSubset<T, SetorFindFirstArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SetorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SetorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SetorFindManyArgs>(args?: Prisma.SelectSubset<T, SetorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SetorCreateArgs>(args: Prisma.SelectSubset<T, SetorCreateArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SetorCreateManyArgs>(args?: Prisma.SelectSubset<T, SetorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SetorDeleteArgs>(args: Prisma.SelectSubset<T, SetorDeleteArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SetorUpdateArgs>(args: Prisma.SelectSubset<T, SetorUpdateArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SetorDeleteManyArgs>(args?: Prisma.SelectSubset<T, SetorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SetorUpdateManyArgs>(args: Prisma.SelectSubset<T, SetorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SetorUpsertArgs>(args: Prisma.SelectSubset<T, SetorUpsertArgs<ExtArgs>>): Prisma.Prisma__SetorClient<runtime.Types.Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SetorCountArgs>(args?: Prisma.Subset<T, SetorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SetorCountAggregateOutputType> : number>;
    aggregate<T extends SetorAggregateArgs>(args: Prisma.Subset<T, SetorAggregateArgs>): Prisma.PrismaPromise<GetSetorAggregateType<T>>;
    groupBy<T extends SetorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SetorGroupByArgs['orderBy'];
    } : {
        orderBy?: SetorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SetorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SetorFieldRefs;
}
export interface Prisma__SetorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Users<T extends Prisma.Setor$UsersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Setor$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Requerimentos<T extends Prisma.Setor$RequerimentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Setor$RequerimentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequerimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cargos<T extends Prisma.Setor$cargosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Setor$cargosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SetorFieldRefs {
    readonly id: Prisma.FieldRef<"Setor", 'String'>;
    readonly nome: Prisma.FieldRef<"Setor", 'String'>;
    readonly nomeVisivel: Prisma.FieldRef<"Setor", 'String'>;
    readonly created_at: Prisma.FieldRef<"Setor", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Setor", 'DateTime'>;
}
export type SetorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
    where: Prisma.SetorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SetorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
    where: Prisma.SetorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SetorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
    where?: Prisma.SetorWhereInput;
    orderBy?: Prisma.SetorOrderByWithRelationInput | Prisma.SetorOrderByWithRelationInput[];
    cursor?: Prisma.SetorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SetorScalarFieldEnum | Prisma.SetorScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SetorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
    where?: Prisma.SetorWhereInput;
    orderBy?: Prisma.SetorOrderByWithRelationInput | Prisma.SetorOrderByWithRelationInput[];
    cursor?: Prisma.SetorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SetorScalarFieldEnum | Prisma.SetorScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SetorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
    where?: Prisma.SetorWhereInput;
    orderBy?: Prisma.SetorOrderByWithRelationInput | Prisma.SetorOrderByWithRelationInput[];
    cursor?: Prisma.SetorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SetorScalarFieldEnum | Prisma.SetorScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SetorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SetorCreateInput, Prisma.SetorUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SetorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SetorCreateManyInput | Prisma.SetorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SetorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SetorUpdateInput, Prisma.SetorUncheckedUpdateInput>;
    where: Prisma.SetorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SetorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SetorUpdateManyMutationInput, Prisma.SetorUncheckedUpdateManyInput>;
    where?: Prisma.SetorWhereInput;
    limit?: number;
};
export type SetorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
    where: Prisma.SetorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorCreateInput, Prisma.SetorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SetorUpdateInput, Prisma.SetorUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SetorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
    where: Prisma.SetorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
export type SetorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetorWhereInput;
    limit?: number;
};
export type Setor$UsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Setor$RequerimentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Setor$cargosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CargoSelect<ExtArgs> | null;
    omit?: Prisma.CargoOmit<ExtArgs> | null;
    include?: Prisma.CargoInclude<ExtArgs> | null;
    where?: Prisma.CargoWhereInput;
    orderBy?: Prisma.CargoOrderByWithRelationInput | Prisma.CargoOrderByWithRelationInput[];
    cursor?: Prisma.CargoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CargoScalarFieldEnum | Prisma.CargoScalarFieldEnum[];
};
export type SetorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSelect<ExtArgs> | null;
    omit?: Prisma.SetorOmit<ExtArgs> | null;
    include?: Prisma.SetorInclude<ExtArgs> | null;
};
