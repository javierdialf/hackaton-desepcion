import { MigrationInterface, QueryRunner } from "typeorm";

export class SegundaMigracion02Correcion1732251985149 implements MigrationInterface {
    name = 'SegundaMigracion02Correcion1732251985149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_01f8df39316c7476d0ee2e6ffd\` ON \`proyecto\``);
        await queryRunner.query(`DROP INDEX \`IDX_0b5af349840abdb971251d0e45\` ON \`proyecto\``);
        await queryRunner.query(`DROP INDEX \`IDX_1971958358952365140465b5f3\` ON \`proyecto\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`nombre\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`nombre\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`contrasenia\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`contrasenia\` varchar(60) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`contrasenia\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`contrasenia\` varchar(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`nombre\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`nombre\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_1971958358952365140465b5f3\` ON \`proyecto\` (\`IdFacultad\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_0b5af349840abdb971251d0e45\` ON \`proyecto\` (\`IdDocente\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_01f8df39316c7476d0ee2e6ffd\` ON \`proyecto\` (\`IdLider\`)`);
    }

}
