import { Prisma } from "../../../../generated/prisma/client";
export declare const REQUERIMENTO_ITEM_INCLUDE: {
    readonly Produto: {
        readonly select: {
            readonly id: true;
            readonly nome: true;
            readonly codigo: true;
            readonly unidade: true;
            readonly categoria: true;
            readonly ordem: true;
            readonly fora_alx: true;
        };
    };
    readonly Medicamento: {
        readonly select: {
            readonly id: true;
            readonly nome: true;
            readonly codigo: true;
            readonly categoria: true;
            readonly especificacao: true;
        };
    };
    readonly DeletedBy: {
        readonly select: {
            readonly nome: true;
            readonly username: true;
        };
    };
};
export type RequerimentoItemResult = Prisma.RequerimentoItemGetPayload<{
    include: typeof REQUERIMENTO_ITEM_INCLUDE;
}>;
export type RequerimentoResult = Prisma.RequerimentoGetPayload<{
    include: {
        RequerimentoItems: {
            include: typeof REQUERIMENTO_ITEM_INCLUDE;
        };
        RequerimentoStatus: true;
        Ambulancia: {
            select: {
                id: true;
                nome: true;
                tipo: true;
            };
        };
    };
}>;
