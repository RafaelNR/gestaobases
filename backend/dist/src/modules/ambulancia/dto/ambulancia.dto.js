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
    get CreateAmbulanciaRequestDto () {
        return CreateAmbulanciaRequestDto;
    },
    get UpdateAmbulanciaRequestDto () {
        return UpdateAmbulanciaRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _ambulanciaschema = require("../validation/ambulancia.schema");
let CreateAmbulanciaRequestDto = class CreateAmbulanciaRequestDto extends (0, _zodnestjs.createZodDto)(_ambulanciaschema.CreateAmbulanciaSchema) {
};
let UpdateAmbulanciaRequestDto = class UpdateAmbulanciaRequestDto extends (0, _zodnestjs.createZodDto)(_ambulanciaschema.UpdateAmbulanciaSchema) {
};

//# sourceMappingURL=ambulancia.dto.js.map