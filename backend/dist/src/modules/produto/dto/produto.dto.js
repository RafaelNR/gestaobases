"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProdutoRequestDto = exports.CreateProdutoRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const produto_schema_1 = require("../validation/produto.schema");
class CreateProdutoRequestDto extends (0, zod_nestjs_1.createZodDto)(produto_schema_1.CreateProdutoSchema) {
}
exports.CreateProdutoRequestDto = CreateProdutoRequestDto;
class UpdateProdutoRequestDto extends (0, zod_nestjs_1.createZodDto)(produto_schema_1.UpdateProdutoSchema) {
}
exports.UpdateProdutoRequestDto = UpdateProdutoRequestDto;
//# sourceMappingURL=produto.dto.js.map