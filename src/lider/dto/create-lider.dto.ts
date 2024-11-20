import { IsNotEmpty } from "class-validator";
import { role } from "src/abstracModelPerson/role";

export class CreateLiderDto {
    @IsNotEmpty()
    cedula: number;

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    contrasenia: string;

    @IsNotEmpty()
    rol: role;
}
