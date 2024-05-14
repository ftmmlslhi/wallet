import { IsEnum, IsNumber, IsString } from "class-validator"
enum transaction_transaction_type {
    withdrawal,
    deposit
}

enum transaction_status {
    pending,
    accept,
    reject
}

export class CreateTransactionDto {
    transaction_type: transaction_transaction_type
    @IsNumber()
    @IsString()
    amount: number
    @IsNumber()
    accountId: number
    status: transaction_status
}
