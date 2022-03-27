import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StarController } from './star.controller';

@Module({
  controllers: [StarController],
  providers: [PrismaService],
})
export class StarModule {}
