import { CreateUserRequestDto } from '../dto/users.dto';
import { UserService } from '../repository/users.repository';
export declare class CreateUsuario {
    private readonly userService;
    private user;
    constructor(userService: UserService);
    exec(Dados: CreateUserRequestDto): Promise<{
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
    }>;
}
