import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { User, Prisma } from "../../../../generated/prisma/client";
export declare class UserService {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    user(where: Prisma.UserWhereUniqueInput, select?: Prisma.UserSelect): Promise<({
        Base: {
            id: string;
            nome: string;
            created_at: Date;
            updated_at: Date;
            tipo_ambulancias: import("@generated/prisma/client").TipoAmbulancias;
        };
        Setor: {
            id: string;
            nome: string;
            created_at: Date;
            updated_at: Date;
            nomeVisivel: string;
        };
        Cargo: {
            setor: string;
            id: string;
            nome: string;
            created_at: Date;
            updated_at: Date;
            nomeVisivel: string;
        };
    } & {
        password: string;
        id: string;
        active: boolean;
        username: string;
        nome: string;
        email: string | null;
        telefone: string | null;
        baseId: string;
        setorId: string;
        cargoId: string;
        created_at: Date;
        updated_at: Date;
    }) | null>;
    users(params: {
        select?: Prisma.UserSelect;
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
        omit?: Prisma.UserOmit;
    }): Promise<User[]>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    updateUser(params: {
        where: Pick<Prisma.UserWhereUniqueInput, 'id'>;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
    deleteUser(where: Pick<Prisma.UserWhereUniqueInput, 'id'>): Promise<User>;
    countUserIsExiste(Dados: {
        username: string;
    }): Promise<number>;
    usersNotificationBySetor(setor: string): Promise<{
        id: string;
        email: string | null;
    }[]>;
    usersNotificationByIds(ids: string[]): Promise<{
        id: string;
        email: string | null;
    }[]>;
}
