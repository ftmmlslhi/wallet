import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto } from './dto/signIn.dto';
import { SignUpAuthDto } from './dto/signUp.dto';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signIn(@Body() usersCreateInput:Prisma.usersCreateInput) {
    return this.authService.signIn(usersCreateInput);
  }

  @Post('signin')
  signUp(@Body() signUpAuthDto: SignUpAuthDto) {
    return this.authService.signUp(signUpAuthDto);
  }
}
