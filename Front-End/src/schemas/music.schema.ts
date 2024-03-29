import { z } from "zod";

export const MusicSchema = z.object({
    id: z.string(),
    name: z.string(),
    album: z.string(),
    artist: z.string(),
    genre: z.string(),
    year: z.string(),
    cover_image: z.string(),
    music_url: z.string(),
})

export type MusicData = z.infer<typeof MusicSchema>

export const MusicSchemaRequest = MusicSchema.omit({
    id: true,
    cover_image: true,
    music_url: true
});

export type musicRequest = z.infer<typeof MusicSchemaRequest>;

export interface CurrentMusicType extends MusicData {
    duration?: number;
    curTime?: number;
    isPlaying?: boolean;
}

export type PlayerContextType = {
    currentMusic: CurrentMusicType;
    setCurrentMusic: (cm: Partial<CurrentMusicType>, replace?: boolean) => void;
    playList: MusicData[];
};