"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateError extends Error {
    message;
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'ValidateError';
    }
}
exports.default = ValidateError;
//# sourceMappingURL=ValidateError.js.map