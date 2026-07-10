import { DashboardService } from './dashboard.service';
import { BaseController } from "../../common/bases/BaseController";
import { TipoRequerimento } from "../../../generated/prisma/enums";
import { IUser } from "../../common/decorator/user.decorator";
export declare class DashboardController extends BaseController {
    private readonly service;
    constructor(service: DashboardService);
    findAllRequerimentosCounts(user: IUser): Promise<import("@src/common/bases/BaseController").IResponse<(import("../../../generated/prisma/internal/prismaNamespace").PickEnumerable<import("../../../generated/prisma/models").RequerimentoGroupByOutputType, "status"[]> & {
        _count: {
            status: number;
        };
    })[]>>;
    findStats(user: IUser, tipo: TipoRequerimento): Promise<import("@src/common/bases/BaseController").IResponse<(import("../../../generated/prisma/internal/prismaNamespace").PickEnumerable<import("../../../generated/prisma/models").RequerimentoGroupByOutputType, "status"[]> & {
        _count: {
            status: number;
        };
    })[]>>;
}
