import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
export declare class ArquivosFileService implements MulterOptionsFactory {
    constructor();
    createMulterOptions(): MulterModuleOptions;
}
