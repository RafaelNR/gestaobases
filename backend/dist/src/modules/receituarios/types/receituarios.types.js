"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get RECEITUARIO_INCLUDE () {
        return RECEITUARIO_INCLUDE;
    },
    get RECEITUARIO_MEDICAMENTO_INCLUDE () {
        return RECEITUARIO_MEDICAMENTO_INCLUDE;
    }
});
const RECEITUARIO_INCLUDE = {
    ReceituarioMedicamentos: {
        include: {
            Medicamento: {
                select: {
                    id: true,
                    nome: true,
                    codigo: true,
                    especificacao: true
                }
            }
        },
        orderBy: {
            created_at: 'asc'
        }
    },
    Medico: {
        select: {
            nome: true,
            crm: true
        }
    },
    Base: {
        select: {
            id: true,
            nome: true
        }
    },
    Ambulancia: {
        select: {
            id: true,
            nome: true,
            tipo: true
        }
    }
};
const RECEITUARIO_MEDICAMENTO_INCLUDE = {
    Medicamento: {
        select: {
            id: true,
            nome: true,
            codigo: true,
            especificacao: true
        }
    }
};

//# sourceMappingURL=receituarios.types.js.map