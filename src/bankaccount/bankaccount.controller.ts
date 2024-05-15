import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { BankaccountService } from './bankaccount.service';
import { CreateBankaccountDto } from './dto/create-bankaccount.dto';
import { AuthGuard } from 'src/auth/auth.guard';

export interface idinterface {
  id: number;
}

@UseGuards(AuthGuard)
@Controller()
export class BankaccountController {
  constructor(private readonly bankaccountService: BankaccountService) {}

  @Post('bankaccount')
  create(@Body() createBankaccountDto: CreateBankaccountDto) {
    return this.bankaccountService.create(createBankaccountDto);
  }

  @Get('/userbalance')
  getBalance(@Body() body: any) {
    let userRole = body.Payload.role;
    if (userRole === 'admin') {
      return this.bankaccountService.getBalance();
    } else {
      return 'access denied!';
    }
  }

  @Get('/balance')
  getBalanceById(@Body() req: any, @Body() body: any) {
    let userRole = body.Payload.role;
    if (userRole === 'admin' || 'user') {
    const id = req.accountId;
    return this.bankaccountService.getBalanceById(id);
  } else {
    return 'access denied!';
  }
  }

  @Get('bankaccount/:id')
  findOne(@Param('id') id: string, @Body() body: any) {
    let userRole = body.Payload.role;
    if (userRole === 'admin' || 'user') {
      return this.bankaccountService.findOne(+id);
    } else {
      return 'access denied!';
    }
  }
}
