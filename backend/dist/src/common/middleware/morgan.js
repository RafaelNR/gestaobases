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
var MorganMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorganMiddleware = void 0;
const common_1 = require("@nestjs/common");
const morgan_1 = __importDefault(require("morgan"));
let MorganMiddleware = MorganMiddleware_1 = class MorganMiddleware {
    logger = new common_1.Logger(MorganMiddleware_1.name);
    use(req, res, next) {
        (0, morgan_1.default)(process.env.NODE_ENV === 'DEV' ? 'dev' : 'production', {
            stream: {
                write: (message) => this.logger.log(message),
            },
        })(req, res, next);
    }
};
exports.MorganMiddleware = MorganMiddleware;
exports.MorganMiddleware = MorganMiddleware = MorganMiddleware_1 = __decorate([
    (0, common_1.Injectable)()
], MorganMiddleware);
//# sourceMappingURL=morgan.js.map