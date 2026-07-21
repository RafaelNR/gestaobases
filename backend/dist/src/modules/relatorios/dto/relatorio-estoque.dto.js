"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RelatorioEstoqueMovimentacoesQueryDto", {
    enumerable: true,
    get: function() {
        return RelatorioEstoqueMovimentacoesQueryDto;
    }
});
const _zodnestjs = require("@anatine/zod-nestjs");
const _relatoriosschema = require("../validation/relatorios.schema");
let RelatorioEstoqueMovimentacoesQueryDto = class RelatorioEstoqueMovimentacoesQueryDto extends (0, _zodnestjs.createZodDto)(_relatoriosschema.relatorioEstoqueMovimentacoesSchema) {
};

//# sourceMappingURL=relatorio-estoque.dto.js.map