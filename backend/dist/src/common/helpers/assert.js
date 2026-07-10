"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertCondition = exports.assertPermission = exports.assertFound = void 0;
const common_1 = require("@nestjs/common");
const assertFound = (value, message = 'Requerimento não encontrado.') => {
    if (value == null) {
        throw new common_1.HttpException(message, common_1.HttpStatus.NOT_FOUND);
    }
    return value;
};
exports.assertFound = assertFound;
const assertPermission = (condition, message = 'Sem permissão.') => {
    if (!condition) {
        throw new common_1.HttpException(message, common_1.HttpStatus.FORBIDDEN);
    }
};
exports.assertPermission = assertPermission;
const assertCondition = (condition, message) => {
    if (!condition) {
        throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
    }
};
exports.assertCondition = assertCondition;
//# sourceMappingURL=assert.js.map