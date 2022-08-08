/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MatriculationsService } from './matriculations.service';
import { MatriculationsController } from './matriculations.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MatriculationsController],
  providers: [
    MatriculationsService,
    PrismaService],
})
export class MatriculationsModule {}
