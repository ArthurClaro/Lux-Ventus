import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsDate, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator"
import moment from "moment"

export class CreatePublishDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    image: string

    @IsString()
    @IsNotEmpty()
    category: string

    @IsString()
    @IsNotEmpty()
    host: string

    @IsString()
    @IsNotEmpty()
    imgHost: string

    @IsOptional()
    publiHot: boolean

    // @IsDate()
    // @IsOptional()
    // @Transform(({ value }) => {
    //     const date = new Date(value);
    //     const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    //     const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    //     const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    //     return `${month} ${day}th, ${year}`;
    // })
    // createdAt: Date;

}
