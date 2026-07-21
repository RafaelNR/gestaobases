"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "User", {
    enumerable: true,
    get: function() {
        return User;
    }
});
const _common = require("@nestjs/common");
const User = (0, _common.createParamDecorator)((data, ctx)=>{
    const request = ctx.switchToHttp().getRequest();
    if (request.user) {
        request.user.ip = request.ip || request.headers['x-forwarded-for'];
        return request.user;
    }
    return undefined;
});

//# sourceMappingURL=user.decorator.js.map