import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface IStandardResponse<T> {
    status: number;
    success: boolean;
    message?: string;
    dados?: T;
    requestId?: string;
}
export declare class ResponseInterceptor<T> implements NestInterceptor<T, IStandardResponse<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<IStandardResponse<T>>;
}
