"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUERIMENTO_ITEM_INCLUDE = void 0;
exports.REQUERIMENTO_ITEM_INCLUDE = {
    Produto: {
        select: {
            id: true,
            nome: true,
            codigo: true,
            unidade: true,
            categoria: true,
            ordem: true,
            fora_alx: true,
        },
    },
    Medicamento: {
        select: {
            id: true,
            nome: true,
            codigo: true,
            categoria: true,
            especificacao: true,
        },
    },
    DeletedBy: { select: { nome: true, username: true } },
};
//# sourceMappingURL=requerimento.types.js.map