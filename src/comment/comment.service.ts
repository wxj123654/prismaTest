import { Delete, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class CommentService {
  async createComment(
    content: string,
    videoId: number,
    userId: number,
    parentId?: number,
  ) {
    return prisma.comment.create({
      data: {
        content,
        videoId,
        userId,
        parentId,
      },
    });
  }

  @Delete()
  async deleteComment(id: number) {
    return prisma.comment.delete({
      where: { id },
    });
  }
}
