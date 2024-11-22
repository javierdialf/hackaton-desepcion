import { Column, Entity } from "typeorm";
import { Rol } from "../types/rol";
import { Persona } from "./persona.entity";

@Entity()
export class Usuario extends Persona{
    @Column({unique: true})
    email: string;

    @Column({length: 60})
    contrasenia: string;

    @Column({type:'enum', enum: Rol, default:Rol.Colaborador})
    rol: Rol;
}
