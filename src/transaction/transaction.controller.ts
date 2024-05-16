// import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
// import { TransactionService } from './transaction.service';
// import { CreateTransactionDto } from './dto/create-transaction.dto';
// import { UpdateTransactionDto } from './dto/update-transaction.dto';
// import { Prisma } from '@prisma/client';
// import { AuthGuard } from 'src/auth/auth.guard';
// import { RolesGuard } from 'src/auth/role/role.guard';
// import { Role } from 'src/auth/roles/role.enum';
// import { Roles } from 'src/auth/roles/roles.decorator';

// @UseGuards(AuthGuard,RolesGuard)
// @Controller('transaction')
// export class TransactionController {
//   constructor(private readonly transactionService: TransactionService) {}

//   @Post()
//   @Roles(Role.Admin,Role.User)
//   create(@Body() transactionCreateInput : Prisma.transactionCreateInput, @Body() dto : CreateTransactionDto) {    
//       return this.transactionService.create(transactionCreateInput,dto);
//   }

//   @Put('/admin/:id')
//   @Roles(Role.Admin)
//   update(@Param('id') id: string, @Body() updateTransactionDto: Prisma.transactionUpdateInput) {
//       return this.transactionService.update(+id, updateTransactionDto);
//   }

// }
