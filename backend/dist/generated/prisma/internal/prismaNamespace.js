"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordResetTokenOrderByRelevanceFieldEnum = exports.UserOrderByRelevanceFieldEnum = exports.NullsOrder = exports.BaseOrderByRelevanceFieldEnum = exports.CargoOrderByRelevanceFieldEnum = exports.SetorOrderByRelevanceFieldEnum = exports.ConfigOrderByRelevanceFieldEnum = exports.SortOrder = exports.NotificacaoScalarFieldEnum = exports.ReceituarioMedicamentosScalarFieldEnum = exports.ReceituarioScalarFieldEnum = exports.MedicoScalarFieldEnum = exports.LogScalarFieldEnum = exports.SendEmailScalarFieldEnum = exports.VisitasBasesScalarFieldEnum = exports.RequerimentoItemScalarFieldEnum = exports.RequerimentoStatusScalarFieldEnum = exports.RequerimentoScalarFieldEnum = exports.MedicamentoScalarFieldEnum = exports.CategoriasMedicamentoScalarFieldEnum = exports.ProdutoScalarFieldEnum = exports.CategoriaProdutoScalarFieldEnum = exports.AmbulanciaScalarFieldEnum = exports.RefreshTokenScalarFieldEnum = exports.PasswordResetTokenScalarFieldEnum = exports.UserScalarFieldEnum = exports.BaseScalarFieldEnum = exports.CargoScalarFieldEnum = exports.SetorScalarFieldEnum = exports.RelationLoadStrategy = exports.ConfigScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.NotificacaoOrderByRelevanceFieldEnum = exports.ReceituarioMedicamentosOrderByRelevanceFieldEnum = exports.ReceituarioOrderByRelevanceFieldEnum = exports.MedicoOrderByRelevanceFieldEnum = exports.LogOrderByRelevanceFieldEnum = exports.SendEmailOrderByRelevanceFieldEnum = exports.VisitasBasesOrderByRelevanceFieldEnum = exports.RequerimentoItemOrderByRelevanceFieldEnum = exports.RequerimentoStatusOrderByRelevanceFieldEnum = exports.RequerimentoOrderByRelevanceFieldEnum = exports.MedicamentoOrderByRelevanceFieldEnum = exports.CategoriasMedicamentoOrderByRelevanceFieldEnum = exports.ProdutoOrderByRelevanceFieldEnum = exports.CategoriaProdutoOrderByRelevanceFieldEnum = exports.AmbulanciaOrderByRelevanceFieldEnum = exports.RefreshTokenOrderByRelevanceFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Config: 'Config',
    Setor: 'Setor',
    Cargo: 'Cargo',
    Base: 'Base',
    User: 'User',
    PasswordResetToken: 'PasswordResetToken',
    RefreshToken: 'RefreshToken',
    Ambulancia: 'Ambulancia',
    CategoriaProduto: 'CategoriaProduto',
    Produto: 'Produto',
    CategoriasMedicamento: 'CategoriasMedicamento',
    Medicamento: 'Medicamento',
    Requerimento: 'Requerimento',
    RequerimentoStatus: 'RequerimentoStatus',
    RequerimentoItem: 'RequerimentoItem',
    VisitasBases: 'VisitasBases',
    SendEmail: 'SendEmail',
    Log: 'Log',
    Medico: 'Medico',
    Receituario: 'Receituario',
    ReceituarioMedicamentos: 'ReceituarioMedicamentos',
    Notificacao: 'Notificacao'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.ConfigScalarFieldEnum = {
    id: 'id',
    key: 'key',
    value: 'value'
};
exports.RelationLoadStrategy = {
    query: 'query',
    join: 'join'
};
exports.SetorScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    nomeVisivel: 'nomeVisivel',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CargoScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    nomeVisivel: 'nomeVisivel',
    setor: 'setor',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.BaseScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    tipo_ambulancias: 'tipo_ambulancias',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    password: 'password',
    baseId: 'baseId',
    setorId: 'setorId',
    cargoId: 'cargoId',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PasswordResetTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt'
};
exports.RefreshTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    family: 'family',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    userAgent: 'userAgent',
    ip: 'ip'
};
exports.AmbulanciaScalarFieldEnum = {
    id: 'id',
    tipo: 'tipo',
    nome: 'nome',
    baseId: 'baseId',
    userId: 'userId',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CategoriaProdutoScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    userId: 'userId',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ProdutoScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    codigo: 'codigo',
    unidade: 'unidade',
    categoria: 'categoria',
    usa: 'usa',
    cme: 'cme',
    fora_alx: 'fora_alx',
    ordem: 'ordem',
    userId: 'userId',
    descricao: 'descricao',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CategoriasMedicamentoScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    active: 'active',
    userId: 'userId',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.MedicamentoScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    codigo: 'codigo',
    especificacao: 'especificacao',
    categoria: 'categoria',
    userId: 'userId',
    descricao: 'descricao',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.RequerimentoScalarFieldEnum = {
    id: 'id',
    numero: 'numero',
    tipo: 'tipo',
    status: 'status',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    base: 'base',
    setor: 'setor',
    cargo: 'cargo',
    userId: 'userId',
    ambulanciaId: 'ambulanciaId',
    obs: 'obs',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.RequerimentoStatusScalarFieldEnum = {
    id: 'id',
    requerimentoId: 'requerimentoId',
    status: 'status',
    userId: 'userId',
    created_at: 'created_at'
};
exports.RequerimentoItemScalarFieldEnum = {
    id: 'id',
    requerimentoId: 'requerimentoId',
    produtoId: 'produtoId',
    medicamentoId: 'medicamentoId',
    quantidade: 'quantidade',
    ocorrencia: 'ocorrencia',
    userId: 'userId',
    ativo: 'ativo',
    deleted_at: 'deleted_at',
    deleted_by: 'deleted_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.VisitasBasesScalarFieldEnum = {
    id: 'id',
    data: 'data',
    base: 'base',
    outro_motivo: 'outro_motivo',
    descricao: 'descricao',
    userId: 'userId',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SendEmailScalarFieldEnum = {
    id: 'id',
    status: 'status',
    tipo: 'tipo',
    email: 'email',
    artefatoUUID: 'artefatoUUID',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LogScalarFieldEnum = {
    id: 'id',
    tipo: 'tipo',
    modulo: 'modulo',
    artefato: 'artefato',
    ip: 'ip',
    mensagem: 'mensagem',
    userId: 'userId',
    createdAt: 'createdAt'
};
exports.MedicoScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    crm: 'crm',
    telefone: 'telefone',
    userId: 'userId',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ReceituarioScalarFieldEnum = {
    id: 'id',
    requerimentoId: 'requerimentoId',
    status: 'status',
    numero: 'numero',
    data: 'data',
    ocorrencia: 'ocorrencia',
    data_ocorrencia: 'data_ocorrencia',
    medicoId: 'medicoId',
    baseId: 'baseId',
    ambulanciaId: 'ambulanciaId',
    obs: 'obs',
    userId: 'userId',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ReceituarioMedicamentosScalarFieldEnum = {
    id: 'id',
    receituarioId: 'receituarioId',
    medicamentoId: 'medicamentoId',
    qnt: 'qnt',
    unidade: 'unidade',
    administracao: 'administracao',
    diluente: 'diluente',
    qnt_diluente: 'qnt_diluente',
    qnt_tempo: 'qnt_tempo',
    userId: 'userId',
    obs: 'obs',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.NotificacaoScalarFieldEnum = {
    id: 'id',
    mensagem: 'mensagem',
    artefatoUUID: 'artefatoUUID',
    tipo: 'tipo',
    evento: 'evento',
    link: 'link',
    lida: 'lida',
    removida: 'removida',
    userId: 'userId',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.ConfigOrderByRelevanceFieldEnum = {
    key: 'key',
    value: 'value'
};
exports.SetorOrderByRelevanceFieldEnum = {
    id: 'id',
    nome: 'nome',
    nomeVisivel: 'nomeVisivel'
};
exports.CargoOrderByRelevanceFieldEnum = {
    id: 'id',
    nome: 'nome',
    nomeVisivel: 'nomeVisivel',
    setor: 'setor'
};
exports.BaseOrderByRelevanceFieldEnum = {
    id: 'id',
    nome: 'nome'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.UserOrderByRelevanceFieldEnum = {
    id: 'id',
    username: 'username',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    password: 'password',
    baseId: 'baseId',
    setorId: 'setorId',
    cargoId: 'cargoId'
};
exports.PasswordResetTokenOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash'
};
exports.RefreshTokenOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    family: 'family',
    userAgent: 'userAgent',
    ip: 'ip'
};
exports.AmbulanciaOrderByRelevanceFieldEnum = {
    id: 'id',
    nome: 'nome',
    baseId: 'baseId',
    userId: 'userId'
};
exports.CategoriaProdutoOrderByRelevanceFieldEnum = {
    id: 'id',
    nome: 'nome',
    userId: 'userId'
};
exports.ProdutoOrderByRelevanceFieldEnum = {
    id: 'id',
    nome: 'nome',
    categoria: 'categoria',
    userId: 'userId',
    descricao: 'descricao'
};
exports.CategoriasMedicamentoOrderByRelevanceFieldEnum = {
    id: 'id',
    nome: 'nome',
    userId: 'userId'
};
exports.MedicamentoOrderByRelevanceFieldEnum = {
    id: 'id',
    nome: 'nome',
    especificacao: 'especificacao',
    categoria: 'categoria',
    userId: 'userId',
    descricao: 'descricao'
};
exports.RequerimentoOrderByRelevanceFieldEnum = {
    id: 'id',
    base: 'base',
    setor: 'setor',
    cargo: 'cargo',
    userId: 'userId',
    ambulanciaId: 'ambulanciaId',
    obs: 'obs'
};
exports.RequerimentoStatusOrderByRelevanceFieldEnum = {
    id: 'id',
    requerimentoId: 'requerimentoId',
    userId: 'userId'
};
exports.RequerimentoItemOrderByRelevanceFieldEnum = {
    id: 'id',
    requerimentoId: 'requerimentoId',
    produtoId: 'produtoId',
    medicamentoId: 'medicamentoId',
    ocorrencia: 'ocorrencia',
    userId: 'userId',
    deleted_by: 'deleted_by'
};
exports.VisitasBasesOrderByRelevanceFieldEnum = {
    id: 'id',
    base: 'base',
    outro_motivo: 'outro_motivo',
    descricao: 'descricao',
    userId: 'userId'
};
exports.SendEmailOrderByRelevanceFieldEnum = {
    id: 'id',
    email: 'email',
    artefatoUUID: 'artefatoUUID',
    message: 'message'
};
exports.LogOrderByRelevanceFieldEnum = {
    id: 'id',
    modulo: 'modulo',
    artefato: 'artefato',
    ip: 'ip',
    mensagem: 'mensagem',
    userId: 'userId'
};
exports.MedicoOrderByRelevanceFieldEnum = {
    id: 'id',
    nome: 'nome',
    crm: 'crm',
    telefone: 'telefone',
    userId: 'userId'
};
exports.ReceituarioOrderByRelevanceFieldEnum = {
    id: 'id',
    requerimentoId: 'requerimentoId',
    numero: 'numero',
    medicoId: 'medicoId',
    baseId: 'baseId',
    ambulanciaId: 'ambulanciaId',
    obs: 'obs',
    userId: 'userId'
};
exports.ReceituarioMedicamentosOrderByRelevanceFieldEnum = {
    id: 'id',
    receituarioId: 'receituarioId',
    medicamentoId: 'medicamentoId',
    userId: 'userId',
    obs: 'obs'
};
exports.NotificacaoOrderByRelevanceFieldEnum = {
    id: 'id',
    mensagem: 'mensagem',
    artefatoUUID: 'artefatoUUID',
    evento: 'evento',
    link: 'link',
    userId: 'userId'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map