import { Log, User } from "../../../../generated/prisma/client";
declare const logCreateSchemaDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    modulo: import("zod").ZodString;
    moduloId: import("zod").ZodNumber;
    tipo: import("zod").ZodEnum<{
        readonly created: "created";
        readonly updated: "updated";
        readonly deleted: "deleted";
        readonly status: "status";
        readonly active: "active";
        readonly disable: "disable";
        readonly view: "view";
    }>;
    mensagem: import("zod").ZodString;
    userUUID: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class logCreateSchemaDto extends logCreateSchemaDto_base {
}
export type logDto = Log & {
    User: Pick<User, 'username'>;
};
export {};
