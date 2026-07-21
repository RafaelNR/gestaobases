"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaClientValidationFilter", {
    enumerable: true,
    get: function() {
        return PrismaClientValidationFilter;
    }
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _client = require("../../../../generated/prisma/client");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let PrismaClientValidationFilter = class PrismaClientValidationFilter extends _core.BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const message = exception.message.replace(/\n/g, '');
        console.log(exception.message);
        const status = _common.HttpStatus.BAD_GATEWAY;
        response.status(status).json({
            statusCode: status,
            message: 'Erro em validar dados no banco de dados.',
            success: false
        });
    }
};
PrismaClientValidationFilter = _ts_decorate([
    (0, _common.Catch)(_client.Prisma.PrismaClientValidationError)
], PrismaClientValidationFilter);

//# sourceMappingURL=prisma-client-validation.filter.js.map