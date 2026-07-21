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
    get CreateBaseRequestDto () {
        return CreateBaseRequestDto;
    },
    get UpdateBaseRequestDto () {
        return UpdateBaseRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _baseschema = require("../validation/base.schema");
let CreateBaseRequestDto = class CreateBaseRequestDto extends (0, _zodnestjs.createZodDto)(_baseschema.CreateBaseSchema) {
};
let UpdateBaseRequestDto = class UpdateBaseRequestDto extends (0, _zodnestjs.createZodDto)(_baseschema.UpdateBaseSchema) {
};

//# sourceMappingURL=base.dto.js.map