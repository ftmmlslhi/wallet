import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Prisma } from '@prisma/client';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() transactionCreateInput : Prisma.transactionCreateInput,@Body() dto : CreateTransactionDto) {    
    return this.transactionService.create(transactionCreateInput,dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

}
