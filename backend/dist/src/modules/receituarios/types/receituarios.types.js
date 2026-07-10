"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECEITUARIO_MEDICAMENTO_INCLUDE = exports.RECEITUARIO_INCLUDE = void 0;
exports.RECEITUARIO_INCLUDE = {
    ReceituarioMedicamentos: {
        include: {
            Medicamento: {
                select: { id: true, nome: true, codigo: true, especificacao: true },
            },
        },
        orderBy: { created_at: 'asc' },
    },
    Medico: { select: { nome: true, crm: true } },
    Base: { select: { id: true, nome: true } },
    Ambulancia: { select: { id: true, nome: true, tipo: true } },
};
exports.RECEITUARIO_MEDICAMENTO_INCLUDE = {
    Medicamento: {
        select: { id: true, nome: true, codigo: true, especificacao: true },
    },
};
//# sourceMappingURL=receituarios.types.js.map