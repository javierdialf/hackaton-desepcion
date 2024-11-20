import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    try {
      const proyectos: Proyecto[] = await this.ProyectoRepository
          .createQueryBuilder()
          .select('proyectos')
          .from(Proyecto, 'proyectos')
          .getMany();

          if(!proyectos) throw new NotFoundException();
          return proyectos;

      } catch (error) {
        console.error(error);
        throw error;
      }
  }

 async findOne(idProyecto: number) {
    const proyecto = await this.ProyectoRepository
            .createQueryBuilder()
            .select('*')
            .from(Proyecto, 'proyecto')
            .where('proyecto.IdProyecto = :id', {id: idProyecto})
            .getRawOne();

        if (!proyecto) throw new NotFoundException();
        return proyecto;
  }

  update(id: number, updateProyectoDto: UpdateProyectoDto) {
    return `This action updates a #${id} proyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyecto`;
  }
}
