import { IsNotEmpty, IsString } from "class-validator";

export class CreateImagesDetailDto {
    @IsString()
    @IsNotEmpty()
    images: string
}
