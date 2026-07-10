"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./users/users.module"), exports);
__exportStar(require("./upload/upload.module"), exports);
__exportStar(require("./dashboard/dashboard.module"), exports);
__exportStar(require("./auth/auth.module"), exports);
__exportStar(require("./password-reset/password-reset.module"), exports);
__exportStar(require("./log/log.module"), exports);
__exportStar(require("./base/base.module"), exports);
__exportStar(require("./setor/setor.module"), exports);
__exportStar(require("./cargo/cargo.module"), exports);
__exportStar(require("./ambulancia/ambulancia.module"), exports);
__exportStar(require("./categoria-produto/categoria-produto.module"), exports);
__exportStar(require("./produto/produto.module"), exports);
__exportStar(require("./categorias-medicamento/categorias-medicamento.module"), exports);
__exportStar(require("./medicamento/medicamento.module"), exports);
__exportStar(require("./medico/medico.module"), exports);
__exportStar(require("./requerimento/requerimento.module"), exports);
__exportStar(require("./visitas-bases/visitas-bases.module"), exports);
__exportStar(require("./receituarios/receituarios.module"), exports);
//# sourceMappingURL=modules.js.map