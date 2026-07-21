"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LogDecorator", {
    enumerable: true,
    get: function() {
        return LogDecorator;
    }
});
const _common = require("@nestjs/common");
const _customLoggerservice = require("../../infra/logger/customLogger.service");
const _operators = require("rxjs/operators");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let LogDecorator = class LogDecorator {
    constructor(logger){
        this.logger = logger;
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const method = request.method;
        const url = request.url;
        this.logger.log(`📩 Iniciando requisição: ${method} ${url}`, LogDecorator.name);
        return next.handle().pipe((0, _operators.tap)(()=>this.logger.log(`✅ Finalizando requisição: ${method} ${url}`, LogDecorator.name)));
    }
};
LogDecorator = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_customLoggerservice.CustomLogger)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _customLoggerservice.CustomLogger === "undefined" ? Object : _customLoggerservice.CustomLogger
    ])
], LogDecorator);

//# sourceMappingURL=log.decorator.js.map