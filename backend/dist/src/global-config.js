"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyGlobalConfig", {
    enumerable: true,
    get: function() {
        return applyGlobalConfig;
    }
});
const _express = require("express");
const _httpexception = require("./common/exceptions-filter/http-exception/http-exception");
const _autorizationerror = require("./common/exceptions-filter/autorization-error/autorization-error");
const _routenotfound = require("./common/exceptions-filter/route-not-found/route-not-found");
const _prismaclientexceptionfilter = require("./common/exceptions-filter/prisma-error/prisma-client-exception.filter");
const _prismaclientvalidationfilter = require("./common/exceptions-filter/prisma-error/prisma-client-validation.filter");
const _validateexception = require("./common/exceptions-filter/validation-error/validate-exception");
const _zodexception = require("./common/exceptions-filter/validation-error/zod-exception");
const _Fileerrorfilter = require("./common/exceptions-filter/file-error/File-error.filter");
const _NotFound = require("./common/errors/NotFound");
const _helmet = require("./common/middleware/helmet");
const _cookieparser = /*#__PURE__*/ _interop_require_default(require("cookie-parser"));
const _multererror = require("./common/exceptions-filter/multer-error/multer-error");
const _origins = require("./origins");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function applyGlobalConfig(app) {
    app.useGlobalFilters(new _httpexception.HttpExceptionFilter(), new _prismaclientexceptionfilter.PrismaClientExceptionFilter(), new _prismaclientexceptionfilter.PrismaClientInitializationExceptionFilter(), new _prismaclientvalidationfilter.PrismaClientValidationFilter(), new _prismaclientexceptionfilter.PrismaClientUnknownRequestErrorExceptionFilter(), new _autorizationerror.ForbiddenExceptionFilter(), new _routenotfound.NotFoundErrorFilter(), new _zodexception.ZodFilter(), new _validateexception.ValidateFilter(), new _NotFound.NotFoundExceptionFilter(), new _Fileerrorfilter.DeleteFileOnErrorFilter(), new _multererror.MulterExceptionFilter());
    app.use(_helmet.HelmetMiddleware);
    app.use((0, _cookieparser.default)());
    app.enableCors({
        origin: (origin, callback)=>{
            // Permite chamadas sem Origin (ambiente dev)
            if (!origin && process.env.NODE_ENV === 'DEV') return callback(null, true);
            if (_origins.allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error('Not allowed by CORS, origin: ' + origin), false);
        },
        credentials: true,
        methods: [
            'GET',
            'HEAD',
            'OPTIONS',
            'PUT',
            'PATCH',
            'POST',
            'DELETE'
        ],
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'Authorization'
        ]
    });
    app.use((0, _express.json)({
        limit: '1mb'
    }));
    app.use((0, _express.urlencoded)({
        extended: true,
        limit: '1mb'
    }));
}

//# sourceMappingURL=global-config.js.map