import { IsAlpha, IsEmail, IsNotEmpty, IsNumber, IsString, Length, Matches, MaxLength } from "class-validator";
import { tipoDocumento } from "../types/tipo-documento";

export class CreateUsuarioDto {

    @IsNotEmpty()
    @IsString()
    @Matches(/^[A-Za-z\s]+$/, { message: 'El tipo de documento solo debe contener letras y espacios.' })
    tipoDocumento: tipoDocumento;

    @IsNotEmpty()
    @IsNumber()
    documento: number;

    @IsString()
    @Length(2,25)
    @IsNotEmpty()
    @Matches(/^[A-Za-z\s]+$/, { message: 'El Nombre solo debe contener letras y espacios.' })
    nombre: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(60)
    contrasenia: string;
}
