/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    private prisma: PrismaService,
  ) { }
  async create(createCourseDto: CreateCourseDto): Promise<any> {
    const data = {
      menu: createCourseDto.menu,
      description: createCourseDto.description
    };

    return await this.prisma.course.create({
      data
    });
  }

  findAll(): Promise<Course[]> {
    return this.prisma.course.findMany();
  }

  findOne(options: {
    //select?: FindOptionsSelect<Course>;
    where?: Partial<Course>;
  }): Promise<any> {
    return this.prisma.course.findUnique({
      //select: options.select,
      where: { id: options.where.id },
    });
  }

  async update(id: number, data: UpdateCourseDto): Promise<Course> {
    return await this.prisma.course.update({ data, where: { id } });
  }

  remove(id: number): Promise<any> {
    return this.prisma.course.delete({ where: { id } });
  }

}
