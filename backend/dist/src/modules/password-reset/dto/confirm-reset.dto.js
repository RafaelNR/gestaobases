"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get ConfirmResetDto () {
        return ConfirmResetDto;
    },
    get ConfirmResetSchema () {
        return ConfirmResetSchema;
    }
});
const _zod = require("zod");
const _zodnestjs = require("@anatine/zod-nestjs");
const _zodopenapi = require("@anatine/zod-openapi");
const ConfirmResetSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    token: _zod.z.string().min(1),
    password: _zod.z.string().min(8).regex(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula').regex(/[0-9]/, 'Deve conter ao menos um número').regex(/[^A-Za-z0-9]/, 'Deve conter ao menos um caractere especial')
}), {
    title: 'ConfirmResetDto',
    description: 'Confirmar reset de senha com token'
});
let ConfirmResetDto = class ConfirmResetDto extends (0, _zodnestjs.createZodDto)(ConfirmResetSchema) {
};

//# sourceMappingURL=confirm-reset.dto.js.map