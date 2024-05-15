import { Injectable } from '@nestjs/common';
import { prismaService } from 'prisma/prisma.service';
import { CreateBankaccountDto } from './dto/create-bankaccount.dto';

@Injectable()
export class BankaccountRepository {
  constructor(private readonly prisma: prismaService) {}

  async create(createBankaccountDto: CreateBankaccountDto) {
    try {
      const res = await this.prisma.account.create({
        data: {
          account_number: createBankaccountDto.account_number,
          balance: createBankaccountDto.balance,
          cvv: createBankaccountDto.cvv,
          iban: createBankaccountDto.iban,
          opened_date: new Date(),
          created_at: new Date(),
          user_account: {
            create: {
              users: {
                connect: {
                  id: createBankaccountDto.user_account,
                },
              },
            },
          },
        },
      });

      return res;
    } catch (e) {
      throw new Error(`Failed to create bankaccount: ${e.message}`);
    }
  }

  async getBalance() {
    try {
      return await this.prisma.account.findMany({
        select: {
          user_account: {
            select:{
              user_id:true
            }
          },
          balance: true,
        },
      });
    } catch (e) {
      console.error('Error fin find balance', e);
      throw e;
    }
  }

 async getBalanceById(id: number){
    return await this.prisma.account.findUnique({
      where: {
        id,
      },
      select: {
        balance:true,
        user_account:{
          select:{
            user_id:true
          }
        }
      }
    })
 }

  async findOne(id: number) {
    try {
      const res = this.prisma.account.findUnique({
        where: {
          id,
        },
      });
      return res;
    } catch (error) {
      console.error('Error findOne topic:', error);
      throw error;
    }
  }
}
