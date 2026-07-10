import { ServerSetup } from './server';
import { EventEmitter } from 'events';
import { Logger } from '@nestjs/common';


enum ExitStatus {
  Failure = 1,
  Success = 0,
}

// Captura erros de promise quebradas;
process.on('unhandledRejection', (reason, promise) => {
  console.error(
    `App exiting due to an unhandled promise: ${promise} and reason: ${reason}`
  );
  // lets throw the error and let the uncaughtException handle below handle it
  throw reason;
});

// Captura erros não tratados, sincronos ou não;
// Se não tiver o sistema quebra;
process.on('uncaughtException', (error, origin) => {
  console.error(`App origin`, origin);
  console.error(`App exiting due to an uncaught exception: ${error}`);
  // process.exit(ExitStatus.Failure);
});

// ---- Gracefully Shutdown
// SIGINT     -> Disparado no Crt+C
// SIGTERM   -> Disparado quando kill no processo
(async (): Promise<void> => {
  const logger = new Logger('InitServer');
  try {
    const server = new ServerSetup();
    await server.init();
    await server.start();

    logger.verbose(`Server listening on port HTTPS: ${process.env.PORT_HTTPS || 5001}`);
    logger.verbose(`Server database host: ${process.env.DB_HOST}`);
    logger.verbose(`Server database: ${process.env.MYSQL_DB}`);
    logger.verbose(`FRONT_END: ${process.env.FRONT_END}`);
    logger.verbose('SSL: certificates loaded ✅');
    const mem = process.memoryUsage();
    const cpu = process.cpuUsage();

    logger.verbose(
      `ResourceUsage | ` +
      `RSS: ${(mem.rss / 1024 / 1024).toFixed(2)} MB | ` +
      `HeapUsed: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB | ` +
      `HeapTotal: ${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB | ` +
      `External: ${(mem.external / 1024 / 1024).toFixed(2)} MB | ` +
      `CPU(user): ${(cpu.user / 1000).toFixed(2)} ms | ` +
      `CPU(system): ${(cpu.system / 1000).toFixed(2)} ms`
    );

    const emitter = new EventEmitter();
    emitter.setMaxListeners(15);

    const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
    for (const exitSignal of exitSignals) {
      process.on(exitSignal, async () => {
        try {
          await server.close();
          logger.log(`Backend fechado com sucesso.`);
          process.exit(ExitStatus.Success);
        } catch (error: any) {
          logger.error(`Backend fechado com error:`, error?.stack || error);
          process.exit(ExitStatus.Failure);
        }
      });
    }
  } catch (error: any) {
    logger.error(`Backend fechado com error:`, error?.stack || error);
    process.exit(ExitStatus.Failure);
  }
})();
