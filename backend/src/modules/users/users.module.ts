import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './repository/users.repository';
import { CreateUsuario } from './service/Created.use-case';
import { UpdatePerfil } from './service/Perfil.use-case';
import { UpdateUsuario } from './service/Updated.use-case';

@Module({
  controllers: [UserController],
  providers: [UserService, CreateUsuario, UpdatePerfil, UpdateUsuario],
  exports: [UserService],
})
export class UserModule {}
