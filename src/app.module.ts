import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { MatriculationsModule } from './matriculations/matriculations.module';

@Module({
  imports: [CoursesModule, StudentsModule, MatriculationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
