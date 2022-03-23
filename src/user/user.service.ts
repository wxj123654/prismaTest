import { Injectable } from '@nestjs/common';
import { User, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
  getAllUser(): Promise<User[]> {
    return prisma.user.findMany({
      where: {},
    });
  }

  getUserById(id: number): Promise<User> {
    return prisma.user.findFirst({
      where: { id },
    });
  }

  createUser(username: string, password: string): Promise<User> {
    return prisma.user.create({ data: { username, password } });
  }

  updatePasswordById(id: number, password: string): Promise<User> {
    return prisma.user.update({
      data: { password },
      where: { id: Number(id) },
    });
  }

  deleteUserById(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  }
}
