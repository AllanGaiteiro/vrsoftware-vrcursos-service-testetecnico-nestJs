import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { initializeFirebase } from './firebase.config';

dotenv.config();
initializeFirebase();

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
