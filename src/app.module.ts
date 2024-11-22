import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { FacultadModule } from './facultad/facultad.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { ObjetivoModule } from './objetivo/objetivo.module';


@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: `.env.${process.env.NODE_ENV}`,
        isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: parseInt(configService.get('DB_PORT')),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DATABASE'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        }),
        inject: [ConfigService],
      }),
    AuthModule,
    UsuarioModule,
    FacultadModule,
    ProyectoModule,
    ObjetivoModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [],
})
export class AppModule {}


