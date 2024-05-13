import { Injectable } from '@nestjs/common';
import { prismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { hash } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { CreateFeeDto } from './dto/create-fee.dto';

@Injectable()
export class FeeRepository {
  constructor(
    private readonly prisma: prismaService,
    private readonly jwtService: JwtService,
  ) {}
  async addFee(createFeeDto: CreateFeeDto) {
    console.log("createFeeDto",createFeeDto)
    try {
      const newSetting = await this.prisma.setting.create({
        data: {
          fee: createFeeDto.fee,
          userId: createFeeDto.userId
          // userId: {
          //   connect: { id: createFeeDto.userId }, // Connect the setting to the user
          // },
        },
      });

      return newSetting;
    } catch (error) {
      // Handle errors
      throw new Error(`Failed to create setting: ${error.message}`);
}

}

}
