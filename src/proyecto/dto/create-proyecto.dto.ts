import { IsDate, IsNotEmpty } from "class-validator";

export class CreateProyectoDto {
    @IsNotEmpty()
    NombreProyecto: string;

    @IsNotEmpty()
    Descripcion: string;

    @IsNotEmpty()
    IdLider: number;

    @IsNotEmpty()
    IdDocente: number;
}
