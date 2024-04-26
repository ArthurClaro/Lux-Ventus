import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImagesDetailDto } from './dto/create-images-detail.dto';
import { UpdateImagesDetailDto } from './dto/update-images-detail.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ImagesDetail } from './entities/images-detail.entity';
import { plainToInstance } from 'class-transformer';
import { v2 as cloudinary } from 'cloudinary';
import { unlink } from 'node:fs';

@Injectable()
export class ImagesDetailsService {
  constructor(private prisma: PrismaService) { }
  async create(createImagesDetailDto: CreateImagesDetailDto, detailPublishId: string) {
    const detailP = Object.assign(new ImagesDetail(), createImagesDetailDto)
    const newMusic = await this.prisma.imagesDetail.create({
      data: {
        id: detailP.id,
        images: detailP.images,
        detailPublishId
      }
    })

    return newMusic
  }

  async findAll() {
    const users = await this.prisma.imagesDetail.findMany({ include: { DetailPublish: true } })
    return plainToInstance(ImagesDetail, users)
  }


  async upload(image: Express.Multer.File, id: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const uploadImage = await cloudinary.uploader.upload(
      image.path,
      { resource_type: 'image' },
      (error, result) => {
        return result
      }
    )

    const updateMusic = await this.prisma.imagesDetail.update({
      where: { id },
      data: {
        images: uploadImage.secure_url,
      }
    })

    unlink(image.path, error => { if (error) console.log(error) })

    return updateMusic
  }


  async findOne(id: string) {
    const user = await this.prisma.imagesDetail.findMany({ where: { detailPublishId: id }})

    if (!user) {
      throw new NotFoundException("DetailPublish does not exists")
    }

    return plainToInstance(ImagesDetail, user)

  }


  update(id: number, updateImagesDetailDto: UpdateImagesDetailDto) {
    return `This action updates a #${id} imagesDetail`;
  }

  async remove(id: string) {
    const user = await this.prisma.imagesDetail.findUnique({ where: { id } })
    if (!user) {
      throw new NotFoundException("Publish does not exists")
    }
    await this.prisma.imagesDetail.delete({ where: { id } })
  }
}
