import { Test, TestingModule } from '@nestjs/testing';
import { DetailPublishController } from './detail-publish.controller';
import { DetailPublishService } from './detail-publish.service';

describe('DetailPublishController', () => {
  let controller: DetailPublishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailPublishController],
      providers: [DetailPublishService],
    }).compile();

    controller = module.get<DetailPublishController>(DetailPublishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
