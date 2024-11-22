import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Facultad {
    @PrimaryGeneratedColumn('increment')
    idFacultad: number;

    @Column({unique: true})
    nombreFacultad: string;
}
