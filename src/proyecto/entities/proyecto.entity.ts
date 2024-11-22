import { Facultad } from "../../facultad/entities/facultad.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fase } from "../types/fase";

@Entity()
export class Proyecto {

    @PrimaryGeneratedColumn('increment')
    idProyecto: number

    @Column({length: 55})
    nombreProyecto: string;

    @Column({type: 'varchar', length: 255})
    descripcion: string;

    @CreateDateColumn()
    fechaInicio: Date;

    @OneToOne(() => Facultad, facultad => facultad.idFacultad, { onDelete: 'NO ACTION' })
    @JoinColumn({ name: 'IdFacultad' })
    idFacultad: number;

    @Column({nullable: true})
    fechaFinalizacion?: Date;

    @Column({default: 0})
    fase: Fase;

    @OneToOne(() => Usuario, facultad => facultad.documento, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'IdLider' })
    idLider: number;

    @OneToOne(() => Usuario, docente => docente.documento, { onDelete: 'NO ACTION' })
    @JoinColumn({ name: 'IdDocente' })
    idDocente?: number;
}
