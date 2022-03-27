import { Controller, Delete, Post, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}
  @Post()
  async createComment(
    @Query()
    params: {
      content: string;
      videoId: number;
      userId: number;
      parentId?: number;
    },
  ) {
    return this.commentService.createComment(
      params.content,
      Number(params.videoId),
      Number(params.userId),
      params.parentId && Number(params.parentId),
    );
  }

  @Delete()
  async deleteComment(@Query() params: { id: number }) {
    return this.commentService.deleteComment(Number(params.id));
  }
}
