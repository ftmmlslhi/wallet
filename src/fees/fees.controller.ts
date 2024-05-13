import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeesService } from './fees.service';
import { CreateFeeDto } from './dto/create-fee.dto';
import { UpdateFeeDto } from './dto/update-fee.dto';

@Controller('admin/fees')
export class FeesController {
  constructor(private readonly feesService: FeesService) {}

  @Post()
  addFee(@Body() createFeeDto: CreateFeeDto) {
    return this.feesService.addFee(createFeeDto);
  }

  @Get()
  getFee() {
    return this.feesService.getFee();
  }
}
