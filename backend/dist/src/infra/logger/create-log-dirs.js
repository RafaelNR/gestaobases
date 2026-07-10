"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureLogDir = ensureLogDir;
const fs_1 = require("fs");
const path_1 = require("path");
function ensureLogDir(path) {
    const dir = (0, path_1.dirname)(path);
    if (!(0, fs_1.existsSync)(dir)) {
        (0, fs_1.mkdirSync)(dir, { recursive: true });
    }
}
//# sourceMappingURL=create-log-dirs.js.map