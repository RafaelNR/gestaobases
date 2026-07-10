import { UpdatePerfilRequestDto } from '../dto/users.dto';
import { UserService } from '../repository/users.repository';
export declare class UpdatePerfil {
    private readonly userService;
    constructor(userService: UserService);
    exec(dado: UpdatePerfilRequestDto): Promise<({
        Base: {
            id: string;
            nome: string;
            created_at: Date;
            updated_at: Date;
            tipo_ambulancias: import("../../../../generated/prisma/enums").TipoAmbulancias;
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
}
