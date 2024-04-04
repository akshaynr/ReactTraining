import './Genre.css';

const Genre = ({ genresList, selectedGenre, onGenreSelect}) => {
    const onGenreSelection = (selectedGenre) => {
        onGenreSelect(selectedGenre);
    }
    return (
        <div className='genre-container'>
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