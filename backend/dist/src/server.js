"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSetup = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const global_config_1 = require("./global-config");
const fs_1 = __importDefault(require("fs"));
class ServerSetup {
    app;
    logger = new common_1.Logger('ServerSetup');
    async init() {
        const sslAvailable = process.env.SSL_KEY &&
            process.env.SSL_CERT &&
            fs_1.default.existsSync(process.env.SSL_KEY) &&
            fs_1.default.existsSync(process.env.SSL_CERT);
        if (sslAvailable) {
            const httpsOptions = {
                key: fs_1.default.readFileSync(process.env.SSL_KEY),
                cert: fs_1.default.readFileSync(process.env.SSL_CERT),
            };
            this.app = await core_1.NestFactory.create(app_module_1.AppModule, {
                logger: ['error', 'warn', 'verbose', 'log'],
                httpsOptions,
                rawBody: true,
            });
            this.logger.log('HTTPS mode: Certificados SSL carregados ✅');
        }
        else {
            this.logger.warn('Certificados SSL não encontrados. Servidor não iniciado.');
            return;
        }
        (0, global_config_1.applyGlobalConfig)(this.app);
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
        }
        catch (error) {
            this.logger.error('ERROR INICIAR BACKEND.');
            console.error(error);
        }
    }
    getApp() {
        return this.app;
    }
}
exports.ServerSetup = ServerSetup;
//# sourceMappingURL=server.js.map