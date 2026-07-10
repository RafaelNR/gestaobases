import { PrismaService } from "../../infra/database/prisma/prisma.service";
import { TipoRequerimento } from "../../../generated/prisma/enums";
import { IUser } from "../../common/decorator/user.decorator";
export interface DashboardStats {
    totalLotesAtivos: number;
    lotesHoje: number;
    totalLeiloeiros: number;
    mediaDescontoFipe: number;
    serieUltimos7Dias: number[];
}
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    countByStatus(query: {
        tipo?: TipoRequerimento;
        setor?: string;
        base?: string;
        cargo?: string;
    }): Promise<(import("../../../generated/prisma/internal/prismaNamespace").PickEnumerable<import("../../../generated/prisma/models").RequerimentoGroupByOutputType, "status"[]> & {
        _count: {
            status: number;
        };
    })[]>;
    countRequerimentos(user: IUser, tipo?: TipoRequerimento): Promise<(import("../../../generated/prisma/internal/prismaNamespace").PickEnumerable<import("../../../generated/prisma/models").RequerimentoGroupByOutputType, "status"[]> & {
        _count: {
            status: number;
        };
    })[]>;
    private buildSerie;
}
