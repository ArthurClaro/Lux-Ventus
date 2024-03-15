import { BadRequestException, Module } from '@nestjs/common';
import { PublishService } from './publish.service';
import { PublishController } from './publish.controller';
import { PrismaService } from 'prisma/prisma.service';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (_, file, cb) => {
          cb(null, file.originalname)
        }
      }),
      fileFilter: (_, file, cb) => {
        if (['image/jpeg'].includes(file.mimetype)) {
          cb(null, true)
        } else {
          cb(new BadRequestException("Only jpeg/jpg and mp3 formats are allowed."), false)
        }
      },
    })
  ],
  controllers: [PublishController],
  providers: [PublishService, PrismaService],
})
export class PublishModule { }
