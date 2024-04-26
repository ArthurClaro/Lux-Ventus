import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetailPublishDto } from './dto/create-detail-publish.dto';
import { UpdateDetailPublishDto } from './dto/update-detail-publish.dto';
import { DetailPublish } from './entities/detail-publish.entity';
import { Publish } from '../publish/entities/publish.entity';
import { PrismaService } from 'prisma/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class DetailPublishService {
  constructor(private prisma: PrismaService) { }
  async create(createDetailPublishDto: CreateDetailPublishDto, publishId: string) {
    // const publish = Object.assign(new Publish(), createDetailPublishDto)
    // const fff = await this.prisma.publish.findUnique({ where: { id: publishId } })
    // if (!fff) {
    //   throw new NotFoundException("Publish or token not exist")
    // }

    // console.log(publishId)
    const detailP = Object.assign(new DetailPublish(), createDetailPublishDto)

    const newMusic = await this.prisma.detailPublish.create({
      data: {
        id: detailP.id,
        title: detailP.title,
        description: detailP.description,

        publishId
      }
    })

    return newMusic
  }

  async findAll() {
    const users = await this.prisma.detailPublish.findMany({ include: { ImagesDetail: true} })
    // , comments: true 
    return plainToInstance(DetailPublish, users)
  }

  async findOne(id: string) {
    const user = await this.prisma.detailPublish.findMany({ where: { publishId: id }, include: { ImagesDetail: true } })
    // comments: true
    if (!user) {
      throw new NotFoundException("DetailPublish does not exists")
    }
    return plainToInstance(DetailPublish, user)
  }

  async update(id: string, updateDetailPublishDto: UpdateDetailPublishDto) {
    const user = await this.prisma.detailPublish.findUnique({ where: { id } })
    if (!user) {
      throw new NotFoundException("Publish does not exists")
    }
    const updatedUser = await this.prisma.detailPublish.update({ where: { id }, data: { ...updateDetailPublishDto } })
    return plainToInstance(DetailPublish, updatedUser)
  }

  async remove(id: string) {
    const user = await this.prisma.detailPublish.findUnique({ where: { id } })
    if (!user) {
      throw new NotFoundException("User does not exists")
    }
    await this.prisma.detailPublish.delete({ where: { id } })
  }
}
