import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ObjetivoModule } from './objetivo/objetivo.module';
import { TareaModule } from './tarea/tarea.module';
import { DirectorModule } from './director/director.module';
import { DocenteModule } from './docente/docente.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { LiderModule } from './lider/lider.module';
import { Proyecto } from './proyecto/entities/proyecto.entity';
import { ProyectoModule } from './proyecto/proyecto.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`,
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'oracle',
      host: configService.get('DB_HOST'),
      port: parseInt(configService.get('DB_PORT')),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
    inject: [ConfigService],
  }),
  ObjetivoModule,
  TareaModule,
  DirectorModule,
  DocenteModule,
  ColaboradorModule,
  LiderModule,
  ProyectoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
