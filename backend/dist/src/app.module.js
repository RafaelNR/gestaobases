"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _throttler = require("@nestjs/throttler");
const _servestatic = require("@nestjs/serve-static");
const _path = require("path");
const _rolesmodule = require("./infra/guard/roles.module");
const _authmodule = require("./infra/auth/auth.module");
const _nestjspino = require("nestjs-pino");
const _core = require("@nestjs/core");
const _logdecorator = require("./common/decorator/log.decorator");
const _customLoggerservice = require("./infra/logger/customLogger.service");
const _logmodule = require("./infra/logger/log.module");
const _responseinterceptor = require("./common/interceptors/response.interceptor");
const _requestidmiddleware = require("./common/middleware/request-id.middleware");
const _createlogdirs = require("./infra/logger/create-log-dirs");
const _modules = /*#__PURE__*/ _interop_require_wildcard(require("./modules/modules"));
const _bootstrapmodule = require("./bootstrap/bootstrap.module");
const _healthmodule = require("./modules/online/health.module");
const _envvalidation = require("./common/config/env.validation");
const _morgan = require("./common/middleware/morgan");
const _TaskModule = require("./infra/schedulers/TaskModule");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
const imports = Object.values(_modules).map((module)=>module);
(0, _createlogdirs.ensureLogDir)('logs/app.log');
(0, _createlogdirs.ensureLogDir)('logs/error.log');
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(_requestidmiddleware.RequestIdMiddleware).forRoutes('{*splat}');
        consumer.apply(_morgan.MorganMiddleware).forRoutes('{*splat}');
    }
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _config.ConfigModule.forRoot({
                cache: true,
                isGlobal: true,
                validate: _envvalidation.validateEnv
            }),
            _servestatic.ServeStaticModule.forRoot({
                rootPath: (0, _path.join)(__dirname, '..', 'public/images'),
                exclude: [
                    '/{*splat}'
                ],
                serveStaticOptions: {
                    immutable: true
                }
            }),
            _throttler.ThrottlerModule.forRoot([
                {
                    name: 'default',
                    ttl: 60000,
                    limit: 30
                },
                {
                    name: 'login',
                    ttl: 60000,
                    limit: 5
                },
                {
                    name: 'logout',
                    ttl: 60000,
                    limit: 5
                }
            ]),
            _authmodule.AuthModule.forRoot(),
            _rolesmodule.RolesModule.forRoot(),
            _logmodule.LogModule.forRoot(),
            _nestjspino.LoggerModule.forRoot({
                pinoHttp: {
                    level: 'info',
                    autoLogging: true,
                    // customLevels: [],
                    // useOnlyCustomLevels: true,
                    customSuccessMessage: (req, res)=>{
                        const rawIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || '';
                        const ip = Array.isArray(rawIp) ? rawIp[0] : rawIp.split(',')[0].trim();
                        return `${req.method} ${req.url} ${res.statusCode} - ${ip}`;
                    },
                    customProps: (req)=>({
                            ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress,
                            userAgent: req.headers['user-agent']
                        }),
                    transport: {
                        targets: [
                            {
                                target: 'pino/file',
                                options: {
                                    destination: 'logs/app.log',
                                    level: 'info'
                                }
                            },
                            {
                                target: 'pino/file',
                                options: {
                                    destination: 'logs/error.log',
                                    level: 'error'
                                }
                            }
                        ]
                    }
                }
            }),
            _bootstrapmodule.BootStrapModule,
            _healthmodule.HealthModule,
            _TaskModule.TasksModule,
            ...imports
        ],
        providers: [
            {
                provide: _core.APP_INTERCEPTOR,
                useClass: _logdecorator.LogDecorator
            },
            {
                provide: _core.APP_INTERCEPTOR,
                useClass: _responseinterceptor.ResponseInterceptor
            },
            _customLoggerservice.CustomLogger
        ],
        exports: [
            _customLoggerservice.CustomLogger
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map