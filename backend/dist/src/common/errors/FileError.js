"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileError;
    }
});
let FileError = class FileError extends Error {
    constructor(message){
        super(message), this.message = message;
        this.name = 'FileError';
    }
};

//# sourceMappingURL=FileError.js.map