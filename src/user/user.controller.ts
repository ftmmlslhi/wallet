import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { UserLoginDto } from './dto/login-user.dto';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() usersCreateInput: Prisma.usersCreateInput) {
    return this.userService.signup(usersCreateInput);
  }

  @Post('signin')
  signin(@Body() usersCreateInput: UserLoginDto) {
    return this.userService.signin(usersCreateInput);
  }

}
