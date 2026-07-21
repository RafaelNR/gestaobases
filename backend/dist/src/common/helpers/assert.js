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
    get assertCondition () {
        return assertCondition;
    },
    get assertFound () {
        return assertFound;
    },
    get assertPermission () {
        return assertPermission;
    }
});
const _common = require("@nestjs/common");
const assertFound = (value, message = 'Requerimento não encontrado.')=>{
    if (value == null) {
        throw new _common.HttpException(message, _common.HttpStatus.NOT_FOUND);
    }
    return value;
};
const assertPermission = (condition, message = 'Sem permissão.')=>{
    if (!condition) {
        throw new _common.HttpException(message, _common.HttpStatus.FORBIDDEN);
    }
};
const assertCondition = (condition, message)=>{
    if (!condition) {
        throw new _common.HttpException(message, _common.HttpStatus.BAD_REQUEST);
    }
};

//# sourceMappingURL=assert.js.map