"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotFoundExceptionFilter", {
    enumerable: true,
    get: function() {
        return NotFoundExceptionFilter;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let NotFoundExceptionFilter = class NotFoundExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(_common.HttpStatus.NOT_FOUND).json({
            statusCode: _common.HttpStatus.NOT_FOUND,
            message: 'Rota não existe.',
            error: 'Not Found'
        });
    }
};
NotFoundExceptionFilter = _ts_decorate([
    (0, _common.Catch)(_common.NotFoundException)
], NotFoundExceptionFilter);

//# sourceMappingURL=NotFound.js.map