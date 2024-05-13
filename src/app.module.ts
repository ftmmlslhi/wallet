import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';

@Module({
  imports: [UsersModule, TransactionsModule, AuthModule, JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
