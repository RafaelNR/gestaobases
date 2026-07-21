"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "logCreateSchemaDto", {
    enumerable: true,
    get: function() {
        return logCreateSchemaDto;
    }
});
const _logschema = require("../validation/log.schema");
const _zodnestjs = require("@anatine/zod-nestjs");
let logCreateSchemaDto = class logCreateSchemaDto extends (0, _zodnestjs.createZodDto)(_logschema.logCreateSchema) {
};

//# sourceMappingURL=log.dto.js.map