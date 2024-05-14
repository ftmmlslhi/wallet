import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TransactionRepository } from './transaction.repository';
import { PrismaModule } from 'prisma/prisma.module';
import { FeeRepository } from 'src/fees/fee.repository';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService,TransactionRepository,FeeRepository],
  imports: [PrismaModule]
})
export class TransactionModule {}
