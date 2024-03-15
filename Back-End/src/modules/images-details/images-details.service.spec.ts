import { Test, TestingModule } from '@nestjs/testing';
import { ImagesDetailsService } from './images-details.service';

describe('ImagesDetailsService', () => {
  let service: ImagesDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagesDetailsService],
    }).compile();

    service = module.get<ImagesDetailsService>(ImagesDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
