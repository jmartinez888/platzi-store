import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Ignora un campo que no esta contemplado como esquema del dato
      forbidNonWhitelisted: true, //Alerta de un campo que no esta contemplado como esquema del dato
    }),
  );
  await app.listen(3000);
}
bootstrap();
