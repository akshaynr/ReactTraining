import { useMemo } from 'react';
import { Movies } from '../../constants/constants'
import MovieCard from './MovieCard/MovieCard';
import './MovieDetails.css'

const MovieDetails = ({ onMovieSelect, selectedGenre, selectedSortBy }) => {

    const sortAndFilterMovies = (selectedGenre, selectedSortBy) => {
        const sortedMovies = selectedSortBy === 'release_date' 
            ? Movies.sort((a,b) => new Date(b.release_date) - new Date(a.release_date)) 
            : Movies.sort((a,b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        return selectedGenre === 'All' 
            ? sortedMovies
            : sortedMovies.filter((element) => element.genres.some((value) => value === selectedGenre));
    }
    const moviesList =  useMemo(() => sortAndFilterMovies(selectedGenre, selectedSortBy), [selectedGenre, selectedSortBy])
   
    return (
        <div className="container-fluid px-4 mx-2">
            <div className="row">
                <div className="col-xl-12">
                    <div className="search-result-count">{moviesList.length} movies found</div>
                </div>
            </div>
            <div className="row">
                {
                    moviesList.map((element) => <MovieCard movieDetails={element} onMovieSelect = { onMovieSelect } />)
                }
            </div>
        </div>
    )
}

export default MovieDetails;