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
    const data = createFeeDto
    try {
      const newSetting = await this.prisma.sett.create({
        data: {
          fee: createFeeDto.fee,
          users: {
            connect: { id: createFeeDto.userId }, 
          },
        },
      });

      return newSetting;
    } catch (error) {
      throw new Error(`Failed to create setting fee: ${error.message}`);
}

}

}
