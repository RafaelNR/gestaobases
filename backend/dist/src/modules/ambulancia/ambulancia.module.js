"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbulanciaModule = void 0;
const common_1 = require("@nestjs/common");
const ambulancia_controller_1 = require("./ambulancia.controller");
const ambulancia_repository_1 = require("./repository/ambulancia.repository");
let AmbulanciaModule = class AmbulanciaModule {
};
exports.AmbulanciaModule = AmbulanciaModule;
exports.AmbulanciaModule = AmbulanciaModule = __decorate([
    (0, common_1.Module)({
        controllers: [ambulancia_controller_1.AmbulanciaController],
        providers: [ambulancia_repository_1.AmbulanciaRepository],
        exports: [ambulancia_repository_1.AmbulanciaRepository],
    })
], AmbulanciaModule);
//# sourceMappingURL=ambulancia.module.js.map