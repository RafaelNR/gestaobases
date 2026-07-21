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
    get RefreshTokenDto () {
        return RefreshTokenDto;
    },
    get RefreshTokenSchema () {
        return RefreshTokenSchema;
    }
});
const _zod = require("zod");
const _zodnestjs = require("@anatine/zod-nestjs");
const _zodopenapi = require("@anatine/zod-openapi");
const RefreshTokenSchema = (0, _zodopenapi.extendApi)(_zod.z.preprocess((value)=>value === undefined ? {} : value, _zod.z.strictObject({})), {
    title: 'RefreshTokenDto'
});
let RefreshTokenDto = class RefreshTokenDto extends (0, _zodnestjs.createZodDto)(RefreshTokenSchema) {
};

//# sourceMappingURL=refresh-token.dto.js.map