import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

//* TYPES
import { User, IUser } from '@src/common/decorator/user.decorator';
import { BaseController } from '@src/common/bases/BaseController';

//* FILES
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';
import { PrismaService } from '@src/infra/database/prisma/prisma.service';
import { Public } from '@src/infra/auth/auth.decorator';

@Controller('uploads')
export class UploadController extends BaseController {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }
}
