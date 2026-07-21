"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ForbiddenExceptionFilter", {
    enumerable: true,
    get: function() {
        return ForbiddenExceptionFilter;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ForbiddenExceptionFilter = class ForbiddenExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        return response.status(403).json({
            statusCode: 403,
            success: false,
            message: 'Sem permissão de acesso.',
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
};
ForbiddenExceptionFilter = _ts_decorate([
    (0, _common.Catch)(_common.ForbiddenException)
], ForbiddenExceptionFilter);

//# sourceMappingURL=autorization-error.js.map