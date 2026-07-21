"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ValidateError;
    }
});
let ValidateError = class ValidateError extends Error {
    constructor(message){
        super(message), this.message = message;
        this.name = 'ValidateError';
    }
};

//# sourceMappingURL=ValidateError.js.map