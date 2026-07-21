"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ServerSetup", {
    enumerable: true,
    get: function() {
        return ServerSetup;
    }
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _common = require("@nestjs/common");
const _globalconfig = require("./global-config");
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let ServerSetup = class ServerSetup {
    async init() {
        const sslAvailable = process.env.SSL_KEY && process.env.SSL_CERT && _fs.default.existsSync(process.env.SSL_KEY) && _fs.default.existsSync(process.env.SSL_CERT);
        if (sslAvailable) {
            const httpsOptions = {
                key: _fs.default.readFileSync(process.env.SSL_KEY),
                cert: _fs.default.readFileSync(process.env.SSL_CERT)
            };
            this.app = await _core.NestFactory.create(_appmodule.AppModule, {
                logger: [
                    'error',
                    'warn',
                    'verbose',
                    'log'
                ],
                httpsOptions,
                rawBody: true
            });
            this.logger.log('HTTPS mode: Certificados SSL carregados ✅');
        } else {
            this.logger.warn('Certificados SSL não encontrados. Servidor não iniciado.');
            return;
        }
        (0, _globalconfig.applyGlobalConfig)(this.app);
    }
    async close() {
        if (this.app) {
            this.app?.close();
        }
    }
    async start() {
        try {
            await this.app.listen(process.env.PORT_HTTPS || 5000);
            this.logger.verbose('HTTPS SERVER RODANDO...');
        // this.logger.verbose('Test verbose message');
        // this.logger.debug('Test debug message');
        // this.logger.log('Test log message');
        // this.logger.warn('Test warn message');
        // this.logger.error('Test error message');
        } catch (error) {
            this.logger.error('ERROR INICIAR BACKEND.');
            console.error(error);
        }
    }
    getApp() {
        return this.app;
    }
    constructor(){
        this.logger = new _common.Logger('ServerSetup');
    }
};

//# sourceMappingURL=server.js.map