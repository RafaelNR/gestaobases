"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LogService", {
    enumerable: true,
    get: function() {
        return LogService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../../database/prisma/prisma.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let LogService = class LogService {
    constructor(prisma){
        this.prisma = prisma;
    }
    async log(tipo, dados) {
        await this.prisma.log.create({
            data: {
                ip: dados.ip,
                mensagem: dados.mensagem,
                artefato: dados.artefato,
                modulo: dados.modulo,
                tipo,
                User: {
                    connect: {
                        id: dados.userId
                    }
                }
            }
        });
    }
    async created(dados) {
        return this.log('created', dados);
    }
    async updated(dados) {
        return this.log('updated', dados);
    }
    async actived(dados) {
        return this.log('active', dados);
    }
    async deleted(dados) {
        return this.log('deleted', dados);
    }
    async disabled(dados) {
        return this.log('disable', dados);
    }
    async status(dados) {
        return this.log('status', dados);
    }
    async validation(dados) {
        return this.log('updated', dados);
    }
};
LogService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)((0, _common.forwardRef)(()=>_prismaservice.PrismaService))),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], LogService);

//# sourceMappingURL=log.repository.js.map