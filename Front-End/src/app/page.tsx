// "use client"

import ListPublish from "@/components/listPublish";
import { MusicData } from "@/schemas/music.schema";
import { PublishData } from "@/schemas/user.schema";
import api from "@/services/api";
import { useEffect, useState } from "react";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export interface PublishData22 {
  title: String
  description: String
  image: String
  publiHot: boolean
  category: String
  host: String
  imgHost: String
  createdAt: String


  //   export const MusicSchema = z.object({
  //     id: z.string(),
  //     name: z.string(),
  //     album: z.string(),
  //     artist: z.string(),
  //     genre: z.string(),
  //     year: z.string(),
  //     cover_image: z.string(),
  //     music_url: z.string(),
  //   })

  // export type MusicData = z.infer<typeof MusicSchema>
}

// const fecthPublishData = async () => {
//   const response = await fetch()

//   const response = await api.get("/musics")
//   const musics: MusicData[] = response.data
// }

export default async function Home() {
  // const [att, setAtt] = useState([]);

  const response = await api.get("/publish")
  // const publish: PublishData[] = response.data
  const publish = response.data
  // setAtt(publish)

  console.log(publish)
 
  return (
    <main className="body min-h-screen p-4">
      <h1>oláaaaaaaaaaaaaaaaa</h1>
      {/* <ListPublish publish={publish} /> */}

      <ul>
        {publish.map((publishItem: any) => (
          <li key={publishItem.id}>
            <h2>{publishItem.title}</h2>
            <p>{publishItem.description}</p>
            <img src={publishItem.image} ></img>
            <p>{publishItem.publiHot}</p>
            <p>{publishItem.category}</p>
            <p>{publishItem.host}</p>
            <p>{publishItem.imgHost}</p>
            <p>{publishItem.createdAt}</p>
          </li>
        ))}
      </ul>

    </main>
  );
}
