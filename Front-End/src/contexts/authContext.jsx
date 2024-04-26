import Toast from "@/components/toast";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const router = useRouter();

    const [allPublish, setAllPublish] = useState([]);
    const [publishHot, setPublishHot] = useState([]);
    const [firstTwoArrays, setFirstTwoArrays] = useState([]);
    const [lastThreeArrays, setLastThreeArrays] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState([]);
    const [publishCategory, setPublishCategory] = useState([]);
    const [postUnic, setPostUnic] = useState({});
    const [detailPost, setDetailPost] = useState([]);
    const [commentPost, setCommentPost] = useState([]);
    const [postsRender, setPostsRender] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true);
                const { data } = await api.get('/publish');

                setAllPublish(data);

                const categories = data.reduce((accumulator, { category }) => {
                    accumulator[category] = (accumulator[category] || 0) + 1;
                    return accumulator;
                }, {});

                setCategoryCounts(Object.entries(categories).map(([name, count]) => ({ name, count })));

                const shuffledArrays = shuffleArray(data.filter(({ publiHot }) => !publiHot));
                setFirstTwoArrays(shuffledArrays.slice(0, 2));
                setLastThreeArrays(shuffledArrays.slice(2));
                setPublishHot(data.filter(({ publiHot }) => publiHot));
            } catch (error) {
                console.error(error);
            } finally {
                setTimeout(() => {
                    setLoader(false);
                }, "5000");
            }
        };

        fetchData();
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const getCategoryName = async (category) => {
        try {
            const { data } = await api.get(`/publish/category/${category}`);
            setPublishCategory(data);
        } catch (error) {
            console.error(error);
            Toast({ message: "Sem publicações disponíveis.", isSuccess: false });
            router.push("/");
        }
    };

    const getPostId = async (id) => {
        try {
            const { data } = await api.get(`/publish/unic/${id}`);
            setPostUnic(data);
        } catch (error) {
            console.error(error);
            Toast({ message: "Publicação não encontrada.", isSuccess: false });
            router.push("/");
        }
    };

    const getDetailId = async (id) => {
        try {
            const { data } = await api.get(`/detail-publish/${id}`);
            setDetailPost(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getCommentId = async (id) => {
        try {
            const { data } = await api.get(`/comments/${id}`);
            setCommentPost(data);
        } catch (error) {
            console.error(error);
        }
    };

    const postCreate = async (formData, params) => {
        try {
            const { data } = await api.post(`/comments/${params}`, formData);

            Toast({ message: "Cadastro efetuado", isSuccess: true });
            getCommentId(params);
            getPostId(params);
            fetchData();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <AuthContext.Provider value={{
            allPublish,
            publishHot,
            categoryCounts,
            firstTwoArrays,
            lastThreeArrays,
            setAllPublish,
            getCategoryName,
            publishCategory,
            postUnic,
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
            setLoader
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
