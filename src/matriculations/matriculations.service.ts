/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, FindOptionsSelect, Repository, UpdateResult } from 'typeorm';
import { CreateMatriculationDto } from './dto/create-matriculation.dto';
import { UpdateMatriculationDto } from './dto/update-matriculation.dto';
import { Matriculation } from './entities/matriculation.entity';

@Injectable()
export class MatriculationsService {
  constructor(
    @Inject('MATRICULATION_REPOSITORY') private repository: Repository<Matriculation>,
  ) {}
    /*
        console.log('courses create')
    const course = new Course();
    course.ementa = createCourseDto.ementa;
    course.descricao = createCourseDto.descricao;
    return await this.repository.save(course);
    */

  async create(createMatriculationDto: CreateMatriculationDto): Promise<Matriculation> {
    const matriculation = new Matriculation();
    matriculation.codigoAluno = createMatriculationDto.codigoAluno;
    matriculation.codigoCurso = createMatriculationDto.codigoCurso;
    return await this.repository.save(matriculation);
  }

  findAll(): Promise<Matriculation[]> {
    return this.repository.find();
  }

  findOne(options: {
    select: FindOptionsSelect<Matriculation>;
    where: Partial<Matriculation>;
  }): Promise<Matriculation> {
    return this.repository.findOne({
      select: options.select,
      where: options.where,
    });
  }

  async update(codigo: number, updateMatriculationDto: UpdateMatriculationDto): Promise<UpdateResult> {
    return await this.repository.update(codigo, updateMatriculationDto);
  }

  remove(codigo: number): Promise<DeleteResult> {
    return this.repository.delete(codigo);
  }
}
