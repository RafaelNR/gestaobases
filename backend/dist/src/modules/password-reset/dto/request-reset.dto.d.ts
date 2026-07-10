import { z } from 'zod';
export declare const RequestResetSchema: z.ZodObject<{
    username: z.ZodString;
}, z.core.$strip>;
declare const RequestResetDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<z.ZodObject<{
    username: z.ZodString;
}, z.core.$strip>>;
export declare class RequestResetDto extends RequestResetDto_base {
}
export {};
