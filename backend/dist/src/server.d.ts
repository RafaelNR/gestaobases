import { INestApplication } from '@nestjs/common';
export declare class ServerSetup {
    app: INestApplication;
    private readonly logger;
    init(): Promise<void>;
    close(): Promise<void>;
    start(): Promise<void>;
    getApp(): INestApplication;
}
