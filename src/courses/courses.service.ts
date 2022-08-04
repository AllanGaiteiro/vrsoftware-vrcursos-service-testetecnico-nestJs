/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, FindOptionsSelect, Repository, UpdateResult } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('COURSE_REPOSITORY') private repository: Repository<Course>,
  ) {}
  create(createCourseDto: CreateCourseDto): Course {
    return this.repository.create(createCourseDto);
  }

  findAll(): Promise<Course[]> {
    return this.repository.find();
  }

  findOne(options: {
    select?: FindOptionsSelect<Course>;
    where?: Partial<Course>;
  }): Promise<Course> {
    return this.repository.findOne({
      select: options.select,
      where: options.where,
    });
  }

  update(codigo: number, updateCourseDto: UpdateCourseDto): Promise<UpdateResult> {
    return this.repository.update(codigo, updateCourseDto);
  }

  remove(codigo: number): Promise<DeleteResult>{
    return this.repository.delete(codigo);
  }
}
