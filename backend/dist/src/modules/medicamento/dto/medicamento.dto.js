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
    get CreateMedicamentoRequestDto () {
        return CreateMedicamentoRequestDto;
    },
    get UpdateMedicamentoRequestDto () {
        return UpdateMedicamentoRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _medicamentoschema = require("../validation/medicamento.schema");
let CreateMedicamentoRequestDto = class CreateMedicamentoRequestDto extends (0, _zodnestjs.createZodDto)(_medicamentoschema.CreateMedicamentoSchema) {
};
let UpdateMedicamentoRequestDto = class UpdateMedicamentoRequestDto extends (0, _zodnestjs.createZodDto)(_medicamentoschema.UpdateMedicamentoSchema) {
};

//# sourceMappingURL=medicamento.dto.js.map