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
    get normalizeDate () {
        return normalizeDate;
    },
    get normalizeEnum () {
        return normalizeEnum;
    },
    get normalizeNumero () {
        return normalizeNumero;
    },
    get normalizeText () {
        return normalizeText;
    }
});
const _assert = require("./assert");
const normalizeEnum = (val)=>{
    if (typeof val !== 'string') return val;
    return val.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
    .trim().replace(/\s+/g, '_');
};
const normalizeText = (value)=>{
    const normalized = value?.trim();
    return normalized || undefined;
};
const normalizeNumero = (value)=>{
    if (value === undefined || value === null || value === '') return undefined;
    const numero = Number(value);
    (0, _assert.assertCondition)(Number.isInteger(numero) && numero > 0, 'Número do requerimento inválido.');
    return numero;
};
const normalizeDate = (value, endOfDay = false)=>{
    if (!value) return undefined;
    const date = value instanceof Date ? new Date(value) : new Date(`${value.slice(0, 10)}T00:00:00.000Z`);
    (0, _assert.assertCondition)(!Number.isNaN(date.getTime()), 'Data inválida.');
    if (endOfDay) {
        date.setUTCHours(23, 59, 59, 999);
    }
    return date;
};

//# sourceMappingURL=normalize.js.map