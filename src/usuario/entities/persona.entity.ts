import { Column, PrimaryColumn } from "typeorm";
import { tipoDocumento } from "../types/tipo-documento";

export abstract class Persona {
    @Column({type: 'enum', enum: tipoDocumento})
    tipoDocumento: tipoDocumento

    @PrimaryColumn()
    documento: number;

    @Column({length: 50})
    nombre: string;
}