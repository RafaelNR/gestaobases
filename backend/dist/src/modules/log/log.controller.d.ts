import { BaseController } from "../../common/bases/BaseController";
import { LogRepository } from './repository/log.repository';
export declare class LogController extends BaseController {
    private readonly service;
    constructor(service: LogRepository);
}
