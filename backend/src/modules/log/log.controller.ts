import { Controller, Get, HttpStatus } from '@nestjs/common';

import { BaseController } from '@common/bases/BaseController';
// import { Roles, TypeRoles } from '@infra/guard/roles.decorator';
import { LogRepository } from './repository/log.repository';

@Controller('logs')
export class LogController extends BaseController {
  constructor(private readonly service: LogRepository) {
    super();
  }

  // @Get()
  // @Roles(TypeRoles.Administrador)
  // async findAll() {
  //   const data = await this.service.findAll({ take: 500, skip: 0 });
  //   return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  // }
}
