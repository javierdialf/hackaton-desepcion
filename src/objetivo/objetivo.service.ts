import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateObjetivoDto } from './dto/create-objetivo.dto';
import { UpdateObjetivoDto } from './dto/update-objetivo.dto';
import { Objetivo } from './entities/objetivo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ObjetivoService {
    constructor(@InjectRepository(Objetivo) private ObjetivoRepository: Repository<Objetivo>) {}

  async create(objetivo: CreateObjetivoDto): Promise<Objetivo> {
    const newObjetivo = await this.ObjetivoRepository.create(objetivo);
    const ObjetivoSaved =  this.ObjetivoRepository.save(newObjetivo);
    
    return ObjetivoSaved;
  }

  async findAll(idProyecto): Promise<Objetivo[]> {
      try {
      const objetivosProyecto: Objetivo[] = await this.ObjetivoRepository
          .createQueryBuilder()
          .select('objetivos')
          .from(Objetivo, 'objetivos')
          .where('objetivo.IdProyecto = :IdProyecto', {IdProyecto: idProyecto})
          .getMany();

          if(!objetivosProyecto) throw new NotFoundException();
          return objetivosProyecto;

      } catch (error) {
        console.error(error);
        throw error;
      }
  }


  async findOne(idObjetivo: number): Promise<Objetivo> {
    const objetivo = await this.ObjetivoRepository
            .createQueryBuilder()
            .select('*')
            .from(Objetivo, 'objetivo')
            .where('objetivo.IdObjetivo = :id', {id: idObjetivo})
            .getRawOne();

        if (!objetivo) throw new NotFoundException();

        return objetivo;
  }


 async update(idObjetivo: number, updateObjetivoDto: UpdateObjetivoDto) {
      const objetivo:Objetivo = await this.findOne(idObjetivo)
        if (!objetivo) throw new NotFoundException();

        return await this.ObjetivoRepository
        .createQueryBuilder()
        .update(Objetivo)
        .set(updateObjetivoDto)
        .where({ id: idObjetivo })
        .execute();
   }
 
  async remove(idObjetivo: number):Promise<DeleteResult> {
    const objetivo: Objetivo = await this.findOne(idObjetivo);
      if (!objetivo) throw new NotFoundException();

            return await this.ObjetivoRepository
                .createQueryBuilder()
                .delete()
                .where({id: idObjetivo})
                .execute();
  }

}

