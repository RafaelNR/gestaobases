"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("./users/users.module"), exports);
_export_star(require("./upload/upload.module"), exports);
_export_star(require("./dashboard/dashboard.module"), exports);
_export_star(require("./auth/auth.module"), exports);
_export_star(require("./password-reset/password-reset.module"), exports);
_export_star(require("./log/log.module"), exports);
_export_star(require("./base/base.module"), exports);
_export_star(require("./setor/setor.module"), exports);
_export_star(require("./cargo/cargo.module"), exports);
_export_star(require("./ambulancia/ambulancia.module"), exports);
_export_star(require("./categoria-produto/categoria-produto.module"), exports);
_export_star(require("./produto/produto.module"), exports);
_export_star(require("./categorias-medicamento/categorias-medicamento.module"), exports);
_export_star(require("./medicamento/medicamento.module"), exports);
_export_star(require("./medico/medico.module"), exports);
_export_star(require("./requerimento/requerimento.module"), exports);
_export_star(require("./visitas-bases/visitas-bases.module"), exports);
_export_star(require("./receituarios/receituarios.module"), exports);
_export_star(require("./estoque/estoque.module"), exports);
_export_star(require("./relatorios/relatorios.module"), exports);
_export_star(require("./notificacoes/notificacoes.module"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=modules.js.map