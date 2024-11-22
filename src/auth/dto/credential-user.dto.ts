import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class credentialUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Length(2,14)
    password: string;
}