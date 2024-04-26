// "use client"

import ListPublish from "@/components/listPublish";
import { MusicData } from "@/schemas/music.schema";
import { PublishData } from "@/schemas/user.schema";
import api from "@/services/api";
import { useEffect, useState } from "react";
import Image from "next/image"

// import { getImage, StaticImage } from 'next/image';
import Logo from "../assets/luxventus-logo.png"
import ggg from "../assets/LogoHome.svg"
import { useAuth } from "@/contexts/authContext";


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

export async function getAllVeicles() {
  // const response = await fetch("/publish");
  // const veicles = await response.json();
  // return veicles;
  const response = await api.get("/publish")
  return response.data
};

// const fecthPublishData = async () => {
//   const response = await fetch()

//   const response = await api.get("/musics")
//   const musics: MusicData[] = response.data
// }

//  fecth? then? try?
// onde posso usa useEffect?
// use client -> onde tem useEffect useState?
export default async function Home() {

  // const response = await api.get("/publish")
  // const publish: PublishData[] = response.data
  // const publish = response.data

  // console.log(publish)

  // const response = await fetch("/publish");
  // const veicles = await response.json();
  // const response = await api.get("/publish")
  // const publish = await response.json()

  // const { musics2 } = useAuth()
  const publish = await getAllVeicles()

  return (
    <main className="body min-h-screen p-4">
      <h1>oláaaaaaaaaaaaaaaaa</h1>

    Hea
      {/* <img src={Logo} alt="awd" /> */}
      <Image src={Logo} alt="w" width={500} height={100}></Image>
      <Image src={ggg} alt="w" width={500} height={100}></Image>

      {/* <img src={ggg} alt="awd" /> */}
      




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
