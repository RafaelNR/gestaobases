"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequerimentoModule = void 0;
const common_1 = require("@nestjs/common");
const almoxarifado_controller_1 = require("./controllers/almoxarifado.controller");
const cme_controller_1 = require("./controllers/cme.controller");
const farmacia_controller_1 = require("./controllers/farmacia.controller");
const requerimento_repository_1 = require("./repository/requerimento.repository");
const requerimento_service_1 = require("./services/requerimento.service");
let RequerimentoModule = class RequerimentoModule {
};
exports.RequerimentoModule = RequerimentoModule;
exports.RequerimentoModule = RequerimentoModule = __decorate([
    (0, common_1.Module)({
        controllers: [almoxarifado_controller_1.AlmoxarifadoController, farmacia_controller_1.FarmaciaController, cme_controller_1.CmeController],
        providers: [requerimento_repository_1.RequerimentoRepository, requerimento_service_1.RequerimentoService],
        exports: [requerimento_service_1.RequerimentoService],
    })
], RequerimentoModule);
//# sourceMappingURL=requerimento.module.js.map