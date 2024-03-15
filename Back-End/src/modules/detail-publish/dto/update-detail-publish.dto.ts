import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailPublishDto } from './create-detail-publish.dto';

export class UpdateDetailPublishDto extends PartialType(CreateDetailPublishDto) {}
