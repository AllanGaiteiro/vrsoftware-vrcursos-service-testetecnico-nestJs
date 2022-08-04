/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MatriculationsService } from './matriculations.service';
import { MatriculationsController } from './matriculations.controller';
import { matriculationProviders } from './entities/matriculation.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MatriculationsController],
  providers: [...matriculationProviders, MatriculationsService],
})
export class MatriculationsModule {}
