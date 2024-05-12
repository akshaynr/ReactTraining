import { useSearchParams } from 'react-router-dom';
import { updateQueryParams } from '../../utils/utils';
import './Genre.css';
import { SortType } from '../../constants/constants';

const Genre = ({ genresList, selectedGenre, onGenreSelect }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const titleSearchQuery = searchParams.get('query');
    const sortByQuery = searchParams.get('sortBy');
    
    const onGenreSelection = (selectedGenre) => {
        if(!titleSearchQuery) searchParams.delete('query');
        updateQueryParams(searchParams, setSearchParams, {
            ...(titleSearchQuery && { query: titleSearchQuery }),
            genre: selectedGenre,
            sortBy: sortByQuery || SortType[0].value
          });

        onGenreSelect(selectedGenre);
    }
    
    return (
        <div>
            {genresList.map((genre) => (
                <button
                    key={genre}
                    onClick={() => onGenreSelection(genre)}
                    className={`genre-button ${selectedGenre === genre ? 'selected' : ''}`}
                    data-testid={'genre-button-' + genre}
                >
                    {genre}
                </button>
            )
            )}
        </div>
    )
}

export default Genre;