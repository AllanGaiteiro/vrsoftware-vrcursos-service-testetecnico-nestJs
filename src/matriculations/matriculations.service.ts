/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { CoursesService } from 'src/courses/courses.service';
import { Course } from 'src/courses/entities/course.entity';
import { Student } from 'src/students/entities/student.entity';
import { StudentsService } from 'src/students/students.service';
import { DeleteResult, FindOptionsSelect, Repository, UpdateResult } from 'typeorm';
import { CreateMatriculationDto } from './dto/create-matriculation.dto';
import { UpdateMatriculationDto } from './dto/update-matriculation.dto';
import { Matriculation } from './entities/matriculation.entity';

@Injectable()
export class MatriculationsService {
  constructor(
    @Inject('MATRICULATION_REPOSITORY') private repository: Repository<Matriculation>, private courseService: CoursesService,
    private studentService: StudentsService
  ) { }

  async create(createMatriculationDto: CreateMatriculationDto): Promise<Matriculation> {
    const { courseId, studentId } = createMatriculationDto;
    const matriculation = new Matriculation();
    matriculation.course = await this.courseService.findOne({ where: { id: +courseId } });
    matriculation.student = await this.studentService.findOne({ where: { id: +studentId } });
    return await this.repository.save(matriculation);
  }

  findAll(options?: {
    //select: FindOptionsSelect<Matriculation>;
    where?: Partial<Matriculation>
    relations?: string[];
  }): Promise<Matriculation[]> {
    return this.repository.find({
      where: options?.where || {},
      relations: options?.relations || [Course.name.toLowerCase(), Student.name.toLowerCase()]
    });
  }

  findOne(options: {
    //select: FindOptionsSelect<Matriculation>;
    where: Partial<Matriculation>;
  }): Promise<Matriculation> {
    console.log('find', options, Course.name.toLowerCase())
    return this.repository.findOne({
      //select: options.select,
      where: options.where,
      relations: [Course.name.toLowerCase(), Student.name.toLowerCase()]
    });
  }

  async update(codigo: number, updateMatriculationDto: UpdateMatriculationDto): Promise<UpdateResult> {
    const { courseId, studentId } = updateMatriculationDto;
    const matriculation = new Matriculation();
    matriculation.course = await this.courseService.findOne({ where: { id: +courseId } });
    matriculation.student = await this.studentService.findOne({ where: { id: +studentId } });
    return await this.repository.update(codigo, matriculation);
  }

  remove(codigo: number): Promise<DeleteResult> {
    return this.repository.delete(codigo);
  }
}
