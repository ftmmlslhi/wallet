import { Module } from '@nestjs/common';
import { BankaccountService } from './bankaccount.service';
import { BankaccountController } from './bankaccount.controller';
import { BankaccountRepository } from './bankaccount.repository';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [BankaccountController],
  providers: [BankaccountService,BankaccountRepository],
  imports: [PrismaModule]
})
export class BankaccountModule {}
