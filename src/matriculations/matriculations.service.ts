import { Injectable } from '@nestjs/common';
import { MatriculationRepository } from 'src/repositorys/matriculation.repository';
import { CreateMatriculationDto } from './dto/create-matriculation.dto';
import { UpdateMatriculationDto } from './dto/update-matriculation.dto';
import { Matriculation } from './entities/matriculation.entity';

@Injectable()
export class MatriculationsService {
  constructor(private repository: MatriculationRepository) {}
  create(createMatriculationDto: CreateMatriculationDto) {
    return this.repository.createMatriculation(createMatriculationDto);
  }

  findAll(): Promise<Matriculation[]> {
    return this.repository.getMatriculations();
  }

  findOne(id: string) {
    return this.repository.getMatriculation(id);
  }

  update(id: string, updateMatriculationDto: UpdateMatriculationDto) {
    return this.repository.updateMatriculation({
      id,
      matriculation: updateMatriculationDto,
    });
  }

  remove(id: string) {
    return this.repository.deleteMatriculation(id);
  }
}
