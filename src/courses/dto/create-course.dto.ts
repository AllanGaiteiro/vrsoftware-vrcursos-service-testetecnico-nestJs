import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  description: string;
  @ApiProperty()
  menu: string;
}
