import { PrismaService } from "../../../infra/database/prisma/prisma.service";
export declare class NotificacoesRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findByUser(userId: string): Promise<{
        link: string | null;
        tipo: import("../../../../generated/prisma/enums").TipoNotificacao;
        id: string;
        mensagem: string;
        userId: string;
        created_at: Date;
        updated_at: Date;
        artefatoUUID: string;
        evento: string;
        lida: boolean;
        removida: boolean;
    }[]>;
}
