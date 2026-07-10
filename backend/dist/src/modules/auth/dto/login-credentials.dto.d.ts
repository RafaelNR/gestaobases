import { z } from 'zod';
export declare const LoginCredentialsSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
declare const LoginCredentialsDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>>;
export declare class LoginCredentialsDto extends LoginCredentialsDto_base {
}
export {};
