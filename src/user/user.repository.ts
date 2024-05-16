import { Injectable } from '@nestjs/common';
import { prismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UserLoginDto } from './dto/login-user.dto';
import { hash } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: prismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(usersInput: Prisma.usersCreateInput) {
    try {
      const userData = {
          lastName: usersInput.lastName,
          firstName: usersInput.firstName,
          mobile_number: usersInput.mobile_number,
          username: usersInput.username,
          email: usersInput.email,
          password: hash('md5', usersInput.password),
          created_at: new Date(),
          updated_at: new Date(),
          role: usersInput.role,
      }
      const user = await this.prisma.users.create({
        data: userData,
      });
      return user;
    } catch (error) {
      console.error('Error createting user:', error);
      throw error;
    }
  }

  async signin(userLoginDto: UserLoginDto) {
    try {
      const user = await this.prisma.users.findUnique({
        where: {
          username: userLoginDto.username,
          password: hash('md5', userLoginDto.password),
          email: userLoginDto.email
        },
      });
      if (!user) {
        return 'user not found!';
      }
      const payload = { sub: user.id, username: user.username, role: user.role };
      const access_token = await this.jwtService.signAsync(payload);

      const res = {
        user: user,
        access_token: access_token,
      };
      return res;
    } catch (e) {
      console.error('Error in login:', e);
      throw e;
    }
  }

  //TODO1
  async updatebalance(id: number,amount:Decimal){
    // try {
    //   const res = await this.prisma.users.update({
    //     where: {
    //       user_account: {
    //         some: {
    //           user_id: id,
    //         },
    //       },
    //     },
    //     data: {
    //       userBalance: amount,
    //     },
    //   });
    //   return res;
    // } catch (e) {
    //   console.error('Error in login:', e);
    //   throw e;
    // }
  }
}
