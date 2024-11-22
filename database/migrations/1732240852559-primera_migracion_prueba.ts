import { MigrationInterface, QueryRunner } from "typeorm";

export class PrimeraMigracionPrueba1732240852559 implements MigrationInterface {
    name = 'PrimeraMigracionPrueba1732240852559'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`nombre\` varchar(55) NOT NULL, \`tipoDocumento\` enum ('cedula de ciudadania', 'tarjeta de identidad', 'cedula de extranjeria') NOT NULL, \`documento\` int NOT NULL, \`correo\` varchar(255) NOT NULL, \`contrasena\` varchar(16) NOT NULL, \`rol\` enum ('director', 'docente', 'lider', 'colaborador') NOT NULL DEFAULT 'colaborador', UNIQUE INDEX \`IDX_349ecb64acc4355db443ca17cb\` (\`correo\`), PRIMARY KEY (\`documento\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`facultad\` (\`idFacultad\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(50) NOT NULL, PRIMARY KEY (\`idFacultad\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tarea\` (\`IdTarea\` int NOT NULL AUTO_INCREMENT, \`NombreTarea\` varchar(255) NOT NULL, \`Descripcion\` varchar(255) NOT NULL, PRIMARY KEY (\`IdTarea\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`proyecto\` (\`idProyecto\` int NOT NULL AUTO_INCREMENT, \`nombreProyecto\` varchar(255) NOT NULL, \`descripcion\` varchar(255) NOT NULL, \`fechaInicio\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaFinalizacion\` datetime NULL, \`fase\` enum ('en progreso', 'retrasado', 'completado') NOT NULL DEFAULT 'en progreso', \`idLider\` int NULL, \`dDocente\` int NULL, UNIQUE INDEX \`REL_13413546cdf2e1b97848cf2ed5\` (\`idLider\`), UNIQUE INDEX \`REL_11cab51379d2e5e357eb87648f\` (\`dDocente\`), PRIMARY KEY (\`idProyecto\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`objetivo\` (\`idObjetivo\` int NOT NULL AUTO_INCREMENT, \`nombreObjetivo\` varchar(30) NOT NULL, \`descripcionObjetivo\` varchar(265) NOT NULL, \`IdProyecto\` int NULL, \`IdDocente\` int NULL, PRIMARY KEY (\`idObjetivo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_13413546cdf2e1b97848cf2ed58\` FOREIGN KEY (\`idLider\`) REFERENCES \`usuario\`(\`documento\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`proyecto\` ADD CONSTRAINT \`FK_11cab51379d2e5e357eb87648ff\` FOREIGN KEY (\`dDocente\`) REFERENCES \`usuario\`(\`documento\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`objetivo\` ADD CONSTRAINT \`FK_13634a682d11d2d69925c94e40f\` FOREIGN KEY (\`IdProyecto\`) REFERENCES \`proyecto\`(\`idProyecto\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`objetivo\` ADD CONSTRAINT \`FK_51f0013853257719325e0c29719\` FOREIGN KEY (\`IdDocente\`) REFERENCES \`usuario\`(\`documento\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`objetivo\` DROP FOREIGN KEY \`FK_51f0013853257719325e0c29719\``);
        await queryRunner.query(`ALTER TABLE \`objetivo\` DROP FOREIGN KEY \`FK_13634a682d11d2d69925c94e40f\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_11cab51379d2e5e357eb87648ff\``);
        await queryRunner.query(`ALTER TABLE \`proyecto\` DROP FOREIGN KEY \`FK_13413546cdf2e1b97848cf2ed58\``);
        await queryRunner.query(`DROP TABLE \`objetivo\``);
        await queryRunner.query(`DROP INDEX \`REL_11cab51379d2e5e357eb87648f\` ON \`proyecto\``);
        await queryRunner.query(`DROP INDEX \`REL_13413546cdf2e1b97848cf2ed5\` ON \`proyecto\``);
        await queryRunner.query(`DROP TABLE \`proyecto\``);
        await queryRunner.query(`DROP TABLE \`tarea\``);
        await queryRunner.query(`DROP TABLE \`facultad\``);
        await queryRunner.query(`DROP INDEX \`IDX_349ecb64acc4355db443ca17cb\` ON \`usuario\``);
        await queryRunner.query(`DROP TABLE \`usuario\``);
    }

}
