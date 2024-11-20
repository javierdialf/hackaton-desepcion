import { IsNotEmpty } from "class-validator";

export class CreateObjetivoDto {
    @IsNotEmpty()
    NombreObjetivo: string;

    @IsNotEmpty()
    DescripcionObjetivo: string;

    @IsNotEmpty()
    IdDocente: number;
}
