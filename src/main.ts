import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { Express } from 'express';
import { AppModule } from './app.module';
// app 모듈 루트 모든 루트들이 초기화. 이때 injection
// 여기가 entry point

async function bootstrap() {
  const app = await NestFactory.create<INestApplication<Express>>(AppModule);
  app.use(cors());
  await app.listen(5050);
}
bootstrap();
