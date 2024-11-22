import { MigrationInterface, QueryRunner } from "typeorm";

export class SegundaMigracion1732251062577 implements MigrationInterface {
    name = 'SegundaMigracion1732251062577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_11cab51379d2e5e357eb87648ff\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_13413546cdf2e1b97848cf2ed58\``);
        await queryRunner.query(`DROP INDEX \`IDX_349ecb64acc4355db443ca17cb\` ON \`usuario\``);
        await queryRunner.query(`DROP INDEX \`REL_11cab51379d2e5e357eb87648f\` ON \`proyecto\``);
        await queryRunner.query(`DROP INDEX \`REL_13413546cdf2e1b97848cf2ed5\` ON \`proyecto\``);
        await queryRunner.query(`ALTER TABLE \`facultad\` CHANGE \`nombre\` \`nombreFacultad\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`correo\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`contrasena\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`idLider\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`dDocente\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD UNIQUE INDEX \`IDX_2863682842e688ca198eb25c12\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`contrasenia\` varchar(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`IdFacultad\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD UNIQUE INDEX \`IDX_1971958358952365140465b5f3\` (\`IdFacultad\`)`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`IdLider\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD UNIQUE INDEX \`IDX_01f8df39316c7476d0ee2e6ffd\` (\`IdLider\`)`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`IdDocente\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD UNIQUE INDEX \`IDX_0b5af349840abdb971251d0e45\` (\`IdDocente\`)`);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`nombre\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`nombre\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`facultad\` DROP COLUMN \`nombreFacultad\``);
        await queryRunner.query(`ALTER TABLE \`facultad\` ADD \`nombreFacultad\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`facultad\` ADD UNIQUE INDEX \`IDX_c958805674d78e25ec49a8aeeb\` (\`nombreFacultad\`)`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`nombreProyecto\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`nombreProyecto\` varchar(55) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fase\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fase\` varchar(255) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_1971958358952365140465b5f3\` ON \`proyecto\` (\`IdFacultad\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_01f8df39316c7476d0ee2e6ffd\` ON \`proyecto\` (\`IdLider\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_0b5af349840abdb971251d0e45\` ON \`proyecto\` (\`IdDocente\`)`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_1971958358952365140465b5f3a\` FOREIGN KEY (\`IdFacultad\`) REFERENCES \`facultad\`(\`idFacultad\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_01f8df39316c7476d0ee2e6ffd7\` FOREIGN KEY (\`IdLider\`) REFERENCES \`usuario\`(\`documento\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_0b5af349840abdb971251d0e45e\` FOREIGN KEY (\`IdDocente\`) REFERENCES \`usuario\`(\`documento\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_0b5af349840abdb971251d0e45e\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_01f8df39316c7476d0ee2e6ffd7\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_1971958358952365140465b5f3a\``);
        await queryRunner.query(`DROP INDEX \`REL_0b5af349840abdb971251d0e45\` ON \`proyecto\``);
        await queryRunner.query(`DROP INDEX \`REL_01f8df39316c7476d0ee2e6ffd\` ON \`proyecto\``);
        await queryRunner.query(`DROP INDEX \`REL_1971958358952365140465b5f3\` ON \`proyecto\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`fase\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`fase\` enum ('en progreso', 'retrasado', 'completado') NOT NULL DEFAULT 'en progreso'`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`nombreProyecto\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`nombreProyecto\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`facultad\` DROP INDEX \`IDX_c958805674d78e25ec49a8aeeb\``);
        await queryRunner.query(`ALTER TABLE \`facultad\` DROP COLUMN \`nombreFacultad\``);
        await queryRunner.query(`ALTER TABLE \`facultad\` ADD \`nombreFacultad\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`nombre\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`nombre\` varchar(55) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP INDEX \`IDX_0b5af349840abdb971251d0e45\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`IdDocente\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP INDEX \`IDX_01f8df39316c7476d0ee2e6ffd\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`IdLider\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP INDEX \`IDX_1971958358952365140465b5f3\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP COLUMN \`IdFacultad\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`contrasenia\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP INDEX \`IDX_2863682842e688ca198eb25c12\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`dDocente\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD \`idLider\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`contrasena\` varchar(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`correo\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`facultad\` CHANGE \`nombreFacultad\` \`nombre\` varchar(50) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_13413546cdf2e1b97848cf2ed5\` ON \`proyecto\` (\`idLider\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_11cab51379d2e5e357eb87648f\` ON \`proyecto\` (\`dDocente\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_349ecb64acc4355db443ca17cb\` ON \`usuario\` (\`correo\`)`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_13413546cdf2e1b97848cf2ed58\` FOREIGN KEY (\`idLider\`) REFERENCES \`usuario\`(\`documento\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_11cab51379d2e5e357eb87648ff\` FOREIGN KEY (\`dDocente\`) REFERENCES \`usuario\`(\`documento\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
