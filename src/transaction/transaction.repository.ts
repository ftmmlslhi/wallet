import { Injectable } from '@nestjs/common';
import { prismaService } from 'prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Prisma } from '@prisma/client';
import { FeeRepository } from 'src/fees/fee.repository';

@Injectable()
export class TransactionRepository {
  constructor(
    private readonly prisma: prismaService, private readonly feeRepository:FeeRepository
  ) { }


  async create(Data: Prisma.transactionCreateInput,dto:CreateTransactionDto) {
    try {
      const getFee = await this.feeRepository.getFee();
      const amountFee = Number(Data.amount) + Number(getFee.fee)
      const res = await this.prisma.transaction.create({
        data:{
          transaction_type: Data.transaction_type,
          amount: amountFee,
          transaction_date: new Date(), 
          account: {
            connect: { id: dto.accountId }
          }
        }
      })

      return res;
    }

    catch (e) {
      throw new Error(`Failed to create bankaccount: ${e.message}`);
    }
  }


  async update(id: number, sectionUpdateInput: Prisma.transactionUpdateInput) {
    try {
      const res = await this.prisma.transaction.update({
        data: {
          status: sectionUpdateInput.status,
        },
        where: {
          id,
        },
      });
      return {
        message: 'updated successfully',
        data: res,
      };
    } catch (error) {
      console.error('Error updating section:', error);
      throw error;
    }
  }


}
