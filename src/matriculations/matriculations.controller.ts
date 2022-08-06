/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MatriculationsService } from './matriculations.service';
import { CreateMatriculationDto } from './dto/create-matriculation.dto';
import { UpdateMatriculationDto } from './dto/update-matriculation.dto';
import { Matriculation } from './entities/matriculation.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { QueryMatriculationDto } from './dto/query-matriculation.dto';

@Controller('matriculations')
@ApiTags('matriculations')
export class MatriculationsController {
  constructor(private readonly matriculationsService: MatriculationsService) { }

  @Post()
  @ApiOperation({summary:'Adcionar uma nova Matricula'})
  create(
    @Body() createMatriculationDto: CreateMatriculationDto,
  ): Promise<Matriculation> {
    return this.matriculationsService.create(createMatriculationDto);
  }

  @Get()
  @ApiOperation({summary:'Exibir uma lista de Matriculas'})
  findAll(@Query('options') optionsQuery?: QueryMatriculationDto): Promise<Matriculation[]> {
    const options = optionsQuery ? JSON.parse(optionsQuery + '') : null;
    return this.matriculationsService.findAll(options);

  }

  @Get(':id')
  @ApiOperation({summary:'Exibir uma Matricula'})
  findOne(@Param('id') id: string): Promise<Matriculation> {
    return this.matriculationsService.findOne({
      //select: { codigo: true },
      where: { id: +id },
    });
  }

  @Patch(':id')
  @ApiOperation({summary:'Atualizar uma Matricula'})
  update(
    @Param('id') id: string,
    @Body() updateMatriculationDto: UpdateMatriculationDto,
  ): Promise<UpdateResult> {
    return this.matriculationsService.update(+id, updateMatriculationDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Deletar uma Matricula'})
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.matriculationsService.remove(+id);
  }
}
