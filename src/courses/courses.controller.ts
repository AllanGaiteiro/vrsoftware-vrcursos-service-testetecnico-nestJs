/* eslint-disable prettier/prettier */
import {
  Body, Controller, Delete, Get, Param, Patch, Post
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Controller('courses')
@ApiTags('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post()
  @ApiOperation({summary:'Adicionar um novo Curso'})
  create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiOperation({summary:'Exibir uma lista de Cursos'})
  findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Exibir um Curso'})
  findOne(@Param('id') id: string): Promise<Course> {
    return this.coursesService.findOne({
      where: { id: +id },
    });
  }

  @Patch(':id')
  @ApiOperation({summary:'Atualizar um Curso'})
  update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ): Promise<UpdateResult> {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Deletar um Curso'})
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.coursesService.remove(+id);
  }
}
