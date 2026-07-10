import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import * as z from 'zod';
export type CompatibleZodIssue = {
    message: string;
    path: (string | number)[];
};
export type CompatibleZodType = Pick<z.ZodType<unknown>, '_input' | '_output'> & {
    parse: (...args: any[]) => unknown;
    safeParse: (...args: any[]) => {
        success: true;
        data: unknown;
        error?: {
            issues: CompatibleZodIssue[];
            errors: CompatibleZodIssue[];
        };
    } | {
        success: false;
        error: {
            issues: CompatibleZodIssue[];
            errors: CompatibleZodIssue[];
        };
    };
};
export type CompatibleZodInfer<T extends CompatibleZodType> = T['_output'];
export type ZodDtoStatic<T> = {
    new (): T;
    zodSchema: CompatibleZodType;
    create(input: unknown): T;
};
export declare class ZodValidationPipe implements PipeTransform {
    transform(value: unknown, metadata: ArgumentMetadata): unknown;
    parse(value: unknown, zodSchema: CompatibleZodType): unknown;
}
