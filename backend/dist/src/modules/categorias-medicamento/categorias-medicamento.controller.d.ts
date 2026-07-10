import { CreateCategoriasMedicamentoRequestDto, UpdateCategoriasMedicamentoRequestDto } from './dto/categorias-medicamento.dto';
import { CategoriasMedicamentoRepository } from './repository/categorias-medicamento.repository';
import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
export declare class CategoriasMedicamentoController extends BaseController {
    private readonly repository;
    private readonly logService;
    constructor(repository: CategoriasMedicamentoRepository, logService: LogService);
    findAll(): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(user: IUser, createCategoriasMedicamentoRequestDto: CreateCategoriasMedicamentoRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, updateCategoriasMedicamentoRequestDto: UpdateCategoriasMedicamentoRequestDto): Promise<IResponse<any>>;
    remove(user: IUser, id: string): Promise<IResponse<any>>;
}
