import { Injectable, UseGuards } from '@nestjs/common';
import { CreateBankaccountDto } from './dto/create-bankaccount.dto';
import { BankaccountRepository } from './bankaccount.repository';
import { AuthGuard } from 'src/auth/auth.guard';

@Injectable()
export class BankaccountService {
  constructor(private readonly bankaccountRepository: BankaccountRepository) {}

  create(createBankaccountDto: CreateBankaccountDto) {
    return this.bankaccountRepository.create(createBankaccountDto)
  }

  findOne(id: number) {
    return this.bankaccountRepository.findOne(id);
  }

}