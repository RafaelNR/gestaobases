import { PrismaService } from "../../../infra/database/prisma/prisma.service";
export declare class PerfilImagemUseCase {
    private readonly prismaService;
    private user;
    private file;
    private image;
    constructor(prismaService: PrismaService);
}
