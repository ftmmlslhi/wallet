import { Injectable } from '@nestjs/common';
import { BankaccountService } from './bankaccount.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InterestRateService } from 'src/interest-rate/interest-rate.service';
import { BalanceLogService } from 'src/balanceLog/balancelog.service';

@Injectable()
export class DurationService {
  constructor(private accountService: BankaccountService,private readonly interestrateService: InterestRateService, private readonly balanceLogService: BalanceLogService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT) 
  async calculateAccountDurations(): Promise<void> {
    const accounts = await this.accountService.getUserAccounts();

    const currentDate = new Date();

    for (const account of accounts) {
      const openedDate = new Date(account.opened_date);      
      const millisecondsInADay = 1000 * 60 * 60 * 24;
      const durationInDays = Math.floor((currentDate.getTime() - openedDate.getTime()) / millisecondsInADay);
      const interestRate = await this.interestrateService.getInterestRateByDuration(durationInDays);
      if (interestRate) {
        const interestAmount = (Number(account.balance) * Number(interestRate.rate)) / 100;
        const updatedBalance = Number(account.balance) + interestAmount;
        await this.accountService.updateAccountBalance(account.id, updatedBalance);
        await this.balanceLogService.saveNightlyBalanceLog(account.id,updatedBalance)
      }
    }
  }
  
}
