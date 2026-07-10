import { CreateProdutoRequestDto, UpdateProdutoRequestDto } from './dto/produto.dto';
import { ProdutoRepository } from './repository/produto.repository';
import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
export declare class ProdutoController extends BaseController {
    private readonly repository;
    private readonly logService;
    constructor(repository: ProdutoRepository, logService: LogService);
    findAll(): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(user: IUser, createProdutoRequestDto: CreateProdutoRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, updateProdutoRequestDto: UpdateProdutoRequestDto): Promise<IResponse<any>>;
    remove(user: IUser, id: string): Promise<IResponse<any>>;
    toggleActive(user: IUser, id: string): Promise<IResponse<any>>;
}
