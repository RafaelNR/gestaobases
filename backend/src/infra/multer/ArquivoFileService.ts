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

const PATH = './public/uploads/arquivo';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, PATH);
  },
  filename(req, file, cb) {
    cb(null, randomUUID() + extname(file.originalname));
  },
});

@Injectable()
export class ArquivoFileService implements MulterOptionsFactory {
  constructor() {
    // cria pasta uma vez só
    fs.mkdirSync(PATH, { recursive: true });
  }
  createMulterOptions(): MulterModuleOptions {
    return {
      dest: PATH,
      limits: {
        files: 1,
        fileSize: 25 * 1024 * 1024, // 10MB
      },
      storage: storage,
      fileFilter(req, file, callback) {
        fs.mkdirSync(PATH, { recursive: true });

        if (!file) {
          return callback(
            new ValidateError('Deve enviar pelo menos um arquivo.'),
            false
          );
        }
        const allowedMimeTypes = [
          'application/pdf',
          'image/jpeg',
          'image/png',
          'image/webp',
          'audio/mpeg',
          'audio/wav',
          'audio/webm',
          'video/mp4',
          'video/webm',
          'application/zip',
          'application/x-rar-compressed',
          'application/vnd.rar',
        ];

        if (!allowedMimeTypes.includes(file.mimetype)) {
          return callback(
            new ValidateError(
              'Arquivo não é permitido. Formatos permitidos: PDF, JPG, PNG, WEBP, MP3, MP4, WAV, WEBM, ZIP, RAR.'
            ),
            false
          );
        }

        callback(null, true);
      },
    };
  }
}
