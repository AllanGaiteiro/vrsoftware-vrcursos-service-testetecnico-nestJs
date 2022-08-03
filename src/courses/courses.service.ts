import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../repositorys/course.repository';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(private repository: CourseRepository) {}
  create(createCourseDto: CreateCourseDto) {
    return this.repository.createCourse(createCourseDto);
  }

  findAll(): Promise<Course[]> {
    return this.repository.getCourses();
  }

  findOne(id: string) {
    return this.repository.getCourse(id);
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.repository.updateCourse(id, updateCourseDto);
  }

  remove(id: string) {
    return this.repository.deleteCourse(id);
  }
}
