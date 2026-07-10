"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoModule = void 0;
const common_1 = require("@nestjs/common");
const medico_controller_1 = require("./medico.controller");
const medico_repository_1 = require("./repository/medico.repository");
let MedicoModule = class MedicoModule {
};
exports.MedicoModule = MedicoModule;
exports.MedicoModule = MedicoModule = __decorate([
    (0, common_1.Module)({
        controllers: [medico_controller_1.MedicoController],
        providers: [medico_repository_1.MedicoRepository],
        exports: [medico_repository_1.MedicoRepository],
    })
], MedicoModule);
//# sourceMappingURL=medico.module.js.map