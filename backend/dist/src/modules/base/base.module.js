"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModule = void 0;
const common_1 = require("@nestjs/common");
const base_controller_1 = require("./base.controller");
const base_repository_1 = require("./repository/base.repository");
let BaseModule = class BaseModule {
};
exports.BaseModule = BaseModule;
exports.BaseModule = BaseModule = __decorate([
    (0, common_1.Module)({
        controllers: [base_controller_1.BasesController],
        providers: [base_repository_1.BaseRepository],
        exports: [base_repository_1.BaseRepository],
    })
], BaseModule);
//# sourceMappingURL=base.module.js.map