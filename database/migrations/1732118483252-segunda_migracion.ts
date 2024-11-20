import { MigrationInterface, QueryRunner } from "typeorm";

export class SegundaMigracion1732118483252 implements MigrationInterface {
    name = 'SegundaMigracion1732118483252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tarea" ("Id" number GENERATED BY DEFAULT AS IDENTITY, CONSTRAINT "PK_29d8b59a09108104fbe436d24f2" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "estado_objetivo" ("IdEstadoObjetivo" number GENERATED BY DEFAULT AS IDENTITY, "NombreEstadoObjetivo" varchar2(255) NOT NULL, CONSTRAINT "PK_5264bd560bbc599b7c4570fbb80" PRIMARY KEY ("IdEstadoObjetivo"))`);
        await queryRunner.query(`CREATE TABLE "objetivo" ("IdObjetivo" number GENERATED BY DEFAULT AS IDENTITY, "NombreObjetivo" varchar2(255) NOT NULL, "DescripcionObjetivo" varchar2(255) NOT NULL, "IdProyecto" number, CONSTRAINT "PK_96ab6fc12f93fe622786c098910" PRIMARY KEY ("IdObjetivo"))`);
        await queryRunner.query(`ALTER TABLE "objetivo" ADD CONSTRAINT "FK_13634a682d11d2d69925c94e40f" FOREIGN KEY ("IdProyecto") REFERENCES "proyecto" ("IdProyecto") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "objetivo" DROP CONSTRAINT "FK_13634a682d11d2d69925c94e40f"`);
        await queryRunner.query(`DROP TABLE "objetivo"`);
        await queryRunner.query(`DROP TABLE "estado_objetivo"`);
        await queryRunner.query(`DROP TABLE "tarea"`);
    }

}
