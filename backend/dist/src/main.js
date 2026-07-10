"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const events_1 = require("events");
const common_1 = require("@nestjs/common");
var ExitStatus;
(function (ExitStatus) {
    ExitStatus[ExitStatus["Failure"] = 1] = "Failure";
    ExitStatus[ExitStatus["Success"] = 0] = "Success";
})(ExitStatus || (ExitStatus = {}));
process.on('unhandledRejection', (reason, promise) => {
    console.error(`App exiting due to an unhandled promise: ${promise} and reason: ${reason}`);
    throw reason;
});
process.on('uncaughtException', (error, origin) => {
    console.error(`App origin`, origin);
    console.error(`App exiting due to an uncaught exception: ${error}`);
});
(async () => {
    const logger = new common_1.Logger('InitServer');
    try {
        const server = new server_1.ServerSetup();
        await server.init();
        await server.start();
        logger.verbose(`Server listening on port HTTPS: ${process.env.PORT_HTTPS || 5001}`);
        logger.verbose(`Server database host: ${process.env.DB_HOST}`);
        logger.verbose(`Server database: ${process.env.MYSQL_DB}`);
        logger.verbose(`FRONT_END: ${process.env.FRONT_END}`);
        logger.verbose('SSL: certificates loaded ✅');
        const mem = process.memoryUsage();
        const cpu = process.cpuUsage();
        logger.verbose(`ResourceUsage | ` +
            `RSS: ${(mem.rss / 1024 / 1024).toFixed(2)} MB | ` +
            `HeapUsed: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB | ` +
            `HeapTotal: ${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB | ` +
            `External: ${(mem.external / 1024 / 1024).toFixed(2)} MB | ` +
            `CPU(user): ${(cpu.user / 1000).toFixed(2)} ms | ` +
            `CPU(system): ${(cpu.system / 1000).toFixed(2)} ms`);
        const emitter = new events_1.EventEmitter();
        emitter.setMaxListeners(15);
        const exitSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
        for (const exitSignal of exitSignals) {
            process.on(exitSignal, async () => {
                try {
                    await server.close();
                    logger.log(`Backend fechado com sucesso.`);
                    process.exit(ExitStatus.Success);
                }
                catch (error) {
                    logger.error(`Backend fechado com error:`, error?.stack || error);
                    process.exit(ExitStatus.Failure);
                }
            });
        }
    }
    catch (error) {
        logger.error(`Backend fechado com error:`, error?.stack || error);
        process.exit(ExitStatus.Failure);
    }
})();
//# sourceMappingURL=main.js.map