import { Injectable } from '@nestjs/common';
import { prismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateBankaccountDto } from './dto/create-bankaccount.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class BankaccountRepository {
  constructor(
    private readonly prisma: prismaService,
  ) { }

  async create(createBankaccountDto: CreateBankaccountDto) {
    try {
      const res = await this.prisma.account.create({
        data: {
          account_number: createBankaccountDto.account_number,
          balance: createBankaccountDto.balance,
          cvv: createBankaccountDto.cvv,
          iban: createBankaccountDto.iban,
          opened_date: new Date(),
          created_at: new Date,
          user_account: {
            create: {
              users: {
                connect: {
                  id: createBankaccountDto.user_account
                }
              }
            }
          }
        }
      })

      return res;
    }

    catch (e) {
      throw new Error(`Failed to create bankaccount: ${e.message}`);
    }
  }


  async findOne(id: number) {
    try {
      const res = this.prisma.account.findUnique({
        where: {
          id,
        }
      });      
      return res
    } catch (error) {
      console.error('Error findOne topic:', error);
      throw error;
    }
  }


}
