import { useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { Default as Counter } from '../../stories/Counter.stories';
import { Default as Search } from '../../stories/Search.stories';
import { AddMovieModal } from '../../stories/Modal.stories';
import { updateQueryParams } from '../../utils/utils';
import { GenresList, SortType } from '../../constants/constants';


const initialCounterValue = 0;
const initialSearchValue = '';

const SearchHeader = ({ }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [titleSearchQuery, setTitleSearchQuery] = useState(initialSearchValue);
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedGenre = searchParams.get('genre');
    const searchQuery = searchParams.get('query');
    const sortByQuery = searchParams.get('sortBy');

    useEffect(() => {
        if (searchQuery) {
            setTitleSearchQuery(searchQuery);
        }
    }, [titleSearchQuery])

    const onSearchSubmit = useCallback((query) => {
        setTitleSearchQuery(query);
        if(!query) searchParams.delete('query');
        updateQueryParams(searchParams, setSearchParams, {
            ...(query && { query }),
            genre: selectedGenre || GenresList[0],
            sortBy: sortByQuery || SortType[0].value
        });
    }, [titleSearchQuery]);
    const onModalEvent = useCallback((isOpen) => setModalOpen(isOpen), []);

    const openModal = () => {
        setModalOpen(true);
    }
    return (
        <div className="header">
            <Counter initialCounterValue={initialCounterValue} />
            <nav className="d-flex justify-content-between align-items-center font-red px-4">
                <span><strong>netflix</strong>Roulette</span>
                <button className="font-red add-movie" onClick={openModal} id="exampleModal" data-bs-target="#exampleModal">+ Add Movie</button>
                <AddMovieModal isModalOpen={isModalOpen} modalHeader="Add Movie" onClose={onModalEvent} />
            </nav>
            <Search initialSearchQuery={initialSearchValue} onSearch={onSearchSubmit} />
        </div>
    )
}

export default SearchHeader;