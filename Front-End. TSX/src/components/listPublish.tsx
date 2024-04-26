"use client"
import { MusicData } from "@/schemas/music.schema";
import Card from "./card";
import { usePlayer } from "@/contexts/playerContext";
import { useEffect, useState } from "react";


// interface ListTrackProps {
//     musics: MusicData[]
// }

const ListPublish = ({ publish }: any) => {
    // const [musics, setMusics] = useState([]);

    // const { setPlaylist } = usePlayer()
    // useEffect(() => {
    //     setMusics(publish)
    // }, [])

    // console.log(musics)
    // console.log(publish)

    return (
        <>
            {/* <ul >
                {publish.map((publish: any) => {
                    <li key={publish.id}>

                        <h2>{publish.title}</h2>
                        <h2>{publish.description}</h2>
                        <h2>{publish.publiHot}</h2>
                        <h2>{publish.category}</h2>
                        <h2>{publish.host}</h2>
                        <h2>{publish.imgHost}</h2>
                        <h2>{publish.createdAt}</h2>

                    </li>
                })
                }
            </ul> */}

            {/* <ul>
                {Array.isArray(userMETA) && userMETA.length > 0 ? (
                    userMETA.map((user) => (
                        <li key={user.id}>

                            <h2>{user.name}</h2>
                      
                            <button>Edit</button>
                        </li>
                    ))
                ) : (
                    <p>Nenhum usuário encontrado.</p>
                )}
            </ul> */}
        </>
    )
}


export default ListPublish