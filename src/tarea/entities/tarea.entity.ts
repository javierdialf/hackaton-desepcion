import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tarea {

    @PrimaryGeneratedColumn('increment')
    Id
}
