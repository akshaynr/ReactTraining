import MovieCard from './MovieCard/MovieCard';
import './MovieDetails.css'

const MovieDetails = ({ movieData }) => {
    return (
        <div className="container-fluid px-4 mx-2">
            <div className="row">
                <div className="col-xl-12">
                    <div className="search-result-count">{movieData?.limit} movies found</div>
                </div>
            </div>
            <div className="row">
                {
                    movieData?.data?.map((element) => <MovieCard key={element.id} movieDetails={element} />)
                }
            </div>
        </div>
    )
}

export default MovieDetails;