import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BarberService } from './barber.service';
import { CreateBarberDto } from './dto/create-barber.dto';

@Controller('barbers')
export class BarberController {
  constructor(private readonly barberService: BarberService) {}

  @Post()
  create(@Body() dto: CreateBarberDto) {
    return this.barberService.create(dto);
  }

  @Get()
  findAll() {
    return this.barberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.barberService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.barberService.remove(+id);
  }
}