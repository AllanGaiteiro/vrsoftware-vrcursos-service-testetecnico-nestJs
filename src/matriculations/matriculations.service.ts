/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { FindOptionsSelect, Repository } from 'typeorm';
import { CreateMatriculationDto } from './dto/create-matriculation.dto';
import { UpdateMatriculationDto } from './dto/update-matriculation.dto';
import { Matriculation } from './entities/matriculation.entity';

@Injectable()
export class MatriculationsService {
  constructor(
    @Inject('MATRICULATION_REPOSITORY') private repository: Repository<Matriculation>,
  ) {}
  create(createMatriculationDto: CreateMatriculationDto) {
    return this.repository.create(createMatriculationDto);
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

  update(codigo: number, updateMatriculationDto: UpdateMatriculationDto) {
    return this.repository.update(codigo, updateMatriculationDto);
  }

  remove(codigo: number) {
    return this.repository.delete(codigo);
  }
}
