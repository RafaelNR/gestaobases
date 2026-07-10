"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
exports.hashToken = hashToken;
exports.verifyToken = verifyToken;
const argon2_1 = __importDefault(require("argon2"));
const ARGON2_OPTIONS = {
    type: argon2_1.default.argon2id,
    memoryCost: 65536,
    timeCost: 3,
    parallelism: 2,
};
async function hashPassword(plain) {
    return argon2_1.default.hash(plain, ARGON2_OPTIONS);
}
async function verifyPassword(hash, plain) {
    try {
        return await argon2_1.default.verify(hash, plain, ARGON2_OPTIONS);
    }
    catch {
        return false;
    }
}
async function hashToken(token) {
    return argon2_1.default.hash(token, {
        ...ARGON2_OPTIONS,
        memoryCost: 4096,
        timeCost: 1,
    });
}
async function verifyToken(hash, token) {
    try {
        return await argon2_1.default.verify(hash, token);
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=argon.js.map