import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InterestRateService } from './interest-rate.service';
import { CreateInterestRateDto } from './dto/create-interest-rate.dto';
import { UpdateInterestRateDto } from './dto/update-interest-rate.dto';

@Controller('rate')
export class InterestRateController {
  constructor(private readonly interestRateService: InterestRateService) {}

  @Post()
  createIntrestRate(@Body() createInterestRateDto: CreateInterestRateDto) {
    return this.interestRateService.createIntrestRate(createInterestRateDto);
  }

  @Get()
  getAllInterestRates() {
    return this.interestRateService.getAllInterestRates();
  }

  @Delete(':id')
  deleteInterestRates(@Param('id') id: number) {
    return this.interestRateService.deleteInterestRates(+id);
  }
}
