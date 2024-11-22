import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin:  '*',
    methods: 'GET, PATCH, POST, DELETE',
    credentials: true
  });
  await app.listen(8000);
}
bootstrap();
