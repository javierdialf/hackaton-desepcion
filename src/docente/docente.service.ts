import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { Docente } from './entities/docente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DocenteService {
  constructor(@InjectRepository(Docente) private DocenteRepository: Repository<Docente>) {}


  async create(createDocenteDto: CreateDocenteDto) {
  }

  async findAll():Promise<Docente[]> {
    try {
      const docentes: Docente[] = await this.DocenteRepository
          .createQueryBuilder()
          .select('docentes')
          .from(Docente, 'docentes')
          .getMany();

          if(!docentes) throw new NotFoundException();
          return docentes;

      } catch (error) {
        console.error(error);
        throw error;
      }
  }

 
  update(id: number, updateDocenteDto: UpdateDocenteDto) {
    return `This action updates a #${id} docente`;
  }

  remove(id: number) {
    return `This action removes a #${id} docente`;
  }
}
