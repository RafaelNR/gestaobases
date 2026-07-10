import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor() {}

  // @Cron('0 0 2 * * *', {
  //   timeZone: 'America/Sao_Paulo',
  // })
  // async handleCronManifestacoesFinalizadas() {
  //   this.logger.log(
  //     'Executando task para finalizar manifestações respondidas às 02:00 horário Brasil'
  //   );
  //   // await this.taskManifestacoesFinalizada.exec();
  // }

  // @Cron('0 10 2 * * *', {
  //   timeZone: 'America/Sao_Paulo',
  // })
  // async handleCronManifestacoesAtrasada() {
  //   this.logger.log(
  //     'Executando task para manifestações ficarem atrasada às 02:10 horário Brasil'
  //   );
  //   // await this.taskManifestacoesAtrasada.exec();
  // }

  // @Cron('*/5 * * * * *') // a cada 5 segundos
  // handleCron() {
  //   this.logger.log('Cron executado a cada 5 segundos');
  // }
  // @Interval(10000) // 10 segundos
  // handleInterval() {
  //   this.logger.log('Executado a cada 10s');
  // }
  // @Timeout(5000)
  // handleTimeout() {
  //   const start = Date.now();
  //   this.logger.log('Executado uma vez após 5s');
  //   this.logger.log('Cron started | Job=syncData');
  //   this.logger.log(
  //     `Cron finished | Job=syncData | Duration=${Date.now() - start}ms`
  //   );
  // }
  // @Cron('0 */5 * * * *')
  // async handleCronS() {
  //   const locked = await this.tryLock();
  //   if (!locked) return;

  //   try {
  //     // tarefa
  //   } finally {
  //     await this.releaseLock();
  //   }
  // }
  // @Cron('0 0 * * * *')
  // async job() {
  //   const start = Date.now();

  //   this.logger.log('Cron started | Job=syncData');

  //   try {
  //     await this.sync();
  //     this.logger.log(
  //       `Cron finished | Job=syncData | Duration=${Date.now() - start}ms`
  //     );
  //   } catch (err) {
  //     this.logger.error(
  //       `Cron failed | Job=syncData | Error=${err.message}`,
  //       err.stack
  //     );
  //   }
  // }
}
