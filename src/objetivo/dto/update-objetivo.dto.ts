import { PartialType } from '@nestjs/mapped-types';
import { CreateObjetivoDto } from './create-objetivo.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateObjetivoDto extends PartialType(CreateObjetivoDto) {
    @IsNotEmpty()
    DescripcionObjetivo: string;
}
