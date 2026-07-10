"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.default = (destination, filename) => {
    const file = path_1.default.resolve(destination, filename);
    if (fs_1.default.existsSync(file)) {
        fs_1.default.unlink(file, (err) => {
            if (err) {
                console.error(err);
                return err;
            }
        });
    }
};
//# sourceMappingURL=removeFile.js.map