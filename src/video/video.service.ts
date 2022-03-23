import { Injectable } from '@nestjs/common';
import { Video, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class VideoService {
  async getVideoList(): Promise<Video[]> {
    return prisma.video.findMany({
      where: {},
    });
  }

  async getVideoOne(id: number): Promise<Video> {
    return prisma.video.findFirst({
      where: { id: id },
    });
  }

  async deleteVideoById(id: number): Promise<Video> {
    return prisma.video.delete({
      where: { id },
    });
  }

  async createVideo(
    title: string,
    videoTime: string,
    synopsis: string,
    url: string,
    userId: number,
  ): Promise<Video> {
    return prisma.video.create({
      data: {
        userId,
        title,
        videoTime,
        synopsis,
        url,
      },
    });
  }
}
