import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { DetailPublishService } from './detail-publish.service';
import { CreateDetailPublishDto } from './dto/create-detail-publish.dto';
import { UpdateDetailPublishDto } from './dto/update-detail-publish.dto';

@Controller('detail-publish')
export class DetailPublishController {
  constructor(private readonly detailPublishService: DetailPublishService) { }

  @Post(':id')
  create(@Param('id') id: string, @Body() createDetailPublishDto: CreateDetailPublishDto) {
    // console.log("--------------", req.publish)
    return this.detailPublishService.create(createDetailPublishDto, id);
  }

  @Get()
  findAll() {
    return this.detailPublishService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailPublishService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailPublishDto: UpdateDetailPublishDto) {
    return this.detailPublishService.update(id, updateDetailPublishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailPublishService.remove(id);
  }
}
