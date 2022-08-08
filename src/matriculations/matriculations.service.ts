/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { Course } from 'src/courses/entities/course.entity';
import { PrismaService } from 'src/prisma.service';
import { CreateMatriculationDto } from './dto/create-matriculation.dto';
import { UpdateMatriculationDto } from './dto/update-matriculation.dto';
import { Matriculation } from './entities/matriculation.entity';

@Injectable()
export class MatriculationsService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createMatriculationDto: CreateMatriculationDto): Promise<any> {
    return await this.prisma.matriculation.create({ data: createMatriculationDto });
  }

  findAll(options?: {
    //select: FindOptionsSelect<Matriculation>;
    where?: Partial<Matriculation>
    relations?: string[];
  }): PrismaPromise<any[]> {
    return this.prisma.matriculation.findMany({
      where: options?.where || {},
      select: {
        id: true,
        course: true,
        student: true
      }
    });
  }

  findOne(options: {
    //select: FindOptionsSelect<Matriculation>;
    where: Partial<Matriculation>;
  }): Promise<any> {
    console.log('find', options, Course.name.toLowerCase())
    return this.prisma.matriculation.findUnique({
      where: options.where,
      select: {
        id: true,
        course: true,
        student: true
      }
    });
  }

  async update(id: number, updateMatriculationDto: UpdateMatriculationDto): Promise<any> {
    return await this.prisma.matriculation.update({ data: updateMatriculationDto, where: { id } });
  }

  remove(id: number): Promise<any> {
    return this.prisma.matriculation.delete({ where: { id } });
  }
}
