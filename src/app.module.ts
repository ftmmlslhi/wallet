import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { UserModule } from './user/user.module';
import { FeesModule } from './fees/fees.module';


@Module({
  imports: [UserModule, FeesModule, JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
