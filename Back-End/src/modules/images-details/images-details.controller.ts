import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ImagesDetailsService } from './images-details.service';
import { CreateImagesDetailDto } from './dto/create-images-detail.dto';
import { UpdateImagesDetailDto } from './dto/update-images-detail.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('images-details')
export class ImagesDetailsController {
  constructor(private readonly imagesDetailsService: ImagesDetailsService) { }

  @Post(':id')
  create(@Param('id') id: string, @Body() createImagesDetailDto: CreateImagesDetailDto) {
    return this.imagesDetailsService.create(createImagesDetailDto, id);
  }

  @Get()
  findAll() {
    return this.imagesDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagesDetailDto: UpdateImagesDetailDto) {
    return this.imagesDetailsService.update(+id, updateImagesDetailDto);
  }

  @Patch('image/:id')
  @UseInterceptors(FileFieldsInterceptor([{ name: "image", maxCount: 1 }]))
  upload(@Param('id') id: string,
    @UploadedFiles() files: {
      image?: Express.Multer.File[]
    }
  ) {
    const { image } = files
    return this.imagesDetailsService.upload(image[0], id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesDetailsService.remove(id);
  }
}
