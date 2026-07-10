import { NotificacoesRepository } from './repository/notification.repository';
import { IUser } from "../../common/decorator/user.decorator";
import { BaseController } from "../../common/bases/BaseController";
export declare class NotificacoesController extends BaseController {
    private readonly repository;
    constructor(repository: NotificacoesRepository);
    findAll(user: IUser): Promise<import("@src/common/bases/BaseController").IResponse<{
        link: string | null;
        tipo: import("../../../generated/prisma/enums").TipoNotificacao;
        id: string;
        mensagem: string;
        userId: string;
        created_at: Date;
        updated_at: Date;
        artefatoUUID: string;
        evento: string;
        lida: boolean;
        removida: boolean;
    }[]>>;
}
