"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowRolesAuth = exports.Public = void 0;
const common_1 = require("@nestjs/common");
const Public = () => (0, common_1.SetMetadata)('isPublic', true);
exports.Public = Public;
const AllowRolesAuth = () => (0, common_1.SetMetadata)('AllowRolesAuth', true);
exports.AllowRolesAuth = AllowRolesAuth;
//# sourceMappingURL=auth.decorator.js.map