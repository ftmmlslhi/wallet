import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { FeesService } from './fees.service';
import { CreateFeeDto } from './dto/create-fee.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('admin/fees')
export class FeesController {
  constructor(private readonly feesService: FeesService) {}

  @Post()
  addFee(@Body() createFeeDto: CreateFeeDto,  @Body() body: any) {
    let userRole = body.Payload.role;
    if (userRole === 'admin') {
      return this.feesService.addFee(createFeeDto);
    } else {
      return 'access denied!';
    }
  }

  @Get()
  getFee( @Body() body: any) {
    let userRole = body.Payload.role;
    if (userRole === 'admin') {
      return this.feesService.getFee();
    } else {
      return 'access denied!';
    }
  }
}
