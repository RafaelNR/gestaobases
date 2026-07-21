"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ZodValidationPipe", {
    enumerable: true,
    get: function() {
        return ZodValidationPipe;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ZodValidationPipe = class ZodValidationPipe {
    transform(value, metadata) {
        const zodSchema = metadata?.metatype?.zodSchema;
        if (zodSchema) {
            const parseResult = zodSchema.safeParse(value);
            if (!parseResult.success) {
                const { error } = parseResult;
                const message = (error.issues ?? error.errors).map((error)=>`${error.message}`).join(', ');
                throw new _common.UnprocessableEntityException(`Dados não foram validados: ${message}`);
            }
            return parseResult.data;
        }
        return value;
    }
    parse(value, zodSchema) {
        if (zodSchema) {
            const parseResult = zodSchema.safeParse(value);
            if (!parseResult.success) {
                const { error } = parseResult;
                const message = (error.issues ?? error.errors).map((error)=>`${error.message}`).join(', ');
                throw new _common.UnprocessableEntityException(`Dados não foram validados: ${message}`);
            }
            return parseResult.data;
        }
        return value;
    }
};
ZodValidationPipe = _ts_decorate([
    (0, _common.Injectable)()
], ZodValidationPipe);

//# sourceMappingURL=zod.pipe.js.map