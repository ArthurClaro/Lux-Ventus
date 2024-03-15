import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { MusicsModule } from './modules/musics/musics.module';
import { AuthModule } from './modules/auth/auth.module';
import { GroupsMusclesModule } from './modules/groups-muscles/groups-muscles.module';
import { TrainingModule } from './modules/training/training.module';
import { DaysModule } from './modules/days/days.module';
import { PublishModule } from './modules/publish/publish.module';
import { DetailPublishModule } from './modules/detail-publish/detail-publish.module';
import { CommentsModule } from './modules/comments/comments.module';
import { ImagesDetailsModule } from './modules/images-details/images-details.module';

@Module({
  imports: [UsersModule, MusicsModule, AuthModule, GroupsMusclesModule, TrainingModule, DaysModule, PublishModule, DetailPublishModule, CommentsModule, ImagesDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
