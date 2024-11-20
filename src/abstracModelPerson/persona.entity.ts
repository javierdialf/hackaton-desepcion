import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { role } from "./role";

@Entity()
export abstract class persona {
    @PrimaryGeneratedColumn('increment')
    cedula: number;

    @Column({type: 'varchar2', length: 50})
    nombre: string;

    @Column({type: 'varchar2', length: 16})
    contrasenia: string;

    @Column({default: 3})
    rol: role
}