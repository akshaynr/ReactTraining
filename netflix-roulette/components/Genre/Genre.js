import './Genre.css';
import { GenresList } from '../../constants/constants';
import Link from 'next/link';

const Genre = ({ searchParams }) => {
    const { search, searchBy, sortBy } = searchParams;
    const selectedGenre = GenresList[0];

    return (
        <div>
            {GenresList.map((genre) => (
                <Link href='/'>
                    <button
                        key={genre}
                        className={`genre-button ${selectedGenre === genre ? 'selected' : ''}`}
                        data-testid={'genre-button-' + genre}
                    >
                        {genre}
                    </button>
                </Link>
            )
            )}
        </div>
    )
}

export default Genre;