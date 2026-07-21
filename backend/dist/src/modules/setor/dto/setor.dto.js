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
    get CreateSetorRequestDto () {
        return CreateSetorRequestDto;
    },
    get UpdateSetorRequestDto () {
        return UpdateSetorRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _setorschema = require("../validation/setor.schema");
let CreateSetorRequestDto = class CreateSetorRequestDto extends (0, _zodnestjs.createZodDto)(_setorschema.CreateSetorSchema) {
};
let UpdateSetorRequestDto = class UpdateSetorRequestDto extends (0, _zodnestjs.createZodDto)(_setorschema.UpdateSetorSchema) {
};

//# sourceMappingURL=setor.dto.js.map