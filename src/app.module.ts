import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { MatriculationsModule } from './matriculations/matriculations.module';

@Module({
  imports: [CoursesModule, StudentsModule, MatriculationsModule],
})
export class AppModule {}
