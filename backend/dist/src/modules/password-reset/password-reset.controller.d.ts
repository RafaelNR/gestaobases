import { PasswordResetService } from './password-reset.service';
import { RequestResetDto } from './dto/request-reset.dto';
import { BaseController } from "../../common/bases/BaseController";
export declare class PasswordResetController extends BaseController {
    private readonly service;
    constructor(service: PasswordResetService);
    request(dto: RequestResetDto, ip: string): Promise<import("@common/bases/BaseController").IResponse<any>>;
}
