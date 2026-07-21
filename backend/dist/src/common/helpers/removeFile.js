"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (destination, filename)=>{
    const file = _path.default.resolve(destination, filename);
    if (_fs.default.existsSync(file)) {
        _fs.default.unlink(file, (err)=>{
            if (err) {
                console.error(err);
                return err;
            }
        });
    }
};

//# sourceMappingURL=removeFile.js.map