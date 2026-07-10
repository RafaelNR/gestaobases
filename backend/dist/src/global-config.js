"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyGlobalConfig = applyGlobalConfig;
const express_1 = require("express");
const http_exception_1 = require("./common/exceptions-filter/http-exception/http-exception");
const autorization_error_1 = require("./common/exceptions-filter/autorization-error/autorization-error");
const route_not_found_1 = require("./common/exceptions-filter/route-not-found/route-not-found");
const prisma_client_exception_filter_1 = require("./common/exceptions-filter/prisma-error/prisma-client-exception.filter");
const prisma_client_validation_filter_1 = require("./common/exceptions-filter/prisma-error/prisma-client-validation.filter");
const validate_exception_1 = require("./common/exceptions-filter/validation-error/validate-exception");
const zod_exception_1 = require("./common/exceptions-filter/validation-error/zod-exception");
const File_error_filter_1 = require("./common/exceptions-filter/file-error/File-error.filter");
const NotFound_1 = require("./common/errors/NotFound");
const helmet_1 = require("./common/middleware/helmet");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const multer_error_1 = require("./common/exceptions-filter/multer-error/multer-error");
const origins_1 = require("./origins");
function applyGlobalConfig(app) {
    app.useGlobalFilters(new http_exception_1.HttpExceptionFilter(), new prisma_client_exception_filter_1.PrismaClientExceptionFilter(), new prisma_client_exception_filter_1.PrismaClientInitializationExceptionFilter(), new prisma_client_validation_filter_1.PrismaClientValidationFilter(), new prisma_client_exception_filter_1.PrismaClientUnknownRequestErrorExceptionFilter(), new autorization_error_1.ForbiddenExceptionFilter(), new route_not_found_1.NotFoundErrorFilter(), new zod_exception_1.ZodFilter(), new validate_exception_1.ValidateFilter(), new NotFound_1.NotFoundExceptionFilter(), new File_error_filter_1.DeleteFileOnErrorFilter(), new multer_error_1.MulterExceptionFilter());
    app.use(helmet_1.HelmetMiddleware);
    app.use((0, cookie_parser_1.default)());
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin && process.env.NODE_ENV === 'DEV')
                return callback(null, true);
            if (origins_1.allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error('Not allowed by CORS, origin: ' + origin), false);
        },
        credentials: true,
        methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'Authorization',
        ],
    });
    app.use((0, express_1.json)({ limit: '1mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '1mb' }));
}
//# sourceMappingURL=global-config.js.map