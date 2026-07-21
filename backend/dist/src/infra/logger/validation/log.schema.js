"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "logCreateSchema", {
    enumerable: true,
    get: function() {
        return logCreateSchema;
    }
});
const _zodopenapi = require("@anatine/zod-openapi");
const _client = require("../../../../generated/prisma/client");
const _zod = /*#__PURE__*/ _interop_require_default(require("zod"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const logCreateSchema = (0, _zodopenapi.extendApi)(_zod.default.object({
    modulo: _zod.default.string({
        error: 'Nome do modulo é requerido.'
    }).min(3).max(190),
    moduloId: _zod.default.number({
        error: 'Id do modulo é requerido.'
    }),
    tipo: _zod.default.nativeEnum(_client.TipoLog),
    mensagem: _zod.default.string({
        error: 'Mensagem é requerido.'
    }).min(3),
    userUUID: _zod.default.string({
        error: 'Usuário é requerido.'
    }).min(3).max(190)
}));

//# sourceMappingURL=log.schema.js.map