import { CreateUserRequestDto, UpdateUserRequestDto, UpdatePerfilRequestDto } from './dto/users.dto';
import { IUser } from "../../common/decorator/user.decorator";
import { UserService } from './repository/users.repository';
import { CreateUsuario } from './service/Created.use-case';
import { BaseController, IResponse } from "../../common/bases/BaseController";
import { UpdateUsuario } from './service/Updated.use-case';
import { UpdatePerfil } from './service/Perfil.use-case';
import { LogService } from '../../infra/logger/repository/log.repository';
export declare class UserController extends BaseController {
    private readonly userService;
    private readonly logService;
    private readonly createUseBase;
    private readonly updateUseCase;
    private readonly perfilUseCase;
    constructor(userService: UserService, logService: LogService, createUseBase: CreateUsuario, updateUseCase: UpdateUsuario, perfilUseCase: UpdatePerfil);
    findAll(): Promise<IResponse<any>>;
    findAllByCargo({ cargo }: {
        cargo: string;
    }): Promise<IResponse<any>>;
    findAllByCargoAndBase({ cargo }: {
        cargo: string;
    }, { baseId }: {
        baseId: string;
    }): Promise<IResponse<any>>;
    findOne({ uuid }: {
        uuid: string;
    }): Promise<IResponse<any>>;
    create(user: IUser, createUserRequestDto: CreateUserRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, updateUserRequestDto: UpdateUserRequestDto): Promise<IResponse<any>>;
    updatePerfil(user: IUser, id: string, updatePerfilRequestDto: UpdatePerfilRequestDto): Promise<IResponse<any>>;
    remove(user: IUser, id: string): Promise<IResponse<any>>;
    bloquearUsuario(user: IUser, id: string): Promise<IResponse<any>>;
}
