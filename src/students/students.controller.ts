/* eslint-disable prettier/prettier */
import {
  Body, Controller, Delete, Get, Param, Patch, Post
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentsService.findOne({
      //select: { id: true },
      where: { id: +id },
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<UpdateResult> {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.studentsService.remove(+id);
  }
}
