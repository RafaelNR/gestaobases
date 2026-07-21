"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "REQUERIMENTO_ITEM_INCLUDE", {
    enumerable: true,
    get: function() {
        return REQUERIMENTO_ITEM_INCLUDE;
    }
});
const REQUERIMENTO_ITEM_INCLUDE = {
    Produto: {
        select: {
            id: true,
            nome: true,
            codigo: true,
            unidade: true,
            categoria: true,
            ordem: true,
            fora_alx: true
        }
    },
    Medicamento: {
        select: {
            id: true,
            nome: true,
            codigo: true,
            categoria: true,
            especificacao: true
        }
    },
    DeletedBy: {
        select: {
            nome: true,
            username: true
        }
    }
};

//# sourceMappingURL=requerimento.types.js.map