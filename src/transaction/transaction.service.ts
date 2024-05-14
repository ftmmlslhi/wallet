import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Prisma } from '@prisma/client';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionService {
  constructor(private readonly transactionRepository: TransactionRepository) { }

  create( data: Prisma.transactionCreateInput,dto: CreateTransactionDto) {
    return this.transactionRepository.create(data,dto)
  }

  update(id: number, sectionUpdateInput: Prisma.transactionUpdateInput) {
    return this.transactionRepository.update(id, sectionUpdateInput)
  }

}
