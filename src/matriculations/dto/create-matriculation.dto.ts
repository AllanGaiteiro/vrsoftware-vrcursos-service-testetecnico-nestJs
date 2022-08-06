/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateMatriculationDto {
  @ApiProperty()
  courseId: number;
  @ApiProperty()
  studentId: number;
}
