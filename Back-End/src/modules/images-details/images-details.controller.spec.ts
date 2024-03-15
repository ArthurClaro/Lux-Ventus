import { Test, TestingModule } from '@nestjs/testing';
import { ImagesDetailsController } from './images-details.controller';
import { ImagesDetailsService } from './images-details.service';

describe('ImagesDetailsController', () => {
  let controller: ImagesDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesDetailsController],
      providers: [ImagesDetailsService],
    }).compile();

    controller = module.get<ImagesDetailsController>(ImagesDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
