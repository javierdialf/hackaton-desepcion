import { Colaborador } from "src/colaborador/entities/colaborador.entity";
import { Docente } from "../../docente/entities/docente.entity";
import { Lider } from "../../lider/entities/lider.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import { estado } from "../types/estado";
import { Facultad } from "../types/facultad";

@Entity()
export class Proyecto {
    @PrimaryGeneratedColumn('increment')
    IdProyecto: number

    @Column()
    NombreProyecto: string;

    @Column({type: 'varchar2', length: 255})
    Descripcion: string;

    @CreateDateColumn()
    TiempoInicio: Date;

    @Column()
    Facultad: Facultad;

    @Column({nullable: true})
    TiempoFinalizacion?: Date;

    @Column({default: 0})
    Estado: estado;

    @OneToOne(() => Lider, lider => lider.cedula, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'IdLider' })
    IdLider: number;

    @ManyToOne(() => Docente, docente => docente.cedula, { onDelete: 'NO ACTION' })
    @JoinColumn({ name: 'IdDocente' })
    IdDocente: number;
}
