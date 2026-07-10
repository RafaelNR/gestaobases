import { CreateMedicamentoRequestDto, UpdateMedicamentoRequestDto } from './dto/medicamento.dto';
import { MedicamentoRepository } from './repository/medicamento.repository';
import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
export declare class MedicamentoController extends BaseController {
    private readonly repository;
    private readonly logService;
    constructor(repository: MedicamentoRepository, logService: LogService);
    findAll(): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(user: IUser, createMedicamentoRequestDto: CreateMedicamentoRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, updateMedicamentoRequestDto: UpdateMedicamentoRequestDto): Promise<IResponse<any>>;
    remove(user: IUser, id: string): Promise<IResponse<any>>;
    toggleActive(user: IUser, id: string): Promise<IResponse<any>>;
}
