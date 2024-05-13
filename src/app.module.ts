import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BalanceLogTableModule } from './balance-log-table/balance-log-table.module';

@Module({
  imports: [UsersModule, TransactionsModule, BalanceLogTableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
