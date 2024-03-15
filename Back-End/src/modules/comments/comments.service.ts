import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Comment } from './entities/comment.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) { }
  async create(createCommentDto: CreateCommentDto, detailPublishId: string) {
    const detailP = Object.assign(new Comment(), createCommentDto)
    const newMusic = await this.prisma.comment.create({
      data: {
        id: detailP.id,
        name: detailP.name,
        createdAt: detailP.createdAt,
        description: detailP.description,
        likes: detailP.likes,
        detailPublishId
      }
    })

    return newMusic
  }
  async findAll() {
    const users = await this.prisma.comment.findMany({ include: { DetailPublish: true } })
    return plainToInstance(Comment, users)
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  async remove(id: string) {
    const user = await this.prisma.comment.findUnique({ where: { id } })
    if (!user) {
      throw new NotFoundException("User does not exists")
    }
    await this.prisma.comment.delete({ where: { id } })
  }
}

