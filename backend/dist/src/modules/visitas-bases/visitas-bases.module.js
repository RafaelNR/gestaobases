"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitasBasesModule = void 0;
const common_1 = require("@nestjs/common");
const visitas_bases_controller_1 = require("./visitas-bases.controller");
const visitas_bases_repository_1 = require("./repository/visitas-bases.repository");
let VisitasBasesModule = class VisitasBasesModule {
};
exports.VisitasBasesModule = VisitasBasesModule;
exports.VisitasBasesModule = VisitasBasesModule = __decorate([
    (0, common_1.Module)({
        controllers: [visitas_bases_controller_1.VisitasBasesController],
        providers: [visitas_bases_repository_1.VisitasBasesService],
        exports: [visitas_bases_repository_1.VisitasBasesService],
    })
], VisitasBasesModule);
//# sourceMappingURL=visitas-bases.module.js.map