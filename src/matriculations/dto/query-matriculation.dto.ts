/* eslint-disable prettier/prettier */
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Matriculation } from '../entities/matriculation.entity';

export class QueryMatriculationDto {
  @ApiPropertyOptional()
  relations?: string[];
  @ApiPropertyOptional()
  where?: Partial<Matriculation>;
}
