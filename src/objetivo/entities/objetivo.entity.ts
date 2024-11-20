import { Proyecto } from "../../../src/proyecto/entities/proyecto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Objetivo {
    @PrimaryGeneratedColumn('increment')
    IdObjetivo: number;

    @Column()
    NombreObjetivo: string;

    @Column()
    DescripcionObjetivo: string;

       
    @ManyToOne(() => Proyecto, proyecto => proyecto.IdProyecto, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'IdProyecto' })
    IdProyecto: number;
}
