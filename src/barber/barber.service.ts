import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Barber } from './entities/barber.entity';
import { CreateBarberDto } from './dto/create-barber.dto';

@Injectable()
export class BarberService {
  constructor(
    @InjectRepository(Barber)
    private barberRepository: Repository<Barber>,
  ) {}

  create(dto: CreateBarberDto) {
    const barber = this.barberRepository.create(dto);
    return this.barberRepository.save(barber);
  }

  findAll() {
    return this.barberRepository.find();
  }

  async findOne(id: number) {
    const barber = await this.barberRepository.findOne({
      where: { id },
    });

    if (!barber) {
      throw new NotFoundException('Barber not found');
    }

    return barber;
  }

  async remove(id: number) {
    const barber = await this.findOne(id);
    return this.barberRepository.remove(barber);
  }
}