import api from "@/services/api";
import PostUnic from "../../../components/PostUnic";
import 'transition-style';

export const revalidate = 90;

export async function generateStaticParams() {
    const { data } = await api.get('/publish');
    const unicPost = data.map((elemt, index) => ({ id: `${index + 1}` }));
    return unicPost;
}

const PostId = ({ params }) => {
    return (
        <div transition-style="in:wipe:right" style={{ paddingTop: "1px" }}>
            <PostUnic params={params} />
        </div>
    );
};

export default PostId;
