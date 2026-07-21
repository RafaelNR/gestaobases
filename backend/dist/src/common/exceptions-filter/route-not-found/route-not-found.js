"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotFoundErrorFilter", {
    enumerable: true,
    get: function() {
        return NotFoundErrorFilter;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let NotFoundErrorFilter = class NotFoundErrorFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        return response.status(404).json({
            statusCode: status,
            success: false,
            message: exception.message || 'Route não existe.',
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
};
NotFoundErrorFilter = _ts_decorate([
    (0, _common.Catch)(_common.NotFoundException)
], NotFoundErrorFilter);

//# sourceMappingURL=route-not-found.js.map