import { BaseController } from "../../common/bases/BaseController";
import { PrismaService } from "../../infra/database/prisma/prisma.service";
export declare class UploadController extends BaseController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
}
