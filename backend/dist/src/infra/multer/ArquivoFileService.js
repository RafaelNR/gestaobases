"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ArquivoFileService", {
    enumerable: true,
    get: function() {
        return ArquivoFileService;
    }
});
const _common = require("@nestjs/common");
const _ValidateError = /*#__PURE__*/ _interop_require_default(require("../../common/errors/ValidateError"));
const _multer = /*#__PURE__*/ _interop_require_wildcard(require("multer"));
const _crypto = require("crypto");
const _path = require("path");
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
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
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const PATH = './public/uploads/arquivo';
const storage = _multer.diskStorage({
    destination (req, file, cb) {
        cb(null, PATH);
    },
    filename (req, file, cb) {
        cb(null, (0, _crypto.randomUUID)() + (0, _path.extname)(file.originalname));
    }
});
let ArquivoFileService = class ArquivoFileService {
    constructor(){
        // cria pasta uma vez só
        _fs.default.mkdirSync(PATH, {
            recursive: true
        });
    }
    createMulterOptions() {
        return {
            dest: PATH,
            limits: {
                files: 1,
                fileSize: 25 * 1024 * 1024
            },
            storage: storage,
            fileFilter (req, file, callback) {
                _fs.default.mkdirSync(PATH, {
                    recursive: true
                });
                if (!file) {
                    return callback(new _ValidateError.default('Deve enviar pelo menos um arquivo.'), false);
                }
                const allowedMimeTypes = [
                    'application/pdf',
                    'image/jpeg',
                    'image/png',
                    'image/webp',
                    'audio/mpeg',
                    'audio/wav',
                    'audio/webm',
                    'video/mp4',
                    'video/webm',
                    'application/zip',
                    'application/x-rar-compressed',
                    'application/vnd.rar'
                ];
                if (!allowedMimeTypes.includes(file.mimetype)) {
                    return callback(new _ValidateError.default('Arquivo não é permitido. Formatos permitidos: PDF, JPG, PNG, WEBP, MP3, MP4, WAV, WEBM, ZIP, RAR.'), false);
                }
                callback(null, true);
            }
        };
    }
};
ArquivoFileService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], ArquivoFileService);

//# sourceMappingURL=ArquivoFileService.js.map