import { Injectable } from '@nestjs/common';
import { StudentRepository } from 'src/repositorys/student.repository';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(private repository: StudentRepository) { }
  create(createStudentDto: CreateStudentDto) {
    return this.repository.createStudent({ student: createStudentDto });
  }

  findAll(): Promise<Student[]> {
    return this.repository.getStudents();
  }

  findOne(id: string) {
    return this.repository.getStudent(id);
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.repository.updateStudent(id, updateStudentDto);
  }

  remove(id: string) {
    return this.repository.deleteStudent(id);
  }
}
