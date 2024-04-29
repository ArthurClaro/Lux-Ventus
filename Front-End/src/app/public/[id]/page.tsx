import api from "@/services/api";
import PostUnic from "../../../components/PostUnic";
import 'transition-style';

interface PostIdProps {
    params: {
        id: string;
    };
}


export const revalidate = 90;

export async function generateStaticParams() {
    const { data } = await api.get('/publish');
    const unicPost = data.map((elemt: any, index: any) => ({ id: `${index + 1}` }));
    return unicPost;
}

const PostId: React.FC<PostIdProps> = ({ params }) => {

    return (
        <div transition-style="in:wipe:right" style={{ paddingTop: "1px" }}>
            <PostUnic params={params} />
        </div>
    );
};

export default PostId;
