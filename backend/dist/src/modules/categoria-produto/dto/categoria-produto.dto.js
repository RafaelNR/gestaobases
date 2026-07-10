"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoriaProdutoRequestDto = exports.CreateCategoriaProdutoRequestDto = void 0;
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const categoria_produto_schema_1 = require("../validation/categoria-produto.schema");
class CreateCategoriaProdutoRequestDto extends (0, zod_nestjs_1.createZodDto)(categoria_produto_schema_1.CreateCategoriaProdutoSchema) {
}
exports.CreateCategoriaProdutoRequestDto = CreateCategoriaProdutoRequestDto;
class UpdateCategoriaProdutoRequestDto extends (0, zod_nestjs_1.createZodDto)(categoria_produto_schema_1.UpdateCategoriaProdutoSchema) {
}
exports.UpdateCategoriaProdutoRequestDto = UpdateCategoriaProdutoRequestDto;
//# sourceMappingURL=categoria-produto.dto.js.map