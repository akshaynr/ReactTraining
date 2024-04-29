import { Portal } from "react-portal";
import { FocusTrap } from 'focus-trap-react';
import MovieForm from "../MovieForm/MovieForm";
import './MovieModal.css'
import close from '../../assets/svg/close.svg';

const MovieModal = ({ isModalOpen, modalHeader, movieInfo, onClose }) => {
    const onModalClose = () => onClose(false);
    return (
        isModalOpen && <Portal>
            <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: isModalOpen ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered modal-lg dark-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{modalHeader}</h1>
                            <button type="button" className="btn-close" onClick={onModalClose} data-bs-dismiss="modal" aria-label="Close">
                                <img src={close} alt="Close Icon" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <MovieForm movieInfo={movieInfo} />
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default MovieModal;