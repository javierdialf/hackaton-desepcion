import { Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DirectorService {
    constructor(@InjectRepository(Director) private DirectorRepository: Repository<Director>) {}

  async create(createDirectorDto: CreateDirectorDto) {
    const newDirector = await this.DirectorRepository.create(createDirectorDto);
    const directorSaved =  this.DirectorRepository.save(newDirector);
    
    delete (await directorSaved).contrasenia;
    return directorSaved;
  }

  findAll() {
    return `This action returns all director`;
  }

  findOne(id: number) {
    return `This action returns a #${id} director`;
  }

  update(id: number, updateDirectorDto: UpdateDirectorDto) {
    return `This action updates a #${id} director`;
  }

  remove(id: number) {
    return `This action removes a #${id} director`;
  }
}
