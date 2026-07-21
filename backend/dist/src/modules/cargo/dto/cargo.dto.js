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
    get CreateCargoRequestDto () {
        return CreateCargoRequestDto;
    },
    get UpdateCargoRequestDto () {
        return UpdateCargoRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _cargoschema = require("../validation/cargo.schema");
let CreateCargoRequestDto = class CreateCargoRequestDto extends (0, _zodnestjs.createZodDto)(_cargoschema.CreateCargoSchema) {
};
let UpdateCargoRequestDto = class UpdateCargoRequestDto extends (0, _zodnestjs.createZodDto)(_cargoschema.UpdateCargoSchema) {
};

//# sourceMappingURL=cargo.dto.js.map