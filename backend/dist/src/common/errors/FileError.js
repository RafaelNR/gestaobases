"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileError extends Error {
    message;
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'FileError';
    }
}
exports.default = FileError;
//# sourceMappingURL=FileError.js.map