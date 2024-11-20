import { Docente } from "../../docente/entities/docente.entity"
import { Proyecto } from "../../../src/proyecto/entities/proyecto.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Objetivo {
    @PrimaryGeneratedColumn('increment')
    IdObjetivo: number;

    @Column()
    NombreObjetivo: string;

    @Column()
    DescripcionObjetivo: string;

       
    @OneToOne(() => Proyecto, proyecto => proyecto.IdProyecto, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'IdProyecto' })
    IdProyecto: number;

    @ManyToOne(() => Docente, docente => docente.cedula, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'IdProyecto' })
    IdDocente: number;
}
