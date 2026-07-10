import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import ValidateError from '@src/common/errors/ValidateError';
import * as multer from 'multer';
import { randomUUID } from 'crypto';
import { extname } from 'path';
import fs from 'fs';

const PATH = './public/uploads/arquivos';

@Injectable()
export class ArquivosFileService implements MulterOptionsFactory {
  constructor() {
    // cria pasta uma vez só
    fs.mkdirSync(PATH, { recursive: true });
  }

  createMulterOptions(): MulterModuleOptions {
    return {
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, PATH);
        },
        filename: (req, file, cb) => {
          cb(null, randomUUID() + extname(file.originalname));
        },
      }),

      limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
        files: 5,
      },

      fileFilter: (req, file, callback) => {
        const allowedTypes = [
          'application/pdf',
          'image/jpeg',
          'image/png',
          'image/webp',
        ];

        if (!allowedTypes.includes(file.mimetype)) {
          return callback(
            new ValidateError(
              'Formato inválido. Permitidos: PDF, JPG, PNG, WEBP.'
            ),
            false
          );
        }

        callback(null, true);
      },
    };
  }
}
