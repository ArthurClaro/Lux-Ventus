"use client"

import { useAuth } from "@/contexts/authContext";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import React, { useEffect } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import PostUnicSec from "./PostUnicSec";

interface PostUnicProps {
    params: {
        id: string;
    };
}

const PostUnic: React.FC<PostUnicProps> = ({ params }) => {

    const { getPostId, getDetailId, getCommentId } = useAuth()

    useEffect(() => {
        (async () => {
            await getPostId(params.id)
            await getDetailId(params.id)
            await getCommentId(params.id)
        })()

    }, []);

    return (
        <>
            <Header paramsCateg={undefined} />
            <main className="containerMain postUnic">
                <PostUnicSec params={params.id} />
            </main>
            <Footer />
        </>
    );
};

export default PostUnic;