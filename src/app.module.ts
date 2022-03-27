import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { CommentModule } from './comment/comment.module';
import { PrismaClient } from '@prisma/client';
import { StarModule } from './star/star.module';

@Module({
  imports: [UserModule, VideoModule, CommentModule, StarModule],
  controllers: [AppController],
  providers: [AppService, PrismaClient],
})
export class AppModule {}
