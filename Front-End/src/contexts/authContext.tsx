import { createContext, Dispatch, FC, Key, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import api from "@/services/api";
import Toast from "@/components/toast";
import { PublishData } from "@/schemas/user.schema";
import { useRouter } from "next/navigation";

interface Props {
    children: ReactNode,
}

interface Publish {
    category: string;
    publiHot: boolean;
}

interface CategoryCount {
    name: string;
    count: number;
}

interface DetailPost {
    id: Key | null | undefined;
    title: ReactNode;
    description: ReactNode;
    ImagesDetail: any;
}

interface Comment {
    id: Key | null | undefined;
    name: ReactNode;
    createdAt: ReactNode;
    description: ReactNode;
    likes: ReactNode;
}

interface AuthContextType {
    allPublish: any[];
    publishHot: any[];
    categoryCounts: CategoryCount[];
    firstTwoArrays: any[];
    lastThreeArrays: any[];
    publishCategory: any[];
    postUnic: PublishData
    setPostUnic: Dispatch<SetStateAction<PublishData>>
    detailPost: DetailPost[];
    commentPost: Comment[];
    postsRender: any[];
    visibleModal: boolean;
    loader: boolean;
    dataLoad: boolean;
    setAllPublish: React.Dispatch<React.SetStateAction<any[]>>;
    getCategoryName: (category: string) => void;
    getPostId: (id: string) => void;
    getDetailId: (id: string) => void;
    getCommentId: (id: string) => void;
    postCreate: (formData: any, params: string) => void;
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
    setPostsRender: React.Dispatch<React.SetStateAction<any[]>>;
}

const defaultPostUnic: PublishData = {
    id: "",
    title: "",
    description: "",
    image: "",
    publiHot: false,
    category: "",
    host: "",
    imgHost: "",
    createdAt: "",
    comments: [],
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
    const router = useRouter();

    const [allPublish, setAllPublish] = useState<any[]>([]);
    const [publishHot, setPublishHot] = useState<any[]>([]);
    const [firstTwoArrays, setFirstTwoArrays] = useState<PublishData[]>([]);
    const [lastThreeArrays, setLastThreeArrays] = useState<PublishData[]>([]);
    const [categoryCounts, setCategoryCounts] = useState<CategoryCount[]>([]);
    const [publishCategory, setPublishCategory] = useState<any[]>([]);
    const [postUnic, setPostUnic] = useState<PublishData>(defaultPostUnic);
    const [detailPost, setDetailPost] = useState<DetailPost[]>([]);
    const [commentPost, setCommentPost] = useState<Comment[]>([]);
    const [postsRender, setPostsRender] = useState<any[]>([]);
    const [visibleModal, setVisibleModal] = useState(false);
    const [loader, setLoader] = useState(true);
    const [dataLoad, setDataLoad] = useState(false)

    const arr = async () => {
        setDataLoad(true)
        try {
            const response = await fetch('https://lux-ventus.onrender.com/')
            const json = await response.text()
        } catch (error) {
            setDataLoad(true)
        } finally {
            setDataLoad(false)
            fetchData();
        }
    }
    useEffect(() => {
        arr()
    }, []);


    const fetchData = async () => {
        try {
            const { data } = await api.get('/publish');

            setAllPublish(data);

            const categories: Record<string, number> = data.reduce((accumulator: Record<string, number>, { category }: Publish) => {
                accumulator[category] = (accumulator[category] || 0) + 1;
                return accumulator;
            }, {});

            setCategoryCounts(Object.entries(categories).map(([name, count]) => ({ name, count })));

            const shuffledArrays = shuffleArray(data.filter(({ publiHot }: Publish) => !publiHot));
            setFirstTwoArrays(shuffledArrays.slice(0, 2));
            setLastThreeArrays(shuffledArrays.slice(2));
            setPublishHot(data.filter(({ publiHot }: Publish) => publiHot));
        } catch (error) {
            console.error(error);
            setLoader(true)
        } finally {
            setTimeout(() => {
                setLoader(false);
            }, 5000);
        }
    };

    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const getCategoryName = async (category: string) => {
        try {
            const { data } = await api.get(`/publish/category/${category}`);
            setPublishCategory(data);
        } catch (error) {
            Toast({ message: "Sem publicações disponíveis.", isSuccess: false });
            router.push("/");
        }
    };

    const getPostId = async (id: string) => {
        try {
            const { data } = await api.get(`/publish/unic/${id}`);
            setPostUnic(data);
        } catch (error) {
            console.error(error);
            Toast({ message: "Publicação não encontrada.", isSuccess: false });
            router.push("/");
        }
    };

    const getDetailId = async (id: string) => {
        try {
            const { data } = await api.get(`/detail-publish/${id}`);
            setDetailPost(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getCommentId = async (id: string) => {
        try {
            const { data } = await api.get(`/comments/${id}`);
            setCommentPost(data);
        } catch (error) {
            console.error(error);
        }
    };

    const postCreate = async (formData: any, params: string) => {
        try {
            const { data } = await api.post(`/comments/${params}`, formData);

            Toast({ message: "Cadastro efetuado", isSuccess: true });
            getCommentId(params);
            getPostId(params);
            fetchData();
        } catch (error) {
            if (error instanceof Error && error.message) {
                console.error(error.message);
            } else {
                console.error("Ocorreu um erro desconhecido");
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{
                allPublish,
                publishHot,
                categoryCounts,
                firstTwoArrays,
                lastThreeArrays,
                setAllPublish,
                getCategoryName,
                publishCategory,
                postUnic,
                setPostUnic,
                getPostId,
                getDetailId,
                detailPost,
                getCommentId,
                commentPost,
                postCreate,
                postsRender,
                setPostsRender,
                visibleModal,
                setVisibleModal,
                loader,
                setLoader,
                dataLoad
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
