import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() transactionCreateInput : Prisma.transactionCreateInput, @Body() dto : CreateTransactionDto,  @Body() body: any) {    
    let userRole = body.Payload.role;
    if (userRole === 'admin'|| 'user') {
      return this.transactionService.create(transactionCreateInput,dto);
    } else {
      return 'access denied!';
    }
  }

  @Put('/admin/:id')
  update(@Param('id') id: string, @Body() updateTransactionDto: Prisma.transactionUpdateInput,  @Body() body: any) {
    let userRole = body.Payload.role;
    if (userRole === 'admin') {
      return this.transactionService.update(+id, updateTransactionDto);
    } else {
      return 'access denied!';
    }
  }

}
