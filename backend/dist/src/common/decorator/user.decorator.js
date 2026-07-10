"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (request.user) {
        request.user.ip = request.ip || request.headers['x-forwarded-for'];
        return request.user;
    }
    return undefined;
});
//# sourceMappingURL=user.decorator.js.map