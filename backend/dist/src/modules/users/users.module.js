"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserModule", {
    enumerable: true,
    get: function() {
        return UserModule;
    }
});
const _common = require("@nestjs/common");
const _userscontroller = require("./users.controller");
const _usersrepository = require("./repository/users.repository");
const _Createdusecase = require("./service/Created.use-case");
const _Perfilusecase = require("./service/Perfil.use-case");
const _Updatedusecase = require("./service/Updated.use-case");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let UserModule = class UserModule {
};
UserModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _userscontroller.UserController
        ],
        providers: [
            _usersrepository.UserService,
            _Createdusecase.CreateUsuario,
            _Perfilusecase.UpdatePerfil,
            _Updatedusecase.UpdateUsuario
        ],
        exports: [
            _usersrepository.UserService
        ]
    })
], UserModule);

//# sourceMappingURL=users.module.js.map