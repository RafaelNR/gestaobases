import { Prisma } from "../../../../generated/prisma/client";
export declare const RECEITUARIO_INCLUDE: {
    readonly ReceituarioMedicamentos: {
        readonly include: {
            readonly Medicamento: {
                readonly select: {
                    readonly id: true;
                    readonly nome: true;
                    readonly codigo: true;
                    readonly especificacao: true;
                };
            };
        };
        readonly orderBy: {
            readonly created_at: "asc";
        };
    };
    readonly Medico: {
        readonly select: {
            readonly nome: true;
            readonly crm: true;
        };
    };
    readonly Base: {
        readonly select: {
            readonly id: true;
            readonly nome: true;
        };
    };
    readonly Ambulancia: {
        readonly select: {
            readonly id: true;
            readonly nome: true;
            readonly tipo: true;
        };
    };
};
export type ReceituarioResult = Prisma.ReceituarioGetPayload<{
    include: typeof RECEITUARIO_INCLUDE;
}>;
export declare const RECEITUARIO_MEDICAMENTO_INCLUDE: {
    readonly Medicamento: {
        readonly select: {
            readonly id: true;
            readonly nome: true;
            readonly codigo: true;
            readonly especificacao: true;
        };
    };
};
export type ReceituarioMedicamentoResult = Prisma.ReceituarioMedicamentosGetPayload<{
    include: typeof RECEITUARIO_MEDICAMENTO_INCLUDE;
}>;
