import { Injectable, UseGuards } from '@nestjs/common';
import { CreateBankaccountDto } from './dto/create-bankaccount.dto';
import { BankaccountRepository } from './bankaccount.repository';

@Injectable()
export class BankaccountService {
  constructor(private readonly bankaccountRepository: BankaccountRepository) {}

  create(createBankaccountDto: CreateBankaccountDto) {
    return this.bankaccountRepository.create(createBankaccountDto);
  }

  getUserAccounts() {
    return this.bankaccountRepository.getUserAccounts();
  }

  async getBalance() {
    const accountsBalance = await this.bankaccountRepository.getBalance();
    const newaccountsBalance = accountsBalance.map((account) => ({
      user_id: account.user_account[0].user_id,
      balance: account.balance,
    }));
    return newaccountsBalance;
  }

  async getBalanceById(id: number) {
    const userbalance = await this.bankaccountRepository.getBalanceById(id);
    const res = {
      balance: userbalance.balance,
      userId: userbalance.user_account[0].user_id,
    };
    return res;
  }

  findOne(id: number) {
    return this.bankaccountRepository.findOne(id);
  }

  updateAccountBalance(id:number,newBalance : number){
    return this.bankaccountRepository.updateAccountBalance(id,newBalance)
  }
}
