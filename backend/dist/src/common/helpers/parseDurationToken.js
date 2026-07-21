/**
 * Converte uma string de duração no formato JWT (ex: '15m', '1h', '7d', '30s')
 * para milissegundos — útil para maxAge de cookies e TTL de tokens.
 *
 * Suporta: s (segundos), m (minutos), h (horas), d (dias), w (semanas)
 *
 * @example
 * parseDuration('15m')  // 900_000
 * parseDuration('1d')   // 86_400_000
 * parseDuration('7d')   // 604_800_000
 */ "use strict";
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
    get msToSeconds () {
        return msToSeconds;
    },
    get parseDuration () {
        return parseDuration;
    }
});
function parseDuration(value) {
    const match = /^(\d+)([smhdw])$/.exec(value.trim());
    if (!match) {
        throw new Error(`parseDuration: formato inválido "${value}". Use: 30s, 15m, 2h, 7d, 2w`);
    }
    const amount = parseInt(match[1], 10);
    const unit = match[2];
    const multipliers = {
        s: 1_000,
        m: 60_000,
        h: 3_600_000,
        d: 86_400_000,
        w: 604_800_000
    };
    return amount * multipliers[unit];
}
function msToSeconds(ms) {
    return Math.floor(ms / 1000);
}

//# sourceMappingURL=parseDurationToken.js.map