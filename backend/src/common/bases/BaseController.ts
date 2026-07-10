import { UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from '@src/common/pipe/zod.pipe';
export type IResponse<T> = {
  status: number;
  success: boolean;
  message?: string;
  response?: T;
};

@UsePipes(ZodValidationPipe)
export class BaseController {
  constructor() { }

  protected handleSuccessResponse<T>({
    code,
    message,
    response,
  }: {
    code: number;
    message?: string;
    response?: T;
  }): IResponse<T> {
    if (message && !response) {
      return {
        status: code,
        success: true,
        message: message,
      };
    }

    if (!message && response) {
      return {
        status: code,
        success: true,
        response: response,
      };
    }

    if (message && response) {
      return {
        status: code,
        success: true,
        message: message,
        response: response,
      };
    }

    return {
      status: code,
      success: true,
    };
  }
}
