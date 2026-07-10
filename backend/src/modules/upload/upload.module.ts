import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';

//* USECASE
import { PerfilImagemUseCase } from './use-case/Perfil.use-case';

//* SERVICE
//* MULTER

@Module({
  imports: [],
  controllers: [UploadController],
  providers: [
    PerfilImagemUseCase,
  ],
  exports: [],
})
export class UploadModule { }
