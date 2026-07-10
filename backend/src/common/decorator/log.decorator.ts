import {
  Inject,
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { CustomLogger } from '@src/infra/logger/customLogger.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogDecorator implements NestInterceptor {
  constructor(@Inject(CustomLogger) private readonly logger: CustomLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    this.logger.log(
      `📩 Iniciando requisição: ${method} ${url}`,
      LogDecorator.name
    );

    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(
            `✅ Finalizando requisição: ${method} ${url}`,
            LogDecorator.name
          )
        )
      );
  }
}
