import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublishDto } from './dto/create-publish.dto';
import { UpdatePublishDto } from './dto/update-publish.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Publish } from './entities/publish.entity';
import { plainToInstance } from 'class-transformer';
import { v2 as cloudinary } from 'cloudinary';
import { unlink } from 'node:fs';

@Injectable()
export class PublishService {
  constructor(private prisma: PrismaService) { }
  async create(createPublishDto: CreatePublishDto) {
    const foundTitle = await this.prisma.publish.findFirst({
      where: { title: createPublishDto.title }
    })

    if (foundTitle) {
      throw new ConflictException("Ttile already exists")
    }

    const user = new Publish()
    Object.assign(user, createPublishDto)
    const newUser = await this.prisma.publish.create({ data: { ...user } })
    return plainToInstance(Publish, newUser)
  }

  async findAll() {
    const users = await this.prisma.publish.findMany({ include: { DetailPublish: true, comments: true } })

    return plainToInstance(Publish, users)
  }




  async findManyByCategory(categoryId: string) {
    const users = await this.prisma.publish.findMany({ where: { category: categoryId }, include: { DetailPublish: true,comments: true } });
    if (!users.length) {
      throw new NotFoundException("Publishes with this category do not exist");
    }
    return plainToInstance(Publish, users);
  }


  async findOneById(id: string) {
    const user = await this.prisma.publish.findUnique({ where: { id }, include: { DetailPublish: true,comments: true } });
    if (!user) {
      throw new NotFoundException("Publish does not exist");
    }
    return plainToInstance(Publish, user);
  }


  async update(id: string, updatePublishDto: UpdatePublishDto) {
    const user = await this.prisma.publish.findUnique({ where: { id } })
    if (!user) {
      throw new NotFoundException("Publish does not exists")
    }
    const updatedUser = await this.prisma.publish.update({ where: { id }, data: { ...updatePublishDto } })
    return plainToInstance(Publish, updatedUser)
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

    const updateMusic = await this.prisma.publish.update({
      where: { id },
      data: {
        image: uploadImage.secure_url,
      }
    })

    unlink(image.path, error => { if (error) console.log(error) })

    return updateMusic
  }


  // /////////////////////////////
  async remove(id: string) {
    const user = await this.prisma.publish.findUnique({ where: { id } })
    if (!user) {
      throw new NotFoundException("Publish does not exists")
    }
    await this.prisma.publish.delete({ where: { id } })
  }
}
