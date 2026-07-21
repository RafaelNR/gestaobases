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
    get StatusValidadeEstoque () {
        return StatusValidadeEstoque;
    },
    get buildChaveLote () {
        return buildChaveLote;
    },
    get classificarValidade () {
        return classificarValidade;
    }
});
var StatusValidadeEstoque = /*#__PURE__*/ function(StatusValidadeEstoque) {
    StatusValidadeEstoque["SemValidade"] = "SemValidade";
    StatusValidadeEstoque["Regular"] = "Regular";
    StatusValidadeEstoque["Atencao"] = "Atencao";
    StatusValidadeEstoque["Alerta"] = "Alerta";
    StatusValidadeEstoque["Vencido"] = "Vencido";
    return StatusValidadeEstoque;
}({});
const MS_POR_DIA = 86_400_000;
function inicioDiaUtc(data) {
    return Date.UTC(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate());
}
function buildChaveLote(lote, validade) {
    const loteNormalizado = lote?.trim().replace(/\s+/g, ' ').toUpperCase() || 'SEM_LOTE';
    if (!lote && !validade) return 'SEM_LOTE';
    const validadeNormalizada = validade ? validade.toISOString().slice(0, 10) : 'SEM_VALIDADE';
    return `LOTE:${loteNormalizado}|VALIDADE:${validadeNormalizada}`;
}
function classificarValidade(validade, hoje = new Date()) {
    if (!validade) {
        return {
            status: "SemValidade",
            diasParaVencer: null
        };
    }
    const diasParaVencer = Math.round((inicioDiaUtc(validade) - inicioDiaUtc(hoje)) / MS_POR_DIA);
    const status = diasParaVencer < 0 ? "Vencido" : diasParaVencer <= 7 ? "Alerta" : diasParaVencer <= 15 ? "Atencao" : "Regular";
    return {
        status,
        diasParaVencer
    };
}

//# sourceMappingURL=estoque-validade.service.js.map