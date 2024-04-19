import { useCallback, useState } from 'react';
import './App.css';
import { Default as Counter } from './stories/Counter.stories';
import { Default as Search } from './stories/Search.stories';
import { Default as Genre } from './stories/Genre.stories';
import { GenresList, SortType } from './constants/constants';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieTile from './components/MovieTile/MovieTile';
import SortBy from './components/SortBy/SortBy';

const initialCounterValue = 0;
const initialSearchValue = '';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(GenresList[0]);
  const [movieDetails, setSelectedMovie] = useState('');
  const [sortBy, setSortBy] = useState(SortType[0].value);

  const onSearchSubmit = useCallback((query) => console.log(`Search Query: ${query}`), []);
  const onGenreSelect = useCallback((genre) => setSelectedGenre(genre), []);
  const onMovieSelect = useCallback((movie) => setSelectedMovie(movie), []);
  const onSortBySelect = useCallback((sortByValue) => setSortBy(sortByValue), []);


  return (
    <div className="App">
      {
        movieDetails
          ?
          <MovieTile movieDetails={movieDetails} onMovieSelect={onMovieSelect} />
          : (

            <div className="header">
              <Counter initialCounterValue={initialCounterValue} />
              <nav className="d-flex justify-content-between align-items-center font-red px-4">
                <span>netflix Roulette</span>
                <button className="font-red add-movie">+ Add Movie</button>
              </nav>
              <Search initialSearchQuery={initialSearchValue} onSearch={onSearchSubmit} />
            </div>
          )
      }

      <div className="genre-container">
        <Genre genresList={GenresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />
        <SortBy selectedSortBy={sortBy} onSortBySelect={onSortBySelect} />
      </div>

      <MovieDetails onMovieSelect={onMovieSelect} selectedGenre={selectedGenre} selectedSortBy />
    </div>
  );
}

export default App;