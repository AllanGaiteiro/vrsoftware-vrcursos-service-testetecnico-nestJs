import { Test, TestingModule } from '@nestjs/testing';
import { MatriculationsController } from './matriculations.controller';
import { MatriculationsService } from './matriculations.service';

describe('MatriculationsController', () => {
  let controller: MatriculationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatriculationsController],
      providers: [MatriculationsService],
    }).compile();

    controller = module.get<MatriculationsController>(MatriculationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
