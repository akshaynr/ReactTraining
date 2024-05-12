'use client'
import './SortBy.css';
import { SortType } from '../../constants/constants'
import { useRouter } from 'next/navigation';
 
const SortBy = ({ searchParams }) => {
    const router = useRouter();
    const { search, searchBy, sortBy } = searchParams;
    let url = `/?search=${search}&searchBy=${searchBy}`

    const onSortByChange = (event) => {
        url += `&sortBy=${event.target.value}`;
        router.replace(url);
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