import api from "@/services/api";
import CategorySec from "@/components/CategorySec";
import 'transition-style';

interface CategoryProps {
    params: {
        category: string;
    };
}

const Category: React.FC<CategoryProps> = ({ params }) => {

    const formattedCategory = params.category.replace('%20', ' ');

    return (
        <div transition-style="in:wipe:right" style={{ paddingTop: "1px" }}>
            <CategorySec params={formattedCategory} />
        </div>
    );
};

export default Category;
