import { Test, TestingModule } from '@nestjs/testing';
import { ObjetivoController } from './objetivo.controller';
import { ObjetivoService } from './objetivo.service';

describe('ObjetivoController', () => {
  let controller: ObjetivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjetivoController],
      providers: [ObjetivoService],
    }).compile();

    controller = module.get<ObjetivoController>(ObjetivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
