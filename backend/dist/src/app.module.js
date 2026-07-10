"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const roles_module_1 = require("./infra/guard/roles.module");
const auth_module_1 = require("./infra/auth/auth.module");
const nestjs_pino_1 = require("nestjs-pino");
const core_1 = require("@nestjs/core");
const log_decorator_1 = require("./common/decorator/log.decorator");
const customLogger_service_1 = require("./infra/logger/customLogger.service");
const log_module_1 = require("./infra/logger/log.module");
const response_interceptor_1 = require("./common/interceptors/response.interceptor");
const request_id_middleware_1 = require("./common/middleware/request-id.middleware");
const create_log_dirs_1 = require("./infra/logger/create-log-dirs");
const Modules = __importStar(require("./modules/modules"));
const bootstrap_module_1 = require("./bootstrap/bootstrap.module");
const health_module_1 = require("./modules/online/health.module");
const env_validation_1 = require("./common/config/env.validation");
const morgan_1 = require("./common/middleware/morgan");
const TaskModule_1 = require("./infra/schedulers/TaskModule");
const imports = Object.values(Modules).map((module) => module);
(0, create_log_dirs_1.ensureLogDir)('logs/app.log');
(0, create_log_dirs_1.ensureLogDir)('logs/error.log');
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(request_id_middleware_1.RequestIdMiddleware).forRoutes('{*splat}');
        consumer.apply(morgan_1.MorganMiddleware).forRoutes('{*splat}');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                cache: true,
                isGlobal: true,
                validate: env_validation_1.validateEnv,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public/images'),
                exclude: ['/{*splat}'],
                serveStaticOptions: {
                    immutable: true,
                },
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    name: 'default',
                    ttl: 60000,
                    limit: 30,
                },
                {
                    name: 'login',
                    ttl: 60000,
                    limit: 5,
                },
                {
                    name: 'logout',
                    ttl: 60000,
                    limit: 5,
                },
            ]),
            auth_module_1.AuthModule.forRoot(),
            roles_module_1.RolesModule.forRoot(),
            log_module_1.LogModule.forRoot(),
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    level: 'info',
                    autoLogging: true,
                    customSuccessMessage: (req, res) => {
                        const rawIp = req.headers['x-forwarded-for'] ||
                            req.headers['x-real-ip'] ||
                            req.socket?.remoteAddress ||
                            '';
                        const ip = Array.isArray(rawIp)
                            ? rawIp[0]
                            : rawIp.split(',')[0].trim();
                        return `${req.method} ${req.url} ${res.statusCode} - ${ip}`;
                    },
                    customProps: (req) => ({
                        ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress,
                        userAgent: req.headers['user-agent'],
                    }),
                    transport: {
                        targets: [
                            {
                                target: 'pino/file',
                                options: { destination: 'logs/app.log', level: 'info' },
                            },
                            {
                                target: 'pino/file',
                                options: { destination: 'logs/error.log', level: 'error' },
                            },
                        ],
                    },
                },
            }),
            bootstrap_module_1.BootStrapModule,
            health_module_1.HealthModule,
            TaskModule_1.TasksModule,
            ...imports,
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: log_decorator_1.LogDecorator,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: response_interceptor_1.ResponseInterceptor,
            },
            customLogger_service_1.CustomLogger,
        ],
        exports: [customLogger_service_1.CustomLogger],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map