import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { BankaccountService } from './bankaccount.service';
import { CreateBankaccountDto } from './dto/create-bankaccount.dto';
import { AuthGuard } from 'src/auth/auth.guard';

export interface idinterface {
  id: number
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
  getBalance() {
    return this.bankaccountService.getBalance();
  }

  @Get('/balance')
  getBalanceById(@Body() req: any) {
    const id = req.accountId
    return this.bankaccountService.getBalanceById(id);
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
