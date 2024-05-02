import { Test, TestingModule } from '@nestjs/testing';
import { PersistenceController } from './persistence.controller';

describe('PersistenceController', () => {
  let controller: PersistenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersistenceController],
    }).compile();

    controller = module.get<PersistenceController>(PersistenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
