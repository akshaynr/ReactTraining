import { useFetch } from '../../hooks/useFetch';
import { getMovieDetailsByIdUrl } from '../../utils/utils';
import './MovieTile.css';
import { useParams, useNavigate } from 'react-router-dom'

const MovieTile = ({ }) => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [isLoading, responseData] = useFetch(getMovieDetailsByIdUrl(movieId));
    const { id, title, release_date, poster_path, genres, vote_average, runtime, overview } = responseData || {};
    const releaseYear = new Date(release_date).getFullYear();
    const displayGenres = () => {
        if (genres) {
            if (genres.length === 1) return genres[0];
            else if (genres.length > 1) {
                const lastGenre = genres.pop();
                return `${genres.join(', ')} & ${lastGenre}`;
            }
        }

        return '-';
    }
    const onSearchClick = () => {
        navigate('/');
    }

    return (
        <>
            <nav className="d-flex justify-content-between align-items-center font-red px-4">
                <span>netflix Roulette</span>
                <button className="btn btn-link m-4" onClick={onSearchClick}>
                    <svg width="25" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18.5" cy="10.5" r="9.5" stroke="#F65261" strokeWidth="2" />
                        <path d="M10.5 19.5L1.5 28.5" stroke="#F65261" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                </button>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3">
                        <img src={poster_path} alt={title} className="img-fluid" />
                    </div>

                    <div className="col-xl-9">
                        <h3 className="movie-title">{title} <span>{vote_average}</span></h3>
                        <small className="movie-type">{displayGenres()}</small>
                        <div className="movie-duration">
                            <span>{releaseYear}</span>
                            <span>{runtime / 60}h {runtime % 60}Min</span>
                        </div>

                        <p className="movie-dec"> {overview}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieTile;