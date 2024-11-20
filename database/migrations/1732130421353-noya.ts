import { MigrationInterface, QueryRunner } from "typeorm";

export class Noya1732130421353 implements MigrationInterface {
    name = 'Noya1732130421353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "proyecto" ADD "Facultad" number NOT NULL`);
        await queryRunner.query(`ALTER TABLE "objetivo" DROP CONSTRAINT "FK_13634a682d11d2d69925c94e40f"`);
        await queryRunner.query(`ALTER TABLE "objetivo" ADD CONSTRAINT "UQ_13634a682d11d2d69925c94e40f" UNIQUE ("IdProyecto")`);
        await queryRunner.query(`ALTER TABLE "objetivo" ADD CONSTRAINT "FK_13634a682d11d2d69925c94e40f" FOREIGN KEY ("IdProyecto") REFERENCES "proyecto" ("IdProyecto") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "objetivo" ADD CONSTRAINT "FK_13634a682d11d2d69925c94e40f" FOREIGN KEY ("IdProyecto") REFERENCES "docente" ("cedula") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "objetivo" DROP CONSTRAINT "FK_13634a682d11d2d69925c94e40f"`);
        await queryRunner.query(`ALTER TABLE "objetivo" DROP CONSTRAINT "FK_13634a682d11d2d69925c94e40f"`);
        await queryRunner.query(`ALTER TABLE "objetivo" DROP CONSTRAINT "UQ_13634a682d11d2d69925c94e40f"`);
        await queryRunner.query(`ALTER TABLE "objetivo" ADD CONSTRAINT "FK_13634a682d11d2d69925c94e40f" FOREIGN KEY ("IdProyecto") REFERENCES "proyecto" ("IdProyecto") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP COLUMN "Facultad"`);
    }

}
