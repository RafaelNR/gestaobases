"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PrismaClientExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientUnknownRequestErrorExceptionFilter = exports.PrismaClientInitializationExceptionFilter = exports.PrismaClientExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_1 = require("../../../../generated/prisma/client");
let PrismaClientExceptionFilter = PrismaClientExceptionFilter_1 = class PrismaClientExceptionFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const logger = new common_1.Logger(PrismaClientExceptionFilter_1.name);
        logger.error(`Prisma Error [${exception.code}]: ${exception.message}`);
        const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'DEV';
        const send = (status, message) => {
            response.status(status).json({
                statusCode: status,
                message,
                success: false,
            });
        };
        switch (exception.code) {
            case 'P2000':
                return send(common_1.HttpStatus.BAD_REQUEST, 'Dados inválidos enviados.');
            case 'P2002':
                return send(common_1.HttpStatus.CONFLICT, 'Já existe um registro com esses dados.');
            case 'P2003':
                return send(common_1.HttpStatus.BAD_REQUEST, 'Relacionamento inválido entre dados.');
            case 'P2025':
                return send(common_1.HttpStatus.NOT_FOUND, 'Registro não encontrado.');
            case 'P2020':
                return send(common_1.HttpStatus.BAD_REQUEST, 'Erro ao processar dados.');
            default:
                return send(common_1.HttpStatus.INTERNAL_SERVER_ERROR, isDev
                    ? exception.message
                    : 'Erro interno no servidor.');
        }
    }
};
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter;
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter = PrismaClientExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaClientExceptionFilter);
let PrismaClientInitializationExceptionFilter = class PrismaClientInitializationExceptionFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'DEV';
        const status = common_1.HttpStatus.BAD_GATEWAY;
        response.status(status).json({
            statusCode: status,
            message: isDev ? exception.message.replace(/\n/g, '') : 'Serviço temporariamente indisponível.',
            success: false,
        });
    }
};
exports.PrismaClientInitializationExceptionFilter = PrismaClientInitializationExceptionFilter;
exports.PrismaClientInitializationExceptionFilter = PrismaClientInitializationExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientInitializationError)
], PrismaClientInitializationExceptionFilter);
let PrismaClientUnknownRequestErrorExceptionFilter = class PrismaClientUnknownRequestErrorExceptionFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const message = exception.message.replace(/\n/g, '');
        const status = common_1.HttpStatus.BAD_GATEWAY;
        response.status(status).json({
            statusCode: status,
            message: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'DEV'
                ? message
                : 'Erro buscador dados, tente mais tarde.',
            success: false,
        });
    }
};
exports.PrismaClientUnknownRequestErrorExceptionFilter = PrismaClientUnknownRequestErrorExceptionFilter;
exports.PrismaClientUnknownRequestErrorExceptionFilter = PrismaClientUnknownRequestErrorExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientUnknownRequestError)
], PrismaClientUnknownRequestErrorExceptionFilter);
//# sourceMappingURL=prisma-client-exception.filter.js.map