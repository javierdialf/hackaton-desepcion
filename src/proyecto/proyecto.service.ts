import { Injectable } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProyectoService {
  constructor(@InjectRepository(Proyecto) private ProyectoRepository: Repository<Proyecto>) {}

  async create(createProyectoDto: CreateProyectoDto) {
    const newProyecto = await this.ProyectoRepository.create(createProyectoDto);
    const proyectoSaved =  this.ProyectoRepository.save(newProyecto);
    
    return proyectoSaved;
  }

  findAll() {
    return `This action returns all proyecto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proyecto`;
  }

  update(id: number, updateProyectoDto: UpdateProyectoDto) {
    return `This action updates a #${id} proyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyecto`;
  }
}
