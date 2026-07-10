import { CreateCategoriaProdutoRequestDto, UpdateCategoriaProdutoRequestDto } from './dto/categoria-produto.dto';
import { CategoriaProdutoRepository } from './repository/categoria-produto.repository';
import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
export declare class CategoriaProdutoController extends BaseController {
    private readonly repository;
    private readonly logService;
    constructor(repository: CategoriaProdutoRepository, logService: LogService);
    findAll(): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(user: IUser, createCategoriaProdutoRequestDto: CreateCategoriaProdutoRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, updateCategoriaProdutoRequestDto: UpdateCategoriaProdutoRequestDto): Promise<IResponse<any>>;
    remove(user: IUser, id: string): Promise<IResponse<any>>;
}
