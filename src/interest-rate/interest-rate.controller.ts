import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { InterestRateService } from './interest-rate.service';
import { CreateInterestRateDto } from './dto/create-interest-rate.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('rate')
export class InterestRateController {
  constructor(private readonly interestRateService: InterestRateService) {}

  @Post()
  createIntrestRate(
    @Body() createInterestRateDto: CreateInterestRateDto,
    @Body() body: any,
  ) {
    let userRole = body.Payload.role;
    if (userRole === 'admin') {
      return this.interestRateService.createIntrestRate(createInterestRateDto);
    } else {
      return 'access denied!';
    }
  }

  @Get()
  getAllInterestRates(@Body() body: any) {
    let userRole = body.Payload.role;
    if (userRole === 'admin') {
      return this.interestRateService.getAllInterestRates();
    } else {
      return 'access denied!';
    }
  }

  @Delete(':id')
  deleteInterestRates(@Param('id') id: number, @Body() body: any) {
    let userRole = body.Payload.role;
    if (userRole === 'admin') {
      return this.interestRateService.deleteInterestRates(+id);
    } else {
      return 'access denied!';
    }
  }
}
