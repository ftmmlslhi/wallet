import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BankaccountService } from './bankaccount.service';
import { CreateBankaccountDto } from './dto/create-bankaccount.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('bankaccount')
export class BankaccountController {
  constructor(private readonly bankaccountService: BankaccountService) {}

  @Post()
  create(@Body() createBankaccountDto: CreateBankaccountDto) {
    return this.bankaccountService.create(createBankaccountDto);
  }

  
  @Get(':id')
  findOne(@Param('id') id: string, @Body() body: any) {
    let userRole = body.Payload.role;
    if (userRole === 'admin' || 'user') {
      return this.bankaccountService.findOne(+id);
    } else {
      return 'access denied!';
    }
  }
}
