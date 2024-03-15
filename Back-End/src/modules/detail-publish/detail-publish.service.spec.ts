import { Test, TestingModule } from '@nestjs/testing';
import { DetailPublishService } from './detail-publish.service';

describe('DetailPublishService', () => {
  let service: DetailPublishService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailPublishService],
    }).compile();

    service = module.get<DetailPublishService>(DetailPublishService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
