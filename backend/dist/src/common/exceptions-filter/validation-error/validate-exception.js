"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateFilter = void 0;
const common_1 = require("@nestjs/common");
const ValidateError_1 = __importDefault(require("../../errors/ValidateError"));
let ValidateFilter = class ValidateFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = 400;
        return response.status(status).json({
            statusCode: status,
            success: false,
            message: exception.message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
};
exports.ValidateFilter = ValidateFilter;
exports.ValidateFilter = ValidateFilter = __decorate([
    (0, common_1.Catch)(ValidateError_1.default)
], ValidateFilter);
//# sourceMappingURL=validate-exception.js.map