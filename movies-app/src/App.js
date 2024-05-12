import './App.css';
import MovieTile from './components/MovieTile/MovieTile';
import SearchHeader from './components/SearchHeader/SearchHeader';
import { MovieList } from './pages/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />}>
          <Route index element={<SearchHeader />}/>
          <Route path=":movieId" element={<MovieTile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )


  return (<MovieList />);
}

export default App;