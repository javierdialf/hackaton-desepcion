import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':documento')
  findOne(@Param('documento') documento: number) {
    return this.usuarioService.finUserById(documento);
  }

  @Patch(':documento')
  update(@Param('documento') documento: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+documento, updateUsuarioDto);
  }

  @Delete(':documento')
  remove(@Param('documento') documento: string) {
    return this.usuarioService.remove(+documento);
  }
}
