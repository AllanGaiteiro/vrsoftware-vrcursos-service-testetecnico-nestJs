/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    private prisma: PrismaService,
  ) { }
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = new Student();
    student.name = createStudentDto.name;
    return await this.prisma.student.create({ data: student });
  }

  findAll(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  findOne(options: {
    //select: FindOptionsSelect<Student>;
    where: Partial<Student>;
  }): Promise<Student> {
    return this.prisma.student.findUnique({
      //select: options.select,
      where: options.where,
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    return await this.prisma.student.update({ data: updateStudentDto, where: { id } });
  }

  remove(id: number): Promise<any> {
    return this.prisma.student.delete({ where: { id } });
  }
}
