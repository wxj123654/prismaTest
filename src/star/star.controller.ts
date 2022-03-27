import {
  Controller,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { PrismaService } from 'src/prisma.service';

class AddStarDto {
  @IsNumber()
  @Type(() => Number)
  userId: number;

  @IsNumber()
  @Type(() => Number)
  videoId?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  commentId?: number;
}

@Controller('star')
export class StarController {
  constructor(private prismaServise: PrismaService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async addStar(@Query() params: AddStarDto) {
    const result = await this.prismaServise.star.findFirst({
      where: { ...params },
      select: {
        id: true,
      },
    });
    if (!result) {
      return this.prismaServise.star.create({
        data: {
          ...params,
        },
      });
    } else {
      return this.prismaServise.star.delete({
        where: {
          id: result.id,
        },
      });
    }
  }
}
