import { Test, TestingModule } from '@nestjs/testing';
import { MatriculationsService } from './matriculations.service';

describe('MatriculationsService', () => {
  let service: MatriculationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatriculationsService],
    }).compile();

    service = module.get<MatriculationsService>(MatriculationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
