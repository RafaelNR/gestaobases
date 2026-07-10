export type IResponse<T> = {
    status: number;
    success: boolean;
    message?: string;
    response?: T;
};
export declare class BaseController {
    constructor();
    protected handleSuccessResponse<T>({ code, message, response, }: {
        code: number;
        message?: string;
        response?: T;
    }): IResponse<T>;
}
