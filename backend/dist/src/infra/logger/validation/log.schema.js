"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logCreateSchema = void 0;
const zod_openapi_1 = require("@anatine/zod-openapi");
const client_1 = require("../../../../generated/prisma/client");
const zod_1 = __importDefault(require("zod"));
exports.logCreateSchema = (0, zod_openapi_1.extendApi)(zod_1.default.object({
    modulo: zod_1.default
        .string({ error: 'Nome do modulo é requerido.' })
        .min(3)
        .max(190),
    moduloId: zod_1.default.number({ error: 'Id do modulo é requerido.' }),
    tipo: zod_1.default.nativeEnum(client_1.TipoLog),
    mensagem: zod_1.default.string({ error: 'Mensagem é requerido.' }).min(3),
    userUUID: zod_1.default
        .string({ error: 'Usuário é requerido.' })
        .min(3)
        .max(190),
}));
//# sourceMappingURL=log.schema.js.map