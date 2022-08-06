/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MatriculationsService } from './matriculations.service';
import { MatriculationsController } from './matriculations.controller';
import { matriculationProviders } from './entities/matriculation.providers';
import { DatabaseModule } from 'src/database/database.module';
import { CoursesService } from 'src/courses/courses.service';
import { StudentsService } from 'src/students/students.service';
import { courseProviders } from 'src/courses/entities/course.providers';
import { studentProviders } from 'src/students/entities/student.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MatriculationsController],
  providers: [
    ...matriculationProviders,
    ...courseProviders, 
    ...studentProviders,
    MatriculationsService,
    CoursesService,
    StudentsService],
})
export class MatriculationsModule {}
