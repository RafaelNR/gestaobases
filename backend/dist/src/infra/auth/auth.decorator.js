"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get AllowRolesAuth () {
        return AllowRolesAuth;
    },
    get Public () {
        return Public;
    }
});
const _common = require("@nestjs/common");
const Public = ()=>(0, _common.SetMetadata)('isPublic', true);
const AllowRolesAuth = ()=>(0, _common.SetMetadata)('AllowRolesAuth', true);

//# sourceMappingURL=auth.decorator.js.map