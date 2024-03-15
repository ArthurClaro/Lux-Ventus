import { PartialType } from '@nestjs/mapped-types';
import { CreateImagesDetailDto } from './create-images-detail.dto';

export class UpdateImagesDetailDto extends PartialType(CreateImagesDetailDto) {}
