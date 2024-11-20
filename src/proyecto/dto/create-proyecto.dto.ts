import { IsDate, IsNotEmpty } from "class-validator";
import { Facultad } from "../types/facultad";

export class CreateProyectoDto {
    @IsNotEmpty()
    NombreProyecto: string;

    @IsNotEmpty()
    Descripcion: string;

    @IsNotEmpty()
    Facultad: Facultad;

    @IsNotEmpty()
    IdLider: number;

    @IsNotEmpty()
    IdDocente: number;
}
