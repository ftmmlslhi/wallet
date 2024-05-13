import { Injectable } from '@nestjs/common';
import { SignInAuthDto } from './dto/signIn.dto';
import { SignUpAuthDto } from './dto/signUp.dto';
import { AuthRepository } from './auth.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository){}
  signIn(usersCreateInput: Prisma.usersCreateInput) {
    return this.authRepository.signin(usersCreateInput)
  }

  signUp(signUpAuthDto:SignUpAuthDto) {
    return `This action returns all auth`;
  }

}
