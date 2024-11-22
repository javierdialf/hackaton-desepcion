import { IsAlpha, IsEmail, IsNotEmpty, IsOptional, IsString, Length, MaxLength, MinLength, Matches } from "class-validator";

export class createUserDto {

    @IsString()
    @Length(2,25)
    @IsNotEmpty()
    @Matches(/^[A-Za-z\s]+$/, { message: 'El Nombre solo debe contener letras y espacios.' })
    name: string;


    @IsString()
    @Length(2,25)
    @IsNotEmpty()
    @Matches(/^[A-Za-z\s]+$/, { message: 'El Apellido solo debe contener letras y espacios.' })
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @Length(2,14)
    @IsNotEmpty()
    password: string;
}