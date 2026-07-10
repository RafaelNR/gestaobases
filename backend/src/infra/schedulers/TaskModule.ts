import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MailModule } from '../mail/mail.module';
// import { StatsCacheTask } from './tasks/stats-cache.task';

@Module({
  imports: [MailModule, ScheduleModule.forRoot()],
  // providers: [StatsCacheTask],
})
export class TasksModule {}
