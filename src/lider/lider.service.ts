import { Injectable } from '@nestjs/common';
import { CreateLiderDto } from './dto/create-lider.dto';
import { UpdateLiderDto } from './dto/update-lider.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lider } from './entities/lider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LiderService {
    constructor(@InjectRepository(Lider) private LiderRepository: Repository<Lider>) {}

  async create(createLiderDto: CreateLiderDto) {
    const newLider = await this.LiderRepository.create(createLiderDto);
    const liderSaved =  this.LiderRepository.save(newLider);
    
    delete (await liderSaved).contrasenia;
    return liderSaved;
  }

  findAll() {
    return `This action returns all lider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lider`;
  }

  update(id: number, updateLiderDto: UpdateLiderDto) {
    return `This action updates a #${id} lider`;
  }

  remove(id: number) {
    return `This action removes a #${id} lider`;
  }
}
