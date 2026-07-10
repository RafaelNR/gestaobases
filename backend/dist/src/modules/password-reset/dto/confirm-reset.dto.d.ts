import { z } from 'zod';
export declare const ConfirmResetSchema: z.ZodObject<{
    token: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
declare const ConfirmResetDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<z.ZodObject<{
    token: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>>;
export declare class ConfirmResetDto extends ConfirmResetDto_base {
}
export {};
