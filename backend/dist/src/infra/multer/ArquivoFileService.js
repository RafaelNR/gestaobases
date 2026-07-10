"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArquivoFileService = void 0;
const common_1 = require("@nestjs/common");
const ValidateError_1 = __importDefault(require("../../common/errors/ValidateError"));
const multer = __importStar(require("multer"));
const crypto_1 = require("crypto");
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const PATH = './public/uploads/arquivo';
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, PATH);
    },
    filename(req, file, cb) {
        cb(null, (0, crypto_1.randomUUID)() + (0, path_1.extname)(file.originalname));
    },
});
let ArquivoFileService = class ArquivoFileService {
    constructor() {
        fs_1.default.mkdirSync(PATH, { recursive: true });
    }
    createMulterOptions() {
        return {
            dest: PATH,
            limits: {
                files: 1,
                fileSize: 25 * 1024 * 1024,
            },
            storage: storage,
            fileFilter(req, file, callback) {
                fs_1.default.mkdirSync(PATH, { recursive: true });
                if (!file) {
                    return callback(new ValidateError_1.default('Deve enviar pelo menos um arquivo.'), false);
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
                    'application/vnd.rar',
                ];
                if (!allowedMimeTypes.includes(file.mimetype)) {
                    return callback(new ValidateError_1.default('Arquivo não é permitido. Formatos permitidos: PDF, JPG, PNG, WEBP, MP3, MP4, WAV, WEBM, ZIP, RAR.'), false);
                }
                callback(null, true);
            },
        };
    }
};
exports.ArquivoFileService = ArquivoFileService;
exports.ArquivoFileService = ArquivoFileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ArquivoFileService);
//# sourceMappingURL=ArquivoFileService.js.map