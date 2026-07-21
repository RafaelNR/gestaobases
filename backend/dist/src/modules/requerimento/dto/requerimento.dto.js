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
    get AddItemRequestDto () {
        return AddItemRequestDto;
    },
    get ChangeStatusRequestDto () {
        return ChangeStatusRequestDto;
    },
    get CreateRequerimentoAlmoxarifadoAndCMERequestDto () {
        return CreateRequerimentoAlmoxarifadoAndCMERequestDto;
    },
    get CreateRequerimentoFarmaciaRequestDto () {
        return CreateRequerimentoFarmaciaRequestDto;
    },
    get UpdateItemRequestDto () {
        return UpdateItemRequestDto;
    },
    get UpdateRequerimentoAlmoxarifadoAndCMERequestDto () {
        return UpdateRequerimentoAlmoxarifadoAndCMERequestDto;
    },
    get UpdateRequerimentoFarmaciaRequestDto () {
        return UpdateRequerimentoFarmaciaRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _requerimentoschema = require("../validation/requerimento.schema");
let CreateRequerimentoAlmoxarifadoAndCMERequestDto = class CreateRequerimentoAlmoxarifadoAndCMERequestDto extends (0, _zodnestjs.createZodDto)(_requerimentoschema.CreateRequerimentoAlmoxarifadoAndCMESchema) {
};
let CreateRequerimentoFarmaciaRequestDto = class CreateRequerimentoFarmaciaRequestDto extends (0, _zodnestjs.createZodDto)(_requerimentoschema.CreateRequerimentoFarmaciaSchema) {
};
let UpdateRequerimentoAlmoxarifadoAndCMERequestDto = class UpdateRequerimentoAlmoxarifadoAndCMERequestDto extends (0, _zodnestjs.createZodDto)(_requerimentoschema.UpdateRequerimentoAlmoxarifadoAndCMESchema) {
};
let UpdateRequerimentoFarmaciaRequestDto = class UpdateRequerimentoFarmaciaRequestDto extends (0, _zodnestjs.createZodDto)(_requerimentoschema.UpdateRequerimentoFarmaciaSchema) {
};
let AddItemRequestDto = class AddItemRequestDto extends (0, _zodnestjs.createZodDto)(_requerimentoschema.AddItemSchema) {
};
let UpdateItemRequestDto = class UpdateItemRequestDto extends (0, _zodnestjs.createZodDto)(_requerimentoschema.UpdateItemSchema) {
};
let ChangeStatusRequestDto = class ChangeStatusRequestDto extends (0, _zodnestjs.createZodDto)(_requerimentoschema.ChangeStatusSchema) {
};

//# sourceMappingURL=requerimento.dto.js.map