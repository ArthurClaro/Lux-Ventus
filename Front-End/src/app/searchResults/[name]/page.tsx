import React from 'react';
import SearchResultsSec from '../../../components/SearchResultsSec';
import 'transition-style';

interface SearchResultsProps {
    params: string; 
}

const searchResults: React.FC<{ params: any }> = ({ params }) => {
    return (
        <div transition-style="in:wipe:right" style={{ paddingTop: "1px" }}>
            <SearchResultsSec params={params} />
        </div>
    );
}

export default searchResults;
