import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { studentProviders } from './entities/student.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentsController],
  providers: [...studentProviders, StudentsService],
})
export class StudentsModule {}
