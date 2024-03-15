import { BadRequestException, Module } from '@nestjs/common';
import { ImagesDetailsService } from './images-details.service';
import { ImagesDetailsController } from './images-details.controller';
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
  controllers: [ImagesDetailsController],
  providers: [ImagesDetailsService, PrismaService],
})
export class ImagesDetailsModule { }
