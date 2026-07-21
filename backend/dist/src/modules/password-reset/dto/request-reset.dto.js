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
    get RequestResetDto () {
        return RequestResetDto;
    },
    get RequestResetSchema () {
        return RequestResetSchema;
    }
});
const _zod = require("zod");
const _zodnestjs = require("@anatine/zod-nestjs");
const _zodopenapi = require("@anatine/zod-openapi");
const RequestResetSchema = (0, _zodopenapi.extendApi)(_zod.z.object({
    username: _zod.z.string("O campo 'username' é obrigatório")
}), {
    title: 'RequestResetDto',
    description: 'Solicitar reset de senha'
});
let RequestResetDto = class RequestResetDto extends (0, _zodnestjs.createZodDto)(RequestResetSchema) {
};

//# sourceMappingURL=request-reset.dto.js.map