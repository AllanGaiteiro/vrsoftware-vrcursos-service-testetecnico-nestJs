import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const globalPrefix = 'api';
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
