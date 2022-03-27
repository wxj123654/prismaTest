import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Video } from '@prisma/client';
import { query } from 'express';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @Get('list')
  async getVideoList(): Promise<Video[]> {
    return this.videoService.getVideoList();
  }

  @Get()
  async getVideoById(@Query('id') id: number): Promise<Video> {
    return this.videoService.getVideoOne(Number(id));
  }

  @Delete()
  async deleteVideoById(@Query('id') id: number): Promise<Video> {
    return this.videoService.deleteVideoById(Number(id));
  }

  @Put()
  async createVideo(@Query() param: Omit<Video, 'id'>) {
    console.log(param);
    return this.videoService.createVideo(
      param.title,
      param.videoTime,
      param.synopsis,
      param.url,
      Number(param.userId),
    );
  }
}
