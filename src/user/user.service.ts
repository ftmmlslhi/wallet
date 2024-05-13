import { Injectable } from '@nestjs/common';
import { UserLoginDto } from './dto/login-user.dto';
import { UserRepository } from './user.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository:UserRepository){}

  signup(usersCreateInput: Prisma.usersCreateInput) {
    return this.userRepository.signup(usersCreateInput)
  }

  signin(userLoginDto:UserLoginDto) {
    return this.userRepository.signin(userLoginDto)
  }

}
