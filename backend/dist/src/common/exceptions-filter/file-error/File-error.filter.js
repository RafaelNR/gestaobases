"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteFileOnErrorFilter", {
    enumerable: true,
    get: function() {
        return DeleteFileOnErrorFilter;
    }
});
const _common = require("@nestjs/common");
const _fs = /*#__PURE__*/ _interop_require_wildcard(require("fs"));
const _FileError = /*#__PURE__*/ _interop_require_default(require("../../errors/FileError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let DeleteFileOnErrorFilter = class DeleteFileOnErrorFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = 400;
        // const getFiles = (files: any[] | unknown | undefined) => {
        //   if (!files) return [];
        //   if (isArray(files)) return files;
        //   return Object.values(files);
        // };
        // const filePaths = getFiles(request.files);
        // for (const file of filePaths) {
        //   fs.unlink(file.path, (err) => {
        //     if (err) {
        //       console.error(err);
        //       return err;
        //     }
        //   });
        // }
        console.log(exception);
        if (_fs.existsSync(request.file.path)) {
            _fs.unlink(request.file.path, (err)=>{
                if (err) {
                    console.error(err);
                    return err;
                }
            });
        }
        return response.status(status).json({
            statusCode: status,
            success: false,
            message: exception.message,
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
};
DeleteFileOnErrorFilter = _ts_decorate([
    (0, _common.Catch)(_FileError.default)
], DeleteFileOnErrorFilter);

//# sourceMappingURL=File-error.filter.js.map