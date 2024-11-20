import { IsNotEmpty } from "class-validator";

export class CreateObjetivoDto {
    @IsNotEmpty()
    nombreObjetivo: string;

    @IsNotEmpty()
    DescripcionObjetivo: string;

    @IsNotEmpty()
    IdDocente: number;
}
