"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDuration = parseDuration;
exports.msToSeconds = msToSeconds;
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
        w: 604_800_000,
    };
    return amount * multipliers[unit];
}
function msToSeconds(ms) {
    return Math.floor(ms / 1000);
}
//# sourceMappingURL=parseDurationToken.js.map