"use client"
import { usePlayer } from "@/contexts/playerContext";
import { MusicData } from "@/schemas/music.schema";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayCircleFill } from "react-icons/bs"
import { TbPlayerStop } from "react-icons/tb";


interface CardProps {
    music: MusicData
}

const Card = ({ music }: CardProps) => {
    const { setCurrentMusic, currentMusic } = usePlayer()
    const isPlaying = currentMusic.music_url === music.music_url

    return (
        <div className="flex flex-row justify-items-end, bg-pink-800 w-72 h-64 rounded-lg">
            <Link href={`/${music.id}`} className="flex flex-col items-center min-w-56">
                <p className="m-3 text-xl">{music.name}</p>
                <Image
                    className="m-4 mb-2 mt-2 h-48"
                    width={209}
                    height={186}
                    src={music.cover_image}
                    alt="capa da música"
                />
            </Link>

            <div className="min-h-16 bg-gray-100 flex justify-center rounded-e-lg">
                <button
                    onClick={() => {
                        setCurrentMusic(music, true)
                    }}
                >
                    {isPlaying ? (
                        <TbPlayerStop className="fill-pink-500 w-10 h-10 m-1" />
                    ) : (

                        <BsFillPlayCircleFill className="fill-pink-500 w-10 h-10 m-1" />
                    )}
                </button>
            </div>
        </div>
    )

}

export default Card