import { Injectable } from '@nestjs/common';
import { prismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { FeeRepository } from 'src/fees/fee.repository';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class DepositRepository {
  constructor(private readonly prisma: prismaService, private readonly feeRepository:FeeRepository, private readonly userRepository:UserRepository) {}
  async create(dto: CreateDepositDto) {
    try {
      const getFee = await this.feeRepository.getFee();
      const amountFee = Number(dto.deposit) - Number(getFee.fee)
      console.log(amountFee);
      const res = await this.prisma.transaction.create({
        data: {
          deposit: amountFee,
          transaction_date: new Date(),
          deposit_status: 'submit',
          account: {
            connect: { id: dto.accountId },
          },
        },
      });
      return res
    } catch (e) {
      throw new Error(`Failed to create bankaccount: ${e.message}`);
    }
  }

  async update(id: number,transactionUpdateInput: Prisma.transactionUpdateInput) {
    console.log("transactionUpdateInput",transactionUpdateInput);
    
    try {
      const res = await this.prisma.transaction.update({
        data: {
          deposit_status: transactionUpdateInput.deposit_status,
        },
        where: {
          id:id,
        },
      });

      if (transactionUpdateInput.deposit_status = 'confirm'){
          //TODO connect to user and update balance
          const updateBalance = await this.userRepository.updatebalance(res.account_id,res.deposit)
      }
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
