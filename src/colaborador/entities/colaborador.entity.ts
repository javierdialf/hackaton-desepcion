import { JoinColumn, OneToOne } from "typeorm";
import { persona } from "../../abstracModelPerson/persona.entity";
import { Proyecto } from "../../proyecto/entities/proyecto.entity";

export class Colaborador extends persona{
    @OneToOne(() => Proyecto, proyecto => proyecto.IdProyecto, { onDelete: 'NO ACTION' })
    @JoinColumn({ name: 'IdProyecto' })
    IdProyecto: number;
}
