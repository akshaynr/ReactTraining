'use client'
import { useCallback, useState } from 'react';
import Search from './Search/Search';
// import { AddMovieModal } from '../../stories/Modal.stories';
import './SearchHeader.css'

const initialSearchValue = '';

const SearchHeader = ({ searchParams }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [titleSearchQuery, setTitleSearchQuery] = useState(initialSearchValue);

    const { search, searchBy, sortBy } = searchParams;

    // const onModalEvent = useCallback((isOpen) => setModalOpen(isOpen), []);

    const openModal = () => {
        setModalOpen(true);
    }
    return (
        <div className="header">
            <nav className="d-flex justify-content-between align-items-center font-red px-4 pt-4">
                <span><strong>netflix</strong>Roulette</span>
                <button className="font-red add-movie" onClick={openModal} id="exampleModal" data-bs-target="#exampleModal">+ Add Movie</button>
                {/* <AddMovieModal isModalOpen={isModalOpen} modalHeader="Add Movie" onClose={onModalEvent} /> */}
            </nav>
            <Search initialSearchQuery={initialSearchValue} searchParams={searchParams} />
        </div>
    )
}

export default SearchHeader;