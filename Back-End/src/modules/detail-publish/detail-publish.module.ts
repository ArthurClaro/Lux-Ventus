import { Module } from '@nestjs/common';
import { DetailPublishService } from './detail-publish.service';
import { DetailPublishController } from './detail-publish.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [DetailPublishController],
  providers: [DetailPublishService, PrismaService],
})
export class DetailPublishModule { }
