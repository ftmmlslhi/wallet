import { Module } from '@nestjs/common';
import { BankaccountService } from './bankaccount.service';
import { BankaccountController } from './bankaccount.controller';
import { BankaccountRepository } from './bankaccount.repository';
import { PrismaModule } from 'prisma/prisma.module';
import { DurationService } from './duration.service';
import { InterestRateModule } from 'src/interest-rate/interest-rate.module';
import { InterestRateService } from 'src/interest-rate/interest-rate.service';

@Module({
  controllers: [BankaccountController],
  providers: [BankaccountService,BankaccountRepository,DurationService],
  imports: [PrismaModule,InterestRateModule]
})
export class BankaccountModule {}
