import { isArray } from 'lodash';
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import * as fs from 'fs';
import FileError from '@src/common/errors/FileError';
import { FileMulter } from '@src/common/types/file.multer';

@Catch(FileError)
export class DeleteFileOnErrorFilter implements ExceptionFilter {
  catch(exception: FileError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request & { file: FileMulter }>();
    const status = 400;

    // const getFiles = (files: any[] | unknown | undefined) => {
    //   if (!files) return [];
    //   if (isArray(files)) return files;
    //   return Object.values(files);
    // };

    // const filePaths = getFiles(request.files);

    // for (const file of filePaths) {
    //   fs.unlink(file.path, (err) => {
    //     if (err) {
    //       console.error(err);
    //       return err;
    //     }
    //   });
    // }

    console.log(exception);

    if (fs.existsSync(request.file.path)) {
      fs.unlink(request.file.path, (err) => {
        if (err) {
          console.error(err);
          return err;
        }
      });
    }

    return response.status(status).json({
      statusCode: status,
      success: false,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
