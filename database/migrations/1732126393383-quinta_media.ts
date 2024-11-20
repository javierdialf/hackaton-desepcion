import { MigrationInterface, QueryRunner } from "typeorm";

export class QuintaMedia1732126393383 implements MigrationInterface {
    name = 'QuintaMedia1732126393383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "proyecto" MODIFY "TiempoFinalizacion" timestamp  NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "proyecto" MODIFY "TiempoFinalizacion" timestamp  NOT NULL`);
    }

}
