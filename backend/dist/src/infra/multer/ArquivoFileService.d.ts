import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
export declare class ArquivoFileService implements MulterOptionsFactory {
    constructor();
    createMulterOptions(): MulterModuleOptions;
}
