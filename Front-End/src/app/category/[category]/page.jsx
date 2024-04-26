import api from "@/services/api";
import CategorySec from "@/components/CategorySec";
import 'transition-style';

// export const revalidate = 90;

export async function generateStaticParams() {
    try {
        const response = await api.get("/publish");
        const categories = response.data.map(element => element.category.replace('%20', ' '));
        return categories;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

const Category = ({ params }) => {
    const formattedCategory = params.category.replace('%20', ' ');

    return (
        <div transition-style="in:wipe:right" style={{ paddingTop: "1px" }}>
            <CategorySec params={formattedCategory} />
        </div>
    );
};

export default Category;
