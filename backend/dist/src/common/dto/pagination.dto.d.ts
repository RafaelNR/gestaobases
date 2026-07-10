import { z } from 'zod';
export declare const PaginationSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
declare const PaginationDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<z.ZodObject<{
    page: z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>>;
export declare class PaginationDto extends PaginationDto_base {
}
export declare function paginate(pagination?: {
    page?: number;
    limit?: number;
}): {
    skip: number;
    take: number;
};
export {};
