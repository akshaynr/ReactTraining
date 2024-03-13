import './Genre.css';

function Genre({ genresList, selectedGenre, onGenreSelect}){
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
                >
                    {genre}
                </button>
                )
            )}
        </div>
    )
}

export default Genre;