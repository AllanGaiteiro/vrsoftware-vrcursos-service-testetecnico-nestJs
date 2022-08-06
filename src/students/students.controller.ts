/* eslint-disable prettier/prettier */
import {
  Body, Controller, Delete, Get, Param, Patch, Post
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { STATUS_CODES } from 'http';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { StudentsService } from './students.service';

@Controller('students')
@ApiTags('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post()
  @ApiOperation({summary:'Adcionar um novo Estudante'})
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    console.log(STATUS_CODES[200])
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  @ApiOperation({summary:'Exibir uma lista de Estudante'})
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Exibir um Estudante'})
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentsService.findOne({
      //select: { id: true },
      where: { id: +id },
    });
  }

  @Patch(':id')
  @ApiOperation({summary:'Atualizar um Estudante'})
  update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<UpdateResult> {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Deletar um Estudante'})
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.studentsService.remove(+id);
  }
}
