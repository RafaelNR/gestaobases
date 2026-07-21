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
    get CreateVisitaBaseRequestDto () {
        return CreateVisitaBaseRequestDto;
    },
    get UpdateVisitaBaseRequestDto () {
        return UpdateVisitaBaseRequestDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _visitasbasesschema = require("../validation/visitas-bases.schema");
let CreateVisitaBaseRequestDto = class CreateVisitaBaseRequestDto extends (0, _zodnestjs.createZodDto)(_visitasbasesschema.CreateVisitaBaseSchema) {
};
let UpdateVisitaBaseRequestDto = class UpdateVisitaBaseRequestDto extends (0, _zodnestjs.createZodDto)(_visitasbasesschema.UpdateVisitaBaseSchema) {
};

//# sourceMappingURL=visitas-bases.dto.js.map