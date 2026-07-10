export interface IUseCase<Input, Output> {
    execute(input: Input): Promise<Output>;
}
export declare abstract class UseCase<Input, Output> implements IUseCase<Input, Output> {
    abstract execute(input: Input): Promise<Output>;
}
