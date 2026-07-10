import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IStandardResponse<T> {
  status: number;
  success: boolean;
  message?: string;
  dados?: T;
  requestId?: string;
}

/**
 * Interceptor global que padroniza TODAS as respostas da API
 * no formato: { status, success, dados, requestId }
 *
 * Respostas que já seguem o padrão (possuem `success`) são passadas sem alteração.
 */
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, IStandardResponse<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<IStandardResponse<T>> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const requestId = request.headers['x-request-id'] || request.requestId;

    return next.handle().pipe(
      map((data) => {
        // Se a resposta já segue o padrão do BaseController, apenas adiciona requestId
        if (data && typeof data === 'object' && 'success' in data) {
          return {
            ...data,
            requestId,
          };
        }

        // Respostas que não seguem o padrão são envelopadas
        return {
          status: response.statusCode,
          success: true,
          dados: data,
          requestId,
        };
      })
    );
  }
}
