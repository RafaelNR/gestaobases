import { Injectable, Scope } from '@nestjs/common';
import fs from 'fs';

//* ERROR
import FileError from '@src/common/errors/FileError';
import ValidateError from '@src/common/errors/ValidateError';

//* SERVICE
import { PrismaService } from '@src/infra/database/prisma/prisma.service';

//* TYPES
import { IUser } from '@src/common/decorator/user.decorator';
import { FileMulter } from '@src/common/types/file.multer';
import removeFile from '@src/common/helpers/removeFile';

@Injectable({ scope: Scope.REQUEST })
export class PerfilImagemUseCase {
  private user!: IUser;
  private file!: FileMulter; /*  */
  private image!: any;

  constructor(private readonly prismaService: PrismaService) { }

  // private handleImage() {
  //   const uuid = this.file.filename.split('.')[0];

  //   this.image = {
  //     destination: this.file.destination,
  //     encoding: this.file.encoding,
  //     filename: this.file.filename,
  //     mimetype: this.file.mimetype,
  //     originalname: this.file.originalname,
  //     path: this.file.path,
  //     size: this.file.size,
  //     uuid: uuid,
  //     userUUID: this.user.uuid,
  //     url: `/uploads/images/${this.file.filename}`,
  //   };
  // }

  // public async exec(user: IUser, file: FileMulter) {
  //   this.file = file;
  //   this.user = user;

  //   const dbUser = await this.prismaService.user.findUnique({
  //     where: {
  //       uuid: user.uuid,
  //     },
  //   });

  //   if (!dbUser) {
  //     throw new FileError('Usuário não existe.');
  //   }

  //   if (!fs.existsSync(this.file.path)) {
  //     throw new ValidateError(
  //       'Erro em encontrar file enviado, tente novamente.'
  //     );
  //   }

  //   this.handleImage();

  //   return {};

  // return await this.prismaService.userImage
  //   .upsert({
  //     where: {
  //       userUUID: this.user.uuid,
  //     },
  //     create: this.image,
  //     update: this.image,
  //   })
  //   .then((newFile) => {
  //     if (dbUser.UserImage)
  //       removeFile(dbUser.UserImage.destination, dbUser.UserImage.filename);
  //     return newFile;
  //   })
  //   .catch(() => {
  //     throw new FileError('Não foi possivel adicionar imagem de perfil.');
  //   });
  // }
}
