/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('COURSE_REPOSITORY') private repository: Repository<Course>,
  ) { }
  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = new Course();
    course.menu = createCourseDto.menu;
    course.description = createCourseDto.description;
    return await this.repository.save(course);
  }

  findAll(): Promise<Course[]> {
    return this.repository.find();
  }

  findOne(options: {
    //select?: FindOptionsSelect<Course>;
    where?: Partial<Course>;
  }): Promise<Course> {
    return this.repository.findOne({
      //select: options.select,
      where: options.where,
    });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<UpdateResult> {
    return await this.repository.update(id, updateCourseDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
