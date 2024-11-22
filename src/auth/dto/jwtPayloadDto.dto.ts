import { IsEmail, IsNotEmpty, IsUUID } from "class-validator";

export class jwtPayloadDto {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @IsEmail()
    sub: string;
}