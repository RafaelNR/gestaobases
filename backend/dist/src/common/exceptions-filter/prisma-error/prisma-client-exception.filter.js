"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get PrismaClientExceptionFilter () {
        return PrismaClientExceptionFilter;
    },
    get PrismaClientInitializationExceptionFilter () {
        return PrismaClientInitializationExceptionFilter;
    },
    get PrismaClientUnknownRequestErrorExceptionFilter () {
        return PrismaClientUnknownRequestErrorExceptionFilter;
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
let PrismaClientExceptionFilter = class PrismaClientExceptionFilter extends _core.BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const logger = new _common.Logger(PrismaClientExceptionFilter.name);
        logger.error(`Prisma Error [${exception.code}]: ${exception.message}`);
        const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'DEV';
        const send = (status, message)=>{
            response.status(status).json({
                statusCode: status,
                message,
                success: false
            });
        };
        switch(exception.code){
            case 'P2000':
                return send(_common.HttpStatus.BAD_REQUEST, 'Dados inválidos enviados.');
            case 'P2002':
                return send(_common.HttpStatus.CONFLICT, 'Já existe um registro com esses dados.');
            case 'P2003':
                return send(_common.HttpStatus.BAD_REQUEST, 'Relacionamento inválido entre dados.');
            case 'P2025':
                return send(_common.HttpStatus.NOT_FOUND, 'Registro não encontrado.');
            case 'P2020':
                return send(_common.HttpStatus.BAD_REQUEST, 'Erro ao processar dados.');
            default:
                return send(_common.HttpStatus.INTERNAL_SERVER_ERROR, isDev ? exception.message // só em DEV
                 : 'Erro interno no servidor.');
        }
    }
};
PrismaClientExceptionFilter = _ts_decorate([
    (0, _common.Catch)(_client.Prisma.PrismaClientKnownRequestError)
], PrismaClientExceptionFilter);
let PrismaClientInitializationExceptionFilter = class PrismaClientInitializationExceptionFilter extends _core.BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'DEV';
        const status = _common.HttpStatus.BAD_GATEWAY;
        response.status(status).json({
            statusCode: status,
            // Nunca expor mensagem bruta em produção — pode conter DATABASE_URL com senha
            message: isDev ? exception.message.replace(/\n/g, '') : 'Serviço temporariamente indisponível.',
            success: false
        });
    }
};
PrismaClientInitializationExceptionFilter = _ts_decorate([
    (0, _common.Catch)(_client.Prisma.PrismaClientInitializationError)
], PrismaClientInitializationExceptionFilter);
let PrismaClientUnknownRequestErrorExceptionFilter = class PrismaClientUnknownRequestErrorExceptionFilter extends _core.BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const message = exception.message.replace(/\n/g, '');
        const status = _common.HttpStatus.BAD_GATEWAY;
        response.status(status).json({
            statusCode: status,
            message: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'DEV' ? message : 'Erro buscador dados, tente mais tarde.',
            success: false
        });
    }
};
PrismaClientUnknownRequestErrorExceptionFilter = _ts_decorate([
    (0, _common.Catch)(_client.Prisma.PrismaClientUnknownRequestError)
], PrismaClientUnknownRequestErrorExceptionFilter);

//# sourceMappingURL=prisma-client-exception.filter.js.map