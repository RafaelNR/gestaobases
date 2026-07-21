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
    get CreateUserRequestDto () {
        return CreateUserRequestDto;
    },
    get UpdatePerfilRequestDto () {
        return UpdatePerfilRequestDto;
    },
    get UpdateUserRequestDto () {
        return UpdateUserRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _updateschema = require("../validation/update.schema");
const _createschema = require("../validation/create.schema");
let CreateUserRequestDto = class CreateUserRequestDto extends (0, _zodnestjs.createZodDto)(_createschema.CreateUserRequestSchema) {
};
let UpdateUserRequestDto = class UpdateUserRequestDto extends (0, _zodnestjs.createZodDto)(_updateschema.UpdateUserRequestSchema) {
};
let UpdatePerfilRequestDto = class UpdatePerfilRequestDto extends (0, _zodnestjs.createZodDto)(_updateschema.UpdatePerfilRequestSchema) {
};

//# sourceMappingURL=users.dto.js.map