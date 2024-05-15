import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { UserModule } from './user/user.module';
import { FeesModule } from './fees/fees.module';
import { BankaccountModule } from './bankaccount/bankaccount.module';
import { TransactionModule } from './transaction/transaction.module';
import { InterestRateModule } from './interest-rate/interest-rate.module';


@Module({
  imports: [UserModule, FeesModule, JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
  }), BankaccountModule, TransactionModule, InterestRateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
