import { Inject, Injectable } from '@nestjs/common';
import { FindOptionsSelect, Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @Inject('STUDENT_REPOSITORY') private repository: Repository<Student>,
  ) {}
  create(createStudentDto: CreateStudentDto) {
    return this.repository.create(createStudentDto);
  }

  findAll(): Promise<Student[]> {
    return this.repository.find();
  }

  findOne(options: {
    select: FindOptionsSelect<Student>;
    where: Partial<Student>;
  }): Promise<Student> {
    return this.repository.findOne({
      select: options.select,
      where: options.where,
    });
  }

  update(codigo: number, updateStudentDto: UpdateStudentDto) {
    return this.repository.update(codigo, updateStudentDto);
  }

  remove(codigo: number) {
    return this.repository.delete(codigo);
  }
}
