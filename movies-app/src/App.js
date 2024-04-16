import { useCallback, useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Search from './components/Search/Search';
import Genre from './components/Genre/Genre';

const initialCounterValue = 0;
const initialSearchValue = '';
const genresList = ["All", "Documentary", "Comedy", "Horror", "Crime"];


const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(genresList[0]);

  const onSearchSubmit = useCallback((query) => console.log(`Search Query: ${query}`), []);
  const onGenreSelect = useCallback((genre) =>setSelectedGenre(genre), []);

  return (
    <div className="App">
      <Counter initialCounterValue = {initialCounterValue} />
      <Search initialSearchQuery = {initialSearchValue} onSearch = {onSearchSubmit} />
      <Genre genresList={genresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect}/>
    </div>
  );
}

export default App;