import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';

/**
 * Middleware que gera um ID único para cada request.
 * - Se o client enviar `X-Request-ID`, reutiliza o valor
 * - Caso contrário, gera um UUID v4
 * - O ID é exposto no header de resposta `X-Request-ID` para rastreabilidade
 */
@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const requestId = (req.headers['x-request-id'] as string) || randomUUID();

    // Disponibiliza no request para uso em logs e respostas
    (req as any).requestId = requestId;
    req.headers['x-request-id'] = requestId;

    // Expõe no header de resposta
    res.setHeader('X-Request-ID', requestId);

    next();
  }
}
