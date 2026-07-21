"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLogDir", {
    enumerable: true,
    get: function() {
        return ensureLogDir;
    }
});
const _fs = require("fs");
const _path = require("path");
function ensureLogDir(path) {
    const dir = (0, _path.dirname)(path);
    if (!(0, _fs.existsSync)(dir)) {
        (0, _fs.mkdirSync)(dir, {
            recursive: true
        });
    }
}

//# sourceMappingURL=create-log-dirs.js.map