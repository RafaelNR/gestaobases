import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as z from 'zod';

export type CompatibleZodIssue = {
  message: string;
  path: (string | number)[];
};
export type CompatibleZodType = Pick<
  z.ZodType<unknown>,
  '_input' | '_output'
> & {
  parse: (...args) => unknown;
  safeParse: (...args) =>
    | {
      success: true;
      data: unknown;
      error?: {
        issues: CompatibleZodIssue[];
        errors: CompatibleZodIssue[];
      };
    }
    | {
      success: false;
      error: {
        issues: CompatibleZodIssue[];
        errors: CompatibleZodIssue[];
      };
    };
};
export type CompatibleZodInfer<T extends CompatibleZodType> = T['_output'];

export type ZodDtoStatic<T> = {
  new(): T;
  zodSchema: CompatibleZodType;
  create(input: unknown): T;
};

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  public transform(value: unknown, metadata: ArgumentMetadata): unknown {
    const zodSchema = (metadata?.metatype as ZodDtoStatic<unknown>)?.zodSchema;

    if (zodSchema) {
      const parseResult = zodSchema.safeParse(value);

      if (!parseResult.success) {
        const { error } = parseResult;

        const message = (error.issues ?? error.errors)
          .map((error) => `${error.message}`)
          .join(', ');

        throw new UnprocessableEntityException(
          `Dados não foram validados: ${message}`
        );
      }

      return parseResult.data;
    }

    return value;
  }

  public parse(value: unknown, zodSchema: CompatibleZodType): unknown {
    if (zodSchema) {
      const parseResult = zodSchema.safeParse(value);

      if (!parseResult.success) {
        const { error } = parseResult;

        const message = (error.issues ?? error.errors)
          .map((error) => `${error.message}`)
          .join(', ');

        throw new UnprocessableEntityException(
          `Dados não foram validados: ${message}`
        );
      }

      return parseResult.data;
    }

    return value;
  }
}
