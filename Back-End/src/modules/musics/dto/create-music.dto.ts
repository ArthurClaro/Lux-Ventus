import { IsOptional, IsString } from "class-validator"

export class CreateMusicDto {
    @IsString()
    name: string
    
    @IsString()
    album: string
    
    @IsString()
    artist: string
    
    @IsString()
    year: string
    
    @IsString()
    genre: string
    
    @IsString()
    @IsOptional()
    cover_image: string | null
    
    @IsString()
    @IsOptional()
    music_url: string | null

}
