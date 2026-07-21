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
    get AddMedicamentoRequestDto () {
        return AddMedicamentoRequestDto;
    },
    get ChangeStatusReceituarioRequestDto () {
        return ChangeStatusReceituarioRequestDto;
    },
    get CreateReceituarioRequestDto () {
        return CreateReceituarioRequestDto;
    },
    get UpdateMedicamentoRequestDto () {
        return UpdateMedicamentoRequestDto;
    },
    get UpdateReceituarioRequestDto () {
        return UpdateReceituarioRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _receituariosschema = require("../validation/receituarios.schema");
let CreateReceituarioRequestDto = class CreateReceituarioRequestDto extends (0, _zodnestjs.createZodDto)(_receituariosschema.CreateReceituarioSchema) {
};
let UpdateReceituarioRequestDto = class UpdateReceituarioRequestDto extends (0, _zodnestjs.createZodDto)(_receituariosschema.UpdateReceituarioSchema) {
};
let AddMedicamentoRequestDto = class AddMedicamentoRequestDto extends (0, _zodnestjs.createZodDto)(_receituariosschema.AddMedicamentoSchema) {
};
let UpdateMedicamentoRequestDto = class UpdateMedicamentoRequestDto extends (0, _zodnestjs.createZodDto)(_receituariosschema.UpdateMedicamentoSchema) {
};
let ChangeStatusReceituarioRequestDto = class ChangeStatusReceituarioRequestDto extends (0, _zodnestjs.createZodDto)(_receituariosschema.ChangeStatusReceituarioSchema) {
};

//# sourceMappingURL=receituarios.dto.js.map