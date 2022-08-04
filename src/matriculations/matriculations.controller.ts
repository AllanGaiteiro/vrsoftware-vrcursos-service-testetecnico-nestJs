/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatriculationsService } from './matriculations.service';
import { CreateMatriculationDto } from './dto/create-matriculation.dto';
import { UpdateMatriculationDto } from './dto/update-matriculation.dto';
import { Matriculation } from './entities/matriculation.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('matriculations')
export class MatriculationsController {
  constructor(private readonly matriculationsService: MatriculationsService) {}

  @Post()
  create(
    @Body() createMatriculationDto: CreateMatriculationDto,
  ): Promise<Matriculation> {
    return this.matriculationsService.create(createMatriculationDto);
  }

  @Get()
  findAll(): Promise<Matriculation[]> {
    return this.matriculationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Matriculation> {
    return this.matriculationsService.findOne({
      select: { codigo: true },
      where: { codigo: +id },
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMatriculationDto: UpdateMatriculationDto,
  ): Promise<UpdateResult> {
    return this.matriculationsService.update(+id, updateMatriculationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.matriculationsService.remove(+id);
  }
}
