import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(Usuario) private readonly UsuariosRepository: Repository<Usuario>) {}

  async create(usuario: CreateUsuarioDto): Promise<Usuario | null> {
    const exist = await this.finUserById(usuario.documento);
      if (exist) throw new ConflictException('already exist user with this document');
      
      const newUser =  this.UsuariosRepository.create(usuario);
        const userSaved =  await this.UsuariosRepository.save(newUser);
        
        delete userSaved.contrasenia;
        return userSaved;
  }


  async findAll(): Promise<Usuario[]>{
    try {
      const usuarios: Usuario[] = await this.UsuariosRepository
          .createQueryBuilder()
          .select('usarios')
          .from(Usuario, 'usuarios')
          .getMany();

          if(!usuarios) throw new NotFoundException();
          return usuarios;

      } catch (error) {
        console.error(error);
        throw error;
      }
  }

  
  async finUserById(documento: number): Promise<Usuario> {
    const userFound = this.UsuariosRepository.findOneBy({documento: Equal(documento)});
        if (!userFound) throw new NotFoundException();
    return userFound;
}


async findUserByEmail(email: string): Promise<Usuario | null> {
    const userFound = this.UsuariosRepository.findOneBy({email: Equal(email)});
        if (!userFound) throw new NotFoundException();
    return userFound;
}

  update(documento: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${documento} usuario`;
  }

  remove(documento: number) {
    return `This action removes a #${documento} usuario`;
  }
}
