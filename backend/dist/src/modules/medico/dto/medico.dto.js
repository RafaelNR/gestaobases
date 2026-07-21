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
    get CreateMedicoRequestDto () {
        return CreateMedicoRequestDto;
    },
    get UpdateMedicoRequestDto () {
        return UpdateMedicoRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _medicoschema = require("../validation/medico.schema");
let CreateMedicoRequestDto = class CreateMedicoRequestDto extends (0, _zodnestjs.createZodDto)(_medicoschema.CreateMedicoSchema) {
};
let UpdateMedicoRequestDto = class UpdateMedicoRequestDto extends (0, _zodnestjs.createZodDto)(_medicoschema.UpdateMedicoSchema) {
};

//# sourceMappingURL=medico.dto.js.map