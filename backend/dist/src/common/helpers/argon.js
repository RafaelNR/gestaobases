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
    get hashPassword () {
        return hashPassword;
    },
    get hashToken () {
        return hashToken;
    },
    get verifyPassword () {
        return verifyPassword;
    },
    get verifyToken () {
        return verifyToken;
    }
});
const _argon2 = /*#__PURE__*/ _interop_require_default(require("argon2"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ARGON2_OPTIONS = {
    type: _argon2.default.argon2id,
    memoryCost: 65536,
    timeCost: 3,
    parallelism: 2
};
async function hashPassword(plain) {
    return _argon2.default.hash(plain, ARGON2_OPTIONS);
}
async function verifyPassword(hash, plain) {
    try {
        return await _argon2.default.verify(hash, plain, ARGON2_OPTIONS);
    } catch  {
        return false;
    }
}
async function hashToken(token) {
    return _argon2.default.hash(token, {
        ...ARGON2_OPTIONS,
        memoryCost: 4096,
        timeCost: 1
    });
}
async function verifyToken(hash, token) {
    try {
        return await _argon2.default.verify(hash, token);
    } catch  {
        return false;
    }
}

//# sourceMappingURL=argon.js.map