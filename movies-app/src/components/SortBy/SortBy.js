import { useState } from 'react';
import './SortBy.css';
import { SortType } from '../../constants/constants'
 
const SortBy = ({ selectedSortBy, onSortBySelect }) => {
    const [sortBy, setSortBy] = useState(selectedSortBy);

    const onSortByChange = (event) => {
        setSortBy(event.target.value);
        onSortBySelect(event.target.value);
    }

    return (
        <div className="filter">
            <p>Sort By</p>
            <form>
                <select name="sortBy" id="genre-sort-by" value={sortBy} onChange={onSortByChange}>
                    {
                        SortType.map(({ displayName, value }) => <option key={value} value={value}>{displayName}</option>)
                    }
                </select>
            </form>
        </div>
    )
}

export default SortBy;