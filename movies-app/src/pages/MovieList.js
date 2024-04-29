import { useCallback, useState } from 'react';
import '../App.css';
import { Default as Counter } from '../stories/Counter.stories';
import { Default as Search } from '../stories/Search.stories';
import { Default as Genre } from '../stories/Genre.stories';
import { AddMovieModal } from '../stories/Modal.stories';
import { GenresList, SortType, InitialCounterValue, InitialSearchValue } from '../constants/constants';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import MovieTile from '../components/MovieTile/MovieTile';
import SortBy from '../components/SortBy/SortBy';

export const MovieList = () => {
    const [selectedGenre, setSelectedGenre] = useState(GenresList[0]);
    const [movieDetails, setSelectedMovie] = useState('');
    const [sortBy, setSortBy] = useState(SortType[0].value);
    const [isModalOpen, setModalOpen] = useState(false);
    const [titleSearchQuery, setTitleSearchQuery] = useState(InitialSearchValue);

    const onSearchSubmit = useCallback((query) => {
        console.log(`Search Query: ${query}`);
        setTitleSearchQuery(query)
    }, []);
    const onGenreSelect = useCallback((genre) => setSelectedGenre(genre), []);
    const onMovieSelect = useCallback((movie) => setSelectedMovie(movie), []);
    const onSortBySelect = useCallback((sortByValue) => setSortBy(sortByValue), []);
    const onModalEvent = useCallback((isOpen) => setModalOpen(isOpen), []);
    const openModal = () => {
        setModalOpen(true);
    }
    return (
        <>
            <div className="App">
                {
                    movieDetails
                        ?
                        <MovieTile movieDetails={movieDetails} onMovieSelect={onMovieSelect} />
                        : (

                            <div className="header">
                                <Counter initialCounterValue={InitialCounterValue} />
                                <nav className="d-flex justify-content-between align-items-center font-red px-4">
                                    <span><strong>netflix</strong>Roulette</span>
                                    <button className="font-red add-movie" onClick={openModal} id="exampleModal" data-bs-target="#exampleModal">+ Add Movie</button>
                                    <AddMovieModal isModalOpen={isModalOpen} modalHeader="Add Movie" onClose={onModalEvent} />
                                </nav>
                                <Search initialSearchQuery={initialSearchValue} onSearch={onSearchSubmit} />
                            </div>
                        )
                }

                <div className="genre-container d-flex justify-content-between align-items-center px-4">
                    <Genre genresList={GenresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />
                    <SortBy selectedSortBy={sortBy} onSortBySelect={onSortBySelect} />
                </div>

                <MovieDetails onMovieSelect={onMovieSelect} selectedGenre={selectedGenre} selectedSortBy={sortBy} titleSearchQuery={titleSearchQuery} />
            </div>
        </>
    )
}