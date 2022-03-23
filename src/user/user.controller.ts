import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServise: UserService) {}

  @Post()
  async create(
    @Body() data: { username: string; password: string },
  ): Promise<User> {
    return this.userServise.createUser(data.username, data.password);
  }

  @Get()
  async getUser(@Query('id') id: string): Promise<User[] | User> {
    if (id) {
      return this.userServise.getUserById(Number(id));
    } else {
      return this.userServise.getAllUser();
    }
  }

  @Put()
  async updatePasswordById(
    @Body() data: { password: string; id: number },
  ): Promise<User> {
    return this.userServise.updatePasswordById(data.id, data.password);
  }

  @Delete()
  async deleteUserById(@Query('id') id: string) {
    return this.userServise.deleteUserById(Number(id));
  }
}
