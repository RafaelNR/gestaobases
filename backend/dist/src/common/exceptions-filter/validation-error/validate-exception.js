"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ValidateFilter", {
    enumerable: true,
    get: function() {
        return ValidateFilter;
    }
});
const _common = require("@nestjs/common");
const _ValidateError = /*#__PURE__*/ _interop_require_default(require("../../errors/ValidateError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ValidateFilter = class ValidateFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = 400;
        return response.status(status).json({
            statusCode: status,
            success: false,
            message: exception.message,
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
};
ValidateFilter = _ts_decorate([
    (0, _common.Catch)(_ValidateError.default)
], ValidateFilter);

//# sourceMappingURL=validate-exception.js.map