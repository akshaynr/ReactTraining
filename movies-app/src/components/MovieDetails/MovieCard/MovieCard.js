import { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { EditMovieModal } from '../../../stories/Modal.stories';
import './MovieCard.css'
import DeleteMovieModal from '../../DeleteMovieModal/DeleteMovieModal';

const MovieCard = ({ movieDetails }) => {
    const { id, title, release_date, poster_path, genres } = movieDetails;
    const releaseYear = new Date(release_date).getFullYear();
    const displayGenres = () => {
        if(genres.length === 1) return genres[0];
        else if(genres.length > 1){
            const lastGenre = genres.pop();
            return `${genres.join(', ')} & ${lastGenre}`;
        }
        else return '-';
    }
    const[ isEditModalOpen, setEditModalOpen ] = useState(false);
    const[ isDeleteModalOpen, setDeleteModalOpen ] = useState(false);
    const navigate = useNavigate();

    const selectedMovie = (movieDetails) => {
        navigate(`/${movieDetails.id}`);
    };
    const onDeleteModalOpen = useCallback((isModalClose) => setDeleteModalOpen(isModalClose), []);
    const openDeleteModal = () => {
        setDeleteModalOpen(true);
    }
    const onEditModalOpen = useCallback((isModalClose) => setEditModalOpen(isModalClose), []);
    const openEditeModal = () => {
        setEditModalOpen(true);
    }

    return (
        <div className="col-xl-4" key={id} data-testid = "movie-card">
            <div className="card" onClick={() => selectedMovie(movieDetails)}>
                <div className="movie-image">
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_0_213)">
                                    <circle cx="22" cy="22" r="18" fill="#2A202D" />
                                </g>
                                <circle cx="22" cy="15" r="2" fill="white" />
                                <circle cx="22" cy="22.5" r="2" fill="white" />
                                <circle cx="22" cy="30" r="2" fill="white" />
                                <defs>
                                    <filter id="filter0_d_0_213" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196596 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_213" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_213" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li onClick={openEditeModal}><a className="dropdown-item" href="javascript:void(0)">Edit</a></li>
                            <li onClick={openDeleteModal}><a className="dropdown-item" href="javascript:void(0)">Delete</a></li>
                        </ul>
                    </div>

                    <img src={poster_path} alt={title} className="img-fluid" />
                </div>

                <div className="movie-data">
                    <div>
                        <h3>{title}</h3>
                        <p>{displayGenres()}</p>
                    </div>

                    <a href="#">{releaseYear}</a>
                </div>
            </div>
            <EditMovieModal movieInfo={movieDetails} isModalOpen = {isEditModalOpen} modalHeader="Edit Movie" onClose={onEditModalOpen} />
            <DeleteMovieModal movieInfo={movieDetails}  isModalOpen = {isDeleteModalOpen} onClose={onDeleteModalOpen} />
        </div>
    )
}

export default MovieCard;