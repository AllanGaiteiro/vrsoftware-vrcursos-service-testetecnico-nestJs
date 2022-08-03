import { Module } from '@nestjs/common';
import { MatriculationsService } from './matriculations.service';
import { MatriculationsController } from './matriculations.controller';
import { MatriculationRepository } from 'src/repositorys/matriculation.repository';

@Module({
  controllers: [MatriculationsController],
  providers: [MatriculationsService, MatriculationRepository],
})
export class MatriculationsModule {}
