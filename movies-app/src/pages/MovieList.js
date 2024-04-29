import { useCallback, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import '../App.css';
import { Default as Genre } from '../stories/Genre.stories';
import { GenresList, SortType, InitialSearchValue } from '../constants/constants';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import SortBy from '../components/SortBy/SortBy';
import { getMovieDetailsUrl, updateQueryParams } from '../utils/utils';
import { useFetch } from '../hooks/useFetch';

export const MovieList = () => {
    const [selectedGenre, setSelectedGenre] = useState(GenresList[0]);
    const [sortBy, setSortBy] = useState(SortType[0].value);
    const [titleSearchQuery, setTitleSearchQuery] = useState(InitialSearchValue);
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedGenreQueryParam = searchParams.get('genre');
    const searchQueryParam = searchParams.get('query');

    const url = getMovieDetailsUrl(selectedGenreQueryParam, sortBy, searchQueryParam)
    const [isLoading, responseData] = useFetch(url, [titleSearchQuery, selectedGenre, selectedGenreQueryParam, searchQueryParam]);
    const onGenreSelect = useCallback((genre) => setSelectedGenre(genre), []);
    const onSortBySelect = useCallback((sortByValue) => { 
        setSortBy(sortByValue);
        updateQueryParams(searchParams, setSearchParams, {
            ...((searchQueryParam || titleSearchQuery) && { query: searchQueryParam || titleSearchQuery}),
            ...((selectedGenreQueryParam || selectedGenre) && { genre: selectedGenreQueryParam || selectedGenre }),
            sortBy: sortByValue
        });
    }, [searchParams]);
    return (
        <>
            <div className="App">
                <Outlet />
                <div className="genre-container d-flex justify-content-between align-items-center px-4">
                    <Genre genresList={GenresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />
                    <SortBy selectedSortBy={sortBy} onSortBySelect={onSortBySelect} />
                </div>

                <MovieDetails movieData={responseData} />
            </div>
        </>
    )
}