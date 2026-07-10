"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeDate = exports.normalizeNumero = exports.normalizeText = exports.normalizeEnum = void 0;
const assert_1 = require("./assert");
const normalizeEnum = (val) => {
    if (typeof val !== 'string')
        return val;
    return val
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/\s+/g, '_');
};
exports.normalizeEnum = normalizeEnum;
const normalizeText = (value) => {
    const normalized = value?.trim();
    return normalized || undefined;
};
exports.normalizeText = normalizeText;
const normalizeNumero = (value) => {
    if (value === undefined || value === null || value === '')
        return undefined;
    const numero = Number(value);
    (0, assert_1.assertCondition)(Number.isInteger(numero) && numero > 0, 'Número do requerimento inválido.');
    return numero;
};
exports.normalizeNumero = normalizeNumero;
const normalizeDate = (value, endOfDay = false) => {
    if (!value)
        return undefined;
    const date = value instanceof Date
        ? new Date(value)
        : new Date(`${value.slice(0, 10)}T00:00:00.000Z`);
    (0, assert_1.assertCondition)(!Number.isNaN(date.getTime()), 'Data inválida.');
    if (endOfDay) {
        date.setUTCHours(23, 59, 59, 999);
    }
    return date;
};
exports.normalizeDate = normalizeDate;
//# sourceMappingURL=normalize.js.map