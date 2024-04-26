import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublishModule } from './modules/publish/publish.module';
import { DetailPublishModule } from './modules/detail-publish/detail-publish.module';
import { CommentsModule } from './modules/comments/comments.module';
import { ImagesDetailsModule } from './modules/images-details/images-details.module';

@Module({
  imports: [PublishModule, DetailPublishModule, CommentsModule, ImagesDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
