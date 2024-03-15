import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { PublishService } from './publish.service';
import { CreatePublishDto } from './dto/create-publish.dto';
import { UpdatePublishDto } from './dto/update-publish.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('publish')
export class PublishController {
  constructor(private readonly publishService: PublishService) { }

  @Post()
  create(@Body() createPublishDto: CreatePublishDto) {
    return this.publishService.create(createPublishDto);
  }

  @Get()
  findAll() {
    return this.publishService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publishService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublishDto: UpdatePublishDto) {
    return this.publishService.update(id, updatePublishDto);
  }

  @Patch('image/:id')
  @UseInterceptors(FileFieldsInterceptor([{ name: "image", maxCount: 1 }]))
  upload(@Param('id') id: string,
    @UploadedFiles() files: {
      image?: Express.Multer.File[]
    }
  ) {
    const { image } = files
    return this.publishService.upload(image[0], id)
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publishService.remove(id);
  }
}
