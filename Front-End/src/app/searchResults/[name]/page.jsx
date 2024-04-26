import SearchResultsSec from "../../../components/SearchResultsSec"
import 'transition-style';

const searchResults = async ({ params }) => {
    return (
            <div transition-style="in:wipe:right" style={{ paddingTop: "1px" }}>
                <SearchResultsSec params={params} />
            </div>
    )
}

export default searchResults