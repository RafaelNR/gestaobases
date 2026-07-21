"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MulterExceptionFilter", {
    enumerable: true,
    get: function() {
        return MulterExceptionFilter;
    }
});
const _common = require("@nestjs/common");
const _multer = require("multer");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let MulterExceptionFilter = class MulterExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        console.log('aqui');
        console.log(exception);
        if (exception.code === 'LIMIT_FILE_SIZE') {
            return response.status(400).json({
                message: 'Arquivo excede o tamanho máximo.'
            });
        }
        if (exception.message) {
            return response.status(400).json({
                message: exception.message
            });
        }
        return response.status(400).json({
            message: exception.message
        });
    }
};
MulterExceptionFilter = _ts_decorate([
    (0, _common.Catch)(_multer.MulterError)
], MulterExceptionFilter);

//# sourceMappingURL=multer-error.js.map